# Portofolio - Next.js & TypeScript

Personal portfolio website dibangun menggunakan **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**, dan **Jest** untuk unit testing.

## Tech Stack

- **Framework**: Next.js 16 (App Router + Turbopack)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Testing**: Jest + React Testing Library
- **Package Manager**: pnpm
- **Node.js**: >= 20.9.0 (disarankan v22+)

---

## pnpm Scripts

| Script | Perintah | Deskripsi |
|--------|----------|-----------|
| `pnpm dev` | `next dev` | Menjalankan development server dengan Turbopack di `localhost:3000`. Hot reload otomatis saat ada perubahan file. |
| `pnpm build` | `next build` | Membuat production build. Mengompilasi dan mengoptimasi semua halaman dan assets menggunakan Turbopack. |
| `pnpm start` | `next start` | Menjalankan production server dari hasil build. Jalankan `pnpm build` terlebih dahulu. |
| `pnpm lint` | `next lint` | Menjalankan ESLint untuk mengecek kualitas kode dan potensi error. |
| `pnpm test` | `jest` | Menjalankan semua unit test sekali jalan. |
| `pnpm test:watch` | `jest --watch` | Menjalankan unit test dalam watch mode — otomatis re-run saat file berubah. |
| `pnpm test:coverage` | `jest --coverage` | Menjalankan test dan menghasilkan laporan code coverage. |
| `pnpm generate` | `pnpm build && pnpm start` | Build production lalu langsung jalankan server. Cocok untuk preview hasil akhir sebelum deploy. |

---

## Struktur Project

```
src/
├── app/
│   ├── layout.tsx          # Root layout (HTML wrapper, metadata)
│   ├── page.tsx            # Halaman utama — compose semua components
│   └── globals.css         # Global styles + Tailwind CSS v4 import
├── components/
│   ├── Header.tsx          # Navigasi header (responsive + mobile menu)
│   ├── Hero.tsx            # Hero section (intro + CTA buttons)
│   ├── About.tsx           # Section tentang diri sendiri
│   ├── Skills.tsx          # Daftar skills dengan progress bar
│   ├── Projects.tsx        # Showcase project-project
│   ├── Contact.tsx         # Form kontak (client component)
│   └── Footer.tsx          # Footer (copyright + social links)
└── __tests__/
    └── components/
        ├── Header.test.tsx
        ├── Hero.test.tsx
        └── Footer.test.tsx
```

---

## Getting Started

### Prerequisites

- Node.js >= 20.9.0 (disarankan v22+)
- pnpm (install: `npm install -g pnpm`)
- nvm (optional, untuk switch versi Node)

### Installation

```bash
# Clone repository
git clone <repo-url>
cd portofolio-next-typescript

# Gunakan Node.js versi yang sesuai (jika pakai nvm)
nvm use

# Install dependencies
pnpm install

# Jalankan development server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Tahapan Membuat Feature Baru

Setiap feature dibuat sebagai **component terpisah** agar modular dan mudah dikelola. Berikut tahapannya:

### 1. Perencanaan
- Tentukan nama feature (misal: `Testimonials`)
- Tentukan data yang dibutuhkan (props/interface)
- Sketsa tampilan/UI yang diinginkan

### 2. Buat Component File
```bash
# Buat file component baru
touch src/components/Testimonials.tsx
```

### 3. Definisikan Interface/Types
```tsx
// src/components/Testimonials.tsx
interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatar?: string;
}
```

### 4. Implementasi Component
```tsx
export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      {/* Implementasi UI di sini */}
    </section>
  );
}
```

Catatan: Tambahkan `"use client"` di baris pertama hanya jika component membutuhkan hooks (useState, useEffect, dll) atau event handlers.

### 5. Buat Unit Test
```bash
touch src/__tests__/components/Testimonials.test.tsx
```

```tsx
import { render, screen } from "@testing-library/react";
import { Testimonials } from "@/components/Testimonials";

describe("Testimonials", () => {
  it("renders the section heading", () => {
    render(<Testimonials />);
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
  });
});
```

### 6. Jalankan Test
```bash
pnpm test
```

### 7. Integrasikan ke Page
```tsx
// src/app/page.tsx
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      {/* ... components lain ... */}
      <Testimonials />
      {/* ... */}
    </main>
  );
}
```

### 8. Review & Refine
- Cek responsivitas (mobile, tablet, desktop)
- Pastikan accessible (aria-labels, semantic HTML)
- Run `pnpm test` untuk pastikan tidak ada yang break
- Commit dengan pesan yang jelas

---

## Konvensi Component

- **1 file = 1 feature component** — setiap section punya file sendiri di `src/components/`
- **Named export** — gunakan `export function ComponentName()` (bukan default export)
- **Interface di atas** — definisikan types/interfaces di bagian atas file
- **Self-contained** — setiap component mengelola data dan UI-nya sendiri
- **Tailwind CSS v4** — gunakan utility classes langsung di JSX
- **Server Component by default** — hanya tambahkan `"use client"` jika butuh interactivity
- **React 19 features** — manfaatkan Server Components, `use()` hook, dan fitur baru React 19

---

## Catatan Penting: Tailwind CSS v4

Tailwind v4 menggunakan **CSS-first configuration**. Tidak ada file `tailwind.config.ts` — semua konfigurasi dilakukan melalui CSS di `globals.css`:

```css
@import "tailwindcss";

/* Custom theme extension via CSS */
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
}
```

---

## Deployment

Project ini bisa di-deploy ke:
- [Vercel](https://vercel.com) (recommended untuk Next.js)
- [Netlify](https://netlify.com)
- Self-hosted dengan `pnpm build && pnpm start`

---

## License

ISC
