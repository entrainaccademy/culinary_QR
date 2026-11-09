import Image from "next/image";
import CoboltLogo from "./cobolt-logo";

const brands = [
  { name: "Entrain Academy", description: "Culinary & Baking Training", href: "/entrain-academy", theme: "academy", logo: "/images/academy-logo-trimmed.png", width: 2077, height: 635 },
  { name: "Cobolt Machineries", description: "Commercial Kitchen Equipment", href: "/cobolt-machineries", theme: "cobolt", logo: "/images/image.png", width: 1536, height: 1024 },
  { name: "Entrain Growth Partners", description: "Digital Marketing Agency", href: "/entrain-growth-partners", theme: "growth", logo: "/images/growth-logo-trimmed.png", width: 333, height: 86 },
  { name: "CHEFFCO Culinary Solutions", description: "", href: "/cheffco-culinary-solutions", theme: "cheffco", logo: "/images/cheffco-logo.png", width: 2025, height: 776 },
];

function BrandLogo({ brand }) {
  if (brand.theme === "cobolt") {
    return <CoboltLogo />;
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
  if (theme === "growth") {
    return <svg className="card-art growth-art" viewBox="0 0 260 260" fill="none" aria-hidden="true"><rect x="36" y="25" width="210" height="238" rx="24" fill="#A6B6DD"/><rect x="29" y="17" width="210" height="238" rx="24" fill="#455DA5"/><rect x="40" y="29" width="188" height="214" rx="16" fill="#F9FAFF"/><rect x="54" y="45" width="160" height="30" rx="9" fill="#E8EDFA"/><circle cx="70" cy="60" r="7" fill="#5269B4"/><path d="M87 57h70M87 65h48" stroke="#A8B6D5" strokeWidth="5" strokeLinecap="round"/><rect x="54" y="87" width="160" height="100" rx="12" fill="#EEF2FC"/><path d="M68 165h132" stroke="#C6D0E8" strokeWidth="3" strokeLinecap="round"/><path d="M80 164v-22m30 22v-34m30 34v-47m30 47v-62" stroke="#8195CE" strokeWidth="15" strokeLinecap="round"/><path d="m73 128 36-16 30 5 38-30" stroke="#425BA7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><path d="m164 87 13 0 0 13" stroke="#425BA7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><rect x="54" y="199" width="97" height="11" rx="5.5" fill="#C2CDE7"/><rect x="54" y="219" width="65" height="8" rx="4" fill="#DCE3F3"/><circle cx="204" cy="212" r="25" fill="#647CC1"/><path d="m191 217 9-9 7 6 11-12" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
  if (theme === "cheffco") {
    return (
      <svg className="card-art powder-art" viewBox="0 0 260 260" fill="none" aria-hidden="true">
        <path d="M25 80h74l7 18-3 146H22L19 98l6-18Z" fill="#D3B89D" stroke="#B79B80" strokeWidth="3" />
        <path d="M24 80h76M23 95h80" stroke="#9D8066" strokeWidth="5" />
        <rect x="37" y="132" width="52" height="75" rx="5" fill="#F7EFE5" />
        <path d="M48 178c8-13 19-17 29 0H48Z" fill="#C59260" />
        <path d="M47 147h31M52 155h21" stroke="#B9A491" strokeWidth="4" strokeLinecap="round" />
        <path d="M163 67h72l7 19-3 154h-80l-3-154 7-19Z" fill="#9DAEA7" stroke="#768B82" strokeWidth="3" />
        <path d="M162 68h75M159 84h82" stroke="#60776F" strokeWidth="5" />
        <rect x="174" y="123" width="50" height="76" rx="5" fill="#F4F5EE" />
        <path d="M182 173c10-15 23-17 35 0h-35Z" fill="#9CAA72" />
        <path d="M183 138h31M188 146h21" stroke="#AEB9AA" strokeWidth="4" strokeLinecap="round" />
        <path d="M82 39h95l9 23-4 186H77L73 62l9-23Z" fill="#F0E8D9" stroke="#C8BBA8" strokeWidth="4" />
        <path d="M80 40h100M75 61h109" stroke="#AA9B89" strokeWidth="6" />
        <rect x="94" y="101" width="70" height="99" rx="7" fill="#FFFCF6" stroke="#DDD2C2" strokeWidth="2" />
        <circle cx="129" cy="149" r="23" fill="#E9E0D3" />
        <path d="M107 160c6-13 13-19 22-19s16 6 22 19h-44Z" fill="#D6BC91" />
        <path d="M111 111h36M108 183h42" stroke="#C1B4A2" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
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
            <a href={brand.href} className={`feature-card ${brand.theme}-card`} key={brand.name} aria-label={`Explore ${brand.name}`}>
              <CardArt theme={brand.theme} />
              <div className="card-content">
                <BrandLogo brand={brand} />
                {brand.description && <p>{brand.description}</p>}
                <span className="card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
            </a>
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
