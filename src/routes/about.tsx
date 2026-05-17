import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Award, Users, Clock, Heart } from "lucide-react";
import bedroom from "@/assets/bedroom.jpg";
import office from "@/assets/office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Krishna Enterprises" },
      { name: "description", content: "A family-run interior and furniture studio in India delivering luxurious, timeless homes and offices for over 16 years." },
      { property: "og:title", content: "About Krishna Enterprises" },
      { property: "og:description", content: "Family-run craftsmanship, modern designs, affordable luxury and timely delivery." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Award, title: "Quality Craftsmanship", desc: "Senior carpenters and master finishers on every site, no exceptions." },
  { icon: Heart, title: "Family Business", desc: "Three generations of trust. We treat every project like our own home." },
  { icon: Users, title: "Modern Design", desc: "An in-house studio that balances timeless materials with contemporary form." },
  { icon: Clock, title: "Timely Delivery", desc: "Detailed schedules, weekly reviews and zero-surprise handover." },
];

function About() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Who we are"
        title="A studio built on craft, trust and detail"
        subtitle="Krishna Enterprises is a family-run interior and furniture house creating spaces that feel as good as they look."
      />

      <section className="container-page py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="image-hover">
          <img src={bedroom} alt="Bedroom interior" loading="lazy" width={1280} height={960} className="w-full h-[560px] object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Our story</p>
          <h2 className="mt-3 font-display text-4xl text-primary">From a small workshop to a complete <span className="italic text-gold">solutions studio</span></h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Krishna Enterprises started as a single carpentry workshop in 2008. What began
            with a few wardrobes and dining tables has grown into a complete home and
            office solutions studio — design, custom furniture, modular kitchens, civil,
            electrical, plumbing and finishing, all under one roof.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We're proud to remain family-run. The same hands that built our first wardrobe
            still review every joint and finish today.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">What we stand for</p>
            <h2 className="mt-3 font-display text-4xl text-primary">Four <span className="italic text-gold">non-negotiables</span></h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border p-8 hover-lift">
                <div className="h-12 w-12 grid place-items-center bg-cream mb-5">
                  <v.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-lg text-primary">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">By the numbers</p>
          <h2 className="mt-3 font-display text-4xl text-primary">Quietly building India's most loved interiors</h2>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {[
              ["500+", "Projects delivered"],
              ["16+", "Years of craft"],
              ["120+", "Cities served"],
              ["98%", "Repeat & referral"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-5xl text-gold">{n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 image-hover">
          <img src={office} alt="Office interior" loading="lazy" width={1280} height={960} className="w-full h-[560px] object-cover" />
        </div>
      </section>
    </Layout>
  );
}
