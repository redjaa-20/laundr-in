import { HomepageFooter, HomepageHeader } from "src/components/homepage";

// ------------------------------------------------------------

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <HomepageHeader />
      {children}
      <HomepageFooter />
    </main>
  );
}
