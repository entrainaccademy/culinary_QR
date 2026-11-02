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
    { label: "Website", detail: "entrainacademy.co", href: "https://www.entrainacademy.co/", icon: "web" },
    { label: "Instagram", detail: "@entrain_academy", href: "https://www.instagram.com/entrain_academy/?hl=en", icon: "instagram" },
    { label: "YouTube", detail: "@entrainacademy", href: "https://youtube.com/@entrainacademy?si=CgmPHNFxtSxGJ8CA", icon: "youtube" },
    { label: "Facebook", detail: "Entrain Academy", href: "https://www.facebook.com/share/1HVNhgdfXR/?mibextid=wwXIfr", icon: "facebook" },
  ],
};

export default function EntrainPage() { return <BrandPage brand={brand} />; }
