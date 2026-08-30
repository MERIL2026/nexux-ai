/** NEXUS AI — Quiet Machine Cinema download hub: the approved visual system applied to source-gated releases and installation guidance. */
import { Activity, Command, Cpu, HardDrive, Laptop, Monitor, Settings2, ShieldCheck, Terminal, Wrench } from "lucide-react";
import { CopyCommandButton, ProductFrame, RailList, RouteAction, SectionLead } from "@/components/MarketingPrimitives";

export default function Download() {
  return <ProductFrame scene="download" title="Download NEXUS" description="Get NEXUS AI on your machine and follow the verified installation path." eyebrow="DOWNLOAD / LOCAL DEVICE" hero={<>Get NEXUS<br /><em>on your machine.</em></>} detail="NEXUS AI is designed to meet you on a supported device. Select the verified release path for your environment, then move from installation to your first delegated task." actions={<><RouteAction href="#cli-install">NEXUS CLI</RouteAction><RouteAction href="#desktop-coming-soon" secondary>NEXUS Desktop</RouteAction></>} aside={<div className="route-console"><div className="terminal-head"><span>CLI INSTALLATION</span><span className="status-live"><i /> VERIFIED</span></div><div className="p-6"><p className="text-sm leading-6 text-white/70">Install NEXUS AI directly from your terminal with npm, then launch the agent in any workspace.</p><div className="mt-5 rounded-xl border border-white/14 bg-[#010b12] p-4 font-mono text-xs"><div className="flex items-center justify-between gap-2"><span className="text-[#8AE8FF] font-bold">$</span><code className="text-white break-all">npm install -g nexus-ai-cli</code></div><div className="mt-3 flex justify-end"><CopyCommandButton command="npm install -g nexus-ai-cli" /></div></div></div></div>}>
    
    {/* NEXUS CLI INSTALLATION SECTION */}
    <section className="section-shell border-t border-white/10" id="cli-install">
      <div className="grid gap-12 lg:grid-cols-[.76fr_1.24fr] lg:gap-20">
        <SectionLead eyebrow="01 — NEXUS CLI" title={<>Install NEXUS AI<br /><em>directly from terminal.</em></>} detail="Install NEXUS AI directly from your terminal using npm. Start the local agent experience and manage tasks with simple shell commands." />
        <div className="soft-panel rounded-2xl overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="eyebrow">INSTALLATION</span>
              <h3 className="mt-1 text-xl font-medium text-white">NEXUS CLI</h3>
              <p className="mt-1 text-sm text-white/60">Install NEXUS AI directly from your terminal.</p>
            </div>
            <CopyCommandButton command="npm install -g nexus-ai-cli" />
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs font-mono text-white/50 mb-2">1. INSTALL COMMAND</p>
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/14 bg-[#010b12] p-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-[#8AE8FF] font-bold">$</span>
                  <code className="text-white font-semibold break-all">npm install -g nexus-ai-cli</code>
                </div>
                <CopyCommandButton command="npm install -g nexus-ai-cli" />
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-white/50 mb-2">2. STARTUP COMMAND</p>
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#010b12] p-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-[#8AE8FF] font-bold">$</span>
                  <code className="text-white font-semibold">nexus</code>
                </div>
                <CopyCommandButton command="nexus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* DESKTOP VERSION — COMING SOON SECTION */}
    <section className="section-shell border-t border-white/10" id="desktop-coming-soon">
      <div className="grid gap-12 lg:grid-cols-[.76fr_1.24fr] lg:gap-20">
        <SectionLead eyebrow="02 — NATIVE DESKTOP EXPERIENCE" title={<>NEXUS Desktop<br /><em>Native performance.</em></>} detail="A dedicated desktop application for NEXUS AI is in active development to bring full system integration and seamless local model support." />
        
        <div className="soft-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="requirement-icon">
                <Monitor className="h-4 w-4 text-[#8AE8FF]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">NEXUS Desktop</h3>
                <p className="text-sm text-white/60 mt-0.5">Desktop Version — Coming Soon</p>
              </div>
            </div>
            <span className="label-chip border-[#8AE8FF]/30 text-[#8AE8FF] font-semibold">COMING SOON</span>
          </div>

          <p className="mt-6 text-base leading-7 text-white/70">
            A native desktop experience for NEXUS AI is currently in development.
          </p>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/45 font-mono">
            <div className="flex items-center gap-2">
              <span className="step-pip" />
              <span>NATIVE APP ENGINE · IN DEVELOPMENT</span>
            </div>
            <span>COMING SOON</span>
          </div>
        </div>
      </div>
    </section>

    {/* PLATFORM DOWNLOADS & SYSTEM REQUIREMENTS */}
    <section className="section-shell border-t border-white/10" id="platforms"><div className="grid gap-12 lg:grid-cols-[.76fr_1.24fr] lg:gap-20"><SectionLead eyebrow="03 — PLATFORM DOWNLOADS" title={<>Choose a verified<br /><em>release path.</em></>} detail="Only supported operating systems should receive a release. This hub is prepared for official installers without inventing platform details." /><RailList items={[{ title: "Windows", detail: "Official release information has not yet been connected.", icon: Laptop, state: "SOURCE-GATED" }, { title: "macOS", detail: "Official release information has not yet been connected.", icon: Laptop, state: "SOURCE-GATED" }, { title: "Linux", detail: "Official release information has not yet been connected.", icon: Laptop, state: "SOURCE-GATED" }]} /></div></section>
    <section className="section-shell border-t border-white/10"><div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20"><div className="order-2 lg:order-1"><RailList items={[{ title: "Select a release", detail: "Choose the installer for your supported platform once it is officially published.", icon: Activity }, { title: "Install NEXUS", detail: "Follow the package or installer instructions for the selected release.", icon: Wrench }, { title: "Configure", detail: "Set up the workspace, settings, and any documented connections.", icon: Settings2 }, { title: "Launch", detail: "Open NEXUS AI or continue with the dedicated terminal workflow.", icon: Terminal }, { title: "Run the first task", detail: "Give NEXUS AI an outcome and review its visible plan.", icon: Command }]} /></div><div className="order-1 lg:order-2"><SectionLead eyebrow="04 — INSTALLATION" title={<>Download.<br /><em>Install. Begin.</em></>} detail="The core path is intentionally simple. Any release-specific prompts remain sourced from the official installation materials." /></div></div></section>
    <section className="section-shell border-t border-white/10"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><SectionLead eyebrow="05 — SYSTEM REQUIREMENTS" title={<>Read the machine<br /><em>before the task.</em></>} detail="NEXUS AI does not publish unverified technical requirements here. Confirm details from the release you choose." /><RailList items={[{ title: "Supported operating systems", detail: "Published only with official platform releases.", icon: Laptop, state: "RELEASE NOTE" }, { title: "CPU, memory, storage", detail: "Release-specific system requirements belong with the official installer notes.", icon: Cpu, state: "RELEASE NOTE" }, { title: "Dependencies", detail: "Check the selected release documentation for runtime or environment needs.", icon: Settings2, state: "RELEASE NOTE" }, { title: "GPU / API requirements", detail: "Only applicable when an official release or configured workflow requires them.", icon: HardDrive, state: "RELEASE NOTE" }]} /></div></section>
    <section className="section-shell border-t border-white/10"><div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20"><div><SectionLead eyebrow="06 — FIRST RUN" title={<>Set the work<br /><em>in motion.</em></>} detail="The first run should establish a workspace, permissions, and task context before execution begins." /></div><RailList items={[{ title: "Choose a workspace", detail: "Point NEXUS AI to the project or working area that matters now.", icon: Laptop }, { title: "Review access", detail: "Confirm the permissions appropriate to the work you intend to delegate.", icon: ShieldCheck }, { title: "Configure context", detail: "Apply documented settings and connected tools where required.", icon: Settings2 }, { title: "Start your task", detail: "Describe the outcome and inspect the execution path.", icon: Activity }]} /></div></section>
    <section className="section-shell border-t border-white/10"><div className="grid gap-12 lg:grid-cols-[.84fr_1.16fr] lg:gap-20"><SectionLead eyebrow="05 — UPDATES & TROUBLESHOOTING" title={<>Stay current.<br /><em>Stay moving.</em></>} detail="Release data will surface here once an official feed is available. Until then, use the documentation structure for installation and configuration guidance." /><div className="route-console"><div className="terminal-head"><span>RELEASE STATUS</span><span className="result-tag">NO VERIFIED DATA</span></div><div className="p-6"><p className="text-sm leading-6 text-white/60">No official version, date, release notes, or prior release archive has been supplied. The release page is ready to connect when that source is available.</p><div className="mt-7 flex flex-wrap gap-3"><RouteAction href="/releases" secondary>View releases</RouteAction><RouteAction href="/docs#troubleshooting" secondary>Get help</RouteAction></div></div></div></div></section>
  </ProductFrame>;
}

