import { HugeiconsIcon } from "@hugeicons/react";
import { STEPS } from "./homepage-data";

// ------------------------------------------------------------

export function HomepageHowItWorks() {
  return (
    <div className="flex flex-col py-15">
      <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        <p className="text-sm font-bold text-violet-500 mb-3">CARA PESAN</p>
        <h3 className="text-4xl font-bold mb-5">Semudah 4 Langkah</h3>
        <p>
          Pesan laundry jadi gampang banget. Kamu tinggal chat, kami yang
          kerjakan sisanya!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-13 mt-10 w-full">
          {STEPS.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative h-20 w-20 bg-linear-to-br from-violet-400 to-violet-500 flex items-center justify-center rounded-full mb-7">
                <HugeiconsIcon
                  icon={step.icon}
                  strokeWidth={2}
                  className="text-white size-9"
                />
                <div className="absolute top-0 -right-1 h-7 w-7 flex items-center justify-center bg-violet-100 text-violet-500 rounded-full">
                  {step.number}
                </div>
              </div>
              <h5 className="text-lg font-semibold mb-2">{step.title}</h5>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
