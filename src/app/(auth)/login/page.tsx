import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-char text-2xl font-bold">Sign in</h1>
      <p className="text-muted mt-2 text-sm">
        Sign in placeholder — phone/email and password or Google OAuth.
      </p>
      <div className="mt-6 flex items-center justify-between text-sm">
        <Link
          href="/forgot-password"
          className="text-muted hover:text-char underline underline-offset-4"
        >
          Forgot password?
        </Link>
        <Link
          href="/register"
          className="text-ember hover:text-ember-dark font-semibold"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}

