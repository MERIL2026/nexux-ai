import { ExternalLink, Github, Globe, Instagram, Linkedin, Sparkles, Twitter } from "lucide-react";
import { SectionLead } from "./MarketingPrimitives";

const socialLinks = [

  {
    name: "GitHub",
    url: "https://github.com/MERIL2026",
    icon: Github,
    label: "Visit Meril Parmar's GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/meril-parmar-940366363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: Linkedin,
    label: "Connect with Meril Parmar on LinkedIn",
  },
  {
    name: "X",
    url: "https://x.com/MERILPARMAR",
    icon: Twitter,
    label: "Follow Meril Parmar on X (Twitter)",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/meril_parmar_?igsh=MWxjeTc0ZXRlanFobA==",
    icon: Instagram,
    label: "Follow Meril Parmar on Instagram",
  },
  {
    name: "NEXORA Labs",
    url: "https://www.instagram.com/nexora_labs_01x?igsi=aTh5cWEwbGIxNnJl",
    icon: Sparkles,
    label: "Follow NEXORA Labs on Instagram",
  },
  {
    name: "Portfolio",
    url: "https://meril-parmar-portfolio.vercel.app/",
    icon: Globe,
    label: "Visit Meril Parmar's personal portfolio",
  },
] as const;

export function CreatorSection() {
  return (
    <section className="section-shell border-t border-white/10" id="creator">
      <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <SectionLead
          eyebrow="BUILT BY / CREATOR ATTRIBUTION"
          title={
            <>
              Created by<br />
              <em>Meril Parmar</em>
            </>
          }
          detail="NEXUS AI is an autonomous, local-first AI project developed under NEXORA Labs to make powerful AI capabilities accessible directly on your own machine."
        />

        <div className="space-y-6">
          {/* CREATOR CARD */}
          <div className="soft-panel rounded-2xl p-7 border border-white/14 bg-[#010b12] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-5">
              <div>
                <p className="eyebrow text-[#8AE8FF] mb-1">CREATOR &amp; DEVELOPER</p>
                <h3 className="text-2xl font-normal text-white">Meril Parmar</h3>
                <p className="text-xs text-white/55 mt-0.5">Creator &amp; Developer of NEXUS AI</p>
              </div>

              <div className="soft-panel rounded-xl px-4 py-2 border border-[#8AE8FF]/30 bg-[#8AE8FF]/5 shrink-0">
                <p className="text-xs font-mono text-[#8AE8FF] font-semibold flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> NEXORA Labs
                </p>
                <p className="text-[0.7rem] text-white/50">Independent Tech Brand</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/80 italic font-serif leading-relaxed mb-6">
              &quot;Building local-first AI tools for developers, creators, and curious minds.&quot;
            </p>

            <div className="border-t border-white/10 pt-5">
              <p className="text-xs font-mono text-white/40 mb-3">CONNECT &amp; EXPLORE</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="glass-button !px-3.5 !py-2.5 text-xs flex items-center justify-between group transition hover:border-[#8AE8FF]/40"
                    >
                      <span className="flex items-center gap-2 text-white/80 group-hover:text-white">
                        <Icon className="h-3.5 w-3.5 text-[#8AE8FF]" />
                        <span>{link.name}</span>
                      </span>
                      <ExternalLink className="h-3 w-3 opacity-40 group-hover:opacity-100 transition transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
