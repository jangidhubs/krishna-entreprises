import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-sm gradient-gold grid place-items-center font-display text-primary text-lg font-bold">
              K
            </div>
            <div className="font-display text-xl">Krishna Enterprises</div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Crafting timeless interiors and complete home & office solutions with
            artisan precision and a family commitment to quality.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            {["About", "Services", "Portfolio", "Testimonials", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={`/${l.toLowerCase()}`}
                  className="hover:text-gold transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-gold" /> +91 98765 43210</li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-gold" /> hello@krishnaenterprises.in</li>
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-gold" /> Studio 12, Design Avenue, Mumbai, India</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold mb-5">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center border border-primary-foreground/20 hover:border-gold hover:text-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center border border-primary-foreground/20 hover:border-gold hover:text-gold transition-colors">
              <Facebook size={16} />
            </a>
          </div>
          <p className="text-xs text-primary-foreground/60 mt-6 leading-relaxed">
            Mon – Sat: 9:00 AM – 8:00 PM<br />Free consultation by appointment
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Krishna Enterprises. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase">Crafted with care</p>
        </div>
      </div>
    </footer>
  );
}
