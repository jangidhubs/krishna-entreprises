import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import {
  Sofa, Hammer, ChefHat, Zap, Droplets, Layers, PaintBucket, DoorOpen, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Krishna Enterprises" },
      { name: "description", content: "Custom furniture, interior design, modular kitchens, wardrobes, civil, electrical, plumbing, false ceiling, painting and complete renovation." },
      { property: "og:title", content: "Services — Krishna Enterprises" },
      { property: "og:description", content: "Complete home and office solutions under one roof." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Sofa, title: "Custom Furniture", desc: "Sofas, beds, dining tables and statement pieces in solid wood, veneer and metal." },
  { icon: Layers, title: "Interior Design", desc: "Concept, 3D visualisation, material boards and full execution by an in-house studio." },
  { icon: ChefHat, title: "Modular Kitchen", desc: "European-grade carcasses, soft-close hardware, quartz tops and chef-approved layouts." },
  { icon: DoorOpen, title: "Wardrobes", desc: "Walk-in, sliding and openable wardrobes with integrated lighting and dressers." },
  { icon: Hammer, title: "Civil Work", desc: "Demolition, masonry, waterproofing, tiling and structural finishing by trusted teams." },
  { icon: Zap, title: "Electrical Work", desc: "Concealed wiring, lighting design, smart switches and home automation." },
  { icon: Droplets, title: "Plumbing Work", desc: "Premium plumbing for kitchens, bathrooms and utility — leak-free guarantee." },
  { icon: Layers, title: "False Ceiling", desc: "POP, gypsum and cove-lit ceilings designed for cinematic ambient light." },
  { icon: PaintBucket, title: "Painting & Renovation", desc: "Texture, premium emulsion, polish and complete house renovation." },
];

function Services() {
  return (
    <Layout>
      <PageHeader
        eyebrow="What we do"
        title="Complete home & office solutions"
        subtitle="Nine specialised disciplines, one accountable studio. From the first sketch to the final polish."
      />

      <section className="container-page py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card border border-border p-10 hover-lift overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-display text-7xl text-secondary group-hover:text-gold/20 transition-colors leading-none p-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative">
                <div className="h-14 w-14 grid place-items-center bg-cream group-hover:bg-gold/20 transition-colors mb-6">
                  <s.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl text-primary">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-px w-12 bg-gold group-hover:w-20 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary">Not sure where to begin?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Book a free site visit. We'll measure, listen and put together a transparent quotation.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm hover:bg-wood transition-colors">
            Get Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
