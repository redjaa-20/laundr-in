import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { ArrowRight02Icon, WhatsappIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Separator } from "../ui/separator";

// ------------------------------------------------------------

export function HomepageFooter() {
  return (
    <>
      <div className="bg-radial from-violet-400 to-violet-500">
        <div className="w-full max-w-2xl mx-auto py-15 px-4 text-center">
          <h2 className="text-[3rem] font-bold text-white leading-15 mb-7 px-5">
            Siap Bebas dari Tumpukan Cucian?
          </h2>
          <p className="text-xl text-white leading-relaxed mb-8">
            Jangan biarkan cucian kotor menumpuk! Hubungi kami sekarang dan
            nikmati pakaian bersih tanpa repot.
          </p>
          <Button
            variant="secondary"
            className="h-14 px-8 rounded-2xl group hover:-translate-y-2 transition-all"
          >
            <HugeiconsIcon icon={WhatsappIcon} />
            Chat WhatsApp Sekarang
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="group-hover:translate-x-1 transition-all"
            />
          </Button>
          <p className="text-sm italic text-white mt-5">
            Layanan antar-jemput gratis untuk area Cibinong dan sekitarnya!
          </p>
        </div>
      </div>
      <footer className="bg-gray-950 text-white pt-15">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-15 mb-20">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 flex items-center justify-center bg-linear-to-br from-violet-400 to-violet-500 text-white font-semibold rounded-lg">
                LD
              </div>
              <span className="text-lg font-semibold">Laundr.in</span>
            </div>
            <p className="leading-loose">
              Layanan laundry kiloan terpercaya dengan harga terjangkau dan
              pelayanan ramah. Antar-jemput gratis!
            </p>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-7">Menu</h5>
            <div className="flex flex-col gap-5">
              {[
                { label: "Layanan", href: "#layanan" },
                { label: "Daftar Harga", href: "#harga" },
                { label: "Lokasi", href: "#lokasi" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-violet-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-7">Hubungi Kami</h5>
            <div className="flex flex-col gap-3">
              <p>Jl. Raya Sukamaju No. 123</p>
              <p>Cibinong, Bogor 16913</p>
            </div>
          </div>
        </div>
        <Separator className="bg-gray-900" />
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-5 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bersih Kilat Laundry. All rights
            reserved.
          </p>
          <p>
            Powered by{" "}
            <Link
              href="https://threads.com/redjaa__"
              className="font-semibold hover:text-violet-500 transition-colors"
            >
              Redjaa
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
