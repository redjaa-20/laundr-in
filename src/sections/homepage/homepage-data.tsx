// ------------------------------------------------------------

import {
  BubbleChatIcon,
  CheckmarkBadge01Icon,
  Clock01Icon,
  FavouriteIcon,
  Location01Icon,
  PackageIcon,
  ShippingTruck01Icon,
  Shirt01Icon,
  StarsIcon,
} from "@hugeicons/core-free-icons";

export const TESTIMONI = [
  {
    id: 1,
    testimoni:
      "Sudah langganan 2 tahun. Cucian selalu bersih dan wangi. Antar jemputnya juga tepat waktu. Recommended banget!",
    user_name: "Siti Rahayu",
    user_profession: "Ibu Rumah Tangga",
  },
  {
    id: 2,
    testimoni:
      "Layanan express-nya sangat membantu saat butuh baju kerja mendadak. Harga terjangkau, hasil memuaskan.",
    user_name: "Agus Santoso",
    user_profession: "Karyawan Swasta",
  },
  {
    id: 3,
    testimoni:
      "Sebagai anak kos, laundry kiloan di sini sangat membantu. Harganya pas di kantong mahasiswa. Admin-nya juga ramah!",
    user_name: "Dina Permata",
    user_profession: "Mahasiswa",
  },
  {
    id: 4,
    testimoni:
      "Untuk kebutuhan laundry kafe (serbet, taplak meja), saya selalu percaya Bersih Kilat. Hasilnya konsisten bersih.",
    user_name: "Dewi Kusuma",
    user_profession: "Pemilik Kafe",
  },
];

export const SERVICES = [
  {
    icon: Shirt01Icon,
    title: "Cuci Kiloan",
    description:
      "Cuci bersih dengan deterjen premium. Pakaian dijamin wangi dan bersih maksimal.",
  },
  {
    icon: StarsIcon,
    title: "Setrika Rapi",
    description:
      "Setrika profesional untuk hasil rapi sempurna. Cocok untuk baju kerja dan acara spesial.",
  },
  {
    icon: ShippingTruck01Icon,
    title: "Antar Jemput",
    description:
      "Layanan antar-jemput gratis ke rumah atau kantormu. Tidak perlu repot keluar rumah!",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: Clock01Icon,
    title: "Cepat & Tepat Waktu",
    description:
      "Hasil cuci kiloan selesai dalam 1-2 hari. Express? Bisa selesai 6 jam saja!",
  },
  {
    icon: CheckmarkBadge01Icon,
    title: "Harga Terjangkau",
    description:
      "Kualitas premium dengan harga bersahabat. Tidak ada biaya tersembunyi.",
  },
  {
    icon: FavouriteIcon,
    title: "Admin Ramah",
    description:
      "Tim kami siap membantu dengan ramah. Konsultasi gratis via WhatsApp!",
  },
  {
    icon: Location01Icon,
    title: "Antar Jemput Gratis",
    description:
      "Layanan pickup & delivery gratis untuk area tertentu. Praktis dan hemat waktu!",
  },
];

export const STEPS = [
  {
    number: 1,
    icon: BubbleChatIcon,
    title: "Hubungi via WhatsApp",
    description:
      "Chat kami untuk pesan layanan. Tentukan jenis layanan dan alamat penjemputan.",
  },
  {
    number: 2,
    icon: PackageIcon,
    title: "Kami Jemput Cucian",
    description:
      "Tim kami akan datang ke lokasi untuk mengambil pakaian kotormu.",
  },
  {
    number: 3,
    icon: StarsIcon,
    title: "Proses Cuci & Setrika",
    description:
      "Cucian diproses dengan mesin modern dan deterjen berkualitas.",
  },
  {
    number: 4,
    icon: ShippingTruck01Icon,
    title: "Antar Kembali",
    description:
      "Pakaian bersih dan wangi diantar langsung ke rumahmu. Selesai!",
  },
];

export const PRICING_PLANS = [
  {
    title: "Cuci Kiloan Regular",
    price: "Rp 7.000",
    unit: "/kg",
    features: ["Cuci bersih", "Pengeringan", "Lipat rapi"],
  },
  {
    title: "Cuci + Setrika",
    price: "Rp 10.000",
    unit: "/kg",
    isPopular: true,
    features: ["Cuci bersih", "Pengeringan", "Setrika rapi", "Lipat rapi"],
  },
  {
    title: "Setrika Only",
    price: "Rp 5.000",
    unit: "/kg",
    features: ["Setrika rapi", "Lipat rapi"],
  },
  {
    title: "Express (6 Jam)",
    price: "Rp 15.000",
    unit: "/kg",
    features: ["Cuci bersih", "Pengeringan cepat", "Setrika rapi", "Prioritas"],
  },
];
