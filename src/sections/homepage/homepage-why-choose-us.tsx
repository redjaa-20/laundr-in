import { HugeiconsIcon } from "@hugeicons/react";
import { WHY_CHOOSE_US } from "./homepage-data";

// ------------------------------------------------------------

export function HomepageWhyChooseUs() {
  return (
    <div className="flex flex-col py-15 px-4 xl:px-0">
      <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        <p className="text-sm font-bold text-violet-500 mb-3">
          KENAPA PILIH KAMI?
        </p>
        <h3 className="text-3xl lg:text-4xl font-bold mb-5 leading-10 lg:leading-13">
          Bersih Kilat, Pelayanan Cepat
        </h3>
        <p>
          Lebih dari 500 pelanggan sudah mempercayakan cucian mereka kepada
          kami.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10 w-full">
          {WHY_CHOOSE_US.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-14 w-14 flex items-center justify-center bg-violet-100 rounded-xl mb-5">
                <HugeiconsIcon
                  icon={item.icon}
                  strokeWidth={2}
                  className="text-violet-500"
                />
              </div>
              <p className="font-bold text-lg mb-2">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
