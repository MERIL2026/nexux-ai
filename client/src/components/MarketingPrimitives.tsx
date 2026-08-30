import { ArrowRight, Check, Copy, type LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { PageMeta, SiteFooter, SiteNav } from "./SiteChrome";

export function CopyCommandButton({ command = "npm install -g nexus-ai-cli", className = "" }: { command?: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      toast.success("Command copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Unable to copy to clipboard.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#8AE8FF]/30 bg-[#8AE8FF]/10 px-3.5 py-1.5 text-xs font-medium text-[#8AE8FF] transition hover:bg-[#8AE8FF]/20 active:scale-95 cursor-pointer ${className}`}
      aria-label="Copy command"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-emerald-400 font-semibold">✓ Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>COPY COMMAND</span>
        </>
      )}
    </button>
  );
}

export function RouteAction({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <a className={secondary ? "glass-button !px-6 !py-3.5" : "solid-button !px-6 !py-3.5"} href={href}>{children}<ArrowRight className="h-4 w-4" /></a>;
}

export function ProductFrame({ title, description, eyebrow, hero, detail, actions, children, aside, scene = "product" }: { title: string; description: string; eyebrow: string; hero: ReactNode; detail: ReactNode; actions?: ReactNode; children: ReactNode; aside?: ReactNode; scene?: "download" | "features" | "security" | "docs" | "releases" | "about" | "contact" | "product" }) {
  return <PageMeta title={title} description={description}><main className="product-page overflow-x-hidden bg-[#031B29] text-white" id="top"><section className={`product-hero product-hero--${scene} relative overflow-hidden`}><SiteNav /><div className="page-orbit page-orbit-a" aria-hidden="true" /><div className="page-orbit page-orbit-b" aria-hidden="true" /><div className="product-scene-artifact" aria-hidden="true"><span /><i /><b /></div><div className="relative z-10 mx-auto grid min-h-[32rem] max-w-7xl items-end gap-12 px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div><p className="eyebrow mb-6">{eyebrow}</p><h1 className="display-title text-5xl leading-[.92] tracking-[-.06em] text-white sm:text-7xl lg:text-[6.25rem]">{hero}</h1><div className="mt-7 max-w-xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">{detail}</div>{actions ? <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">{actions}</div> : null}</div><div className="product-hero-aside">{aside}</div></div></section>{children}<SiteFooter /></main></PageMeta>;
}

export function SectionLead({ eyebrow, title, detail }: { eyebrow: string; title: ReactNode; detail?: ReactNode }) {
  return <div className="max-w-3xl"><p className="eyebrow mb-5">{eyebrow}</p><h2 className="display-title text-4xl leading-[.97] tracking-[-.055em] text-white sm:text-5xl md:text-6xl">{title}</h2>{detail ? <div className="mt-6 max-w-xl text-base leading-7 text-white/58 sm:text-lg">{detail}</div> : null}</div>;
}

export function RailList({ items }: { items: Array<{ title: string; detail: string; icon?: LucideIcon; state?: string }> }) {
  return <div className="route-rail">{items.map(({ title, detail, icon: Icon, state }, index) => <div className="route-rail-row" key={title}><span className="step-pip complete" /><span className="workflow-index">{String(index + 1).padStart(2, "0")}</span>{Icon ? <Icon className="h-4 w-4 shrink-0 text-[#8AE8FF]" /> : null}<div><h3>{title}</h3><p>{detail}</p></div>{state ? <span className="result-tag">{state}</span> : null}</div>)}</div>;
}

export function SoftCard({ title, detail, icon: Icon, meta }: { title: string; detail: string; icon?: LucideIcon; meta?: string }) {
  return <article className="route-card">{Icon ? <Icon className="h-4 w-4 text-[#8AE8FF]" /> : null}{meta ? <span className="workflow-index">{meta}</span> : null}<h3>{title}</h3><p>{detail}</p></article>;
}

