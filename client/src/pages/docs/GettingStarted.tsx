import { DocsLayout } from "@/components/DocsLayout";
import { CopyCommandButton } from "@/components/MarketingPrimitives";
import { Activity, AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";


export default function GettingStarted() {
  return (
    <DocsLayout
      title="Getting Started"
      description="Learn the fundamentals of NEXUS AI, how autonomous local tasks execute, and run your first multi-step workflow."
      currentId="getting-started"
    >
      {/* HEADER SECTION */}
      <div className="mb-10 pb-8 border-b border-white/10">
        <p className="eyebrow mb-2">DOCUMENTATION · 01</p>
        <h1 className="display-title text-4xl sm:text-5xl font-normal text-white mb-4">
          Getting Started with <em>NEXUS AI</em>
        </h1>
        <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl">
          NEXUS AI is a local-first autonomous AI workstation and CLI agent. It transforms high-level intent into observable, multi-step execution directly on your machine.
        </p>
      </div>

      {/* WHAT IS NEXUS AI? */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <span>What is NEXUS AI?</span>
        </h2>
        <p className="text-[#8AE8FF] font-mono text-sm mb-4">
          THINK → PLAN → APPROVE → EXECUTE → ACHIEVE
        </p>
        <p className="text-white/70 leading-7 mb-4">
          Unlike passive chat interfaces that only generate conversational responses or single code snippets, NEXUS AI is an <strong>autonomous task execution system</strong>. You provide a high-level outcome, and NEXUS AI operates locally within your project workspace to complete the goal.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 my-6">
          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
              <span className="text-[#8AE8FF]">●</span> Traditional Chat AI
            </h3>
            <p className="text-xs text-white/55 leading-5">
              Generates static code snippets. Requires you to manually copy, paste, create files, debug errors, and run terminal commands yourself.
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-[#8AE8FF]/30 bg-[#8AE8FF]/5">
            <h3 className="text-sm font-medium text-[#8AE8FF] mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#8AE8FF]" /> NEXUS AI Agent Workstation
            </h3>
            <p className="text-xs text-white/75 leading-5">
              Autonomous execution loop. Parses goals, builds execution plans, invokes file/terminal tools, requests human approvals, and verifies results locally.
            </p>
          </div>
        </div>
      </section>

      {/* HOW NEXUS WORKS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">How NEXUS Works (Task Lifecycle)</h2>
        <p className="text-white/70 leading-7 mb-6">
          Every objective delegated to NEXUS AI moves through an 11-step deterministic lifecycle to ensure full transparency, safety, and verifiable results:
        </p>

        <div className="soft-panel rounded-2xl p-6 border border-white/14 space-y-4 font-mono text-xs">
          {[
            ["01", "Goal Submission", "User inputs high-level goal via CLI prompt."],
            ["02", "Task Creation", "NEXUS initializes an isolated task instance in the workspace."],
            ["03", "Plan Synthesis", "The AI model analyzes local workspace files and synthesizes a step-by-step plan."],
            ["04", "Plan Validation", "Plan structure, tool availability, and file paths are pre-checked."],
            ["05", "Security Gate", "Permissions and risk boundaries are evaluated before execution."],
            ["06", "Tool Selection", "Appropriate system tools (File Write, Terminal Command, Search) are staged."],
            ["07", "Human Approval", "If a step alters files or executes commands, human approval is requested when required."],
            ["08", "Tool Execution", "Staged tools execute within the scoped local directory."],
            ["09", "Observation Log", "Tool stdout, stderr, and file diffs are captured as execution feedback."],
            ["10", "Result Verification", "NEXUS verifies the outcome against the original goal criteria."],
            ["11", "Task Completion", "The final trace returns with full task completion or failure logs."],
          ].map(([num, stage, desc]) => (
            <div key={num} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/8 pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <span className="text-[#8AE8FF] font-bold">{num}</span>
                <span className="text-white font-medium">{stage}</span>
              </div>
              <span className="text-white/50 text-[0.75rem]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* YOUR FIRST TASK */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Your First Task</h2>
        <p className="text-white/70 leading-7 mb-4">
          To run your first task with NEXUS AI, launch the CLI in your working directory and submit an outcome:
        </p>

        <div className="soft-panel rounded-xl p-5 border border-white/14 bg-[#010b12] font-mono text-sm my-4">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs text-white/40">TERMINAL INPUT</span>
            <CopyCommandButton command='nexus run "Create a simple HTML calculator in index.html"' />
          </div>
          <p className="text-white">
            <span className="text-[#8AE8FF]">$</span> nexus run &quot;Create a simple HTML calculator in index.html&quot;
          </p>
        </div>

        <p className="text-white/70 leading-7 mt-4">
          When this command is executed, NEXUS AI will:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-white/75 text-sm my-3 pl-2">
          <li>Inspect your active directory to verify existing files.</li>
          <li>Synthesize a plan: <em>Create `index.html` with HTML5 layout, CSS styling, and JavaScript logic</em>.</li>
          <li>Surface an approval prompt if required: <code className="text-[#8AE8FF]">Write file: index.html</code>.</li>
          <li>Write the calculator implementation and verify file creation.</li>
          <li>Return an observable completion trace in your terminal.</li>
        </ol>
      </section>

      {/* UNDERSTANDING THE WORKSPACE */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Understanding the Workspace</h2>
        <p className="text-white/70 leading-7 mb-4">
          NEXUS AI operates strictly within the <strong>configured workspace root directory</strong> (by default, the directory from which you launch `nexus`).
        </p>
        <div className="soft-panel rounded-xl p-5 border border-white/10 text-sm text-white/80 leading-6">
          <p className="mb-2">
            <strong className="text-[#8AE8FF]">Workspace Scope &amp; Safety:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-white/65">
            <li>All generated source code, assets, and config files are written directly into your workspace.</li>
            <li>Tool operations outside the workspace path are restricted by default.</li>
            <li>Inspect the current workspace directory at any time using the <code className="text-[#8AE8FF]">/workspace</code> command.</li>
          </ul>
        </div>
      </section>

      {/* UNDERSTANDING APPROVALS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-[#8AE8FF]" /> Understanding Approvals
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          NEXUS AI incorporates a <strong>Human-in-the-Loop Security Gate</strong>. When a task requires potentially consequential actions (such as writing files, executing shell commands, or network calls), NEXUS pauses execution and displays an approval request.
        </p>

        <div className="soft-panel rounded-xl p-5 border border-amber-500/30 bg-amber-500/5 my-4">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-2">
            <AlertTriangle className="h-4 w-4" /> HUMAN GATE APPROVAL REQUEST
          </div>
          <p className="font-mono text-xs text-white/80 mb-3">
            [Approval Required] Action: Write file <code className="text-[#8AE8FF]">src/calculator.js</code> (482 bytes)
          </p>
          <p className="text-xs text-white/60">
            You can select <strong>Approve</strong> to let NEXUS proceed, <strong>Reject</strong> to abort the step, or inspect the proposed plan diff before deciding.
          </p>
        </div>
      </section>

      {/* UNDERSTANDING MODELS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Understanding Models</h2>
        <p className="text-white/70 leading-7 mb-4">
          NEXUS AI connects directly to your local <strong>Ollama engine</strong> or configured model provider. This ensures code generation, planning, and task synthesis stay private and local on your machine.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-white/75">
          <li><strong>Recommended Models:</strong> <code className="text-[#8AE8FF]">llama3.2</code>, <code className="text-[#8AE8FF]">qwen2.5-coder</code>, <code className="text-[#8AE8FF]">mistral</code>.</li>
          <li><strong>Model Selection:</strong> Switch active models seamlessly using <code className="text-[#8AE8FF]">/model &lt;model-name&gt;</code>.</li>
          <li><strong>Local Fallback:</strong> If no remote model API is supplied, NEXUS automatically defaults to local Ollama inference.</li>
        </ul>
      </section>

      {/* USEFUL FIRST COMMANDS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Useful First Commands</h2>
        <p className="text-white/70 leading-7 mb-4">
          Here is the complete reference of built-in CLI slash commands available during interactive sessions:
        </p>

        <div className="soft-panel rounded-2xl overflow-hidden border border-white/14">
          <div className="grid grid-cols-[8rem_1fr] sm:grid-cols-[10rem_1fr] border-b border-white/10 bg-black/40 p-3.5 text-xs font-mono text-[#8AE8FF]">
            <span>COMMAND</span>
            <span>DESCRIPTION</span>
          </div>
          {[
            ["/help", "Display available commands and quick reference guide."],
            ["/models", "List installed and available local Ollama / API models."],
            ["/model", "Switch active LLM model (e.g. /model qwen2.5-coder)."],
            ["/workspace", "Display or change the active working directory."],
            ["/tasks", "List active, pending, and completed task execution traces."],
            ["/approvals", "View pending human approval gates and security decisions."],
            ["/agents", "Inspect configured agent roles, system prompts, and capabilities."],
            ["/status", "Check system health, memory, active workspace, and model status."],
            ["/clear", "Clear terminal scrollback buffer and active trace view."],
            ["/prompt", "View or update the current agent task prompt."],
            ["/preview", "Open a web preview server for generated web artifacts."],
            ["/exit", "Safely exit the NEXUS CLI session."],
          ].map(([cmd, desc]) => (
            <div key={cmd} className="grid grid-cols-[8rem_1fr] sm:grid-cols-[10rem_1fr] border-b border-white/8 p-3.5 text-xs font-mono text-white/80 hover:bg-white/5 transition">
              <span className="text-[#8AE8FF] font-semibold">{cmd}</span>
              <span className="text-white/60">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FIRST WORKFLOW */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-[#8AE8FF]" /> First Workflow Walkthrough
        </h2>
        <p className="text-white/70 leading-7 mb-6">
          Here is how a complete end-to-end task workflow unfolds inside NEXUS AI:
        </p>

        <div className="soft-panel rounded-2xl p-6 border border-white/14 space-y-6">
          <div className="space-y-2">
            <span className="eyebrow text-[#8AE8FF]">STEP 1 · PROMPT INPUT</span>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white">
              <span className="text-[#8AE8FF]">$</span> nexus run &quot;Build a responsive landing page header component&quot;
            </div>
          </div>

          <div className="space-y-2">
            <span className="eyebrow text-[#8AE8FF]">STEP 2 · PLANNING &amp; ANALYSIS</span>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/70 space-y-1">
              <p>[PLAN] Analyzing project structure in active workspace...</p>
              <p>[PLAN] Step 1: Create Header.tsx in components/</p>
              <p>[PLAN] Step 2: Add navigation items, responsive toggle, and brand logo.</p>
            </div>
          </div>

          <div className="space-y-2">
            <span className="eyebrow text-[#8AE8FF]">STEP 3 · APPROVAL &amp; EXECUTION</span>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/70 space-y-1">
              <p className="text-emerald-400">[APPROVED] Creating Header.tsx...</p>
              <p>[EXEC] Tool: WriteFile --&gt; components/Header.tsx (1.2 KB)</p>
            </div>
          </div>

          <div className="space-y-2">
            <span className="eyebrow text-[#8AE8FF]">STEP 4 · VERIFICATION &amp; COMPLETED TASK</span>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/70 space-y-1">
              <p>[VERIFY] Header.tsx created cleanly. Syntax verified.</p>
              <p className="text-[#8AE8FF] font-semibold">[COMPLETED] Task finished in 2.4s. Trace saved to task log.</p>
            </div>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
