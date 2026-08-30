/**
 * NEXUS CLI — Quiet Machine Cinema extension.
 * Preserve the NEXUS AI visual system: deep navy, Instrument Serif, liquid glass, cyan execution signals,
 * and observable terminal traces. Command syntax is displayed only when verified in the provided brief.
 */
import { toast } from "sonner";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CircleHelp,
  Clipboard,
  Command,
  Copy,
  FolderOpen,
  KeyRound,
  Search,
  Settings2,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Brand, PageMeta, SiteFooter, SiteNav } from "@/components/SiteChrome";
import { CopyCommandButton } from "@/components/MarketingPrimitives";

const verifiedInstallCommand = "npm install -g nexus-ai-cli";
const verifiedStartCommand = "nexus";
const verifiedRunCommand = 'nexus run "Analyze this project"';
const cliVideoSource = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const commandReference = [
  { label: "Install NEXUS CLI", detail: "Install NEXUS AI globally from your terminal.", syntax: verifiedInstallCommand, verified: true },
  { label: "Start NEXUS", detail: "Launch NEXUS AI directly from your terminal.", syntax: verifiedStartCommand, verified: true },
  { label: "Run a task", detail: "Submit a task to NEXUS from your terminal.", syntax: verifiedRunCommand, verified: true },
  { label: "Check status", detail: "Command syntax needs the official NEXUS CLI reference.", syntax: "Awaiting verified command", verified: false },
  { label: "Manage agents", detail: "Command syntax needs the official NEXUS CLI reference.", syntax: "Awaiting verified command", verified: false },
  { label: "Manage tasks", detail: "Command syntax needs the official NEXUS CLI reference.", syntax: "Awaiting verified command", verified: false },
  { label: "View logs", detail: "Command syntax needs the official NEXUS CLI reference.", syntax: "Awaiting verified command", verified: false },
  { label: "Configure settings", detail: "Command syntax needs the official NEXUS CLI reference.", syntax: "Awaiting verified command", verified: false },
  { label: "Get help", detail: "Command syntax needs the official NEXUS CLI reference.", syntax: "Awaiting verified command", verified: false },
];

const gettingStarted = [

  ["01", "Install the CLI", "Use npm install -g nexus-ai-cli to install globally on your machine."],
  ["02", "Initialize NEXUS", "Type nexus in your terminal inside the workspace where you intend to delegate work."],
  ["03", "Configure and authenticate", "Follow documented account, model, API, and local configuration steps if required."],
  ["04", "Run your first task", "Use nexus run \"Analyze this project\", inspect the plan, and decide when approvals are needed."],
];

const firstTaskTrace = [
  ["01", "Planning", "Task intent parsed and execution path prepared", "complete"],
  ["02", "Security", "Permissions and high-impact actions surfaced", "complete"],
  ["03", "Execution", "Tools and workspace operations are running", "active"],
  ["04", "Verification", "Result will be checked against the request", "pending"],
  ["05", "Result", "Outcome returns with an execution trace", "pending"],
];

const interactiveRows = [
  ["Current task", "Analyze this project", Activity],
  ["Plan", "3 observable steps", Clipboard],
  ["Tools", "Terminal · files · configured tools", Terminal],
  ["Approvals", "Waiting only where required", ShieldCheck],
  ["Progress", "Planning → execution → verification", Command],
  ["Final result", "Returned with context", Check],
];

function CopyButton({ value, label = "Copy command" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success("Command copied to clipboard.");
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Copy is unavailable in this browser.");
    }
  };
  return (
    <button className="copy-button cursor-pointer" type="button" onClick={handleCopy} aria-label={label}>
      {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

export default function Cli() {
  const [query, setQuery] = useState("");
  const filteredCommands = useMemo(() => commandReference.filter((item) => `${item.label} ${item.detail} ${item.syntax}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const documentationPending = () => { window.location.assign("/docs#cli"); };

  return (
    <PageMeta title="CLI" description="Use NEXUS AI from your terminal with an observable task workflow and verified-command-first reference."><main className="cli-page overflow-x-hidden bg-[#031B29] text-white">
      <section className="cli-hero relative overflow-hidden" id="top">
        <video className="cli-hero-video" autoPlay loop muted playsInline aria-hidden="true"><source src={cliVideoSource} type="video/mp4" /></video>
        <div className="cli-video-wash" aria-hidden="true" />
        <SiteNav />
        <div className="cli-orbit cli-orbit-one" aria-hidden="true" /><div className="cli-orbit cli-orbit-two" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div>
            <div className="hero-identity animate-fade-rise"><Brand /><span className="hero-identity-rule" /><span className="hero-identity-meta">CLI / 03</span></div>
            <p className="eyebrow animate-fade-rise mb-7">NEXUS CLI · LOCAL TERMINAL</p>
            <h1 className="display-title animate-fade-rise text-5xl leading-[.92] tracking-[-.06em] text-white sm:text-7xl lg:text-[6.1rem]">NEXUS AI from<br /><em>your terminal.</em></h1>
            <p className="animate-fade-rise-delay mt-8 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">Bring NEXUS into the shell where your work already happens. Run a task, follow its plan, review approvals, and inspect the outcome without leaving your terminal.</p>
            <div className="animate-fade-rise-delay-2 mt-10 flex flex-col items-start gap-3 sm:flex-row"><a className="solid-button !px-8 !py-4" href="#install">Install CLI <ArrowRight className="h-4 w-4" /></a><a className="glass-button !px-8 !py-4" href="#reference">Read Documentation <ArrowRight className="h-4 w-4" /></a></div>
          </div>
          <div className="cli-live-terminal animate-fade-rise-delay" aria-label="Example NEXUS CLI terminal interaction">
            <div className="terminal-head"><div className="flex gap-1.5"><i /><i /><i /></div><span>nexus / active terminal</span><span className="status-live"><i /> LIVE</span></div>
            <div className="p-5 font-mono text-[.77rem] leading-7 sm:p-7 sm:text-sm">
              <p className="text-white/40"># 1. install globally</p>
              <div className="mt-1 flex items-center justify-between gap-3 text-white/92">
                <div className="flex items-center gap-2">
                  <span className="text-[#8AE8FF]">$</span>
                  <span className="break-all">{verifiedInstallCommand}</span>
                </div>
                <CopyCommandButton command={verifiedInstallCommand} />
              </div>

              <p className="mt-4 text-white/40"># 2. start NEXUS</p>
              <div className="mt-1 flex items-center justify-between gap-3 text-white/92">
                <div className="flex items-center gap-2">
                  <span className="text-[#8AE8FF]">$</span>
                  <span className="break-all">{verifiedStartCommand}</span>
                </div>
                <CopyCommandButton command={verifiedStartCommand} />
              </div>

              <p className="mt-4 text-white/40"># 3. run task</p>
              <div className="mt-1 flex items-center justify-between gap-3 text-white/92">
                <div className="flex items-center gap-2">
                  <span className="text-[#8AE8FF]">$</span>
                  <span className="break-all">{verifiedRunCommand}</span>
                </div>
                <CopyButton value={verifiedRunCommand} />
              </div>

              <div className="terminal-trace mt-6">
                <p><span>[01]</span> creating task plan <b>complete</b></p>
                <p><span>[02]</span> checking local permissions <b>complete</b></p>
                <p><span>[03]</span> inspecting project context <b className="active">running</b></p>
                <p><span>[04]</span> verifying result <b>pending</b></p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4"><span className="status-live"><i /> EXECUTION</span><span className="text-xs text-white/42">Trace remains available as the task moves.</span></div>
            </div>
          </div>
        </div>
        <a href="#install" className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[.62rem] tracking-[.2em] text-white/55 transition hover:text-white">SCROLL <ArrowDown className="h-4 w-4" /></a>
      </section>

      <section className="section-shell border-t border-white/10" id="install">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">01 — NEXUS CLI INSTALLATION</p>
            <h2 className="display-title text-4xl leading-[.97] tracking-[-.055em] sm:text-5xl md:text-6xl">NEXUS CLI<br /><em>From your terminal.</em></h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/58">Install NEXUS AI directly from your terminal. Once installed, start the local AI agent experience with a single command.</p>
          </div>
          <div className="install-manifest rounded-2xl overflow-hidden border border-white/14">
            <div className="p-6 border-b border-white/10 bg-black/40">
              <p className="eyebrow mb-2">INSTALLATION COMMAND</p>
              <p className="text-xs text-white/60 mb-3">Install NEXUS AI directly from your terminal.</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/14 bg-[#010b12] p-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-[#8AE8FF] font-bold">$</span>
                  <code className="text-white font-semibold break-all">{verifiedInstallCommand}</code>
                </div>
                <CopyCommandButton command={verifiedInstallCommand} />
              </div>
            </div>
            <div className="p-6 bg-black/20">
              <p className="eyebrow mb-2">STARTUP COMMAND</p>
              <p className="text-xs text-white/60 mb-3">Launch NEXUS AI directly from your terminal.</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#010b12] p-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-[#8AE8FF] font-bold">$</span>
                  <code className="text-white font-semibold">{verifiedStartCommand}</code>
                </div>
                <CopyCommandButton command={verifiedStartCommand} />
              </div>
            </div>
            <div className="manifest-foot">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#8AE8FF]" />
              <p>Verified npm package <code className="text-white">nexus-ai-cli</code>. Compatible with Node.js 18+ environments.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section-shell border-t border-white/10" id="getting-started"><div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20"><div className="soft-panel order-2 overflow-hidden px-5 py-2 sm:px-7 sm:py-3 lg:order-1">{gettingStarted.map(([number, label, detail], index) => <div className="install-row" key={label}><span className={`step-pip ${index === gettingStarted.length - 1 ? "complete" : ""}`} /><span className="workflow-index">{number}</span><div><h3>{label}</h3><p>{detail}</p></div><ArrowRight className="ml-auto h-4 w-4 text-white/25" /></div>)}</div><div className="order-1 lg:order-2"><p className="eyebrow mb-5">02 — GETTING STARTED</p><h2 className="display-title text-4xl leading-[.97] tracking-[-.055em] sm:text-5xl md:text-6xl">From terminal<br /><em>to first task.</em></h2><p className="mt-6 max-w-xl text-base leading-7 text-white/58">Set the environment deliberately, then let NEXUS carry the task through visible planning, execution, and verification.</p></div></div></section>

      <section className="section-shell border-t border-white/10" id="reference"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div><p className="eyebrow mb-5">03 — COMMAND REFERENCE</p><h2 className="display-title text-4xl leading-[.97] tracking-[-.055em] sm:text-5xl md:text-6xl">Find the<br /><em>right signal.</em></h2><p className="mt-6 max-w-xl text-base leading-7 text-white/58">Search the command reference. Commands marked verified were provided in the project brief; every other entry remains intentionally inactive until official syntax is available.</p></div><div><label className="command-search"><Search className="h-4 w-4" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search commands" aria-label="Search command reference" /><span>{filteredCommands.length} records</span></label><div className="command-list">{filteredCommands.map((command, index) => <article className="command-row" key={command.label}><span className="workflow-index">{String(index + 1).padStart(2, "0")}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-3"><h3>{command.label}</h3><span className={command.verified ? "status-live" : "command-pending"}>{command.verified ? <><i /> VERIFIED</> : "SOURCE REQUIRED"}</span></div><p>{command.detail}</p><code>{command.syntax}</code></div>{command.verified ? <CopyButton value={command.syntax} label={`Copy ${command.label} command`} /> : <button className="reference-link" type="button" onClick={documentationPending}>Docs <ArrowRight className="h-3.5 w-3.5" /></button>}</article>)}</div></div></div></section>

      <section className="section-shell cli-trace-beat border-t border-white/10" id="tasks"><div className="grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-20"><div><p className="eyebrow mb-5">04 — RUN REAL TASKS</p><h2 className="display-title text-5xl leading-[.92] tracking-[-.06em] sm:text-6xl md:text-7xl">Ask. Inspect.<br /><em>Let it move.</em></h2><p className="mt-6 max-w-xl text-base leading-7 text-white/58">A task in the CLI is a living trace — it begins with an instruction, makes its work visible, and returns with context.</p><div className="verified-command mt-9"><span className="text-[#8AE8FF]">$</span><code>{verifiedRunCommand}</code><CopyButton value={verifiedRunCommand} /></div></div><div className="trace-panel">{firstTaskTrace.map(([number, label, detail, state]) => <div className="trace-row" key={label}><span className={`step-pip ${state === "complete" ? "complete" : ""} ${state === "active" ? "trace-active" : ""}`} /><span className="workflow-index">{number}</span><div><h3>{label}</h3><p>{detail}</p></div><span className={`trace-state ${state}`}>{state}</span></div>)}</div></div></section>

      <section className="section-shell border-t border-white/10" id="interactive"><div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20"><div className="interactive-console order-2 lg:order-1"><div className="terminal-head"><span>LIVE EXECUTION VIEW</span><span className="status-live"><i /> OBSERVABLE</span></div>{interactiveRows.map(([label, value, Icon], index) => { const RowIcon = Icon as typeof Activity; return <div className="interactive-row" key={label as string}><span className="workflow-index">{String(index + 1).padStart(2, "0")}</span><RowIcon className="h-4 w-4 text-[#8AE8FF]" /><span>{label as string}</span><span>{value as string}</span></div>; })}</div><div className="order-1 lg:order-2"><p className="eyebrow mb-5">05 — INTERACTIVE EXECUTION</p><h2 className="display-title text-4xl leading-[.97] tracking-[-.055em] sm:text-5xl md:text-6xl">Every state<br /><em>stays legible.</em></h2><p className="mt-6 max-w-xl text-base leading-7 text-white/58">NEXUS surfaces the current task, plan, tools, approvals, progress, and final result in the place where you started — your terminal workflow.</p></div></div></section>

      <section className="section-shell border-t border-white/10" id="security"><div className="grid gap-12 lg:grid-cols-[.76fr_1.24fr] lg:gap-20"><div><p className="eyebrow mb-5">06 — APPROVALS & SECURITY</p><h2 className="display-title text-4xl leading-[.97] tracking-[-.055em] sm:text-5xl md:text-6xl">Pause when<br /><em>the work matters.</em></h2><p className="mt-6 max-w-xl text-base leading-7 text-white/58">When a task requires an approval, NEXUS should stop in the CLI, show the requested action, and wait for your decision before continuing.</p></div><div className="approval-window"><div className="terminal-head"><span>APPROVAL REQUEST</span><span className="status-live"><i /> WAITING</span></div><div className="p-6 sm:p-8"><p className="font-mono text-sm leading-7 text-white/82">Action requires your approval before execution can continue.</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="approval-detail"><span>REQUEST</span><p>Action context is displayed here.</p></div><div className="approval-detail"><span>CHOICE</span><p>Approve, reject, or review the plan.</p></div></div><div className="mt-7 flex flex-wrap gap-3"><button type="button" className="glass-button !px-5 !py-2.5 !text-xs" onClick={() => toast("Approval examples are demonstrative until official CLI interaction details are provided.")}>Review approval <ArrowRight className="h-3.5 w-3.5" /></button><span className="label-chip">HUMAN GATE</span></div></div></div></div></section>

      <section className="section-shell border-t border-white/10" id="configuration"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div><p className="eyebrow mb-5">07 — CLI CONFIGURATION</p><h2 className="display-title text-4xl leading-[.97] tracking-[-.055em] sm:text-5xl md:text-6xl">Control the<br /><em>context.</em></h2><p className="mt-6 max-w-xl text-base leading-7 text-white/58">The configuration layer defines how the CLI meets your working environment — from workspace boundaries to model and API settings.</p></div><div className="config-grid">{[[Settings2, "Configuration", "Use documented configuration controls for local CLI behavior."], [KeyRound, "Environment variables", "Provide only the variables the official CLI documents for your release."], [Command, "API / model settings", "Connect model or API settings through the documented configuration path."], [FolderOpen, "Workspace & permissions", "Choose the workspace and access level appropriate to the task."]].map(([Icon, label, detail], index) => { const CardIcon = Icon as typeof Settings2; return <article className="config-card" key={label as string}><span className="workflow-index">0{index + 1}</span><CardIcon className="h-4 w-4 text-[#8AE8FF]" /><h3>{label as string}</h3><p>{detail as string}</p></article>; })}</div></div></section>

      <section className="section-shell border-t border-white/10" id="troubleshooting"><div className="grid gap-12 lg:grid-cols-[.84fr_1.16fr] lg:gap-20"><div><p className="eyebrow mb-5">08 — TROUBLESHOOTING</p><h2 className="display-title text-4xl leading-[.97] tracking-[-.055em] sm:text-5xl md:text-6xl">Keep the terminal<br /><em>moving.</em></h2><p className="mt-6 max-w-xl text-base leading-7 text-white/58">Start with the release and platform documentation when installation, execution, permissions, or configuration behave unexpectedly.</p></div><div className="trouble-console">{[["CLI installation", "Confirm the official install instructions match your operating system and package manager."], ["Execution", "Check the active workspace, documented command syntax, and task context."], ["Permissions", "Review requested access and the workspace boundary before retrying."], ["Configuration", "Compare environment variables and settings against your release documentation."]].map(([label, detail], index) => <div className="trouble-row" key={label}><span className="task-number">0{index + 1}</span><CircleHelp className="h-4 w-4 shrink-0 text-[#8AE8FF]" /><div><h3>{label}</h3><p>{detail}</p></div><button className="reference-link" type="button" onClick={documentationPending}>Docs <ArrowRight className="h-3.5 w-3.5" /></button></div>)}</div></div></section>

      <section className="border-t border-white/10 px-5 py-24 sm:px-8 sm:py-32"><div className="final-execution mx-auto max-w-7xl border-y border-white/16 py-14 text-center sm:py-20"><div className="mx-auto mb-8 w-max"><Brand /></div><p className="eyebrow mb-6">CLI STATUS — READY FOR YOUR WORKFLOW</p><h2 className="display-title text-5xl leading-[.92] tracking-[-.06em] text-white sm:text-7xl md:text-8xl">Take NEXUS AI<br /><em>to the terminal.</em></h2><p className="mx-auto mt-7 max-w-md text-base leading-7 text-white/58">Install the CLI from the verified release path, then give NEXUS AI the task.</p><div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"><a className="solid-button !px-8 !py-4" href="#install">Install NEXUS CLI <ArrowRight className="h-4 w-4" /></a><a className="glass-button !px-8 !py-4" href="/docs#cli">Read CLI Documentation <BookOpen className="h-4 w-4" /></a></div><div className="completion-trace" aria-hidden="true"><span /><i /><i /><i /><span /></div></div></section>
      <SiteFooter />
    </main></PageMeta>
  );
}
