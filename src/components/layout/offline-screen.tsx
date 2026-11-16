"use client";

import { useState, useSyncExternalStore } from "react";
import { RefreshCw, WifiOff } from "lucide-react";
import { SHOP_INFO } from "@/mocks/shop";

function subscribeOnlineStatus(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function getOnlineSnapshot() {
  return navigator.onLine;
}

function getServerOnlineSnapshot() {
  return true;
}

export function OfflineScreen({ onRetry }: { onRetry?: () => void }) {
  const [checking, setChecking] = useState(false);

  const handleRetry = () => {
    setChecking(true);
    if (onRetry) {
      onRetry();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    }
    setTimeout(() => setChecking(false), 600);
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="bg-page text-char flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 text-center"
    >
      {/* Illustration Card */}
      <div className="relative mb-6 flex size-24 items-center justify-center rounded-full border-2 border-[#111C24] bg-ember-soft shadow-hard">
        <WifiOff className="size-11 text-ember" strokeWidth={2} />
        <span className="font-marker bg-saffron border-char shadow-hard absolute -top-2 -right-6 -rotate-6 rounded-full border-2 px-3 py-0.5 text-xs text-[#111C24]">
          Offline
        </span>
      </div>

      {/* Sign-style Display Headline */}
      <h1 className="display-type text-char text-6xl sm:text-8xl">
        No internet.
      </h1>

      <p className="text-muted mt-3 max-w-md text-base">
        Your device is offline. Check your Wi-Fi or mobile data and try again to
        keep ordering.
      </p>

      {/* Primary Retry Button */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={handleRetry}
          disabled={checking}
          className="bg-ember hover:bg-ember-dark border-char shadow-hard inline-flex h-13 min-w-45 cursor-pointer items-center justify-center gap-2 rounded-[12px] border-2 px-7 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          <RefreshCw className={`size-4.5 ${checking ? "animate-spin" : ""}`} />
          {checking ? "Checking..." : "Try again"}
        </button>
      </div>

      {/* Helpful Phone Fallback */}
      <p className="text-muted mt-10 text-xs">
        Need to place an urgent order? Call us at{" "}
        <a
          href={SHOP_INFO.phoneHref}
          className="text-char font-bold underline underline-offset-4 hover:text-[#F97316]"
        >
          {SHOP_INFO.phone}
        </a>
      </p>
    </div>
  );
}

/**
 * Covers the viewport with the OfflineScreen whenever the browser loses
 * internet connectivity (`navigator.onLine === false`) while keeping
 * `{children}` mounted so form state is preserved across brief network drops.
 */
export function OfflineGuard({ children }: { children: React.ReactNode }) {
  const isOnline = useSyncExternalStore(
    subscribeOnlineStatus,
    getOnlineSnapshot,
    getServerOnlineSnapshot,
  );

  return (
    <>
      <div aria-hidden={!isOnline} className={!isOnline ? "hidden" : "contents"}>
        {children}
      </div>
      {!isOnline && (
        <div className="fixed inset-0 z-100 overflow-y-auto">
          <OfflineScreen />
        </div>
      )}
    </>
  );
}
