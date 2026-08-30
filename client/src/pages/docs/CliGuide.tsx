import { DocsLayout } from "@/components/DocsLayout";
import { Activity, Command, Globe, ShieldCheck, Terminal } from "lucide-react";


export default function CliGuide() {
  return (
    <DocsLayout
      title="CLI Reference"
      description="Comprehensive NEXUS CLI documentation, interactive slash commands, multi-line prompts, approval gates, and terminal workflows."
      currentId="cli"
    >
      {/* HEADER SECTION */}
      <div className="mb-10 pb-8 border-b border-white/10">
        <p className="eyebrow mb-2">DOCUMENTATION · 03</p>
        <h1 className="display-title text-4xl sm:text-5xl font-normal text-white mb-4">
          NEXUS <em>CLI Reference</em>
        </h1>
        <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl">
          The NEXUS CLI is an interactive terminal workstation and one-shot task runner for autonomous AI agent execution, model control, and workspace inspection.
        </p>
      </div>

      {/* OVERVIEW */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Command Interface Overview</h2>
        <p className="text-white/70 leading-7 mb-4">
          You can interact with NEXUS AI in two primary operational modes:
        </p>

        <div className="grid gap-4 sm:grid-cols-2 my-4">
          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-semibold text-[#8AE8FF] mb-2 flex items-center gap-2">
              <Terminal className="h-4 w-4" /> 1. Interactive Workstation Mode
            </h3>
            <p className="text-xs text-white/65 leading-5 mb-3">
              Type <code className="text-white font-mono">nexus</code> in your project directory to open an interactive session with slash commands, multi-line prompt support, and real-time execution views.
            </p>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/80">
              <span className="text-[#8AE8FF]">$</span> nexus
            </div>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-semibold text-[#8AE8FF] mb-2 flex items-center gap-2">
              <Command className="h-4 w-4" /> 2. One-Shot Task Mode
            </h3>
            <p className="text-xs text-white/65 leading-5 mb-3">
              Run a single task directly from your terminal shell without entering interactive mode.
            </p>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/80">
              <span className="text-[#8AE8FF]">$</span> nexus run &quot;Build a calculator app&quot;
            </div>
          </div>
        </div>
      </section>

      {/* SLASH COMMAND INTERFACE */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Interactive Slash Commands</h2>
        <p className="text-white/70 leading-7 mb-6">
          NEXUS CLI provides a complete set of interactive slash commands for managing tasks, controlling model routing, inspecting state, and viewing security gates:
        </p>

        <div className="space-y-6">
          {[
            {
              cmd: "/help",
              syntax: "/help",
              desc: "Displays the available slash commands, keyboard shortcuts, and quick reference guide.",
              example: "NEXUS> /help",
              output: "[HELP] Available Commands: /models, /model, /workspace, /tasks, /approvals, /status, /clear, /prompt, /send, /preview, /exit",
            },
            {
              cmd: "/models",
              syntax: "/models",
              desc: "Scans your local Ollama instance and prints all discovered LLM models with index numbers and sizes.",
              example: "NEXUS> /models",
              output: "[MODELS] Discovered 3 Local Models:\n  [1] qwen2.5-coder:latest (4.7 GB)\n  [2] llama3.2:latest (2.0 GB)\n  [3] mistral:latest (4.1 GB)",
            },
            {
              cmd: "/model",
              syntax: "/model",
              desc: "Displays current global model override settings and active role-specific bindings (Planner, Coder, Reasoning, Chat).",
              example: "NEXUS> /model",
              output: "[MODEL STATUS]\n  Global Model: None (Auto-routing enabled)\n  Planner: qwen2.5-coder\n  Coder: qwen2.5-coder\n  Reasoning: llama3.2\n  Chat: qwen2.5-coder",
            },
            {
              cmd: "/model <index|id>",
              syntax: "/model 1  OR  /model qwen2.5-coder",
              desc: "Sets a global model override for all task planning, coding, and reasoning steps.",
              example: "NEXUS> /model 1",
              output: "[MODEL OVERRIDE] Global model set to: qwen2.5-coder:latest",
            },
            {
              cmd: "/model <role> <index|id>",
              syntax: "/model coder 1  OR  /model planner llama3.2",
              desc: "Binds a specific local model to a designated agent role (planner, coder, reasoning, chat).",
              example: "NEXUS> /model coder 1",
              output: "[ROLE BINDING] Role 'coder' bound to model: qwen2.5-coder:latest",
            },
            {
              cmd: "/model reset",
              syntax: "/model reset",
              desc: "Clears all custom global and role-specific overrides, restoring automatic model routing.",
              example: "NEXUS> /model reset",
              output: "[MODEL RESET] Cleared all model overrides. Automatic routing restored.",
            },
            {
              cmd: "/workspace",
              syntax: "/workspace",
              desc: "Prints the active workspace root directory path, total file counts, and folder permissions.",
              example: "NEXUS> /workspace",
              output: "[WORKSPACE] Path: C:\\Projects\\nexus-app | Files: 24 | Scope: Isolated Root",
            },
            {
              cmd: "/tasks",
              syntax: "/tasks",
              desc: "Lists the history of recent task execution traces, timestamps, and completion statuses.",
              example: "NEXUS> /tasks",
              output: "[TASK HISTORY]\n  #task-101 [COMPLETED] Create calculator in index.html (2.4s)\n  #task-102 [COMPLETED] Add CSS styles (1.1s)",
            },
            {
              cmd: "/approvals",
              syntax: "/approvals",
              desc: "Displays pending human-in-the-loop security approval requests awaiting your confirmation.",
              example: "NEXUS> /approvals",
              output: "[APPROVALS] 1 Pending Gate: Write file 'src/App.tsx' (Requires Y/N)",
            },
            {
              cmd: "/agents",
              syntax: "/agents",
              desc: "Inspects configured agent roles (Planner, Executor, Security Monitor, Verifier) and active system prompts.",
              example: "NEXUS> /agents",
              output: "[AGENTS] Active: PlannerAgent, ExecutorAgent, SecurityMonitor, VerifierAgent",
            },
            {
              cmd: "/status",
              syntax: "/status",
              desc: "Checks system health, local Ollama API status, memory usage, and active workspace.",
              example: "NEXUS> /status",
              output: "[STATUS] Node v20.10.0 | Ollama: Connected (127.0.0.1:11434) | Workspace: OK",
            },
            {
              cmd: "/clear",
              syntax: "/clear",
              desc: "Clears the active terminal scrollback screen.",
              example: "NEXUS> /clear",
              output: "(Terminal screen cleared)",
            },
            {
              cmd: "/prompt",
              syntax: "/prompt",
              desc: "Enters multi-line prompt compose mode, allowing you to enter long structured prompts without executing each line.",
              example: "NEXUS> /prompt",
              output: "[PROMPT COMPOSE MODE] Enter multi-line prompt. Type /send to execute.",
            },
            {
              cmd: "/send",
              syntax: "/send",
              desc: "Submits all composed multi-line prompt text to the agent execution engine.",
              example: "NEXUS (Compose Mode)> /send",
              output: "[SUBMITTED] Multiline prompt dispatched to Planner Agent.",
            },
            {
              cmd: "/preview",
              syntax: "/preview",
              desc: "Spins up a local HTTP preview server for generated web artifacts (HTML/CSS/JS) and prints the local preview URL.",
              example: "NEXUS> /preview",
              output: "[PREVIEW SERVER] Web preview active at http://localhost:3000/",
            },
            {
              cmd: "/exit",
              syntax: "/exit",
              desc: "Safely terminates the NEXUS CLI session and restores standard shell prompt.",
              example: "NEXUS> /exit",
              output: "[SESSION TERMINATED] Goodbye.",
            },
          ].map((item) => (
            <div key={item.cmd} className="soft-panel rounded-xl p-5 border border-white/10 font-mono text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
                <span className="text-[#8AE8FF] text-sm font-bold">{item.cmd}</span>
                <span className="text-white/40 text-[0.75rem]">Syntax: <code className="text-white">{item.syntax}</code></span>
              </div>
              <p className="text-white/70 leading-5 mb-3 font-sans text-xs">{item.desc}</p>
              <div className="bg-[#010b12] p-3 rounded-lg border border-white/10 space-y-1 text-white/80">
                <p className="text-white/40"># Example:</p>
                <p className="text-white">{item.example}</p>
                <p className="text-[#8AE8FF] whitespace-pre-line pt-1 border-t border-white/8">{item.output}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NATURAL TASK INPUT */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Natural Task Input</h2>
        <p className="text-white/70 leading-7 mb-4">
          Submitting a task in NEXUS CLI is as simple as typing your natural-language objective at the prompt:
        </p>

        <div className="soft-panel rounded-xl p-5 border border-white/14 bg-[#010b12] font-mono text-sm my-4">
          <p className="text-white">
            <span className="text-[#8AE8FF]">NEXUS&gt;</span> Build a calculator website with responsive CSS styling
          </p>
        </div>
      </section>

      {/* MULTI-LINE PROMPTS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Multi-Line Prompts (`/prompt` &amp; `/send`)</h2>
        <p className="text-white/70 leading-7 mb-4">
          When authoring complex requirements with multiple steps, enter <code className="text-[#8AE8FF]">/prompt</code> compose mode. This prevents pressing Enter from immediately triggering execution before your instructions are complete:
        </p>

        <div className="soft-panel rounded-xl p-5 border border-white/14 bg-[#010b12] font-mono text-xs text-white/80 space-y-2 my-4">
          <p className="text-[#8AE8FF] font-semibold">NEXUS&gt; /prompt</p>
          <p className="text-white/40">[PROMPT COMPOSE MODE] Enter lines below. Type /send to execute.</p>
          <p className="text-white">Build a landing page.</p>
          <p className="text-white">Create index.html with dark glass styling.</p>
          <p className="text-white">Create style.css with flexbox layout.</p>
          <p className="text-white">Create script.js with interactive tabs.</p>
          <p className="text-white">Verify all generated files.</p>
          <p className="text-[#8AE8FF] font-semibold">NEXUS (Compose Mode)&gt; /send</p>
          <p className="text-emerald-400">[SUBMITTED] 5-line prompt sent to Planner Agent.</p>
        </div>
      </section>

      {/* APPROVAL INTERACTION */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-[#8AE8FF]" /> Approval Interactions (Human Gates)
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          When NEXUS encounters a step that requires human confirmation (such as modifying source files or running terminal commands), execution pauses and prompts you for decision input:
        </p>

        <div className="soft-panel rounded-2xl overflow-hidden border border-white/14 mb-4">
          <div className="grid grid-cols-[8rem_1fr] border-b border-white/10 bg-black/40 p-3.5 text-xs font-mono text-[#8AE8FF]">
            <span>INPUT</span>
            <span>BEHAVIOR</span>
          </div>
          {[
            ["Y / y / yes", "Approves the staged action and allows NEXUS to execute the tool step."],
            ["N / n / no", "Rejects the staged action. NEXUS aborts the tool step and prompts for alternative direction."],
            ["V / v / view", "Opens detailed action context, showing file diffs, target paths, and staged command syntax."],
          ].map(([inp, beh]) => (
            <div key={inp} className="grid grid-cols-[8rem_1fr] border-b border-white/8 p-3.5 text-xs font-mono text-white/80 items-center">
              <span className="text-emerald-400 font-bold">{inp}</span>
              <span className="text-white/60">{beh}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WEB PREVIEW */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Globe className="h-5 w-5 text-[#8AE8FF]" /> Web Preview (`/preview`)
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          After NEXUS creates a web project (HTML, CSS, JS), type <code className="text-[#8AE8FF]">/preview</code> to launch a lightweight local HTTP static web server.
        </p>
        <div className="soft-panel rounded-xl p-5 border border-white/14 bg-[#010b12] font-mono text-xs text-white/80">
          <p className="text-[#8AE8FF]">$ nexus</p>
          <p className="text-white">NEXUS&gt; /preview</p>
          <p className="text-emerald-400 mt-2">[PREVIEW ACTIVE] Serving workspace root at http://localhost:3000/</p>
        </div>
      </section>

      {/* REALISTIC CLI WORKFLOW WALKTHROUGH */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-[#8AE8FF]" /> Complete CLI Workflow Example
        </h2>

        <div className="soft-panel rounded-2xl p-6 border border-white/14 space-y-4 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-[#8AE8FF] font-semibold">NEXUS&gt; Create a calculator in index.html</span>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-white/10 space-y-1 text-white/70">
            <p className="text-white/40"># Stage 1: Planning</p>
            <p>[PLAN] Task intent parsed. Workspace path: C:\Projects\demo</p>
            <p>[PLAN] Proposed step: Write index.html with calculator layout &amp; math logic</p>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-amber-500/30 text-amber-300 space-y-1">
            <p className="text-amber-400 font-semibold"># Stage 2: Approval Gate</p>
            <p>[APPROVAL] Action: Write File --&gt; index.html (650 bytes)</p>
            <p className="text-white font-bold">Approve file modification? (Y/N/V): Y</p>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-white/10 space-y-1 text-white/70">
            <p className="text-white/40"># Stage 3: Execution &amp; Observation</p>
            <p>[EXEC] Tool: WriteFile --&gt; index.html (650 bytes written)</p>
            <p>[OBSERVE] File created successfully. Syntax check passed.</p>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-white/10 space-y-1 text-[#8AE8FF]">
            <p className="font-semibold"># Stage 4: Verification &amp; Completion</p>
            <p>[VERIFY] Created index.html verified against goal criteria.</p>
            <p className="text-emerald-400 font-semibold">[COMPLETED] Task completed in 1.8s. Type /preview to test in browser.</p>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
