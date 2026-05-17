import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Krishna Enterprises" },
      { name: "description", content: "Hear from homeowners and businesses who trust Krishna Enterprises for their interiors and renovations." },
      { property: "og:title", content: "Client Testimonials — Krishna Enterprises" },
      { property: "og:description", content: "Real reviews from real clients." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const reviews = [
  { name: "Anjali & Rohan Mehta", role: "Bandra Residence", text: "Krishna Enterprises transformed our 3BHK into something we never imagined. Every joint, every finish — flawless. Senior craftsmen on site every day." },
  { name: "Vikram Shah", role: "Director, Lumen Studios", text: "Three offices, three on-time deliveries, three on-budget projects. Their site discipline is the best we've worked with." },
  { name: "Priya Iyer", role: "Worli Apartment", text: "From the modular kitchen to the cove-lit ceiling, the attention to detail is genuinely world-class. Worth every rupee." },
  { name: "Karan Desai", role: "Powai Family Home", text: "We renovated end-to-end — civil, plumbing, wardrobes and painting. One team, zero finger-pointing. Highly recommend." },
  { name: "Sneha Kapoor", role: "Juhu Penthouse", text: "The team understood the brief immediately. The walnut and brass palette they proposed is exactly what we wanted." },
  { name: "Arjun Malhotra", role: "Lower Parel Office", text: "A 4,000 sq ft office in 8 weeks, fully functional. The boardroom alone has earned us several compliments from clients." },
];

const faqs = [
  { q: "Do you handle the complete project?", a: "Yes. Design, custom furniture, civil, electrical, plumbing, false ceiling, painting and finishing — one accountable team, one project manager." },
  { q: "How long does a typical 3BHK take?", a: "A turnkey 3BHK with full interiors typically takes 10–14 weeks depending on scope and material lead times. We share a detailed Gantt before we start." },
  { q: "Do you offer free quotations?", a: "Absolutely. We visit, measure, understand your brief and share a transparent line-item quotation within 48 hours." },
  { q: "Which cities do you serve?", a: "We're headquartered in Mumbai and execute projects across Maharashtra, Gujarat and major metros pan-India." },
  { q: "Do you provide warranty?", a: "Yes — 5 years on modular furniture and wardrobes, 10 years on civil and waterproofing, 1 year on electrical and plumbing fittings." },
];

function Testimonials() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Kind words"
        title="Loved by homeowners & businesses"
        subtitle="A small selection of recent client reviews."
      />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-border p-8 hover-lift">
              <Quote className="text-gold mb-4" size={28} />
              <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
              <div className="flex gap-1 mt-6">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
              </div>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-medium text-primary">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Frequently asked</p>
              <h2 className="mt-3 font-display text-4xl text-primary">Good to know</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-card border border-border p-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-display text-lg text-primary list-none">
                    {f.q}
                    <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
