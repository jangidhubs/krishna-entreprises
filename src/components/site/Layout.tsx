import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-cream border-b border-border">
      <div className="container-page py-20 md:py-28 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4 animate-fade-up">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-6xl text-primary animate-fade-up" style={{ animationDelay: ".1s" }}>{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground animate-fade-up" style={{ animationDelay: ".2s" }}>
            {subtitle}
          </p>
        )}
        <div className="mt-8 mx-auto gold-divider" />
      </div>
    </section>
  );
}
