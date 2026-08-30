import { PageMeta, SiteFooter, SiteNav } from "@/components/SiteChrome";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  CircleHelp,
  Command,
  FolderOpen,
  KeyRound,
  Menu,
  ShieldCheck,
  Terminal,
  Wrench,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { useLocation } from "wouter";

export const docsNavigation = [
  { id: "getting-started", label: "Getting Started", href: "/docs/getting-started", icon: BookOpen, desc: "Overview, first task, and task lifecycle" },
  { id: "installation", label: "Installation", href: "/docs/installation", icon: Wrench, desc: "CLI installation and environment setup" },
  { id: "cli", label: "CLI Reference", href: "/docs/cli", icon: Terminal, desc: "Terminal commands, flags, and interaction" },
  { id: "configuration", label: "Configuration", href: "/docs/configuration", icon: KeyRound, desc: "Workspace settings and environment variables" },
  { id: "agents", label: "Agents Architecture", href: "/docs/agents", icon: Command, desc: "Autonomous planning, execution, and roles" },
  { id: "tools", label: "Tools System", href: "/docs/tools", icon: Wrench, desc: "Configured tools, file system, and shell execution" },
  { id: "security", label: "Security & Approvals", href: "/docs/security", icon: ShieldCheck, desc: "Permissions, risk awareness, and human gates" },
  { id: "workspaces", label: "Workspaces", href: "/docs/workspaces", icon: FolderOpen, desc: "Directory scopes and file isolation" },
  { id: "troubleshooting", label: "Troubleshooting", href: "/docs/troubleshooting", icon: CircleHelp, desc: "Common issues, diagnostics, and resolution" },
];

export function DocsLayout({
  title,
  description,
  currentId,
  children,
}: {
  title: string;
  description: string;
  currentId: string;
  children: ReactNode;
}) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentIndex = docsNavigation.findIndex((item) => item.id === currentId);
  const prevDoc = currentIndex > 0 ? docsNavigation[currentIndex - 1] : null;
  const nextDoc = currentIndex < docsNavigation.length - 1 ? docsNavigation[currentIndex + 1] : null;
  const currentNav = docsNavigation[currentIndex] || docsNavigation[0];

  return (
    <PageMeta title={`${title} — Documentation`} description={description}>
      <main className="min-h-screen bg-[#031B29] text-white">
        <SiteNav />

        {/* BREADCRUMB HEADER BAR */}
        <div className="border-b border-white/10 bg-[#010b12]/60 backdrop-blur-md sticky top-0 z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
            <nav className="flex items-center gap-2 text-xs text-white/60" aria-label="Breadcrumb">
              <a href="/docs" className="hover:text-[#8AE8FF] transition">Docs</a>
              <ChevronRight className="h-3.5 w-3.5 text-white/30" />
              <span className="text-[#8AE8FF] font-medium">{currentNav.label}</span>
            </nav>

            <button
              type="button"
              onClick={() => setSidebarOpen((v) => !v)}
              className="lg:hidden flex items-center gap-2 rounded-lg border border-white/14 px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/5"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span>Docs Menu</span>
            </button>
          </div>
        </div>

        {/* MAIN DOCUMENTATION GRID */}
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[16rem_1fr]">
            {/* SIDEBAR NAVIGATION */}
            <aside
              className={`fixed inset-y-0 left-0 z-30 w-72 transform bg-[#02131f] p-6 transition-transform duration-200 ease-in-out lg:static lg:z-0 lg:w-auto lg:translate-x-0 lg:bg-transparent lg:p-0 ${
                sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between lg:hidden mb-6 pb-4 border-b border-white/10">
                <span className="eyebrow">DOCUMENTATION MAP</span>
                <button type="button" onClick={() => setSidebarOpen(false)} className="text-white/60 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="sticky top-20">
                <div className="mb-4 hidden lg:block">
                  <p className="eyebrow mb-1">DOCUMENTATION MAP</p>
                  <h2 className="text-sm font-semibold tracking-wider text-white/40">9 SECTIONS</h2>
                </div>

                <nav className="space-y-1" aria-label="Documentation navigation">
                  {docsNavigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = location === item.href || currentId === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-medium transition ${
                          isActive
                            ? "bg-[#8AE8FF]/12 text-[#8AE8FF] border border-[#8AE8FF]/30 font-semibold"
                            : "text-white/65 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-[#8AE8FF]" : "text-white/40 group-hover:text-white/70"}`} />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* OVERLAY FOR MOBILE SIDEBAR */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* DOCUMENTATION CONTENT AREA */}
            <article className="min-w-0">
              <div className="prose prose-invert max-w-none">
                {children}
              </div>

              {/* PREVIOUS / NEXT NAVIGATION */}
              <div className="mt-16 pt-8 border-t border-white/10 grid gap-4 sm:grid-cols-2">
                {prevDoc ? (
                  <a
                    href={prevDoc.href}
                    className="soft-panel group rounded-xl p-4 flex flex-col transition hover:border-[#8AE8FF]/40 hover:bg-[#8AE8FF]/5"
                  >
                    <span className="text-[0.65rem] font-mono tracking-widest text-white/40 flex items-center gap-1 mb-1">
                      <ArrowLeft className="h-3 w-3" /> PREVIOUS
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-[#8AE8FF] transition">
                      {prevDoc.label}
                    </span>
                  </a>
                ) : <div />}

                {nextDoc ? (
                  <a
                    href={nextDoc.href}
                    className="soft-panel group rounded-xl p-4 flex flex-col items-end transition hover:border-[#8AE8FF]/40 hover:bg-[#8AE8FF]/5 text-right"
                  >
                    <span className="text-[0.65rem] font-mono tracking-widest text-white/40 flex items-center gap-1 mb-1">
                      NEXT <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-[#8AE8FF] transition">
                      {nextDoc.label}
                    </span>
                  </a>
                ) : <div />}
              </div>
            </article>
          </div>
        </div>

        <SiteFooter />
      </main>
    </PageMeta>
  );
}
