import {
  CallIcon,
  Clock01Icon,
  MapsLocation02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

// ------------------------------------------------------------

export function HomepageLocation() {
  return (
    <div
      id="lokasi"
      className="w-full max-w-6xl mx-auto flex flex-col py-15 text-center items-center"
    >
      <p className="text-sm font-bold text-violet-500 mb-3">LOKASI KAMI</p>
      <h3 className="text-4xl font-bold mb-5">Mudah Dijangkau</h3>
      <p>Kunjungi outlet kami atau gunakan layanan antar-jemput gratis.</p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10 w-full">
        <div className="rounded-xl overflow-hidden bg-muted-foreground col-span-3 h-[400px]"></div>
        <div className="flex flex-col gap-4 col-span-2">
          <div className="flex gap-5 rounded-xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
            <div className="h-14 w-14 flex items-center justify-center bg-violet-100 rounded-xl">
              <HugeiconsIcon
                icon={MapsLocation02Icon}
                strokeWidth={2}
                className="text-violet-500"
              />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold mb-2">Alamat</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Jl. Raya Sukamaju No. 123, Kelurahan Sukajaya, Kec. Cibinong,
                Bogor, Jawa Barat 16913
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
            <div className="h-14 w-14 flex items-center justify-center bg-violet-100 rounded-xl">
              <HugeiconsIcon
                icon={Clock01Icon}
                strokeWidth={2}
                className="text-violet-500"
              />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold mb-2">Jam Operasional</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Senin - Sabtu: 07.00 - 21.00 WIB
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Minggu: 08.00 - 18.00 WIB
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
            <div className="h-14 w-14 flex items-center justify-center bg-violet-100 rounded-xl">
              <HugeiconsIcon
                icon={CallIcon}
                strokeWidth={2}
                className="text-violet-500"
              />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold mb-2">Kontak</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                WhatsApp: 0812-3456-7890
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Instagram: @bersihkilatlaundry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
