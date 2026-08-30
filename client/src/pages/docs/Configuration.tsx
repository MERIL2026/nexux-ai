import { DocsLayout } from "@/components/DocsLayout";
import { Cpu, HardDrive, Layers, RefreshCw, Settings2 } from "lucide-react";


export default function Configuration() {
  return (
    <DocsLayout
      title="Configuration"
      description="Detailed NEXUS AI configuration guide for model selection, role bindings, Ollama discovery, workspace scoping, and environment variables."
      currentId="configuration"
    >
      {/* HEADER SECTION */}
      <div className="mb-10 pb-8 border-b border-white/10">
        <p className="eyebrow mb-2">DOCUMENTATION · 04</p>
        <h1 className="display-title text-4xl sm:text-5xl font-normal text-white mb-4">
          NEXUS <em>Configuration</em>
        </h1>
        <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl">
          Learn how NEXUS AI discovers local Ollama models, routes tasks across specialized agent roles, enforces workspace directory scoping, and processes environment variables.
        </p>
      </div>

      {/* MODEL CONFIGURATION & ROLES */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Model Selection &amp; Agent Roles</h2>
        <p className="text-white/70 leading-7 mb-4">
          NEXUS AI assigns model tasks across four specialized operational roles. By default, automatic model routing chooses the best available local model for each role:
        </p>

        <div className="grid gap-4 sm:grid-cols-2 my-6">
          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-medium text-[#8AE8FF] mb-2 flex items-center gap-2">
              <Layers className="h-4 w-4" /> 1. Planner Role
            </h3>
            <p className="text-xs text-white/65 leading-5">
              Handles goal parsing, file dependency analysis, and synthesizing structured step-by-step task plans.
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-medium text-[#8AE8FF] mb-2 flex items-center gap-2">
              <Cpu className="h-4 w-4" /> 2. Coder Role
            </h3>
            <p className="text-xs text-white/65 leading-5">
              Generates source code, applies file edits, formats syntax, and implements project features.
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-medium text-[#8AE8FF] mb-2 flex items-center gap-2">
              <RefreshCw className="h-4 w-4" /> 3. Reasoning Role
            </h3>
            <p className="text-xs text-white/65 leading-5">
              Performs complex multi-step logic analysis, debugging traceback investigation, and verification checks.
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-sm font-medium text-[#8AE8FF] mb-2 flex items-center gap-2">
              <Settings2 className="h-4 w-4" /> 4. Chat Role
            </h3>
            <p className="text-xs text-white/65 leading-5">
              Handles conversational system Q&amp;A, explanatory responses, and CLI helper output.
            </p>
          </div>
        </div>
      </section>

      {/* DISCOVERED MODELS & OLLAMA */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Local Model Discovery</h2>
        <p className="text-white/70 leading-7 mb-4">
          At launch, NEXUS AI queries your local Ollama server endpoint (<code className="text-[#8AE8FF]">http://127.0.0.1:11434</code>) to discover installed LLM models.
        </p>

        <div className="soft-panel rounded-xl p-5 border border-white/14 bg-[#010b12] font-mono text-xs text-white/80 space-y-2 my-4">
          <p className="text-[#8AE8FF]">$ nexus</p>
          <p className="text-white">NEXUS&gt; /models</p>
          <p className="text-white/60 pt-2 border-t border-white/8">
            [MODELS DISCOVERED]\n  [1] qwen2.5-coder:latest (4.7 GB)\n  [2] llama3.2:latest (2.0 GB)\n  [3] mistral:latest (4.1 GB)
          </p>
        </div>
      </section>

      {/* MODEL OVERRIDE COMMANDS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Model Control Commands</h2>
        <div className="soft-panel rounded-2xl overflow-hidden border border-white/14">
          <div className="grid grid-cols-[14rem_1fr] border-b border-white/10 bg-black/40 p-3.5 text-xs font-mono text-[#8AE8FF]">
            <span>COMMAND</span>
            <span>BEHAVIOR</span>
          </div>
          {[
            ["/model", "Displays current active model settings, global override, and role bindings."],
            ["/model <index|id>", "Sets a global model override for all roles (e.g. /model 1 or /model qwen2.5-coder)."],
            ["/model <role> <index|id>", "Binds a model to a specific role (e.g. /model coder 1 or /model planner llama3.2)."],
            ["/model reset", "Clears all custom model overrides and restores automatic model routing."],
          ].map(([cmd, desc]) => (
            <div key={cmd} className="grid grid-cols-[14rem_1fr] border-b border-white/8 p-3.5 text-xs font-mono text-white/80 items-center">
              <span className="text-[#8AE8FF] font-semibold">{cmd}</span>
              <span className="text-white/60">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL VS ROLE OVERRIDES & FALLBACK */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Global Overrides, Role Bindings &amp; Fallback</h2>
        <div className="space-y-4 text-sm text-white/75 leading-7">
          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-base font-medium text-white mb-2">Global Override</h3>
            <p className="text-xs text-white/65">
              When a global model override is set via <code className="text-[#8AE8FF]">/model &lt;index|id&gt;</code>, all agent operations (planning, coding, reasoning, chat) route exclusively through the specified model.
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-base font-medium text-white mb-2">Role-Specific Override</h3>
            <p className="text-xs text-white/65">
              Role overrides allow you to pair specialized models to specific tasks — for example, using <code className="text-[#8AE8FF]">qwen2.5-coder</code> for the Coder role while using <code className="text-[#8AE8FF]">llama3.2</code> for the Planner role.
            </p>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <h3 className="text-base font-medium text-white mb-2">Fallback Strategy</h3>
            <p className="text-xs text-white/65">
              If a role-bound model becomes unavailable or uninstalled from local Ollama, NEXUS automatically falls back to the default available local Ollama model to prevent task interruption.
            </p>
          </div>
        </div>
      </section>

      {/* WORKSPACE CONFIGURATION */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <HardDrive className="h-5 w-5 text-[#8AE8FF]" /> Workspace Configuration
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          The workspace root controls where NEXUS reads context and generates project code:
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm text-white/75 pl-2">
          <li><strong>Default Root:</strong> Set to the current working directory from which you launch `nexus`.</li>
          <li><strong>Override Flag:</strong> Pass <code className="text-[#8AE8FF]">nexus --workspace &lt;directory-path&gt;</code> to target a specific project folder.</li>
          <li><strong>Path Bounds:</strong> All tool operations are restricted to the workspace tree to ensure filesystem safety.</li>
        </ul>
      </section>

      {/* ENVIRONMENT VARIABLES */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Environment Configuration Variables</h2>
        <p className="text-white/70 leading-7 mb-4">
          NEXUS AI reads optional environment configuration from your system or workspace `.env` file:
        </p>

        <div className="soft-panel rounded-2xl overflow-hidden border border-white/14 mb-4">
          <div className="grid grid-cols-[13rem_1fr_9rem] border-b border-white/10 bg-black/40 p-3.5 text-xs font-mono text-[#8AE8FF]">
            <span>VARIABLE</span>
            <span>DESCRIPTION</span>
            <span>DEFAULT</span>
          </div>
          {[
            ["OLLAMA_HOST", "Ollama API server URL endpoint", "http://127.0.0.1:11434"],
            ["NEXUS_DEFAULT_MODEL", "Default LLM model name for local inference", "qwen2.5-coder"],
            ["NEXUS_WORKSPACE_DIR", "Root working directory for tool operations", "process.cwd()"],
            ["NEXUS_REQUIRE_APPROVAL", "Enable human approval gates before edits (true/false)", "true"],
            ["NEXUS_LOG_LEVEL", "Console log verbosity level (debug, info, warn)", "info"],
          ].map(([varName, desc, defVal]) => (
            <div key={varName} className="grid grid-cols-[13rem_1fr_9rem] border-b border-white/8 p-3.5 text-xs font-mono text-white/80 items-center">
              <span className="text-[#8AE8FF] font-semibold break-all">{varName}</span>
              <span className="text-white/60">{desc}</span>
              <span className="text-white/40">{defVal}</span>
            </div>
          ))}
        </div>
      </section>
    </DocsLayout>
  );
}
