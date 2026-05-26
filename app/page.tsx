import Image from "next/image";
import logoKorin from "../assets/logo-korin.png";

const stats = [
  { value: "1999", label: "Established" },
  { value: "2", label: "Factory locations" },
  { value: "B2B", label: "Supply chain focus" },
  { value: "ID", label: "Indonesia production base" },
];

const journey = [
  "Requirement",
  "Material",
  "Mold Setup",
  "Production",
  "Inspection",
  "Delivery",
];

const capabilities = [
  {
    title: "Footwear Components",
    copy: "Production support for shoe accessories and molded components used across international footwear supply chains.",
    image: "/eva-machine (1).jpg",
  },
  {
    title: "Plastic Injection",
    copy: "Injection molding capacity for precision components, industrial parts, and repeatable B2B production requirements.",
    image: "/area-machine-injection (12).jpg",
  },
  {
    title: "Synthetic Rattan",
    copy: "Consistent synthetic rattan production for furniture, outdoor living, and export-oriented applications.",
    image: "/rattan-machine (1).jpg",
  },
];

const process = [
  "Material preparation",
  "Injection & forming",
  "Component finishing",
  "Lab testing",
  "Packing & delivery",
];

const partners = [
  "PT Parkland World Indonesia",
  "Parkland Jepara",
  "Hwaseung Indonesia",
  "Osaga",
  "Longrich",
  "Sejin",
];

const gallery = [
  {
    src: "/eva-machine (1).jpg",
    title: "EVA production line",
    label: "Footwear component support",
  },
  {
    src: "/lab-machine (1).jpg",
    title: "Testing equipment",
    label: "Quality control process",
  },
  {
    src: "/mixing-machine (1).jpg",
    title: "Material mixing",
    label: "Material preparation",
  },
  {
    src: "/rotary-machine (1).jpg",
    title: "Rotary process",
    label: "Production capability",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f2] text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#151515]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="PT Korin Technomic home">
            <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-white p-2">
              <Image src={logoKorin} alt="PT Korin Technomic" className="h-auto w-full" priority />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Korin Technomic
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/72 lg:flex">
            <a className="transition hover:text-white" href="#capabilities">
              Capabilities
            </a>
            <a className="transition hover:text-white" href="#footwear">
              Footwear
            </a>
            <a className="transition hover:text-white" href="#facilities">
              Facilities
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden h-11 items-center justify-center rounded-sm bg-white px-5 text-sm font-bold text-black transition hover:bg-[#e8e8e6] sm:flex"
          >
            Request Quote
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden bg-black pt-20 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/area-machine-injection (12).jpg"
          aria-label="PT Korin Technomic manufacturing hero video"
        >
          <source src="/video_hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,24,45,0.96)_0%,rgba(6,24,45,0.72)_48%,rgba(6,24,45,0.30)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-20 sm:px-8">
          <div className="max-w-4xl animate-rise">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-white/76">
              Footwear Components / Plastic Injection / Synthetic Rattan
            </p>
            <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-8xl">
              Built for precise components.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              Since 1999, PT Korin Technomic has supported footwear, furniture, and industrial partners through consistent component production in Indonesia.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="flex h-13 items-center justify-center rounded-sm bg-white px-7 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#e8e8e6]"
              >
                Start Inquiry
              </a>
              <a
                href="#capabilities"
                className="flex h-13 items-center justify-center rounded-sm border border-white/24 px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-white/70 hover:bg-white/10"
              >
                View Capabilities
              </a>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-black/92">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="border-white/10 py-7 even:border-l sm:border-l sm:first:border-l-0 lg:py-8">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-white/58">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="border-t border-black/70 pt-4">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black">Our Foundation</p>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-black/70">
              Est. <strong className="text-black">1999</strong>
            </p>
          </div>
          <div className="text-center text-3xl font-black tracking-tight text-black sm:text-5xl">Korin</div>
          <div className="border-t border-black/70 pt-4 text-left lg:text-right">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black">Our Growth</p>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-black/70">
              Tangerang / Cirebon / Footwear Supply Chain
            </p>
          </div>
        </div>
      </section>

      <section id="how" className="bg-[#f4f4f2] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-label">How Korin Works</p>
              <h2 className="mt-4 max-w-xl text-5xl font-black uppercase leading-[0.98] tracking-normal text-black sm:text-6xl">
                From request to repeatable production.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-black/68">
              We translate customer requirements into material preparation, machine setup, controlled production, inspection, and delivery support. The flow is simple by design: fewer surprises, clearer communication, stronger production consistency.
            </p>
          </div>

          <div className="how-flow mt-14">
            {journey.map((item, index) => (
              <div key={item} className="how-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="section-label">Core Capabilities</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-normal text-black sm:text-5xl">
              Focused production across three manufacturing lines.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="group overflow-hidden border border-black/14 bg-white transition hover:-translate-y-1 hover:border-black hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="mb-7 h-1 w-12 bg-black transition group-hover:w-20" />
                  <h3 className="text-xl font-black uppercase tracking-[0.12em] text-black">{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-black/62">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="footwear" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[520px] overflow-hidden bg-black">
            <Image
              src="/eva-machine (1).jpg"
              alt="Footwear component production area"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,47,0.05),rgba(7,26,47,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/76">Footwear Components</p>
              <h3 className="mt-3 text-3xl font-semibold">Production support for demanding brand supply chains.</h3>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="section-label">Footwear Supply Chain</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-normal text-black sm:text-5xl">
              Component manufacturing for footwear production networks.
            </h2>
            <p className="mt-6 text-base leading-8 text-black/64">
              Korin produces shoe accessories and molded components for established footwear manufacturing ecosystems in Indonesia, supporting consistency from production floor to final delivery.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {partners.map((partner) => (
                <div key={partner} className="border border-black/16 bg-white px-5 py-4 text-sm font-bold text-black">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="facilities" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-label">Factory Network</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-normal text-black sm:text-5xl">
              Indonesia-based manufacturing with real production depth.
            </h2>
            <p className="mt-6 text-base leading-8 text-black/64">
              From Tangerang headquarters to Cirebon production support, Korin combines facility coverage with hands-on manufacturing control.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="facility-card facility-card--image">
              <Image src="/gerbang-depan-pabrik (1).jpg" alt="PT Korin Technomic factory exterior" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              <div className="facility-card__overlay">
                <p>Tangerang</p>
                <h3>Head Office</h3>
              </div>
            </article>
            <article className="facility-card bg-black text-white">
              <p className="text-sm uppercase tracking-[0.22em] text-white/68">Production Base</p>
              <h3 className="mt-5 text-3xl font-semibold">Cirebon</h3>
              <p className="mt-5 text-sm leading-7 text-white/68">
                Additional production support for scalable manufacturing and long-term B2B supply needs.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="quality" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label">Quality & Process</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-normal text-black sm:text-5xl">
              Controlled workflow from material to delivery.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-black/64">
              Clear process control helps procurement teams reduce uncertainty and build stable supplier partnerships.
            </p>
          </div>
          <div className="space-y-3">
            {process.map((item, index) => (
              <div key={item} className="flex items-center gap-5 border border-black/14 bg-[#f4f4f2] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-black text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="section-label section-label--dark">Production Gallery</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-normal sm:text-5xl">
              Real manufacturing spaces, not stock imagery.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <article key={item.title} className="group overflow-hidden border border-white/12 bg-white/[0.04]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/62">{item.label}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="section-label">Start a Project</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-normal text-black sm:text-5xl">
              Ready to discuss your component requirement?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/64">
              Share your product specification, material needs, target volume, or OEM requirement with PT Korin Technomic.
            </p>
          </div>
          <div className="border border-black/14 bg-[#f4f4f2] p-7">
            <div className="grid gap-4">
              <input className="form-field" placeholder="Name" aria-label="Name" />
              <input className="form-field" placeholder="Company" aria-label="Company" />
              <input className="form-field" placeholder="Email" aria-label="Email" />
              <textarea className="form-field min-h-32 resize-none" placeholder="Project requirement" aria-label="Project requirement" />
              <button className="h-13 rounded-sm bg-black text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#333333]">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
