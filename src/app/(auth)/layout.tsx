import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-page text-char flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <Link
        href="/"
        className="display-type text-char mb-8 text-3xl tracking-tight"
      >
        SharwaBite
      </Link>
      <div className="border-border w-full max-w-md rounded-[16px] border bg-white p-6 shadow-sm sm:p-8">
        {children}
      </div>
      <Link
        href="/"
        className="text-muted hover:text-char mt-6 text-sm font-medium underline underline-offset-4"
      >
        Continue as guest
      </Link>
    </div>
  );
}

