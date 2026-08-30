import { DocsLayout } from "@/components/DocsLayout";
import { Activity, AlertTriangle, Command, Eye, Layers } from "lucide-react";


export default function Agents() {
  return (
    <DocsLayout
      title="Agents Architecture"
      description="Detailed documentation of NEXUS AI agent task lifecycles, states, planning loops, tool execution, observation feedback, and verification."
      currentId="agents"
    >
      {/* HEADER SECTION */}
      <div className="mb-10 pb-8 border-b border-white/10">
        <p className="eyebrow mb-2">DOCUMENTATION · 05</p>
        <h1 className="display-title text-4xl sm:text-5xl font-normal text-white mb-4">
          Agent <em>Architecture</em>
        </h1>
        <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl">
          In NEXUS AI, an agent is an autonomous local worker equipped with LLM reasoning, file/terminal tool access, workspace state tracking, and deterministic self-verification loops.
        </p>
      </div>

      {/* AGENT TASK LIFECYCLE */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Agent Task Lifecycle</h2>
        <p className="text-[#8AE8FF] font-mono text-sm mb-4">
          Task → Plan → Authorization → Approval → Execution → Observation → Verification → Completion
        </p>
        <p className="text-white/70 leading-7 mb-6">
          Every delegated objective moves through an explicit 8-stage lifecycle:
        </p>

        <div className="soft-panel rounded-2xl p-6 border border-white/14 space-y-4 font-mono text-xs">
          {[
            ["1. Task", "User goal enters the workstation session."],
            ["2. Plan", "Planner Agent parses goal and generates step-by-step tool plan."],
            ["3. Authorization", "Security Monitor checks path boundaries and risk levels."],
            ["4. Approval", "Human approval gate pauses execution if file/system edits are required."],
            ["5. Execution", "Executor Agent invokes staged tools in workspace sandbox."],
            ["6. Observation", "Tool stdout, exit code, and file diffs are logged as feedback."],
            ["7. Verification", "Verifier Agent checks output against original goal criteria."],
            ["8. Completion", "Task finishes with observable trace log."],
          ].map(([stage, desc]) => (
            <div key={stage} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/8 pb-3 last:border-0 last:pb-0">
              <span className="text-[#8AE8FF] font-semibold text-sm">{stage}</span>
              <span className="text-white/60 text-[0.75rem]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONFIRMED TASK STATES */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Confirmed Task States</h2>
        <p className="text-white/70 leading-7 mb-4">
          NEXUS tasks transition through these confirmed internal state machine values:
        </p>

        <div className="soft-panel rounded-2xl overflow-hidden border border-white/14">
          <div className="grid grid-cols-[10rem_1fr] border-b border-white/10 bg-black/40 p-3.5 text-xs font-mono text-[#8AE8FF]">
            <span>STATE</span>
            <span>DESCRIPTION</span>
          </div>
          {[
            ["created", "Task initialized with user goal input."],
            ["planning", "AI model actively synthesizing step-by-step execution plan."],
            ["executing", "Staged tool calls actively running within local workspace."],
            ["observing", "Capturing tool stdout, stderr, and filesystem diffs."],
            ["verifying", "Evaluating tool outputs against target goal criteria."],
            ["completed", "Task finished successfully with verified results."],
            ["failed", "Task step failed or verification criteria remained unmet."],
            ["awaiting approval", "Execution paused at human security approval gate."],
            ["cancelled", "Task execution aborted by user intervention."],
          ].map(([state, desc]) => (
            <div key={state} className="grid grid-cols-[10rem_1fr] border-b border-white/8 p-3.5 text-xs font-mono text-white/80 items-center">
              <span className="text-emerald-400 font-bold">{state}</span>
              <span className="text-white/60">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STAGE EXPLANATIONS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Planning, Execution &amp; Verification Details</h2>
        
        <div className="space-y-6 text-sm leading-7 text-white/75">
          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <Command className="h-4 w-4 text-[#8AE8FF]" /> Planning Stage
            </h3>
            <p className="text-xs text-white/65">
              The Planner Agent inspects your workspace, analyzes existing file trees, and deconstructs your goal into discrete tool operations (e.g. 1. Create HTML, 2. Add CSS, 3. Add JavaScript).
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <Activity className="h-4 w-4 text-[#8AE8FF]" /> Execution &amp; Observation Stage
            </h3>
            <p className="text-xs text-white/65">
              The Executor Agent runs approved tools inside the workspace sandbox. Output from each tool call (stdout, stderr, exit code) is recorded as an <em>Observation</em> and fed back into the reasoning context for subsequent steps.
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <Eye className="h-4 w-4 text-[#8AE8FF]" /> Verification Stage
            </h3>
            <p className="text-xs text-white/65">
              NEXUS does <strong>not</strong> mark a task complete simply because a command executed without throwing an exception. The Verifier Agent parses generated files, verifies HTML/CSS syntax, checks required elements, and confirms that the result matches the original goal.
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-300" /> Failure Handling &amp; Retries
            </h3>
            <p className="text-xs text-white/65">
              If a tool call returns a syntax error or failed exit code, NEXUS feeds the error traceback into the Reasoning Agent to adjust the plan and retry. Non-retryable security violations immediately transition the task state to <code className="text-amber-300">failed</code>.
            </p>
          </div>
        </div>
      </section>

      {/* REAL-WORLD EXAMPLE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Layers className="h-5 w-5 text-[#8AE8FF]" /> Real-World Agent Task Walkthrough
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          Example: Delegating a full landing page build (HTML, CSS, JavaScript):
        </p>

        <div className="soft-panel rounded-2xl p-6 border border-white/14 space-y-4 font-mono text-xs">
          <p className="text-white font-bold">PROMPT: &quot;Build a landing page using HTML, CSS and JavaScript&quot;</p>

          <div className="p-3 bg-black/40 rounded-lg border border-white/10 space-y-1">
            <p className="text-[#8AE8FF]">[STATE: planning]</p>
            <p className="text-white/70">Planner synthesizes 3 file generation steps: index.html, styles.css, script.js.</p>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-amber-500/30 text-amber-300 space-y-1">
            <p className="text-amber-400 font-semibold">[STATE: awaiting approval]</p>
            <p>Approval Gate: Create files in workspace root. (User inputs: Y)</p>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-white/10 space-y-1">
            <p className="text-[#8AE8FF]">[STATE: executing &amp; observing]</p>
            <p className="text-white/70">Tool calls execute: WriteFile index.html, WriteFile styles.css, WriteFile script.js.</p>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-white/10 space-y-1">
            <p className="text-[#8AE8FF]">[STATE: verifying]</p>
            <p className="text-white/70">Verifier checks HTML5 tags, CSS flexbox rules, and JS interactive handlers.</p>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-emerald-400 font-semibold space-y-1">
            <p>[STATE: completed]</p>
            <p>Landing page successfully created. Run /preview to test locally.</p>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
