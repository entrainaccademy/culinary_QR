import Image from "next/image";
import Link from "next/link";

function SocialIcon({ type }) {
  const paths = {
    web: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9Z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
    youtube: <><path d="M21 12s0-4-1-5c-1-1-8-1-8-1s-7 0-8 1-1 5-1 5 0 4 1 5 8 1 8 1 7 0 8-1 1-5 1-5Z"/><path d="m10 9 5 3-5 3Z"/></>,
    facebook: <path d="M14 21v-8h3l.5-3H14V8.5c0-1 .4-1.5 1.7-1.5H18V4.2c-.7-.1-1.8-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8V10H8v3h2.5v8"/>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

export default function BrandPage({ brand }) {
  return (
    <main className="page-shell brand-detail-shell">
      <section className="link-hub">
        <Link href="/" className="back-link">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
          All brands
        </Link>

        <header className={`brand-hero ${brand.className}`}>
          <div className="hero-logo">
            <Image src={brand.logo} alt={`${brand.name} logo`} width={brand.width} height={brand.height} priority />
          </div>
          <h1>{brand.name}</h1>
          <p>{brand.subtitle}</p>
        </header>

        <div className="standalone-links">
          {brand.links.map((link) => (
            <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label}>
              <span className={`social-icon ${link.icon}`}><SocialIcon type={link.icon} /></span>
              <span className="link-copy"><strong>{link.label}</strong><small>{link.detail}</small></span>
              <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
