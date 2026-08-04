import crypto from 'crypto';
import { NextRequest } from 'next/server';

export const ADMIN_SESSION_COOKIE = 'tayaba_admin_session';

/**
 * Secret used to sign admin session tokens. In production this MUST
 * be set via the ADMIN_SESSION_SECRET environment variable. If it is
 * not set (e.g. quick local `npm run dev` without a .env.local), we
 * derive a deterministic fallback from the admin password instead of
 * generating a random value — a per-module-load random secret is not
 * safe here because Next.js can load separate route handlers as
 * distinct module instances, which would silently invalidate session
 * cookies signed by a different instance.
 */
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ||
  crypto
    .createHash('sha256')
    .update(`tayaba-fallback-secret:${process.env.ADMIN_PASSWORD || 'tayaba2003'}`)
    .digest('hex');

/**
 * Validates the submitted username/email + password against the
 * server-only environment variables. Nothing here ever ships to the
 * browser bundle.
 */
export function verifyAdminCredentials(usernameOrEmail: string, password: string): boolean {
  const configuredUser = (process.env.ADMIN_USER || 'admin').toLowerCase().trim();
  const configuredPassword = process.env.ADMIN_PASSWORD || 'tayaba2003';

  const input = (usernameOrEmail || '').toLowerCase().trim();

  const validIdentifiers = new Set([
    configuredUser,
    'tayaba_enterprises@yahoo.com',
    'admin@tayaba.com',
    'admin@tayaba-enterprises.com',
    'tayaba',
  ]);

  const userOk = validIdentifiers.has(input);
  const passOk = timingSafeStringEqual(password || '', configuredPassword);

  return userOk && passOk;
}

/** Constant-time string comparison to avoid password timing attacks. */
function timingSafeStringEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Still run a comparison of equal length buffers so the timing
    // difference for mismatched lengths doesn't leak extra info.
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

/** Creates a signed, expiring session token (HMAC-SHA256, 12h validity). */
export function createSessionToken(): string {
  const expires = Date.now() + 12 * 60 * 60 * 1000; // 12 hours
  const payload = `${expires}`;
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('hex');
  return `${payload}.${signature}`;
}

/** Verifies a session token's signature and expiry. */
export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;

  const expected = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('hex');

  const sigBuf = Buffer.from(signature);
  const expectedBuf = Buffer.from(expected);
  if (sigBuf.length !== expectedBuf.length) return false;
  if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return false;

  const expires = Number(payload);
  if (Number.isNaN(expires) || Date.now() > expires) return false;

  return true;
}

/** Reads and verifies the admin session cookie from an incoming request. */
export function isAuthenticatedRequest(request: NextRequest | Request): boolean {
  const cookieHeader = request.headers.get('cookie') || '';
  const match = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${ADMIN_SESSION_COOKIE}=`));

  if (!match) return false;
  const token = decodeURIComponent(match.split('=').slice(1).join('='));
  return verifySessionToken(token);
}
