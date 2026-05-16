import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kassapos — Login & Register",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-950 flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center">
          <div className="bg-white rounded-xl px-2.5 py-1.5 inline-flex">
            <Image
              src="/images/logo.jpg"
              alt="Kassapos"
              width={150}
              height={38}
              className="h-9 w-auto object-contain"
            />
          </div>
        </Link>
        <a
          href="tel:+918754031480"
          className="text-xs text-brand-100/40 hover:text-white transition-colors"
        >
          Need help? +91 87540 31480
        </a>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        {children}
      </main>
      <footer className="py-5 text-center text-xs text-brand-100/30">
        © {new Date().getFullYear()} Kassapos Software Solutions Pvt Ltd &nbsp;·&nbsp;
        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
        &nbsp;·&nbsp;
        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
      </footer>
    </div>
  );
}
