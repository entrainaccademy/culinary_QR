import BrandPage from "../brand-page";

export const metadata = { title: "Entrain Growth Partners | Official Links" };

const brand = {
  name: "Entrain Growth Partners",
  subtitle: "Strategic partners for business growth",
  logo: "/images/growth-logo-trimmed.png",
  width: 333,
  height: 86,
  className: "growth",
  links: [
    { label: "Website", detail: "entraingrowthpartners.com", href: "https://www.entraingrowthpartners.com/", icon: "web" },
    { label: "Instagram", detail: "@entrain.growth.partners", href: "https://www.instagram.com/entrain.growth.partners/", icon: "instagram" },
    { label: "Facebook", detail: "Entrain Growth Partners", href: "https://www.facebook.com/share/1VtdtgPZMd/?mibextid=wwXIfr", icon: "facebook" },
  ],
};

export default function GrowthPage() { return <BrandPage brand={brand} />; }
