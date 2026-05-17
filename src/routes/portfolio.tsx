import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { useState } from "react";
import hero from "@/assets/hero-living.jpg";
import kitchen from "@/assets/kitchen.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import office from "@/assets/office.jpg";
import bedroom from "@/assets/bedroom.jpg";
import dining from "@/assets/dining.jpg";
import ceiling from "@/assets/ceiling.jpg";
import bathroom from "@/assets/bathroom.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Krishna Enterprises" },
      { name: "description", content: "Selected luxury apartments, modular kitchens, office interiors and renovations by Krishna Enterprises." },
      { property: "og:title", content: "Portfolio — Krishna Enterprises" },
      { property: "og:description", content: "A gallery of recent residential and commercial projects." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

type Cat = "All" | "Residential" | "Kitchen" | "Office" | "Bath" | "Ceiling";

const projects: { img: string; title: string; cat: Exclude<Cat, "All">; place: string }[] = [
  { img: hero, title: "Marble & Gold Residence", cat: "Residential", place: "Bandra, Mumbai" },
  { img: kitchen, title: "Walnut Modular Kitchen", cat: "Kitchen", place: "Powai" },
  { img: office, title: "Executive Office Suite", cat: "Office", place: "BKC" },
  { img: bedroom, title: "Velvet Master Suite", cat: "Residential", place: "Worli" },
  { img: dining, title: "Heritage Dining Hall", cat: "Residential", place: "Juhu" },
  { img: wardrobe, title: "Walk-in Wardrobe", cat: "Residential", place: "Andheri" },
  { img: ceiling, title: "Cove-lit False Ceiling", cat: "Ceiling", place: "Lower Parel" },
  { img: bathroom, title: "Marble Powder Bath", cat: "Bath", place: "Khar" },
];

const cats: Cat[] = ["All", "Residential", "Kitchen", "Office", "Bath", "Ceiling"];

function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <Layout>
      <PageHeader
        eyebrow="Selected work"
        title="Our portfolio"
        subtitle="Residences, offices, kitchens and renovations — a glimpse of what we've delivered."
      />

      <section className="container-page py-20">
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.25em] border transition-colors ${
                active === c
                  ? "border-gold bg-gold text-primary"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.title} className="image-hover relative group">
              <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <p className="text-xs tracking-[0.3em] uppercase text-gold">{p.cat}</p>
                <h3 className="font-display text-xl mt-1">{p.title}</h3>
                <p className="text-xs text-primary-foreground/70 mt-1">{p.place}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-cream">
        <div className="container-page py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Transformations</p>
            <h2 className="mt-3 font-display text-4xl text-primary">Before &amp; <span className="italic text-gold">after</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { before: bathroom, after: bedroom, title: "1BHK Renovation, Khar" },
              { before: ceiling, after: dining, title: "Living + Dining Refit, Juhu" },
            ].map((t) => (
              <div key={t.title}>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <img src={t.before} alt="Before" loading="lazy" className="w-full h-72 object-cover grayscale" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary/80 text-primary-foreground text-[10px] tracking-[0.3em] uppercase">Before</span>
                  </div>
                  <div className="relative">
                    <img src={t.after} alt="After" loading="lazy" className="w-full h-72 object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-gold text-primary text-[10px] tracking-[0.3em] uppercase">After</span>
                  </div>
                </div>
                <h3 className="mt-4 font-display text-xl text-primary">{t.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
