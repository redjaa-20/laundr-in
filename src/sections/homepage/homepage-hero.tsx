import { ArrowRight02Icon, WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "src/components/ui/button";

// ------------------------------------------------------------

export function HomepageHero() {
  return (
    <div className="flex flex-col py-15">
      <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-[3.5rem] font-bold leading-15">
          Cucian Bersih & Wangi,{" "}
          <span className="text-violet-500">Cepat & Terjangkau</span>
        </h1>
        <p className="text-xl font-medium mt-8 leading-relaxed">
          Bersih Kilat Laundry hadir untuk membantu kamu. Cuci kiloan, setrika
          rapi, antar-jemput gratis. Bebas ribet, pakaian selalu bersih!
        </p>
        <div className="flex items-center justify-center gap-5 mt-12">
          <Button
            variant="secondary"
            className="h-14 bg-linear-to-r from-violet-400 to-violet-500 text-white px-8 rounded-2xl group hover:-translate-y-2 shadow-[0_4px_20px_-4px_rgba(139,92,246,0.7)] hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.85)] transition-all"
          >
            <HugeiconsIcon icon={WhatsappIcon} className="size-5" />
            Pesan Sekarang via Whatsapp
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="group-hover:translate-x-1 transition-all size-5"
            />
          </Button>
          <span>Balas cepat dalam 5 menit!</span>
        </div>
        <div className="flex items-center justify-center gap-8 mt-20">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-violet-500 rounded-full"></div>
            <p className="text-sm">500+ Pelanggan Puas</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-violet-500 rounded-full"></div>
            <p className="text-sm">Antar-Jemput Gratis</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-violet-500 rounded-full"></div>
            <p className="text-sm">Buka Setiap Hari</p>
          </div>
        </div>
      </div>
    </div>
  );
}
