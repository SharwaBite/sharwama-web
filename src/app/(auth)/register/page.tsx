import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create account",
};

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-char text-2xl font-bold">Create account</h1>
      <p className="text-muted mt-2 text-sm">
        Create account placeholder — full name, phone/email, and password.
      </p>
      <div className="mt-6 flex items-center justify-end text-sm">
        <span className="text-muted mr-1.5">Already have an account?</span>
        <Link
          href="/login"
          className="text-ember hover:text-ember-dark font-semibold"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

