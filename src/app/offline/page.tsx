import type { Metadata } from "next";
import { OfflineScreen } from "@/components/layout/offline-screen";

export const metadata: Metadata = {
  title: "No Internet Connection",
};

export default function OfflinePage() {
  return <OfflineScreen />;
}

