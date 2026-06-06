content = '''import {
  BadgeCheck,
  Boxes,
  Factory,
  Gauge,
  Layers3,
  Microscope,
  PackageCheck,
  PenTool,
  Repeat2,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

export const site = {
  name: "PT Korin Technomic",
  estYear: "1999",
  email: "info@korintechnomic.com",
  phone: "(021) 5986501",
  address: "Desa Cukanggalih RT.04 RW.02, Kec. Curug, Kab. Tangerang, Banten",
  addressCirebon: "Blok Mirok RT.005/RW.003, Kepuh, Kec. Palimanan, Kab. Cirebon 45161",
  facilityLabel: "Tangerang & Cirebon - Indonesia",
  hours: "Mon-Fri 08:00-17:00 WIB",
  heroVideoSrc: "/video_hero.mp4",
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Machines", href: "/machines" },
  { label: "Products", href: "/products" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Contact", href: "/#contact" },
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
  {
    value: "10+",
    label: "Production Machines",
    description: "Integrated machine types supporting injection, EVA, extrusion, printing, and finishing work.",
    numeric: 10,
    suffix: "+",
  },
  {
    value: "8",
    label: "Manufacturing Processes",
    description: "A connected production setup from material preparation to controlled final output.",
    numeric: 8,
    suffix: "",
  },
  {
    value: "100%",
    label: "Quality Verified",
    description: "Inspection checkpoints are built into the workflow before products move to delivery.",
    numeric: 100,
    suffix: "%",
  },
  {
    value: "24h",
    label: "Response Target",
    description: "Inquiry response target for new production, tooling, and component discussions.",
    numeric: 24,
    suffix: "h",
  },
];

export const productCategories = [
  {
    id: "heel-components",
    name: "Heel Components",
    description: "Heel counters, heel clips, and heel caps for shoe stability and structure.",
    producedByMachines: ["injection-machine", "extruder-sheet-machine", "vertical-machine"],
  },
  {
    id: "toe-caps",
    name: "Toe Caps",
    description: "Protective toe caps for safety, sport, and lifestyle footwear.",
    producedByMachines: ["injection-machine"],
  },
  {
    id: "eva-components",
    name: "EVA Components",
    description: "Lightweight foam components for midsoles, insoles, and specialty finishes.",
    producedByMachines: ["eva-machine", "rotary-machine", "puring-machine"],
  },
  {
    id: "sheet-materials",
    name: "Sheet Materials",
    description: "Transpaper, spackle, and specialty sheets for quarter and upper components.",
    producedByMachines: ["extruder-sheet-machine", "tebok-machine", "pad-print-machine"],
  },
  {
    id: "shanks-accessories",
    name: "Shanks & Accessories",
    description: "Shanks, D-rings, collar straps, and structural footwear hardware.",
    producedByMachines: ["injection-machine", "vertical-machine", "tebok-machine"],
  },
  {
    id: "synthetic-rattan",
    name: "Synthetic Rattan",
    description: "Braided synthetic rattan for furniture, outdoor, and decorative applications.",
    producedByMachines: ["braiding-machine", "winding-machine"],
  },
];

export const catalogProducts = [
  { id: "heel-counter-eq21-spackle", categoryId: "heel-components", name: "Heel Counter EQ21 - Spackle", tag: "Heel Counter", description: "Precision-formed heel counter with spackle finish for athletic footwear.", image: "/Foto Item/HEEL EQ21 SPACKLE.png", producedBy: ["injection-machine"] },
  { id: "heel-counter-eq21-transpaper", categoryId: "heel-components", name: "Heel Counter EQ21 - Transpaper", tag: "Heel Counter", description: "Translucent transpaper heel counter for modern lifestyle footwear.", image: "/Foto Item/HEEL EQ21 TRANSPAPER.png", producedBy: ["injection-machine"] },
  { id: "heel-counter-lav", categoryId: "heel-components", name: "Heel Counter LAV", tag: "Heel Counter", description: "Structured heel counter for high-performance running applications.", image: "/Foto Item/HEEL LAV.png", producedBy: ["injection-machine"] },
  { id: "heel-cap-nbml515", categoryId: "heel-components", name: "Heel Cap NB ML515", tag: "Heel Cap", description: "OEM-matched heel cap for New Balance ML515 series.", image: "/Foto Item/HEEL CAP NBML515.png", producedBy: ["injection-machine"] },
  { id: "heel-cap-nbml574", categoryId: "heel-components", name: "Heel Cap NB ML574", tag: "Heel Cap", description: "OEM-matched heel cap for New Balance ML574 series.", image: "/Foto Item/HEEL CAP NBML574.png", producedBy: ["injection-machine"] },
  { id: "heel-cap-574-transpaper-snake", categoryId: "heel-components", name: "Heel Cap 574 - Transpaper Snake", tag: "Heel Cap", description: "Snake-pattern transpaper heel cap with premium texture finish.", image: "/Foto Item/HEEL CAP 574 TRANSPAPER SNAKE.png", producedBy: ["injection-machine"] },
  { id: "heel-cap-515-spray", categoryId: "heel-components", name: "Heel Cap 515 - Spray Finish", tag: "Heel Cap", description: "Spray-coated heel cap with custom color application.", image: "/Foto Item/HEEL CAP 515 SPRAY DALAM.png", producedBy: ["injection-machine", "pad-print-machine"] },
  { id: "heel-duramo-9", categoryId: "heel-components", name: "Heel Counter Duramo 9", tag: "Heel Counter", description: "Lightweight heel counter designed for Adidas Duramo 9 compatibility.", image: "/Foto Item/HEEL DURAMO 9.png", producedBy: ["injection-machine"] },
  { id: "heel-ultrabounce-junior", categoryId: "heel-components", name: "Heel Counter Ultrabounce Junior", tag: "Heel Counter", description: "Junior-sized heel counter for youth performance footwear.", image: "/Foto Item/HEEL ULTRABOUNCE JUNIOR.png", producedBy: ["injection-machine"] },
  { id: "kaptir-super-chrome", categoryId: "heel-components", name: "Kaptir Super - Chrome", tag: "Heel Clip", description: "Chrome-finish heel clip for Adidas Kaptir Super series.", image: "/Foto Item/KAPTIR SUPER CHROME.png", producedBy: ["injection-machine", "pad-print-machine"] },
  { id: "kaptir-super-chameleon", categoryId: "heel-components", name: "Kaptir Super - Chameleon", tag: "Heel Clip", description: "Color-shifting chameleon finish heel clip.", image: "/Foto Item/KAPTIR SUPER CHAMELEON.png", producedBy: ["injection-machine", "pad-print-machine"] },
  { id: "heel-clip-racer-tr23", categoryId: "heel-components", name: "Heel Clip Racer TR23", tag: "Heel Clip", description: "Performance heel clip for Racer TR23 running shoes.", image: "/Foto Item/HEEL CLIP RACER TR23.png", producedBy: ["injection-machine"] },
  { id: "toe-cap-standard", categoryId: "toe-caps", name: "Toe Cap Standard", tag: "Toe Cap", description: "Standard plastic toe cap for safety and sport footwear applications.", image: "/Foto Item/TOCAP-removebg-preview.png", producedBy: ["injection-machine"] },
  { id: "eva-blue", categoryId: "eva-components", name: "EVA Component - Blue", tag: "EVA", description: "Lightweight EVA foam component in blue colorway.", image: "/Foto Item/EVA/EVA BLUE.png", producedBy: ["eva-machine"] },
  { id: "eva-green", categoryId: "eva-components", name: "EVA Component - Green", tag: "EVA", description: "Lightweight EVA foam component in green colorway.", image: "/Foto Item/EVA/EVA GREEN.png", producedBy: ["eva-machine"] },
  { id: "eva-pink", categoryId: "eva-components", name: "EVA Component - Pink", tag: "EVA", description: "Lightweight EVA foam component in pink colorway.", image: "/Foto Item/EVA/EVA PINK.png", producedBy: ["eva-machine"] },
  { id: "eva-white", categoryId: "eva-components", name: "EVA Component - White", tag: "EVA", description: "Lightweight EVA foam component in white colorway.", image: "/Foto Item/EVA/EVA WHITE.png", producedBy: ["eva-machine"] },
  { id: "x9000l3-chameleon", categoryId: "eva-components", name: "X-9000L3 - Chameleon", tag: "EVA", description: "Color-shifting chameleon EVA component for premium footwear.", image: "/Foto Item/X-9000L3 CHAMELEON.png", producedBy: ["eva-machine", "pad-print-machine"] },
  { id: "x9000l3-transpaper", categoryId: "eva-components", name: "X-9000L3 - Transpaper", tag: "EVA", description: "Translucent transpaper EVA component for lifestyle footwear.", image: "/Foto Item/X-9000L3 TRANSPAPER.png", producedBy: ["eva-machine"] },
  { id: "kaptir-super-spray-gradation", categoryId: "eva-components", name: "Kaptir Super - Spray Gradation", tag: "EVA", description: "3-color spray gradation EVA component for Kaptir Super series.", image: "/Foto Item/KAPTIR SUPER SPRAY GRADATION 3 COLOR.png", producedBy: ["eva-machine", "pad-print-machine"] },
  { id: "kaptir-super-glitter", categoryId: "eva-components", name: "Kaptir Super - Glitter", tag: "EVA", description: "Glitter-finish EVA component for premium fashion footwear.", image: "/Foto Item/KAPTIR SUPER GLITER.png", producedBy: ["eva-machine", "pad-print-machine"] },
  { id: "puremotion-se-transpaper", categoryId: "eva-components", name: "Puremotion SE - Transpaper", tag: "EVA", description: "Transpaper EVA component for Adidas Puremotion SE.", image: "/Foto Item/PUREMOTION SE TRANSPAPER.png", producedBy: ["eva-machine"] },
  { id: "puremotion-se-macan", categoryId: "eva-components", name: "Puremotion SE - Macan", tag: "EVA", description: "Macan-texture EVA component for lifestyle applications.", image: "/Foto Item/PUREMOTION SE MACAN.png", producedBy: ["eva-machine"] },
  { id: "kaptir-2", categoryId: "eva-components", name: "Kaptir 2.0", tag: "EVA", description: "Updated EVA component for second-generation Kaptir series.", image: "/Foto Item/KAPTIR 2.0.png", producedBy: ["eva-machine"] },
  { id: "own-the-game", categoryId: "eva-components", name: "Own The Game", tag: "EVA", description: "EVA component for Adidas Own The Game basketball footwear.", image: "/Foto Item/OWN THE GAME.png", producedBy: ["eva-machine"] },
  { id: "quarter-eq21-transpaper", categoryId: "sheet-materials", name: "Quarter EQ21 - Transpaper", tag: "Quarter", description: "Translucent transpaper quarter section for EQ21 athletic shoes.", image: "/Foto Item/QUARTER EQ21 TRANSPAPER.png", producedBy: ["extruder-sheet-machine"] },
  { id: "quarter-eq21-spackle", categoryId: "sheet-materials", name: "Quarter EQ21 - Spackle", tag: "Quarter", description: "Spackle-finish quarter section for EQ21 series.", image: "/Foto Item/EQ21 QUARTER SPACKLE.png", producedBy: ["extruder-sheet-machine"] },
  { id: "quarter-eq21-spray-1color", categoryId: "sheet-materials", name: "Quarter EQ21 - Spray 1 Color", tag: "Quarter", description: "Single-color spray quarter section for uniform branding.", image: "/Foto Item/QUARTER EQ21 SPRAY STRIPES 1 COLOR.png", producedBy: ["extruder-sheet-machine", "pad-print-machine"] },
  { id: "quarter-eq21-spray-2color", categoryId: "sheet-materials", name: "Quarter EQ21 - Spray 2 Color", tag: "Quarter", description: "Two-color spray quarter section for contrast branding.", image: "/Foto Item/QUARTER EQ21 SPRAY STRIPES 2 COLOR.png", producedBy: ["extruder-sheet-machine", "pad-print-machine"] },
  { id: "quarter-eq21-gradation", categoryId: "sheet-materials", name: "Quarter EQ21 - Gradation", tag: "Quarter", description: "Gradation-finish quarter with smooth color transition.", image: "/Foto Item/QUARTER EQ21 GRADATION BASE.png", producedBy: ["extruder-sheet-machine", "pad-print-machine"] },
  { id: "spackles", categoryId: "sheet-materials", name: "Spackle Sheet", tag: "Sheet", description: "Textured spackle sheet material for upper and quarter applications.", image: "/Foto Item/Spackles.png", producedBy: ["extruder-sheet-machine"] },
  { id: "ultrabounce-spray-gradation", categoryId: "sheet-materials", name: "Ultrabounce - Spray Gradation", tag: "Quarter", description: "Gradient spray quarter for EQ23 / Ultrabounce series.", image: "/Foto Item/ULTRABOUNCE (EQ23 QUARTER) SPRAY GRADATION.png", producedBy: ["extruder-sheet-machine", "pad-print-machine"] },
  { id: "ultrabounce-1color-fluorescent", categoryId: "sheet-materials", name: "Ultrabounce - Fluorescent", tag: "Quarter", description: "High-visibility fluorescent single-color quarter sheet.", image: "/Foto Item/ULTRABOUNCE 1 COLOR FLUORECENT.png", producedBy: ["extruder-sheet-machine", "pad-print-machine"] },
  { id: "shank-y", categoryId: "shanks-accessories", name: "Shank Y", tag: "Shank", description: "Y-profile plastic shank for torsional support in athletic footwear.", image: "/Foto Item/SHANK Y.png", producedBy: ["injection-machine"] },
  { id: "shank-holtana", categoryId: "shanks-accessories", name: "Shank Holtana", tag: "Shank", description: "Full-length Holtana-profile shank for stability footwear.", image: "/Foto Item/SHANK HOLTANA.png", producedBy: ["injection-machine"] },
  { id: "d-ring-001", categoryId: "shanks-accessories", name: "D Ring", tag: "Accessory", description: "Injection-molded D-ring for lacing and strap attachment.", image: "/Foto Item/D RING 001.png", producedBy: ["injection-machine"] },
  { id: "collar-strap-247v2", categoryId: "shanks-accessories", name: "Collar Strap 247V2", tag: "Accessory", description: "Flexible collar strap component for New Balance 247V2.", image: "/Foto Item/COLLAR STRAP 247V2.png", producedBy: ["injection-machine"] },
  { id: "horse-shoe", categoryId: "shanks-accessories", name: "Horse Shoe", tag: "Accessory", description: "Horseshoe-shaped heel stabilizer for boot and trail footwear.", image: "/Foto Item/HORSE SHOE.png", producedBy: ["injection-machine"] },
  { id: "lav-accessory", categoryId: "shanks-accessories", name: "LAV Component", tag: "Accessory", description: "Multi-purpose plastic accessory component for LAV series.", image: "/Foto Item/LAV.png", producedBy: ["injection-machine"] },
  { id: "eyestay-duramo-9", categoryId: "shanks-accessories", name: "Eyestay Duramo 9", tag: "Accessory", description: "Structured eyestay panel for Adidas Duramo 9.", image: "/Foto Item/EYESTAY DURAMO 9.png", producedBy: ["injection-machine"] },
  { id: "rattan-moopie-1", categoryId: "synthetic-rattan", name: "Synthetic Rattan - Moopie 01", tag: "Rattan", description: "Woven synthetic rattan strand for outdoor furniture and decorative use.", image: "/Foto Item/Grounds/MOOPIE1.png", producedBy: ["braiding-machine"] },
  { id: "rattan-moopie-2", categoryId: "synthetic-rattan", name: "Synthetic Rattan - Moopie 02", tag: "Rattan", description: "Dense-weave synthetic rattan for premium furniture applications.", image: "/Foto Item/Grounds/MOOPIE2.png", producedBy: ["braiding-machine"] },
  { id: "rattan-moopie-3", categoryId: "synthetic-rattan", name: "Synthetic Rattan - Moopie 03", tag: "Rattan", description: "Open-weave synthetic rattan for breathable furniture seating.", image: "/Foto Item/Grounds/MOOPIE3.png", producedBy: ["braiding-machine"] },
  { id: "rattan-moopie-4", categoryId: "synthetic-rattan", name: "Synthetic Rattan - Moopie 04", tag: "Rattan", description: "Flat-strand synthetic rattan for contemporary furniture design.", image: "/Foto Item/Grounds/MOOPIE4.png", producedBy: ["braiding-machine"] },
  { id: "rattan-moopie-5", categoryId: "synthetic-rattan", name: "Synthetic Rattan - Moopie 05", tag: "Rattan", description: "Round-strand synthetic rattan in natural tone for traditional applications.", image: "/Foto Item/Grounds/MOOPIE5.png", producedBy: ["braiding-machine"] },
];

export const machines = [
  { name: "Injection Machine", slug: "injection-machine", description: "Core molding process", fullDescription: "Our high-precision injection molding machines form the heart of Korin\'s production floor. Running multi-cavity molds under controlled temperature and pressure, they deliver consistent, repeatable output across heel counters, toe caps, shanks, and accessories at high volume with tight dimensional tolerances.", image: "/area-machine-injection (12).jpg", galleryImages: ["/area-machine-injection (12).jpg", "/area-machine-injection (13).jpg", "/area-machine-injection (14).jpg", "/area-machine-injection (7).jpg"], capabilities: ["Multi-cavity mold compatibility", "High-volume repeatable output", "Tight dimensional tolerance control", "Material flexibility across thermoplastics"], producedCategoryIds: ["heel-components", "toe-caps", "shanks-accessories"], Icon: Factory },
  { name: "Braiding Machine", slug: "braiding-machine", description: "Reinforcement & weaving", fullDescription: "The braiding machines at Korin produce synthetic rattan strands used in furniture, outdoor, and decorative applications. Each strand is woven under precise tension for consistent diameter, strength, and surface finish.", image: "/mesin_braiding.jpg", galleryImages: ["/mesin_braiding.jpg", "/mesin_braiding (2).jpg"], capabilities: ["Multi-strand weaving configurations", "Consistent strand diameter control", "UV-resistant material compatibility", "Custom color and finish options"], producedCategoryIds: ["synthetic-rattan"], Icon: Workflow },
  { name: "EVA Machine", slug: "eva-machine", description: "Foam component forming", fullDescription: "EVA molding machines compress and form lightweight foam components under heat and pressure. Korin uses these for midsoles, insoles, and specialty foam elements across a wide range of footwear brands with consistent density and dimensional accuracy.", image: "/eva-machine (1).jpg", galleryImages: ["/eva-machine (1).jpg"], capabilities: ["Variable density foam forming", "Complex geometry EVA molding", "Surface texture and color options", "High-volume batch production"], producedCategoryIds: ["eva-components"], Icon: Layers3 },
  { name: "Extruder Sheet Machine", slug: "extruder-sheet-machine", description: "Sheet material production", fullDescription: "Extruder sheet machines produce the base material for quarter sections, heel stiffeners, and sheet-based footwear components. Sheets are extruded to precise thickness, cooled, and cut to spec ready for downstream forming or decoration.", image: "/mesin_extruder_sheet (1).jpg", galleryImages: ["/mesin_extruder_sheet (1).jpg", "/mesin_extruder_sheet (2).jpg", "/mesin_extruder_sheet (3).jpg", "/mesin_extruder_sheet (4).jpg"], capabilities: ["Controlled sheet thickness extrusion", "Multi-material sheet compatibility", "Continuous production output", "Custom width and roll formats"], producedCategoryIds: ["sheet-materials", "heel-components"], Icon: Boxes },
  { name: "Pad Print Machine", slug: "pad-print-machine", description: "Surface marking & branding", fullDescription: "Pad printing applies precise logos, text, and surface treatments to molded components. Korin uses pad print to apply brand identities, finish coatings, and decorative patterns achieving clean edges even on curved and complex surfaces.", image: "/mesin_pad_print (1).jpg", galleryImages: ["/mesin_pad_print (1).jpg", "/mesin_pad_print (2).jpg", "/mesin_pad_print (3).jpg", "/mesin_pad_print (4).jpg"], capabilities: ["Multi-color pad printing", "Curved and irregular surface capability", "Fine logo and text resolution", "UV ink and specialty coating options"], producedCategoryIds: ["heel-components", "eva-components", "sheet-materials"], Icon: PenTool },
  { name: "Puring Machine", slug: "puring-machine", description: "Pouring & casting process", fullDescription: "Puring (pouring) machines cast liquid foam and compound materials into molds under controlled conditions. This process is used for specialty EVA and foam variants that require a precise casting approach for density and cell structure control.", image: "/mesin_puring (1).jpg", galleryImages: ["/mesin_puring (1).jpg", "/mesin_puring (2).jpg", "/mesin_puring (3).jpg", "/mesin_puring (4).jpg"], capabilities: ["Liquid foam casting and forming", "Density-controlled output", "Complex cavity filling", "Specialty compound compatibility"], producedCategoryIds: ["eva-components"], Icon: Sparkles },
  { name: "Rotary Machine", slug: "rotary-machine", description: "Multi-station production", fullDescription: "Rotary machines run multiple mold stations in a continuous cycle, maximizing output per hour. Korin uses rotary machines for high-volume runs of heel components and EVA parts where cycle time and consistency are critical.", image: "/mesin_rotary (1).jpg", galleryImages: ["/mesin_rotary (1).jpg", "/mesin_rotary (2).jpg", "/mesin_rotary (3).jpg", "/mesin_rotary (4).jpg"], capabilities: ["Continuous multi-station molding", "High output per hour", "Consistent cycle time", "Compatible with multiple mold types"], producedCategoryIds: ["heel-components", "eva-components"], Icon: Repeat2 },
  { name: "Tebok Machine", slug: "tebok-machine", description: "Precision perforation", fullDescription: "Tebok (perforating) machines punch precise holes, slots, and cutouts into sheet materials and molded parts. Used for ventilation patterns, mounting holes, and decorative perforations in shanks and sheet-based components.", image: "/mesin_tebok (1).jpg", galleryImages: ["/mesin_tebok (1).jpg", "/mesin_tebok (2).jpg", "/mesin_tebok (3).jpg"], capabilities: ["High-precision hole punching", "Custom perforation patterns", "Sheet and molded part compatibility", "Die changeover for multiple patterns"], producedCategoryIds: ["sheet-materials", "shanks-accessories"], Icon: Settings2 },
  { name: "Vertical Machine", slug: "vertical-machine", description: "Vertical injection molding", fullDescription: "Vertical injection molding machines excel at insert molding and parts where the mold orientation benefits from gravity-assisted material flow. Korin uses vertical machines for components requiring metal inserts, overmolding, or precise gating control.", image: "/mesin_vertikal (1).jpg", galleryImages: ["/mesin_vertikal (1).jpg", "/mesin_vertikal (2).jpg", "/mesin_vertikal (3).jpg", "/mesin_vertikal (4).jpg", "/mesin_vertikal (5).jpg"], capabilities: ["Insert and overmolding capability", "Gravity-assisted material flow", "Precise gate and runner control", "Small-to-medium part production"], producedCategoryIds: ["heel-components", "shanks-accessories"], Icon: Wrench },
  { name: "Winding Machine", slug: "winding-machine", description: "Material winding & coiling", fullDescription: "Winding machines coil and spool synthetic strands and thread materials for downstream braiding and weaving operations. Precise tension control during winding ensures consistent strand quality and prevents material deformation.", image: "/mesin_winding (1).jpg", galleryImages: ["/mesin_winding (1).jpg", "/mesin_winding (2).jpg", "/mesin_winding (3).jpg", "/mesin_winding (4).jpg"], capabilities: ["Precision tension-controlled winding", "Multi-strand spool preparation", "Variable spool size compatibility", "Feed material for braiding lines"], producedCategoryIds: ["synthetic-rattan"], Icon: Gauge },
];

export const facilities = [
  {
    id: "tangerang",
    name: "Tangerang",
    label: "Main Facility",
    address: "Desa Cukanggalih RT.04 RW.02, Kec. Curug, Kab. Tangerang, Banten",
    description: "Our main production facility in Tangerang houses the majority of Korin\'s injection, EVA, braiding, and printing machinery. The Tangerang plant operates Monday through Friday and serves as the primary hub for client sample production and mass manufacturing.",
    heroImage: "/halaman_depan_gerbang_tangerang.jpg",
    gallery: [
      { src: "/area-machine-injection (14).jpg", alt: "Injection production exterior" },
      { src: "/area-machine-injection (12).jpg", alt: "Injection production floor" },
      { src: "/area_mesin_injection_tangeraang (1).jpg", alt: "Injection machine area" },
      { src: "/mesin_rotary (1).jpg", alt: "Rotary production machine" },
      { src: "/LAB_AREA.jpeg", alt: "Quality laboratory area" },
    ],
  },
  {
    id: "cirebon",
    name: "Cirebon",
    label: "Secondary Facility",
    address: "Blok Mirok RT.005/RW.003, Kepuh, Kec. Palimanan, Kab. Cirebon 45161",
    description: "The Cirebon facility expands Korin\'s production reach into West Java, supporting overflow capacity and specialized production lines. It handles select injection and sheet processes with the same quality standards maintained across both plants.",
    heroImage: "/area-mesin-injection-tampak-atas (1).jpg",
    gallery: [
      { src: "/area-mesin-injection-tampak-atas (1).jpg", alt: "Cirebon production floor aerial view" },
      { src: "/area-mesin-injection-tampak-atas (2).jpg", alt: "Cirebon injection machine area" },
      { src: "/area_mesin_injection_tangeraang (2).jpg", alt: "Machine setup" },
      { src: "/mesin_pad_print (1).jpg", alt: "Pad print station" },
      { src: "/mesin_extruder_sheet (1).jpg", alt: "Sheet extrusion line" },
    ],
  },
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

export const footerProducts = [
  "Heel Components",
  "Toe Caps",
  "EVA Components",
  "Sheet Materials",
  "Shanks & Accessories",
  "Synthetic Rattan",
];

export const facilitiesImages = facilities[0].gallery.map((g) => ({ src: g.src, alt: g.alt }));
'''

with open('/sessions/awesome-magical-bohr/mnt/korin-company-profile/content.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done. Lines:", content.count('\\n'))
