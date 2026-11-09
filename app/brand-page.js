import Image from "next/image";
import CoboltLogo from "./cobolt-logo";

function SocialIcon({ type }) {
  const paths = {
    web: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9Z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
    youtube: <><path d="M21 12s0-4-1-5c-1-1-8-1-8-1s-7 0-8 1-1 5-1 5 0 4 1 5 8 1 8 1 7 0 8-1 1-5 1-5Z"/><path d="m10 9 5 3-5 3Z"/></>,
    facebook: <path d="M14 21v-8h3l.5-3H14V8.5c0-1 .4-1.5 1.7-1.5H18V4.2c-.7-.1-1.8-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8V10H8v3h2.5v8"/>,
    phone: <path d="M7.2 3.5 9.5 7l-1.7 2c1.4 2.8 3.4 4.8 6.2 6.2l2-1.7 3.5 2.3-.8 3.7c-.2.9-1.1 1.6-2 1.5C9.2 20.5 3.5 14.8 3 7.3c-.1-.9.6-1.8 1.5-2l2.7-.8Z"/>,
    whatsapp: <><path d="M5 19.3 3.5 22l3.6-1.1a9 9 0 1 0-2.1-1.6Z"/><path d="M8.7 8.2c.5 3 2.3 4.8 5.3 5.4l1.7-1.2 2.1 1.5-.5 2c-.2.6-.8.9-1.4.8-4.7-.9-7.8-4-8.7-8.7-.1-.6.2-1.2.8-1.4l2-.5 1.5 2.1-1.2 1.7"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

export default function BrandPage({ brand }) {
  return (
    <main className={`page-shell brand-detail-shell ${brand.className}-detail`}>
      <section className="link-hub">
        <a href="/" className="back-link">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
          All brands
        </a>

        <header className={`brand-hero ${brand.className}`}>
          <div className="hero-logo">
            {brand.className === "cobolt" ? <CoboltLogo /> : <Image src={brand.logo} alt={`${brand.name} logo`} width={brand.width} height={brand.height} priority />}
          </div>
          <h1 className={brand.logoOnly ? "sr-only" : undefined}>{brand.name}</h1>
          {!brand.logoOnly && <p>{brand.subtitle}</p>}
        </header>

        <div className="standalone-links">
          {brand.links.map((link) => (
            <a href={link.href} target={link.icon === "phone" ? undefined : "_blank"} rel={link.icon === "phone" ? undefined : "noopener noreferrer"} key={link.label}>
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
