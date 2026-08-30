import { DocsLayout } from "@/components/DocsLayout";
import { Lock, ShieldCheck, UserCheck } from "lucide-react";


export default function SecurityDoc() {
  return (
    <DocsLayout
      title="Security & Approvals"
      description="Comprehensive NEXUS AI security documentation, architecture layers, human approval gates, permission engine, and path protection."
      currentId="security"
    >
      {/* HEADER SECTION */}
      <div className="mb-10 pb-8 border-b border-white/10">
        <p className="eyebrow mb-2">DOCUMENTATION · 07</p>
        <h1 className="display-title text-4xl sm:text-5xl font-normal text-white mb-4">
          Security &amp; <em>Human Gates</em>
        </h1>
        <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl">
          NEXUS AI is built on a philosophy of controlled local AI execution. It provides observable, permission-bounded agent execution rather than granting an AI unrestricted access to your computer.
        </p>
      </div>

      {/* SECURITY ARCHITECTURE */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Security Architecture Layers</h2>
        <p className="text-[#8AE8FF] font-mono text-sm mb-4">
          User Request → Plan → Plan Validation → Authorization → Approval Gate → PermissionEngine → Tool Execution → Observation → Verification
        </p>

        <div className="soft-panel rounded-2xl p-6 border border-white/14 space-y-4 font-mono text-xs my-4">
          {[
            ["1. User Request", "Task intent submitted to NEXUS CLI."],
            ["2. Plan", "Planner Agent generates step-by-step tool plan."],
            ["3. Plan Validation", "Structural check ensures valid syntax and tool parameters."],
            ["4. Authorization", "PermissionEngine evaluates action scope and workspace path bounds."],
            ["5. Approval Gate", "Human-in-the-loop confirmation requested for consequential steps."],
            ["6. PermissionEngine", "Enforces path sandboxing and risk boundaries at runtime."],
            ["7. Tool Execution", "Tool runs strictly inside workspace sandbox."],
            ["8. Observation", "Tool output and diffs logged into trace."],
            ["9. Verification", "Verifier Agent confirms results against original goal."],
          ].map(([layer, desc]) => (
            <div key={layer} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/8 pb-3 last:border-0 last:pb-0">
              <span className="text-[#8AE8FF] font-semibold text-sm">{layer}</span>
              <span className="text-white/60 text-[0.75rem]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PERMISSION ENGINE & APPROVAL FIELDS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <UserCheck className="h-5 w-5 text-[#8AE8FF]" /> Human Approval Request Fields
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          When an action requires confirmation, the approval prompt displays complete contextual metadata to let you make an informed decision:
        </p>

        <div className="soft-panel rounded-2xl overflow-hidden border border-white/14">
          <div className="grid grid-cols-[10rem_1fr] border-b border-white/10 bg-black/40 p-3.5 text-xs font-mono text-[#8AE8FF]">
            <span>APPROVAL FIELD</span>
            <span>DESCRIPTION</span>
          </div>
          {[
            ["Approval ID", "Unique identification string for the pending security gate prompt."],
            ["Task ID", "Identifier of the active task trace."],
            ["Step ID", "Index of the specific plan step requesting execution."],
            ["Tool Name", "Name of the target tool (e.g. WriteFile, RunCommand)."],
            ["Capability", "Specific action capability requested (e.g. Write file, Run script)."],
            ["Risk Level", "Assigned risk level (Low, Medium, High, Critical)."],
            ["Decision", "User response input: Y (Approve), N (Reject), V (View diff)."],
            ["Approval Status", "Gate resolution state (pending, approved, rejected)."],
          ].map(([field, desc]) => (
            <div key={field} className="grid grid-cols-[10rem_1fr] border-b border-white/8 p-3.5 text-xs font-mono text-white/80 items-center">
              <span className="text-[#8AE8FF] font-semibold">{field}</span>
              <span className="text-white/60">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PATH SECURITY & WORKSPACE ISOLATION */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Lock className="h-5 w-5 text-[#8AE8FF]" /> Path Security &amp; Traversal Prevention
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          NEXUS AI enforces strict directory path sandboxing to protect your machine from unauthorized filesystem access:
        </p>

        <div className="space-y-4 font-mono text-xs">
          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm text-[#8AE8FF] font-semibold mb-2">Workspace Root Anchoring</h3>
            <p className="text-white/65 font-sans leading-5">
              All target file paths are resolved relative to the configured workspace directory (<code className="text-white">process.cwd()</code>).
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm text-[#8AE8FF] font-semibold mb-2">Path Traversal Defense (`PATH_TRAVERSAL_DENIED`)</h3>
            <p className="text-white/65 font-sans leading-5 mb-2">
              If an agent tool attempts to access files outside the active workspace tree (e.g., using <code className="text-amber-300">../../etc/passwd</code>), the PermissionEngine immediately blocks the call and returns error category <code className="text-amber-300">PATH_TRAVERSAL_DENIED</code>.
            </p>
            <div className="bg-[#010b12] p-3 rounded-lg border border-white/10 text-amber-400">
              [SECURITY ERROR] PATH_TRAVERSAL_DENIED: Target path &apos;../../etc/passwd&apos; resolves outside workspace root.
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATIC APPROVALS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Automatic Approvals for Low-Risk Tools</h2>
        <p className="text-white/70 leading-7 mb-4">
          To maintain smooth workflow momentum, read-only inspection operations (<code className="text-[#8AE8FF]">ReadFile</code>, <code className="text-[#8AE8FF]">ListDir</code>, <code className="text-[#8AE8FF]">GrepSearch</code>) are automatically approved by default because they cannot mutate system state or modify source files.
        </p>
      </section>

      {/* PRACTICAL BEST PRACTICES */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-[#8AE8FF]" /> Security Best Practices
        </h2>
        <div className="soft-panel rounded-xl p-5 border border-white/10 text-sm text-white/75 space-y-2">
          <p>• <strong>Run in dedicated project directories:</strong> Always launch NEXUS AI from within your intended project workspace.</p>
          <p>• <strong>Review diffs before approving:</strong> Press <code className="text-[#8AE8FF]">V</code> at approval prompts to inspect proposed file diffs.</p>
          <p>• <strong>Do not run as Administrator / root:</strong> Run terminal sessions with standard user account permissions.</p>
          <p>• <strong>Keep `.env` files protected:</strong> Ensure API keys or secrets in `.env` are excluded via `.gitignore`.</p>
        </div>
      </section>
    </DocsLayout>
  );
}
