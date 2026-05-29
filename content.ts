import {
  BadgeCheck,
  Boxes,
  Factory,
  Gauge,
  Layers3,
  Microscope,
  PackageCheck,
  PenTool,
  Repeat2,
  Ruler,
  Settings2,
  ShieldCheck,
  Sparkles,
  Truck,
  Workflow,
  Wrench,
} from "lucide-react";

export const site = {
  name: "PT Korin Technomic",
  email: "info@korintechnomic.com",
  phone: "(placeholder)",
  address: "Cirebon, West Java, Indonesia",
  hours: "Mon-Fri 08:00-17:00 WIB",
  heroVideoSrc: "/video_hero.mp4",
};

export const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#products" },
  { label: "Machines", href: "#machines" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = [
  "plastic injection molding",
  "footwear components",
  "precision molds",
  "braiding",
  "EVA molding",
  "mass production",
  "quality assured",
  "made in Indonesia",
  "ISO certified",
];

export const stats = [
  { value: "11+", label: "Production Machines", numeric: 11, suffix: "+" },
  { value: "9", label: "Manufacturing Processes", numeric: 9, suffix: "" },
  { value: "100%", label: "Quality Verified", numeric: 100, suffix: "%" },
  { value: "24h", label: "Response Target", numeric: 24, suffix: "h" },
];

export const products = [
  {
    tag: "Footwear",
    name: "Heel Clips",
    description: "Support & structure",
    image: "/Foto Item/KAPTIR SUPER CHROME.png",
  },
  {
    tag: "Protection",
    name: "Toe Caps",
    description: "Protection & durability",
    image: "/Foto Item/TOCAP-removebg-preview.png",
  },
  {
    tag: "Stability",
    name: "Heel Counters",
    description: "Stability & support",
    image: "/Foto Item/HEEL EQ21 SPACKLE.png",
  },
  {
    tag: "Control",
    name: "Shanks",
    description: "Reinforcement & control",
    image: "/Foto Item/SHANK Y.png",
  },
  {
    tag: "Accessory",
    name: "Accessories",
    description: "Functional details",
    image: "/Foto Item/D RING 001.png",
  },
  {
    tag: "Performance",
    name: "EVA Components",
    description: "Lightweight performance",
    image: "/Foto Item/X-9000L3 CHAMELEON.png",
  },
  {
    tag: "Sheet",
    name: "Sheet Products",
    description: "Versatile applications",
    image: "/Foto Item/QUARTER EQ21 TRANSPAPER.png",
  },
];

export const machines = [
  { name: "Injection Machine", description: "Core molding process", image: "/area-machine-injection (12).jpg", Icon: Factory },
  { name: "Braiding Machine", description: "Reinforcement & weaving", image: "/mesin_braiding.jpg", Icon: Workflow },
  { name: "EVA Machine", description: "Foam component forming", image: "/eva-machine (1).jpg", Icon: Layers3 },
  { name: "Extruder Sheet Machine", description: "Sheet material production", image: "/mesin_extruder_sheet (1).jpg", Icon: Boxes },
  { name: "Pad Print Machine", description: "Surface marking & branding", image: "/mesin_pad_print (1).jpg", Icon: PenTool },
  { name: "Pon Machine", description: "Cutting & punching", image: "/mesin_pon (2).jpg", Icon: Ruler },
  { name: "Puring Machine", description: "Pouring & casting process", image: "/mesin_puring (1).jpg", Icon: Sparkles },
  { name: "Rotary Machine", description: "Multi-station production", image: "/mesin_rotary (1).jpg", Icon: Repeat2 },
  { name: "Tebok Machine", description: "Precision perforation", image: "/mesin_tebok (1).jpg", Icon: Settings2 },
  { name: "Vertical Machine", description: "Vertical injection molding", image: "/mesin_vertikal (1).jpg", Icon: Wrench },
  { name: "Winding Machine", description: "Material winding & coiling", image: "/mesin_winding (1).jpg", Icon: Gauge },
];

export const workflow = [
  { title: "Requirement", description: "Customer specifications, technical requirements, production volume", Icon: BadgeCheck },
  { title: "Product & Mold Design", description: "Part design, DFM analysis, mold engineering", Icon: PenTool },
  { title: "Material Preparation", description: "Material selection, drying, quality verification", Icon: Layers3 },
  { title: "Mold & Machine Setup", description: "Mold installation, machine parameter setup", Icon: Wrench },
  { title: "Trial / First Article", description: "Initial sampling to validate part quality and dimensions", Icon: Microscope },
  { title: "Process Optimization", description: "Parameter adjustment for stable production", Icon: Gauge },
  { title: "Mass Production", description: "Controlled and repeatable manufacturing process", Icon: Factory },
  { title: "Quality Control", description: "In-process inspection and final product verification", Icon: ShieldCheck },
  { title: "Packing & Delivery", description: "Standardized packaging and on-time shipment", Icon: PackageCheck },
];

export const facilitiesImages = [
  { src: "/halaman_depan_gerbang_tangerang.jpg", alt: "PT Korin Technomic factory gate" },
  { src: "/gerbang-depan-pabrik (1).jpg", alt: "PT Korin Technomic exterior" },
  { src: "/area-machine-injection (12).jpg", alt: "Injection production floor" },
  { src: "/area_mesin_injection_tangeraang (1).jpg", alt: "Injection machine area" },
  { src: "/mesin_rotary (1).jpg", alt: "Rotary production machine" },
  { src: "/LAB_AREA.jpeg", alt: "Quality laboratory area" },
];

export const whyKorin = [
  { title: "Integrated Production", description: "From mold design to final assembly, controlled by one production team.", Icon: Workflow },
  { title: "11 Machine Types", description: "Comprehensive manufacturing capabilities under one roof.", Icon: Factory },
  { title: "Quality Assurance", description: "Inspection and documented quality verification throughout the workflow.", Icon: ShieldCheck },
  { title: "Engineering Expertise", description: "DFM thinking and production review before scale-up.", Icon: PenTool },
  { title: "On-Time Delivery", description: "Standardized packing and reliable shipping schedules.", Icon: Truck },
  { title: "Scalable Volume", description: "Prototype runs to high-volume mass production.", Icon: Boxes },
];

export const footerProducts = [
  "Heel Clips",
  "Toe Caps",
  "Heel Counters",
  "Shanks",
  "EVA Components",
  "Synthetic Rattan",
];
