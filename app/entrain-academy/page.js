import BrandPage from "../brand-page";

export const metadata = { title: "Entrain Academy | Official Links" };

const brand = {
  name: "Entrain Academy",
  subtitle: "Learn. Create. Inspire.",
  logo: "/images/academy-logo-trimmed.png",
  width: 2077,
  height: 635,
  className: "entrain",
  links: [
    { label: "Website", detail: "entraincullinaryschool.com", href: "https://www.entraincullinaryschool.com/", icon: "web" },
    { label: "Instagram", detail: "@entrain_academy", href: "https://www.instagram.com/entrain_academy/?hl=en", icon: "instagram" },
  ],
};

export default function EntrainPage() { return <BrandPage brand={brand} />; }
