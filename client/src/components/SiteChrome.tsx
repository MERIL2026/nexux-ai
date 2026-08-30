/** NEXUS AI — Quiet Machine Cinema shared chrome: restrained glass navigation, aperture identity, and execution-rail footer. */
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";

const logoSource = "/nexus-logo.png";

const primaryLinks = [
  ["Features", "/features"],
  ["Download", "/download"],
  ["CLI", "/cli"],
  ["Security", "/security"],
  ["Docs", "/docs"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" className="nexus-identity" aria-label="NEXUS AI home">
      <span className={`official-wordmark ${compact ? "official-wordmark--compact" : ""}`}>
        <img src={logoSource} alt="NEXUS AI" />
      </span>
      <span className="brand-text">
        NEXUS<small>AI</small>
      </span>
    </a>
  );
}


export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  return (
    <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
      <Brand />
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
        {primaryLinks.map(([label, href]) => <a key={href} className={`nav-link ${location === href ? "active" : ""}`} href={href}>{label}</a>)}
      </nav>
      <a className="glass-button hidden !px-5 !py-2.5 !text-[.72rem] md:inline-flex" href="/download">Download NEXUS <ArrowRight className="h-3.5 w-3.5" /></a>
      <button className="liquid-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen}>{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
      {menuOpen ? <nav className="liquid-glass absolute inset-x-5 top-[5.3rem] z-40 rounded-2xl p-3 md:hidden" aria-label="Mobile navigation">{primaryLinks.map(([label, href]) => <a key={href} onClick={() => setMenuOpen(false)} className={`block rounded-xl px-4 py-3 text-sm transition hover:bg-white/8 ${location === href ? "text-white" : "text-white/75 hover:text-white"}`} href={href}>{label}</a>)}<a onClick={() => setMenuOpen(false)} className="mt-2 block rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#041824]" href="/download">Download NEXUS</a></nav> : null}
    </header>
  );
}

export function SiteFooter() {
  const groups = [
    ["Product", [["Features", "/features"], ["Download", "/download"], ["CLI", "/cli"], ["Security", "/security"]]],
    ["Resources", [["Documentation", "/docs"], ["Releases", "/releases"], ["Troubleshooting", "/docs#troubleshooting"]]],
    ["Company", [["About", "/about"], ["Contact", "/contact"]]],
  ] as const;

  const socialLinksFooter = [
    ["GitHub", "https://github.com/MERIL2026"],
    ["LinkedIn", "https://www.linkedin.com/in/meril-parmar-940366363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"],
    ["X", "https://x.com/MERILPARMAR"],
    ["Instagram", "https://www.instagram.com/meril_parmar_?igsh=MWxjeTc0ZXRlanFobA=="],
    ["NEXORA Labs", "https://www.instagram.com/nexora_labs_01x?igsi=aTh5cWEwbGIxNnJl"],
    ["Portfolio", "https://meril-parmar-portfolio.vercel.app/"],
  ] as const;

  return (
    <footer className="site-footer border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-[1.35fr_repeat(3,.7fr)]">
          <div>
            <Brand />
            <p className="mt-3 text-xs font-mono text-[#8AE8FF]">Local. Private. Powerful. Yours.</p>
            <p className="mt-2 text-xs text-white/60">An AI project by NEXORA Labs · Created by Meril Parmar</p>
            <p className="mt-4 max-w-xs text-xs leading-6 text-white/43">
              NEXUS AI is designed to make autonomous work observable, directional, and within reach of your own machine.
            </p>
          </div>
          {groups.map(([label, links]) => (
            <div key={label}>
              <p className="eyebrow mb-4">{label}</p>
              <div className="flex flex-col gap-3">
                {links.map(([name, href]) => (
                  <a className="text-sm text-white/57 transition hover:text-[#8AE8FF]" href={href} key={href}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CREATOR SOCIAL & BRAND LINKS */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/55">
            {socialLinksFooter.map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
                className="transition hover:text-[#8AE8FF]"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[.68rem] tracking-[.09em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>NEXUS AI · AN AI PROJECT BY NEXORA LABS · CREATED BY MERIL PARMAR</span>
          <a className="transition hover:text-white" href="#top">
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}


export function PageMeta({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const fullTitle = title.includes("NEXUS AI") ? title : `${title} | NEXUS AI`;
      document.title = fullTitle;

      const setMeta = (selector: string, attrName: string, attrVal: string, contentVal: string) => {
        let el = document.querySelector(selector);
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute(attrName, attrVal);
          document.head.appendChild(el);
        }
        el.setAttribute("content", contentVal);
      };

      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
      setMeta('meta[property="og:type"]', "property", "og:type", "website");
      setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", window.location.href.split("#")[0].split("?")[0]);
    }
  }, [title, description]);

  return <>{children}</>;
}

