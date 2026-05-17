import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  Sofa, Hammer, ChefHat, Wrench, Zap, Droplets, Layers, PaintBucket,
  ArrowRight, Star, CheckCircle2, Quote,
} from "lucide-react";
import hero from "@/assets/hero-living.jpg";
import kitchen from "@/assets/kitchen.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import office from "@/assets/office.jpg";
import bedroom from "@/assets/bedroom.jpg";
import dining from "@/assets/dining.jpg";
import ceiling from "@/assets/ceiling.jpg";
import bathroom from "@/assets/bathroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Enterprises — Complete Home & Office Solutions" },
      { name: "description", content: "Luxury interior design, custom furniture and complete renovation services. Modular kitchens, wardrobes, civil, electrical, plumbing and more." },
      { property: "og:title", content: "Krishna Enterprises — Luxury Home & Office Studio" },
      { property: "og:description", content: "Custom furniture, interior design & complete renovation services." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Sofa, title: "Custom Furniture", desc: "Bespoke pieces crafted in solid wood and premium veneers." },
  { icon: Layers, title: "Interior Design", desc: "End-to-end design — concept, drawings, materials and execution." },
  { icon: ChefHat, title: "Modular Kitchen", desc: "European-grade modular kitchens tailored to your space." },
  { icon: Hammer, title: "Civil Work", desc: "Structural, masonry and finishing work by trusted teams." },
  { icon: Zap, title: "Electrical Work", desc: "Concealed wiring, lighting design and smart fittings." },
  { icon: Droplets, title: "Plumbing Work", desc: "Premium plumbing for kitchens, baths and utility areas." },
  { icon: Layers, title: "False Ceiling", desc: "POP, gypsum and cove-lit ceilings with cinematic lighting." },
  { icon: PaintBucket, title: "Painting & Renovation", desc: "Texture, premium emulsion and complete renovations." },
];

const projects = [
  { img: hero, title: "Marble & Gold Residence", tag: "Luxury Apartment" },
  { img: kitchen, title: "Walnut Modular Kitchen", tag: "Modular Kitchen" },
  { img: office, title: "Executive Office Suite", tag: "Corporate Interior" },
  { img: bedroom, title: "Velvet Master Suite", tag: "Bedroom" },
  { img: dining, title: "Heritage Dining Hall", tag: "Dining" },
  { img: wardrobe, title: "Walk-in Wardrobe", tag: "Wardrobes" },
];

const testimonials = [
  { name: "Anjali & Rohan Mehta", role: "Bandra Residence", text: "Krishna Enterprises transformed our 3BHK into something we never imagined. Every joint, every finish — flawless." },
  { name: "Vikram Shah", role: "Director, Lumen Studios", text: "We've completed three offices with their team. They deliver on time, on budget, with senior craftsmen on every site." },
  { name: "Priya Iyer", role: "Worli Apartment", text: "From the modular kitchen to the false ceiling, the attention to detail is genuinely world-class." },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Luxury living room interior by Krishna Enterprises"
            className="h-full w-full object-cover animate-slow-zoom"
            width={1920} height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
        </div>

        <div className="relative h-full container-page flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <p className="text-xs uppercase tracking-[0.4em] text-gold animate-fade-up">
              Krishna Enterprises · Est. 2008
            </p>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] animate-fade-up" style={{ animationDelay: ".1s" }}>
              Complete <span className="italic text-gold">Home</span> &amp;<br />
              Office Solutions
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl animate-fade-up" style={{ animationDelay: ".2s" }}>
              Custom furniture, interior design and end-to-end renovation —
              crafted with the precision of a luxury studio and the warmth of a family business.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: ".3s" }}>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 gradient-gold text-primary text-sm tracking-wide font-medium hover:opacity-90 transition-opacity">
                Get Free Quote <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-4 border border-primary-foreground/40 text-primary-foreground text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors">
                View Projects
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg animate-fade-up" style={{ animationDelay: ".4s" }}>
              {[
                ["500+", "Projects"],
                ["16+", "Years"],
                ["98%", "Repeat Clients"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gold">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-cream border-y border-border">
        <div className="container-page py-10 grid md:grid-cols-4 gap-6 text-sm">
          {[
            "Family-run craftsmanship",
            "On-site senior supervisor",
            "Transparent quotations",
            "On-time delivery",
          ].map((t) => (
            <div key={t} className="flex items-center gap-3 text-foreground/80">
              <CheckCircle2 size={18} className="text-gold shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">What we do</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
            A single studio for <span className="italic text-gold">every</span> detail
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card border border-border p-8 hover-lift">
              <div className="h-14 w-14 grid place-items-center bg-cream group-hover:bg-gold/20 transition-colors mb-6">
                <s.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-xl text-primary">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm tracking-wide text-primary border-b border-gold pb-1 hover:text-gold transition-colors">
            Explore all services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-secondary">
        <div className="container-page py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="image-hover relative">
            <img src={bedroom} alt="Master bedroom by Krishna Enterprises" loading="lazy" width={1280} height={960} className="w-full h-[520px] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-cream border border-border p-6 hidden md:block max-w-xs shadow-luxury">
              <div className="font-display text-3xl text-gold">16+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">years of artisan craft</div>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Our story</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">A family of <span className="italic text-gold">craftsmen</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For over a decade and a half, Krishna Enterprises has been quietly shaping
              India's most considered homes and offices. Three generations of carpenters,
              one design studio, and a relentless obsession with finish.
            </p>
            <ul className="mt-8 space-y-4">
              {["Quality craftsmanship", "Modern, timeless design", "Affordable luxury", "Delivered on time"].map((t) => (
                <li key={t} className="flex gap-3 items-center">
                  <span className="h-px w-8 bg-gold" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm hover:bg-wood transition-colors">
              About Krishna Enterprises <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="container-page py-24">
        <div className="flex flex-wrap gap-6 justify-between items-end mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Selected work</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Recent <span className="italic text-gold">projects</span></h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm border-b border-gold pb-1 hover:text-gold transition-colors">
            View full portfolio <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((p) => (
            <div key={p.title} className="image-hover relative group">
              <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <p className="text-xs tracking-[0.3em] uppercase text-gold">{p.tag}</p>
                <h3 className="font-display text-xl mt-1">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Kind words</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">What clients <span className="italic text-gold">say</span></h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-primary-foreground/5 backdrop-blur p-8 border border-primary-foreground/10 hover-lift">
                <Quote className="text-gold mb-4" size={28} />
                <p className="text-primary-foreground/85 leading-relaxed text-sm">"{t.text}"</p>
                <div className="flex gap-1 mt-6">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
                </div>
                <div className="mt-5 pt-5 border-t border-primary-foreground/10">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-primary-foreground/60 mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="container-page py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">@krishnaenterprises</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">From the studio</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[hero, kitchen, wardrobe, office, bedroom, dining, ceiling, bathroom, hero, kitchen, wardrobe, office].slice(0, 6).map((img, i) => (
            <a key={i} href="#" className="image-hover aspect-square block">
              <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden bg-primary text-primary-foreground p-10 md:p-16 text-center">
          <div className="absolute inset-0 opacity-20">
            <img src={dining} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Ready to begin?</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">Let's design something <span className="italic text-gold">extraordinary</span></h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/80">
              Free on-site consultation and detailed quotation within 48 hours.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary text-sm tracking-wide font-medium hover:opacity-90 transition-opacity">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
