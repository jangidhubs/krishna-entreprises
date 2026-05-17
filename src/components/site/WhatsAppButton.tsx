import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Krishna%20Enterprises%2C%20I%27d%20like%20a%20free%20quote."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      <span className="relative flex items-center gap-2 bg-[oklch(0.65_0.18_145)] text-white px-4 py-3 rounded-full shadow-luxury hover:scale-105 transition-transform">
        <MessageCircle size={20} />
        <span className="hidden sm:inline text-sm font-medium pr-1">WhatsApp</span>
      </span>
    </a>
  );
}
