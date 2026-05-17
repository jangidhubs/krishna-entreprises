import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Krishna Enterprises" },
      { name: "description", content: "Speak with Krishna Enterprises. Free consultation, transparent quotations and on-site visits across India." },
      { property: "og:title", content: "Contact Krishna Enterprises" },
      { property: "og:description", content: "Phone, email, WhatsApp and inquiry form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const info = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210" },
  { icon: Mail, label: "Email", value: "hello@krishnaenterprises.in", href: "mailto:hello@krishnaenterprises.in" },
  { icon: MapPin, label: "Studio", value: "Studio 12, Design Avenue, Mumbai, India" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's design something beautiful"
        subtitle="Free consultation. Transparent quotation within 48 hours."
      />

      <section className="container-page py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {info.map((i) => (
            <a
              key={i.label}
              href={i.href}
              className="flex gap-5 p-6 bg-card border border-border hover-lift items-start"
            >
              <div className="h-12 w-12 grid place-items-center bg-cream shrink-0">
                <i.icon size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{i.label}</p>
                <p className="mt-1 text-primary font-medium">{i.value}</p>
              </div>
            </a>
          ))}
        </div>

        <form
          className="lg:col-span-3 bg-card border border-border p-8 md:p-10"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <h2 className="font-display text-3xl text-primary">Send an enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">We'll respond within one business day.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <Field label="Full name" required><input required className="field" placeholder="Your name" /></Field>
            <Field label="Phone" required><input required type="tel" className="field" placeholder="+91 98765 43210" /></Field>
            <Field label="Email"><input type="email" className="field" placeholder="you@email.com" /></Field>
            <Field label="Service">
              <select className="field">
                <option>Custom Furniture</option>
                <option>Interior Design</option>
                <option>Modular Kitchen</option>
                <option>Civil / Renovation</option>
                <option>Other</option>
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Tell us about your project">
                <textarea rows={5} className="field" placeholder="Approx. carpet area, location and what you're hoping to achieve…" />
              </Field>
            </div>
          </div>

          <button type="submit" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm hover:bg-wood transition-colors">
            <Send size={16} /> Send enquiry
          </button>
          {sent && <p className="mt-4 text-sm text-gold">Thank you — we'll be in touch shortly.</p>}
        </form>
      </section>

      <section>
        <div className="container-page pb-20">
          <div className="border border-border overflow-hidden">
            <iframe
              title="Krishna Enterprises location"
              src="https://www.google.com/maps?q=Mumbai+India&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}{required && <span className="text-gold"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
