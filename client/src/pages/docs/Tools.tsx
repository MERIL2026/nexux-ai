import { DocsLayout } from "@/components/DocsLayout";
import { Activity, ShieldCheck, Wrench } from "lucide-react";


export default function Tools() {
  return (
    <DocsLayout
      title="Tools System"
      description="Detailed documentation of the NEXUS AI tool system, execution model, capability matrix, risk levels, and permission engine."
      currentId="tools"
    >
      {/* HEADER SECTION */}
      <div className="mb-10 pb-8 border-b border-white/10">
        <p className="eyebrow mb-2">DOCUMENTATION · 06</p>
        <h1 className="display-title text-4xl sm:text-5xl font-normal text-white mb-4">
          Tools <em>System</em>
        </h1>
        <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl">
          Tools are structured interfaces that allow NEXUS AI agents to perform real-world actions on your local filesystem — reading code, writing files, searching directories, and running terminal commands.
        </p>
      </div>

      {/* WHY AI NEEDS TOOLS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Why Agents Need Tools</h2>
        <p className="text-white/70 leading-7 mb-4">
          LLMs are fundamentally text generation engines. Without tools, an AI cannot read your project files, inspect schemas, write source code, or execute build scripts. NEXUS AI bridges this gap by equipping agents with structured, permission-controlled system tools.
        </p>
      </section>

      {/* TOOL EXECUTION MODEL */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Tool Execution Model</h2>
        <p className="text-[#8AE8FF] font-mono text-sm mb-4">
          AI Plan → Tool Request → Authorization → Approval Gate → Tool Execution → Observation → Verification
        </p>

        <div className="soft-panel rounded-2xl p-6 border border-white/14 space-y-4 font-mono text-xs my-4">
          {[
            ["1. AI Plan", "Planner Agent selects a tool call based on current goal state."],
            ["2. Tool Request", "Executor Agent stages tool parameters (e.g. WriteFile target='index.html')."],
            ["3. Authorization", "PermissionEngine verifies path bounds and security policy."],
            ["4. Approval Gate", "If risk level > Low, human approval is requested (Y/N/V)."],
            ["5. Tool Execution", "Tool runs strictly inside the active workspace directory."],
            ["6. Observation", "Tool output (stdout, stderr, exit code, diff) is logged into session trace."],
            ["7. Verification", "Verifier Agent checks output against completion criteria."],
          ].map(([stage, desc]) => (
            <div key={stage} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/8 pb-3 last:border-0 last:pb-0">
              <span className="text-[#8AE8FF] font-semibold text-sm">{stage}</span>
              <span className="text-white/60 text-[0.75rem]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TOOL CAPABILITIES MATRIX */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Confirmed Available Tools</h2>
        <p className="text-white/70 leading-7 mb-6">
          The complete reference of tools implemented in the NEXUS agent runtime:
        </p>

        <div className="space-y-6">
          {[
            {
              name: "ReadFile",
              purpose: "Reads file contents from the workspace.",
              capability: "Inspect source code, configuration files, and schemas.",
              input: "{ path: string, startLine?: number, endLine?: number }",
              output: "File lines content string",
              risk: "Low",
              approval: "Auto-approved",
            },
            {
              name: "WriteFile",
              purpose: "Writes or modifies code files in the workspace.",
              capability: "Create new source files, replace file blocks, update config.",
              input: "{ path: string, content: string, overwrite?: boolean }",
              output: "File creation status & written byte count",
              risk: "Medium / High",
              approval: "Requires Approval",
            },
            {
              name: "ListDir",
              purpose: "Lists files and subdirectories.",
              capability: "Inspect directory structures and file trees.",
              input: "{ path: string }",
              output: "Array of child filenames, sizes, and directory flags",
              risk: "Low",
              approval: "Auto-approved",
            },
            {
              name: "RunCommand",
              purpose: "Executes terminal shell commands.",
              capability: "Run npm scripts, git commands, and build tools.",
              input: "{ command: string, cwd?: string }",
              output: "Command stdout, stderr, and exit code",
              risk: "High",
              approval: "Requires Approval",
            },
            {
              name: "GrepSearch",
              purpose: "Searches workspace files for string patterns.",
              capability: "Find code symbols, imports, and variables across files.",
              input: "{ query: string, path: string, isRegex?: boolean }",
              output: "Matching line snippets and line numbers",
              risk: "Low",
              approval: "Auto-approved",
            },
          ].map((tool) => (
            <div key={tool.name} className="soft-panel rounded-xl p-5 border border-white/10 font-mono text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
                <span className="text-[#8AE8FF] text-sm font-bold flex items-center gap-2">
                  <Wrench className="h-4 w-4" /> {tool.name}
                </span>
                <div className="flex items-center gap-3 text-[0.75rem]">
                  <span className="text-white/40">Risk: <code className="text-amber-400">{tool.risk}</code></span>
                  <span className="text-[#8AE8FF] font-semibold">{tool.approval}</span>
                </div>
              </div>
              <p className="text-white/70 leading-5 mb-3 font-sans text-xs">{tool.purpose} {tool.capability}</p>
              <div className="bg-[#010b12] p-3 rounded-lg border border-white/10 space-y-1 text-white/80">
                <p><span className="text-white/40">Input:</span> <code className="text-[#8AE8FF]">{tool.input}</code></p>
                <p><span className="text-white/40">Output:</span> {tool.output}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RISK LEVELS & PERMISSION ENGINE */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-[#8AE8FF]" /> Risk Evaluation &amp; PermissionEngine
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          Before any tool is executed, the internal <strong>PermissionEngine</strong> evaluates the request against workspace bounds and assigned risk levels:
        </p>

        <div className="soft-panel rounded-2xl overflow-hidden border border-white/14 mb-4">
          <div className="grid grid-cols-[8rem_1fr_10rem] border-b border-white/10 bg-black/40 p-3.5 text-xs font-mono text-[#8AE8FF]">
            <span>RISK LEVEL</span>
            <span>CRITERIA</span>
            <span>GATE ACTION</span>
          </div>
          {[
            ["Low", "Read-only file inspections and directory search", "Auto-approved"],
            ["Medium", "Creating or updating source files inside workspace", "Requires Human Approval"],
            ["High", "Shell command execution (npm install, git)", "Requires Human Approval"],
            ["Critical", "System directory modifications or outer path calls", "Blocked (PATH_TRAVERSAL)"],
          ].map(([risk, crit, act]) => (
            <div key={risk} className="grid grid-cols-[8rem_1fr_10rem] border-b border-white/8 p-3.5 text-xs font-mono text-white/80 items-center">
              <span className={`font-bold ${risk === "High" || risk === "Critical" ? "text-amber-400" : "text-[#8AE8FF]"}`}>{risk}</span>
              <span className="text-white/60">{crit}</span>
              <span className="text-white/40">{act}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TOOL FAILURES */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Tool Failures &amp; Error Handling</h2>
        <p className="text-white/70 leading-7 mb-4">
          When a tool call fails (e.g. non-zero shell exit code, file access error, or missing file), NEXUS captures the exact error details into the session observation log:
        </p>

        <div className="soft-panel rounded-xl p-4 border border-white/10 bg-[#010b12] font-mono text-xs text-white/80 space-y-1">
          <p className="text-red-400">[TOOL ERROR] RunCommand failed with exit code 1</p>
          <p className="text-white/60">stderr: npm error code ENOENT</p>
          <p className="text-white/60">stderr: npm error syscall open package.json</p>
          <p className="text-[#8AE8FF] pt-2 border-t border-white/8">[REASONING AGENT] Adjusting plan: Create package.json before running npm install.</p>
        </div>
      </section>

      {/* EXAMPLE TRACE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-[#8AE8FF]" /> Practical Tool Trace Example (`Create hello.html`)
        </h2>

        <div className="soft-panel rounded-2xl p-6 border border-white/14 space-y-3 font-mono text-xs">
          <p className="text-white font-bold">PROMPT: &quot;Create hello.html with a simple header&quot;</p>
          <p className="text-[#8AE8FF]">[PLAN] Staging tool: WriteFile path=&quot;hello.html&quot;</p>
          <p className="text-amber-400">[GATE] Approval requested: Write file &apos;hello.html&apos; (Risk: Medium) --&gt; Approved (Y)</p>
          <p className="text-white/70">[EXEC] Tool WriteFile executed. 142 bytes written.</p>
          <p className="text-white/70">[OBSERVE] File created cleanly at C:\Projects\workspace\hello.html</p>
          <p className="text-emerald-400 font-semibold">[VERIFY] Verified hello.html exists and contains valid HTML5 structure.</p>
        </div>
      </section>
    </DocsLayout>
  );
}
