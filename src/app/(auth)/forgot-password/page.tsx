import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forgot password",
};

export default function ForgotPasswordPage() {
  return (
    <div>
      <h1 className="text-char text-2xl font-bold">Forgot password</h1>
      <p className="text-muted mt-2 text-sm">
        Forgot password placeholder — enter your email to receive a reset link.
      </p>
      <div className="mt-6 flex items-center justify-start text-sm">
        <Link
          href="/login"
          className="text-ember hover:text-ember-dark font-semibold"
        >
          &larr; Back to sign in
        </Link>
      </div>
    </div>
  );
}

