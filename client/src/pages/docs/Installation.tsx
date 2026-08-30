import { DocsLayout } from "@/components/DocsLayout";
import { CopyCommandButton } from "@/components/MarketingPrimitives";
import { AlertTriangle, CheckCircle2, Cpu, HardDrive, Laptop, ShieldCheck, Trash2 } from "lucide-react";


export default function Installation() {
  return (
    <DocsLayout
      title="Installation"
      description="Official installation guide for NEXUS AI CLI, system prerequisites, Ollama runtime setup, workspace configuration, and troubleshooting."
      currentId="installation"
    >
      {/* HEADER SECTION */}
      <div className="mb-10 pb-8 border-b border-white/10">
        <p className="eyebrow mb-2">DOCUMENTATION · 02</p>
        <h1 className="display-title text-4xl sm:text-5xl font-normal text-white mb-4">
          Installing <em>NEXUS AI CLI</em>
        </h1>
        <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl">
          Complete developer guide for installing NEXUS AI CLI globally, connecting your local Ollama runtime, configuring project workspaces, and verifying installation health.
        </p>
      </div>

      {/* REQUIREMENTS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Requirements</h2>
        <p className="text-white/70 leading-7 mb-4">
          Before installing NEXUS AI CLI, verify that your machine meets the following runtime environment requirements:
        </p>

        <div className="grid gap-4 sm:grid-cols-2 my-6">
          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <div className="flex items-center gap-2 text-[#8AE8FF] text-sm font-medium mb-3">
              <Laptop className="h-4 w-4" /> Operating Systems &amp; Shells
            </div>
            <ul className="space-y-1.5 text-xs text-white/65 font-mono">
              <li>• macOS 12.0+ (Apple Silicon M1/M2/M3 &amp; Intel)</li>
              <li>• Windows 10 / 11 (PowerShell 7+ or WSL2)</li>
              <li>• Linux (Ubuntu 20.04+, Debian 11+, Fedora, Arch)</li>
            </ul>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-white/10">
            <div className="flex items-center gap-2 text-[#8AE8FF] text-sm font-medium mb-3">
              <Cpu className="h-4 w-4" /> Node.js &amp; Hardware Runtimes
            </div>
            <ul className="space-y-1.5 text-xs text-white/65 font-mono">
              <li>• Node.js v18.0.0 or higher (v20+ recommended)</li>
              <li>• npm 9.0.0+ (bundled with Node.js)</li>
              <li>• Ollama (local AI inference runtime engine)</li>
              <li>• 8 GB RAM minimum (16 GB+ recommended for 7B/8B models)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INSTALL NEXUS AI CLI */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Install NEXUS AI CLI</h2>
        <p className="text-white/70 leading-7 mb-4">
          Install the official NEXUS AI CLI globally on your machine using npm:
        </p>

        <div className="soft-panel rounded-xl p-5 border border-white/14 bg-[#010b12] font-mono text-sm my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#8AE8FF] font-bold">$</span>
            <code className="text-white font-semibold break-all">npm install -g nexus-ai-cli</code>
          </div>
          <CopyCommandButton command="npm install -g nexus-ai-cli" />
        </div>

        <p className="text-xs text-white/55 leading-6 mt-3">
          The <code className="text-[#8AE8FF]">-g</code> flag registers the global executable binary <code className="text-white">nexus</code> in your system PATH, allowing you to invoke NEXUS AI from any terminal directory.
        </p>
      </section>

      {/* VERIFY INSTALLATION */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Verify Installation</h2>
        <p className="text-white/70 leading-7 mb-4">
          Launch the NEXUS interactive CLI workstation by running the startup command:
        </p>

        <div className="soft-panel rounded-xl p-5 border border-white/14 bg-[#010b12] font-mono text-sm my-4">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-xs text-white/40">STARTUP COMMAND</span>
            <CopyCommandButton command="nexus" />
          </div>
          <p className="text-white mb-3">
            <span className="text-[#8AE8FF]">$</span> nexus
          </p>

          <div className="p-4 bg-black/50 rounded-lg border border-white/10 text-xs text-white/75 space-y-1.5 font-mono">
            <p className="text-[#8AE8FF] font-semibold">NEXUS AI Workstation v1.0.0</p>
            <p>Active workspace: C:\Projects\my-app</p>
            <p>Ollama status: Connected (http://127.0.0.1:11434)</p>
            <p>Active model: qwen2.5-coder</p>
            <p className="text-white/40 pt-2 border-t border-white/10">Type /help for available commands or enter your task prompt.</p>
          </div>
        </div>

        <p className="text-white/70 leading-7 mt-4">
          What to expect upon launch:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-white/75 my-2 pl-2">
          <li>NEXUS prints the active CLI release banner.</li>
          <li>It detects and binds to your current working directory as the active workspace.</li>
          <li>It connects to your local Ollama server endpoint and loads the default code model.</li>
          <li>An interactive prompt <code className="text-[#8AE8FF]">nexus &gt;</code> appears, ready for tasks or slash commands.</li>
        </ul>
      </section>

      {/* WORKSPACE */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Workspace Directory &amp; File Storage</h2>
        <p className="text-white/70 leading-7 mb-4">
          NEXUS AI operates locally within the directory from which it is launched. This directory acts as the <strong>Workspace Root</strong>:
        </p>

        <div className="soft-panel rounded-xl p-5 border border-white/10 text-sm text-white/80 leading-6 space-y-3">
          <div className="flex items-start gap-3">
            <HardDrive className="h-5 w-5 text-[#8AE8FF] shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-white mb-1">Local Storage &amp; Code Generation</p>
              <p className="text-xs text-white/60">
                All generated code, HTML files, scripts, logs, and project configurations created during tasks are saved directly inside your workspace directory.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t border-white/10 pt-3">
            <ShieldCheck className="h-5 w-5 text-[#8AE8FF] shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-white mb-1">Path Scoping &amp; Security Boundary</p>
              <p className="text-xs text-white/60">
                NEXUS tool calls (ReadFile, WriteFile, RunCommand) are scoped to the active workspace path, preventing unintentional edits to outer system directories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OLLAMA RUNTIME */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Ollama Local AI Runtime</h2>
        <p className="text-white/70 leading-7 mb-4">
          NEXUS AI relies on <strong>Ollama</strong> as its local LLM inference runtime. Running models locally through Ollama ensures 100% data privacy and zero API token costs:
        </p>

        <div className="soft-panel rounded-xl p-5 border border-white/14 bg-[#010b12] font-mono text-xs text-white/80 space-y-3 my-4">
          <p className="text-[#8AE8FF] font-semibold">OLLAMA SETUP &amp; MODEL PULL COMMANDS:</p>
          
          <div className="pt-2 border-t border-white/10">
            <p className="text-white/40 mb-1"># 1. Start Ollama background service</p>
            <p><span className="text-[#8AE8FF]">$</span> ollama serve</p>
          </div>

          <div className="pt-2 border-t border-white/10">
            <p className="text-white/40 mb-1"># 2. Pull recommended local code generation model</p>
            <p><span className="text-[#8AE8FF]">$</span> ollama pull qwen2.5-coder</p>
          </div>

          <div className="pt-2 border-t border-white/10">
            <p className="text-white/40 mb-1"># 3. Pull general reasoning model</p>
            <p><span className="text-[#8AE8FF]">$</span> ollama pull llama3.2</p>
          </div>
        </div>
      </section>

      {/* FIRST LAUNCH DIAGNOSTIC CHECKLIST */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">First Launch Verification Checklist</h2>
        <p className="text-white/70 leading-7 mb-4">
          After launching `nexus`, run through these quick interactive verification checks to confirm complete system readiness:
        </p>

        <div className="soft-panel rounded-2xl overflow-hidden border border-white/14">
          {[
            { step: "1. NEXUS CLI Starts", cmd: "nexus", expected: "Interactive prompt 'nexus >' opens with CLI version banner." },
            { step: "2. Ollama Connected", cmd: "/status", expected: "Output reports 'Ollama API: Connected (http://127.0.0.1:11434)'" },
            { step: "3. Models Available", cmd: "/models", expected: "Lists installed models (e.g. qwen2.5-coder, llama3.2)" },
            { step: "4. Workspace Scope", cmd: "/workspace", expected: "Prints current workspace directory path and file counts" },
          ].map(({ step, cmd, expected }) => (
            <div key={step} className="grid grid-cols-[1.2fr_1fr_1.8fr] gap-4 border-b border-white/8 p-4 text-xs font-mono text-white/80 items-center">
              <span className="font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8AE8FF]" /> {step}
              </span>
              <span className="text-[#8AE8FF] font-semibold">{cmd}</span>
              <span className="text-white/55">{expected}</span>
            </div>
          ))}
        </div>

      </section>

      {/* COMMON INSTALLATION PROBLEMS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">Common Installation Troubleshooting</h2>
        <div className="space-y-4 my-6">
          <div className="soft-panel rounded-xl p-5 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-medium text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> &apos;nexus&apos; is not recognized as an internal command
            </h3>
            <p className="text-xs text-white/75 leading-5 mb-2">
              <strong>Cause:</strong> Your global npm bin directory is not included in your operating system&apos;s PATH environment variable.
            </p>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/80">
              <p className="text-white/40 mb-1"># Check npm global bin directory path</p>
              <p><span className="text-[#8AE8FF]">$</span> npm config get prefix</p>
              <p className="text-white/40 mt-2 mb-1"># Add the printed path to your system PATH environment variable.</p>
            </div>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-medium text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Ollama Unavailable (ECONNREFUSED)
            </h3>
            <p className="text-xs text-white/75 leading-5 mb-2">
              <strong>Cause:</strong> The Ollama background service is not running on port 11434.
            </p>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/80">
              <p className="text-white/40 mb-1"># Start Ollama service in a separate terminal window</p>
              <p><span className="text-[#8AE8FF]">$</span> ollama serve</p>
            </div>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-medium text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Model Unavailable / Model Not Found
            </h3>
            <p className="text-xs text-white/75 leading-5 mb-2">
              <strong>Cause:</strong> The active model requested by NEXUS has not been downloaded into Ollama.
            </p>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/80">
              <p className="text-white/40 mb-1"># Download model into local library</p>
              <p><span className="text-[#8AE8FF]">$</span> ollama pull qwen2.5-coder</p>
            </div>
          </div>

          <div className="soft-panel rounded-xl p-5 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-medium text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> EACCES: Permission Denied during global npm install
            </h3>
            <p className="text-xs text-white/75 leading-5 mb-2">
              <strong>Cause:</strong> Writing to the root system node_modules directory requires elevated permissions or fixed npm folder ownership.
            </p>
            <div className="font-mono text-xs bg-[#010b12] p-3 rounded-lg border border-white/10 text-white/80">
              <p className="text-white/40 mb-1"># Fix global npm folder permissions (Linux / macOS)</p>
              <p><span className="text-[#8AE8FF]">$</span> sudo chown -R $USER $(npm config get prefix)/{'{lib/node_modules,bin,share}'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* UNINSTALLATION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Trash2 className="h-5 w-5 text-red-400" /> Uninstallation
        </h2>
        <p className="text-white/70 leading-7 mb-4">
          To remove the global NEXUS AI CLI binary from your system, run:
        </p>

        <div className="soft-panel rounded-xl p-5 border border-white/14 bg-[#010b12] font-mono text-sm my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#8AE8FF] font-bold">$</span>
            <code className="text-white font-semibold break-all">npm uninstall -g nexus-ai-cli</code>
          </div>
          <CopyCommandButton command="npm uninstall -g nexus-ai-cli" />
        </div>

        <p className="text-xs text-white/55 leading-6 mt-3">
          <em>Note:</em> Uninstalling the CLI package removes the `nexus` command binary, but preserves all your project files, workspace code, and local Ollama model downloads.
        </p>
      </section>
    </DocsLayout>
  );
}
