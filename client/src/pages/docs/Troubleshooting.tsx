import { DocsLayout } from "@/components/DocsLayout";
import { AlertTriangle, Terminal } from "lucide-react";


export default function Troubleshooting() {
  return (
    <DocsLayout
      title="Troubleshooting"
      description="Comprehensive NEXUS AI troubleshooting guide organized by error category, Ollama connection fixes, plan generation issues, path traversal errors, and systematic debugging workflows."
      currentId="troubleshooting"
    >
      {/* HEADER SECTION */}
      <div className="mb-10 pb-8 border-b border-white/10">
        <p className="eyebrow mb-2">DOCUMENTATION · 09</p>
        <h1 className="display-title text-4xl sm:text-5xl font-normal text-white mb-4">
          NEXUS <em>Troubleshooting</em>
        </h1>
        <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl">
          Practical diagnostic procedures and resolutions for common setup, Ollama connectivity, model timeout, plan synthesis, tool execution, and path security issues.
        </p>
      </div>

      {/* PROBLEMS & SOLUTIONS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-6">Diagnostics &amp; Problem Resolution</h2>

        <div className="space-y-6">
          {/* PROBLEM 1: COMMAND NOT FOUND */}
          <div className="soft-panel rounded-xl p-5 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-semibold text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> &apos;nexus&apos; Command Not Found
            </h3>
            <p className="text-xs text-white/70 leading-5 mb-2">
              <strong>Cause:</strong> Your global npm bin directory is not registered in your operating system&apos;s PATH environment variable.
            </p>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/80 space-y-1">
              <p className="text-white/40"># Verify npm global prefix path</p>
              <p><span className="text-[#8AE8FF]">$</span> npm config get prefix</p>
              <p className="text-white/40 pt-2 border-t border-white/8">Solution: Add the output folder path (e.g. C:\Users\&lt;User&gt;\AppData\Roaming\npm) to your system PATH variable.</p>
            </div>
          </div>

          {/* PROBLEM 2: OLLAMA UNAVAILABLE */}
          <div className="soft-panel rounded-xl p-5 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-semibold text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Ollama Unavailable (`ECONNREFUSED 127.0.0.1:11434`)
            </h3>
            <p className="text-xs text-white/70 leading-5 mb-2">
              <strong>Cause:</strong> The local Ollama server process is not running or port 11434 is blocked.
            </p>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/80 space-y-1">
              <p className="text-white/40"># Start Ollama service in background</p>
              <p><span className="text-[#8AE8FF]">$</span> ollama serve</p>
            </div>
          </div>

          {/* PROBLEM 3: NO MODELS AVAILABLE */}
          <div className="soft-panel rounded-xl p-5 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-semibold text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> No Local Models Available
            </h3>
            <p className="text-xs text-white/70 leading-5 mb-2">
              <strong>Cause:</strong> Your local Ollama library does not have any pulled models.
            </p>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/80 space-y-1">
              <p className="text-white/40"># Pull recommended code model</p>
              <p><span className="text-[#8AE8FF]">$</span> ollama pull qwen2.5-coder</p>
            </div>
          </div>

          {/* PROBLEM 4: MODEL TIMEOUT */}
          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-300" /> Model Inference Timeout
            </h3>
            <p className="text-xs text-white/65 leading-5 mb-2">
              Local LLM inference speed depends on your CPU/GPU hardware and active parameter size (e.g. 7B vs 14B).
            </p>
            <p className="text-xs text-white/50">
              Solution: Switch to a smaller parameter model like <code className="text-[#8AE8FF]">llama3.2:1b</code> or <code className="text-[#8AE8FF]">qwen2.5-coder:1.5b</code> using <code className="text-white">/model &lt;name&gt;</code>.
            </p>
          </div>

          {/* PROBLEM 5: PLAN GENERATION FAILURES */}
          <div className="soft-panel rounded-xl p-5 border border-white/10 font-mono text-xs">
            <h3 className="text-sm font-semibold text-white mb-2 font-sans flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-300" /> Plan Generation Failures
            </h3>
            <div className="space-y-2 text-white/70">
              <p><strong className="text-amber-300">PLAN_PARSE_FAILED:</strong> AI model output invalid JSON plan structure. Retry task or switch model with /model.</p>
              <p><strong className="text-amber-300">PLAN_VALIDATION_FAILED:</strong> Proposed file path or tool call was invalid. Inspect workspace with /workspace.</p>
              <p><strong className="text-amber-300">SYNTHESIS_TIMEOUT:</strong> Model inference took too long synthesizing plan. Verify Ollama GPU acceleration.</p>
            </div>
          </div>

          {/* PROBLEM 6: PATH_TRAVERSAL_DENIED */}
          <div className="soft-panel rounded-xl p-5 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-semibold text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> PATH_TRAVERSAL_DENIED
            </h3>
            <p className="text-xs text-white/70 leading-5 mb-2">
              <strong>Cause:</strong> NEXUS blocked a tool call because it attempted to access files outside the workspace directory.
            </p>
            <p className="text-xs text-white/50">
              Solution: Ensure your task prompt references paths relative to your active project folder.
            </p>
          </div>

          {/* PROBLEM 7: FILES NOT WHERE EXPECTED / WEBSITE NOT OPENING */}
          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-300" /> Website / Project Not Opening
            </h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-white/65">
              <li>Check your active workspace path using <code className="text-[#8AE8FF]">/workspace</code>.</li>
              <li>Verify that <code className="text-white">index.html</code> was generated in the target directory.</li>
              <li>Type <code className="text-[#8AE8FF]">/preview</code> to launch the local web preview server.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SYSTEMATIC DEBUGGING WORKFLOW */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-[#8AE8FF]" /> 8-Step Systematic Debugging Workflow
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          Follow this systematic diagnostic checklist whenever troubleshooting issues in NEXUS AI:
        </p>

        <div className="soft-panel rounded-2xl p-6 border border-white/14 space-y-3 font-mono text-xs">
          {[
            ["1. Check /status", "Verify Node.js version, memory, and Ollama connection status."],
            ["2. Check /workspace", "Confirm active working directory path and file write permissions."],
            ["3. Check /models", "List installed local Ollama models and verify active role binding."],
            ["4. Check /approvals", "Ensure task is not paused waiting for human gate input."],
            ["5. Inspect Task", "Type /tasks to view execution history and trace logs."],
            ["6. Read Error Category", "Identify error category (e.g. PATH_TRAVERSAL_DENIED, ECONNREFUSED)."],
            ["7. Fix Underlying Issue", "Start Ollama, pull missing model, or adjust prompt file paths."],
            ["8. Retry", "Re-submit your task prompt or run /model reset."],
          ].map(([step, desc]) => (
            <div key={step} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/8 pb-2.5 last:border-0 last:pb-0">
              <span className="text-[#8AE8FF] font-bold">{step}</span>
              <span className="text-white/60 text-[0.75rem]">{desc}</span>
            </div>
          ))}
        </div>
      </section>
    </DocsLayout>
  );
}
