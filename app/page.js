import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Entrain Academy", description: "Culinary & Baking Training", href: "/entrain-academy", theme: "academy", logo: "/images/academy-logo-trimmed.png", width: 2077, height: 635 },
  { name: "Cobolt Machineries", description: "Commercial Kitchen Equipment", href: "/cobolt-machineries", theme: "cobolt", logo: "/images/image.png", width: 1536, height: 1024 },
  { name: "Entrain Growth Partners", description: "Digital Marketing Agency", href: "/entrain-growth-partners", theme: "growth", logo: "/images/growth-logo-trimmed.png", width: 333, height: 86 },
];

function BrandLogo({ brand }) {
  if (brand.theme === "cobolt") {
    return (
      <span className="cobolt-lockup" aria-label="Cobolt Machineries">
        <span className="cobolt-emblem" aria-hidden="true" />
        <span className="cobolt-wordmark"><strong><b>CO</b>BOLT</strong><small>MACHINERIES</small></span>
      </span>
    );
  }
  return <Image className="brand-logo" src={brand.logo} alt={`${brand.name} logo`} width={brand.width} height={brand.height} priority={brand.theme === "academy"} />;
}

function CardArt({ theme }) {
  if (theme === "academy") {
    return <svg className="card-art chef-art" viewBox="0 0 260 280" fill="none" aria-hidden="true"><path d="M54 174c-23-18-23-52-3-72 11-12 26-17 39-14 8-29 33-49 61-46 27 2 46 20 51 44 25-3 47 15 50 39 3 21-8 40-27 49l-8 67H66l-12-67Z" fill="#F7F3EE"/><path d="M57 166c39 18 110 22 169 1M70 204c42 14 96 17 150 5M90 91c-1 31 6 54 17 77m55-76c-8 25-9 51-4 76m46-52c-15 16-23 32-25 54" stroke="#D9D2CC" strokeWidth="6" strokeLinecap="round"/><path d="m67 238 7 37h139l5-36c-52-8-101-8-151-1Z" fill="#E7E1DA"/></svg>;
  }
  if (theme === "cobolt") {
    return <svg className="card-art stove-art" viewBox="0 0 270 260" fill="none" aria-hidden="true"><path d="m60 48 184-30 28 33-12 205H60V48Z" fill="#969491"/><path d="M60 48 244 18l28 33-185 30-27-33Z" fill="#DEDAD5"/><path d="m87 81 185-30-12 205H87V81Z" fill="#BDBBB7"/><path d="m105 100 147-24-3 45-144 22v-43Z" fill="#353739"/><ellipse cx="159" cy="104" rx="31" ry="10" transform="rotate(-9 159 104)" fill="#151718"/><ellipse cx="159" cy="104" rx="18" ry="5" transform="rotate(-9 159 104)" fill="#747372"/><ellipse cx="224" cy="94" rx="25" ry="9" transform="rotate(-9 224 94)" fill="#151718"/><path d="M105 164h145v88H105v-88Z" fill="#9D9D9B"/><path d="M118 181h117v62H118v-62Z" fill="#3F4142"/><path d="M120 174h114" stroke="#EEEAE4" strokeWidth="7" strokeLinecap="round"/><circle cx="128" cy="153" r="6" fill="#303132"/><circle cx="173" cy="148" r="6" fill="#303132"/><circle cx="217" cy="141" r="6" fill="#303132"/></svg>;
  }
  return null;
}

export default function Home() {
  return (
    <main className="home-page">
      <svg className="page-corner page-corner-top" viewBox="0 0 420 260" fill="none" aria-hidden="true" preserveAspectRatio="none">
        <path d="M0 0h362C269 68 180 137 0 171V0Z" fill="#072B45" />
        <path d="M-18 245C96 170 169 54 313-17" stroke="#D1A04B" strokeWidth="3" />
      </svg>
      <div className="home-inner">
        <section className="welcome" aria-labelledby="welcome-title">
          <h1 id="welcome-title">Explore Our <em>Brands</em></h1>
        </section>
        <section className="brand-grid" aria-label="Explore our brands">
          {brands.map((brand) => (
            <Link href={brand.href} className={`feature-card ${brand.theme}-card`} key={brand.name} aria-label={`Explore ${brand.name}`}>
              <CardArt theme={brand.theme} />
              <div className="card-content">
                <BrandLogo brand={brand} />
                <p>{brand.description}</p>
                <span className="card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
            </Link>
          ))}
        </section>
        <div className="home-bottom-space" aria-hidden="true" />
      </div>
      <svg className="page-corner page-corner-bottom" viewBox="0 0 420 260" fill="none" aria-hidden="true" preserveAspectRatio="none">
        <path d="M0 0h362C269 68 180 137 0 171V0Z" fill="#072B45" />
        <path d="M-18 245C96 170 169 54 313-17" stroke="#D1A04B" strokeWidth="3" />
      </svg>
    </main>
  );
}
