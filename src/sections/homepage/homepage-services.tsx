import { HugeiconsIcon } from "@hugeicons/react";
import { SERVICES } from "./homepage-data";

// ------------------------------------------------------------

export function HomepageServices() {
  return (
    <div
      id="layanan"
      className="flex flex-col py-15 bg-neutral-100 px-4 xl:px-0"
    >
      <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        <p className="text-sm font-bold text-violet-500 mb-3">LAYANAN KAMI</p>
        <h3 className="text-3xl lg:text-4xl font-bold mb-5 leading-10 lg:leading-13">
          Semua Kebutuhan Laundry-mu
          <br />
          Ada di Sini
        </h3>
        <p className="leading-relaxed">
          Pilih layanan sesuai kebutuhanmu. Kami siap melayani dengan sepenuh
          hati.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 w-full">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-background rounded-lg p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] h-full"
            >
              <div className="h-14 w-14 flex items-center justify-center bg-violet-100 rounded-xl mb-5">
                <HugeiconsIcon
                  icon={service.icon}
                  strokeWidth={2}
                  className="text-violet-500"
                />
              </div>
              <p className="font-bold text-lg mb-2">{service.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
