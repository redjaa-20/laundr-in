import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "../ui/button";

// ------------------------------------------------------------

export function HomepageHeader() {
  return (
    <header className="h-20 sticky top-0 z-30 flex items-center bg-background">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center bg-linear-to-br from-violet-400 to-violet-500 text-white font-semibold rounded-lg">
              LD
            </div>
            <span className="text-lg font-semibold">Laundr.in</span>
          </div>
        </Link>
        <div className="flex items-center gap-10">
          {[
            { label: "Layanan", href: "#layanan" },
            { label: "Harga", href: "#harga" },
            { label: "Lokasi", href: "#lokasi" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium hover:text-violet-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <Button
            variant="secondary"
            className="h-11 bg-linear-to-r from-violet-400 to-violet-500 text-white rounded-full px-5"
          >
            <HugeiconsIcon icon={WhatsappIcon} />
            Hubungi Kami
          </Button>
        </div>
      </div>
    </header>
  );
}
