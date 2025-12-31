import type { Metadata } from "next";

import { HomepageView } from "src/sections/homepage/view";

// ------------------------------------------------------------

export const metadata: Metadata = {
  title: "Laundr.in",
  description: "Deskripsi",
};

// ------------------------------------------------------------

export default function Page() {
  return <HomepageView />;
}
