import BrandPage from "../brand-page";

export const metadata = { title: "Cobolt Machineries | Official Links" };

const brand = {
  name: "Cobolt Machineries",
  subtitle: "Professional food machinery solutions",
  logo: "/images/blacklogo.png",
  width: 1536,
  height: 1024,
  className: "cobolt",
  logoOnly: true,
  links: [
    { label: "Website", detail: "coboltmachineries.com", href: "https://coboltmachineries.com", icon: "web" },
    { label: "Instagram", detail: "@coboltmachineries", href: "https://www.instagram.com/coboltmachineries?igsh=bjEzenplY2VveTA5", icon: "instagram" },
    { label: "YouTube", detail: "@coboltmachineries", href: "https://youtube.com/@coboltmachineries?si=tJNe3ZWONu_xcdYr", icon: "youtube" },
    { label: "Facebook", detail: "Cobolt Machineries", href: "https://www.facebook.com/share/1EY9oiLTPF/?mibextid=wwXIfr", icon: "facebook" },
  ],
};

export default function CoboltPage() { return <BrandPage brand={brand} />; }
