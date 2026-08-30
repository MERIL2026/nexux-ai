/** NEXUS AI — Quiet Machine Cinema about page: the product vision, local-device framing, and human-controlled agent philosophy. */
import { Activity, Eye, Laptop, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { ProductFrame, RailList, RouteAction, SectionLead, SoftCard } from "@/components/MarketingPrimitives";

export default function About() {
  return (
    <ProductFrame
      scene="about"
      title="About"
      description="Learn about the NEXUS AI product vision, created by Meril Parmar under NEXORA Labs."
      eyebrow="ABOUT / PRODUCT VISION"
      hero={<>A capable agent.<br /><em>Close to your work.</em></>}
      detail="NEXUS AI is conceived as a local, device-first autonomous agent product — created by Meril Parmar under NEXORA Labs to help transform intent into work while preserving human direction."
      actions={<><RouteAction href="/features">Explore features</RouteAction><RouteAction href="/download" secondary>Download NEXUS</RouteAction></>}
      aside={
        <div className="route-console">
          <div className="terminal-head">
            <span>PRODUCT PHILOSOPHY</span>
            <span className="status-live"><i /> DIRECTED</span>
          </div>
          <div className="p-6 font-mono text-xs leading-7 text-white/60">
            INTENT<br />
            <span className="text-[#8AE8FF]">↓</span> CONTEXT<br />
            <span className="text-[#8AE8FF]">↓</span> PLAN<br />
            <span className="text-[#8AE8FF]">↓</span> OBSERVABLE WORK<br />
            <span className="text-[#8AE8FF]">↓</span> HUMAN DIRECTION
            <p className="mt-4 pt-3 border-t border-white/10 text-[#8AE8FF] text-[0.7rem]">
              Created by Meril Parmar under NEXORA Labs.
            </p>
          </div>
        </div>
      }
    >
      <section className="section-shell border-t border-white/10">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <SectionLead
            eyebrow="WHAT NEXUS AI IS"
            title={<>A product for<br /><em>giving work shape.</em></>}
            detail="The product vision is an agent experience that can prepare, perform, and verify multi-step work in a legible flow. Created by Meril Parmar under NEXORA Labs."
          />
          <RailList
            items={[
              { title: "Why NEXUS AI exists", detail: "To make capable autonomous work more usable in the environments where people already create and operate.", icon: Sparkles },
              { title: "How it works", detail: "A task moves through context, planning, action, and verification with its path available to inspect.", icon: Activity },
              { title: "Human control", detail: "People keep direction over the work through context, review, and approval points.", icon: UserCheck },
            ]}
          />
        </div>
      </section>

      <section className="section-shell feature-story-beat border-t border-white/10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div className="grid gap-3 sm:grid-cols-2">
            <SoftCard title="Local / device-first" detail="NEXUS AI is framed around the machine and workspace where work is actually happening." icon={Laptop} />
            <SoftCard title="Observable execution" detail="A task can show its plan, progress, and verification rather than disappearing behind an answer." icon={Eye} />
            <SoftCard title="Human approval" detail="Decision points can stay visible when the work requires a deliberate choice." icon={ShieldCheck} />
            <SoftCard title="Independent Brand" detail="Developed independently by Meril Parmar under NEXORA Labs." icon={Sparkles} />
          </div>
          <SectionLead
            eyebrow="AUTONOMOUS AGENT PHILOSOPHY"
            title={<>The agent acts.<br /><em>The person directs.</em></>}
            detail="Created by Meril Parmar under NEXORA Labs. NEXUS AI aims to move work forward without making important context, action, or choice invisible."
          />
        </div>
      </section>
    </ProductFrame>
  );
}

