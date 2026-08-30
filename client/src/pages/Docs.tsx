import { ArrowRight, BookOpen, CircleHelp, Command, FolderOpen, KeyRound, ShieldCheck, Terminal, Wrench } from "lucide-react";
import { ProductFrame, RouteAction, SectionLead } from "@/components/MarketingPrimitives";

const docsAreas = [
  ["Getting started", "Start with the product model, first task, and visible execution path.", BookOpen, "/docs/getting-started"],
  ["Installation", "Install NEXUS CLI via npm and configure prerequisites.", Wrench, "/docs/installation"],
  ["CLI Reference", "Explore terminal commands, execution flags, and interactive slash commands.", Terminal, "/docs/cli"],
  ["Configuration", "Configure workspace settings, model endpoints, and environment variables.", KeyRound, "/docs/configuration"],
  ["Agents Architecture", "Understand autonomous planning, execution loops, and verification roles.", Command, "/docs/agents"],
  ["Tools System", "Learn how file operations, shell commands, and code search function.", Wrench, "/docs/tools"],
  ["Security & Approvals", "Review permissions, risk awareness, and human approval gates.", ShieldCheck, "/docs/security"],
  ["Workspaces", "Understand directory scopes, workspace roots, and path isolation.", FolderOpen, "/docs/workspaces"],
  ["Troubleshooting", "Resolve CLI issues, local Ollama connections, and execution errors.", CircleHelp, "/docs/troubleshooting"],
] as const;

export default function Docs() {
  return (
    <ProductFrame
      scene="docs"
      title="Documentation"
      description="Official documentation for NEXUS AI local workstation, CLI commands, architecture, and security."
      eyebrow="DOCUMENTATION HUB"
      hero={<>Official Guides.<br /><em>Explore the work.</em></>}
      detail="Comprehensive developer documentation for configuring, running, and delegating autonomous tasks with NEXUS AI."
      actions={<><RouteAction href="/docs/getting-started">Get Started</RouteAction><RouteAction href="/cli" secondary>Explore CLI</RouteAction></>}
      aside={
        <div className="route-console">
          <div className="terminal-head">
            <span>DOCS MAP</span>
            <span className="status-live"><i /> 9 GUIDES</span>
          </div>
          <div className="p-6 font-mono text-xs leading-7 text-white/70">
            <p><span className="text-[#8AE8FF]">01</span> getting started</p>
            <p><span className="text-[#8AE8FF]">02</span> installation &amp; CLI</p>
            <p><span className="text-[#8AE8FF]">03</span> configuration &amp; agents</p>
            <p><span className="text-[#8AE8FF]">04</span> tools, security &amp; workspaces</p>
          </div>
        </div>
      }
    >
      <section className="section-shell border-t border-white/10" id="index">
        <SectionLead
          eyebrow="DOCUMENTATION INDEX"
          title={<>Explore the<br /><em>NEXUS Guides.</em></>}
          detail="Click any section below to read in-depth documentation on task lifecycle, installation, CLI commands, security, and troubleshooting."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {docsAreas.map(([title, detail, Icon, href], index) => {
            const ItemIcon = Icon as typeof BookOpen;
            return (
              <a
                key={title}
                href={href}
                className="route-card group block cursor-pointer transition hover:border-[#8AE8FF]/40 hover:bg-[#8AE8FF]/4"
              >
                <span className="workflow-index">{String(index + 1).padStart(2, "0")}</span>
                <ItemIcon className="h-5 w-5 text-[#8AE8FF] mb-4" />
                <h3 className="text-[#8AE8FF] group-hover:text-white transition flex items-center justify-between">
                  <span>{title}</span>
                  <ArrowRight className="h-4 w-4 opacity-40 group-hover:opacity-100 transition transform group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-xs text-white/55 leading-relaxed">{detail}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="section-shell feature-story-beat border-t border-white/10" id="help">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <SectionLead
            eyebrow="NEED QUICK HELP?"
            title={<>Direct CLI<br /><em>diagnostics.</em></>}
            detail="Run /help or /status inside any active NEXUS CLI session for immediate terminal troubleshooting."
          />
          <div className="route-console">
            <div className="terminal-head">
              <span>HELP PATH</span>
              <span className="status-live"><i /> INTERACTIVE</span>
            </div>
            <div className="p-7 font-mono text-xs leading-7 text-white/70 space-y-2">
              <p><span className="text-[#8AE8FF]">$</span> nexus</p>
              <p className="text-white/40"># Run CLI help command</p>
              <p><span className="text-[#8AE8FF]">&gt;</span> /help</p>
              <p className="text-white/40"># View system status</p>
              <p><span className="text-[#8AE8FF]">&gt;</span> /status</p>
            </div>
          </div>
        </div>
      </section>
    </ProductFrame>
  );
}

