import { Badge } from "src/components/ui/badge";
import { PRICING_PLANS } from "./homepage-data";
import { Separator } from "src/components/ui/separator";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

// ------------------------------------------------------------

export function HomepagePricing() {
  return (
    <div id="harga" className="flex flex-col py-15 bg-neutral-100 px-4 xl:px-0">
      <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center">
        <p className="text-sm font-bold text-violet-500 mb-3">DAFTAR HARGA</p>
        <h3 className="text-3xl lg:text-4xl font-bold mb-5 leading-10 lg:leading-13">
          Harga Transparan, Tanpa Biaya
          <br />
          Tersembunyi
        </h3>
        <p className="leading-relaxed">
          Pilih paket yang sesuai dengan kebutuhanmu. Minimum order 3 kg.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 w-full">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col bg-background p-6 rounded-lg text-left shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] transition-all h-full ${
                plan.isPopular ? "relative ring-1 ring-violet-500" : ""
              }`}
            >
              {plan.isPopular && (
                <Badge
                  variant="secondary"
                  className="h-6 absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-violet-400 to-violet-500 text-white"
                >
                  Paling Populer
                </Badge>
              )}
              <p className="font-bold text-lg mb-3">{plan.title}</p>
              <p className="text-violet-500 font-bold text-3xl">
                {plan.price}{" "}
                <span className="text-base font-normal text-muted-foreground">
                  {plan.unit}
                </span>
              </p>
              <Separator className="my-8" />
              <div className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      className="text-violet-500 size-5"
                    />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
