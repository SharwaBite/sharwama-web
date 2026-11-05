export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-page text-char flex min-h-screen flex-col">
      {children}
    </div>
  );
}

