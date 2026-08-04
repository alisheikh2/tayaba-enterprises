import { NextResponse } from 'next/server';
import { ADMIN_SESSION_COOKIE, createSessionToken, verifyAdminCredentials } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { usernameOrEmail, password } = body || {};

    if (!usernameOrEmail || !password) {
      return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
    }

    const valid = verifyAdminCredentials(usernameOrEmail, password);

    if (!valid) {
      // Generic error message — never reveal whether the username or
      // password was the incorrect part.
      return NextResponse.json({ error: 'Invalid Username/Email or Password.' }, { status: 401 });
    }

    const token = createSessionToken();
    const response = NextResponse.json({ success: true });

    response.cookies.set(ADMIN_SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 12 * 60 * 60, // 12 hours, matches token expiry
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Login failed.' }, { status: 500 });
  }
}
