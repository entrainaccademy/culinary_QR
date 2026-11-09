import BrandPage from "../brand-page";

export const metadata = { title: "CHEFFCO Culinary Solutions | Contact" };

const brand = {
  name: "CHEFFCO Culinary Solutions",
  logo: "/images/cheffco-logo.png",
  width: 2025,
  height: 776,
  className: "cheffco",
  logoOnly: true,
  links: [
    { label: "Call us", detail: "+91 99461 85013", href: "tel:+919946185013", icon: "phone" },
    { label: "WhatsApp", detail: "+91 99461 85013", href: "https://wa.me/919946185013", icon: "whatsapp" },
  ],
};

export default function CheffcoPage() { return <BrandPage brand={brand} />; }
