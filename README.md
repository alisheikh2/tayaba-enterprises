# Tayaba Enterprises — Photocopier Machines & Printing Solutions Website

A complete, high-performance, responsive business website and client management admin panel built for **Tayaba Enterprises** (Established 2003, Karachi, Pakistan).

---

## 🚀 Key Features

- **Navigation Structure:** 1:1 clone of Mushko's structural depth with 7 top-level navigation items and 3 drop-down submenus.
- **Brand Identity:** Styled in Tayaba Enterprises' official brand colors (`#038F48` Green, `#2710A6` Navy Blue, `#CDC7D5` Gray) with official badge logo (`TE-logo.png`).
- **Complete Page Portfolio:**
  - **Home Page (`/`)**: Hero section, service cards, why choose us highlights, machine brands preview, client logos strip.
  - **About Us (`/about-us`)**: Company history, executive leadership team, legal registration block (NTN, Sales Tax, SRB, MCB/Bank Al Habib).
  - **Why Choose Us (`/about-us/why-choose-us`)**: Detailed corporate commitments and technical advantages.
  - **Services (`/services`)**: Full main portfolio plus 6 individual service pages:
    - Photocopying Services (`/services/photocopying`)
    - Printing Services (`/services/printing`)
    - Typing Services (`/services/typing`)
    - Scanning Services (`/services/scanning`)
    - Laminating Services (`/services/laminating`)
    - Fax Services (`/services/fax`)
  - **Machine Brands (`/machine-brands`)**: Sales & rental grid for Canon, Konica Minolta, Ricoh, Sharp, and Xerox photocopiers.
  - **Clients (`/clients`)**: Logo grid for 12 major Pakistani organizations (Siemens, PSO, NRL, NAB, SSGC, PARCO, NIT, Bahria University, Dow University, Jinnah University, Federal Urdu University, Javeedan Power Resources).
  - **Contact Us (`/contact-us`)**: Official DHA Phase VII Karachi contact info, phone lines, email, WhatsApp widget, interactive map, Career page (`/contact-us/career`), and Request a Quote page (`/contact-us/request-quote`).
- **Client Admin Panel (`/admin`)**: Password-protected dashboard allowing clients to independently add, edit, reorder, or delete entries on the live `/clients` page.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript / JavaScript
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** Lucide React
- **API Routes:** Next.js Server Handlers (`/api/clients`, `/api/upload`)

---

## 📋 Prerequisites & Installation

### 1. Requirements
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Install Dependencies
In the root directory of the project, run:

```bash
npm install
```

---

## ⚙️ Environment Variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

### Variable Reference & Where to Get Them:

| Variable | Description | Where to Get / Default Value |
| :--- | :--- | :--- |
| `ADMIN_USER` | Username for `/admin` panel access | Default: `admin` |
| `ADMIN_PASSWORD` | Password for `/admin` panel access | Default: `tayaba2003` |
| `RESEND_API_KEY` | API Key for contact form emails (Optional) | Get free key at [resend.com](https://resend.com) |
| `CONTACT_RECIPIENT_EMAIL` | Email address receiving contact/quote submissions | Set to `tayaba_enterprises@yahoo.com` |
| `MONGODB_URI` | MongoDB connection string (Optional) | Get free cluster at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas) |
| `CLOUDINARY_URL` | Cloudinary storage URL for uploaded images (Optional) | Get free tier at [cloudinary.com](https://cloudinary.com) |

---

## 🖥️ Running Locally

### Development Server
Run the local dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live website.

### Admin Panel Access
Visit [http://localhost:3000/admin](http://localhost:3000/admin) and log in with:
- **Username:** `admin`
- **Password:** `tayaba2003`

### Production Build
To test a production build locally:

```bash
npm run build
npm run start
```

---

## ☁️ Deployment Guide

### Deploying Frontend to Vercel (Recommended)

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Add your environment variables (`ADMIN_USER`, `ADMIN_PASSWORD`, etc.) under **Environment Variables**.
6. Click **Deploy**. Vercel will build and host your site on a global CDN with SSL enabled.

### Deploying Frontend to Netlify

1. Log in to [Netlify](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Connect your Git provider and select the repository.
3. Build Settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `.next`
4. Add Environment Variables in Netlify site configuration.
5. Click **Deploy Site**.

### Deploying Backend to Render / Railway (If using Express / MongoDB API)

If hosting the backend API as a separate Node.js service on Render or Railway:

1. Create a new **Web Service** on [Render.com](https://render.com) or [Railway.app](https://railway.app).
2. Connect your repository.
3. Build Command: `npm install`
4. Start Command: `npm run start`
5. Configure Environment Variables (`MONGODB_URI`, `CLOUDINARY_URL`, `ADMIN_PASSWORD`).
6. Deploy service and copy the provided backend URL into your frontend `.env.local`.

---

## 📄 License & Ownership

Created for **Tayaba Enterprises** — Karachi, Pakistan. All rights reserved.
