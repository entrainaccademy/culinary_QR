import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Entrain Academy",
    subtitle: "Learn. Create. Inspire.",
    logo: "/images/academy-logo-trimmed.png",
    width: 2077,
    height: 635,
    href: "/entrain-academy",
    className: "entrain",
  },
  {
    name: "Entrain Growth Partners",
    subtitle: "Strategic partners for business growth",
    logo: "/images/growth-logo-trimmed.png",
    width: 333,
    height: 86,
    href: "/entrain-growth-partners",
    className: "growth",
  },
  {
    name: "Cobolt Machineries",
    subtitle: "Professional food machinery solutions",
    logo: "/images/blacklogo.png",
    width: 1536,
    height: 1024,
    href: "/cobolt-machineries",
    className: "cobolt",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="link-hub brands-box">
        <header className="intro">
          <h1>Visit Our Branch</h1>
        </header>

        <div className="brand-list">
          {brands.map((brand, index) => (
            <Link className={`brand-choice ${brand.className}`} href={brand.href} key={brand.name}>
              <div className="logo-wrap">
                <Image src={brand.logo} alt={`${brand.name} logo`} width={brand.width} height={brand.height} priority={index === 0} />
              </div>
              <div className="brand-copy">
                <h2>{brand.name}</h2>
                <p>{brand.subtitle}</p>
              </div>
              <span className="choice-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
