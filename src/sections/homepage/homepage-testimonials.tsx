import { Separator } from "src/components/ui/separator";
import { TESTIMONI } from "./homepage-data";

// ------------------------------------------------------------

export function HomepageTestimonials() {
  return (
    <div className="flex flex-col py-15 bg-neutral-100 px-4 xl:px-0">
      <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center">
        <p className="text-sm font-bold text-violet-500 mb-3">TESTIMONI</p>
        <h3 className="text-3xl lg:text-4xl font-bold mb-5 leading-10 lg:leading-13">
          Apa Kata Pelanggan Kami
        </h3>
        <p className="leading-relaxed">
          Kepercayaan pelanggan adalah prioritas kami. Ini kata mereka:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 w-full">
          {TESTIMONI.map((testi) => (
            <div
              key={testi.id}
              className="bg-background p-5 rounded-lg text-left shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] h-full"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#facc15"
                    stroke="#facc15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star-icon lucide-star"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testi.testimoni}"
              </p>
              <Separator className="my-4" />
              <p className="font-semibold leading-relaxed">{testi.user_name}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {testi.user_profession}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
