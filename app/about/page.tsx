import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Target, Eye, Users, Globe, ArrowRight, Mail,
  Lock, Key, BarChart3, AlertTriangle, CheckCircle2, MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About OmniPriv: Enterprise PAM Platform",
  description:
    "OmniPriv delivers enterprise-grade Privileged Access Management for hybrid IT environments. Unified control over every privileged account, session, and credential.",
};

const capabilities = [
  {
    icon: Lock,
    title: "Credential Vault",
    description: "Centralised storage, rotation, and checkout of all privileged credentials — passwords, SSH keys, API tokens, and certificates.",
  },
  {
    icon: Eye,
    title: "Session Recording",
    description: "Full keystroke and video recording of every privileged session with tamper-proof audit trails for forensics and compliance.",
  },
  {
    icon: Key,
    title: "Just-in-Time Access",
    description: "Zero standing privilege policies with on-demand access grants that expire automatically after the approved window.",
  },
  {
    icon: BarChart3,
    title: "Compliance Reporting",
    description: "Pre-built reports for SOC 2, ISO 27001, PCI-DSS, HIPAA, and more — exportable on demand for auditors.",
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    description: "AI-powered behavioural analytics flag anomalous privileged activity in real time, before damage is done.",
  },
  {
    icon: Globe,
    title: "Hybrid Coverage",
    description: "Single pane of glass across on-premises servers, cloud workloads, SaaS platforms, OT systems, and remote vendors.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every product decision starts with security. We never compromise on protection to ship faster or cut costs.",
  },
  {
    icon: Target,
    title: "Enterprise Excellence",
    description: "Built for the world's most demanding environments — banks, hospitals, governments, and global enterprises.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "We share our security practices and test results openly. Our customers deserve to know exactly how we protect their data.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description: "We partner with customers to solve their privileged access challenges for the long term, not just close a deal.",
  },
];

const whyPoints = [
  "Agentless deployment — no endpoint agents required on target systems",
  "Air-gapped and sovereign cloud deployment options for regulated industries",
  "Native integrations with Active Directory, Azure AD, SIEM, ITSM, and more",
  "Multi-tenancy support for MSSPs and large distributed organisations",
  "Role-based access control with granular, attribute-level policy enforcement",
  "99.99% SLA with active-active high availability and automatic failover",
];

const offices = [
  {
    region: "United Kingdom",
    name: "Omnipriv Global",
    address: "10 Mead Road, Abbeymead",
    city: "Gloucester, GL4 5GL",
    country: "United Kingdom",
  },
  {
    region: "Middle East",
    name: "Omnipriv Middle East",
    address: "Compass Building, AL Hamra Industrial Zone-FZ",
    city: "Ras Al Khaimah",
    country: "United Arab Emirates",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* depth orbs */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030711]/40 via-[#030711]/80 to-[#030711]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(0,184,255,0.10) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(124,58,237,0.10) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[350px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom left, rgba(99,102,241,0.07) 0%, transparent 60%)" }}
        />
        {/* floating dots */}
        <div className="absolute top-1/4 left-[12%] w-1.5 h-1.5 rounded-full bg-[#00B8FF]/60 animate-pulse" />
        <div className="absolute top-1/3 right-[10%] w-2 h-2 rounded-full bg-violet-400/40 animate-pulse" style={{ animationDelay: "0.9s" }} />
        <div className="absolute top-2/3 right-[22%] w-1 h-1 rounded-full bg-[#00B8FF]/40 animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            <div className="badge-cyan mb-6">About OmniPriv</div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              The Enterprise PAM Platform{" "}
              <span className="text-gradient">Built for the Real World</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              OmniPriv gives security and IT teams unified, auditable control over every
              privileged account, session, and credential — across on-premises infrastructure,
              cloud workloads, SaaS platforms, and third-party vendor access —
              without adding operational friction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo" className="btn-primary">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:info@omnipriv.com" className="btn-secondary">
                Talk to Sales
              </a>
            </div>
          </div>

          {/* inline stat strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-16 rounded-2xl overflow-hidden border border-white/[0.06]">
            {[
              { value: "4A", label: "Security Framework" },
              { value: "100+", label: "Enterprise Customers" },
              { value: "6+", label: "Continents Covered" },
              { value: "99.99%", label: "Uptime SLA" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center px-6 py-7 bg-[#0A1628]/60 hover:bg-[#0A1628] transition-colors"
              >
                <div className="stat-number mb-1">{s.value}</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B8FF]/25 to-transparent" />
      </section>

      {/* ── MISSION ──────────────────────────── */}
      <section className="section-padding-lg">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge-cyan mb-6">Our Mission</div>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Closing the Gap in{" "}
                <span className="text-gradient">Privileged Access Control</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Privileged accounts are the highest-value target in any enterprise
                  environment. Compromised credentials and unmonitored sessions sit at
                  the root of the majority of serious security breaches — yet most
                  organisations still lack the visibility and control needed to stop them.
                </p>
                <p>
                  OmniPriv exists to change that. We give security and IT teams a single
                  platform to discover, manage, and audit every privileged identity across
                  their environment — on-premises, cloud, or hybrid — with the depth and
                  reliability that regulated industries demand.
                </p>
                <p>
                  From automated credential rotation and zero-standing-privilege policies
                  to full session recording and real-time threat analytics, OmniPriv turns
                  privileged access from an unmanaged liability into a measurable,
                  auditable control.
                </p>
              </div>
            </div>

            {/* visual feature bullets */}
            <div className="space-y-4">
              {[
                { icon: Shield, title: "Attack Surface Reduction", body: "Eliminate standing privileges and lateral movement paths that attackers routinely exploit." },
                { icon: Eye, title: "Complete Audit Visibility", body: "Every privileged action is recorded, timestamped, and stored in tamper-proof audit logs." },
                { icon: Globe, title: "Hybrid-Ready by Design", body: "Covers on-premises servers, cloud VMs, containers, SaaS, and OT — from a single console." },
                { icon: Users, title: "Frictionless for Operators", body: "Approval workflows and JIT access keep security tight without slowing down IT operations." },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.05] bg-[#0A1628]/60 hover:border-[#00B8FF]/20 transition-all group"
                >
                  <div className="icon-wrapper w-10 h-10 rounded-lg flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{title}</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────── */}
      <section className="section-padding border-y border-white/[0.04] bg-[#0A1628]/30">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="badge-cyan mb-5">Platform Capabilities</div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Everything You Need to{" "}
              <span className="text-gradient">Manage Privileged Access</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              OmniPriv covers the full PAM lifecycle — from discovery and vaulting to
              session control, threat detection, and compliance reporting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-7 rounded-2xl border border-white/[0.06] bg-[#0A1628]/60 group hover:border-[#00B8FF]/25 transition-all duration-300 card-shine relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B8FF]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="icon-wrapper w-11 h-11 rounded-xl mb-5">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-base font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OMNIPRIV ─────────────────────── */}
      <section className="section-padding-lg">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* checklist */}
            <div>
              <div className="badge-cyan mb-6">Why OmniPriv</div>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-8"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Designed for the Demands of{" "}
                <span className="text-gradient">Enterprise Environments</span>
              </h2>
              <ul className="space-y-4">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00B8FF] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* visual card stack */}
            <div className="relative">
              {/* glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(0,184,255,0.08) 0%, transparent 70%)" }}
              />
              <div className="relative space-y-4">
                {[
                  { label: "Credential Vault Coverage", pct: 100 },
                  { label: "Session Recording Fidelity", pct: 100 },
                  { label: "Compliance Framework Support", pct: 95 },
                  { label: "Integration Ecosystem", pct: 90 },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl border border-white/[0.06] bg-[#0A1628]/70"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                      <span className="text-xs font-bold text-[#00B8FF]">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: item.pct + "%",
                          background: "linear-gradient(90deg, #00B8FF, #6366f1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────── */}
      <section className="section-padding border-y border-white/[0.04] bg-[#0A1628]/30">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-cyan mb-5">Our Values</div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What We Stand For
            </h2>
            <p className="text-slate-400">
              The principles that guide every product decision, every customer interaction,
              and every line of code we ship.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="relative p-7 rounded-2xl border border-white/[0.06] bg-[#0A1628]/60 text-center group hover:border-[#00B8FF]/25 transition-all duration-300 card-shine overflow-hidden"
              >
                {/* top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[2px] rounded-b-full bg-gradient-to-r from-[#00B8FF]/0 via-[#00B8FF]/50 to-[#00B8FF]/0 group-hover:via-[#00B8FF] transition-all" />
                <div className="relative">
                  <div className="icon-wrapper w-12 h-12 mx-auto mb-5 rounded-xl">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-base font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICES ──────────────────────────── */}
      <section className="section-padding-lg">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-cyan mb-5">Where We Are</div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Global Presence,{" "}
              <span className="text-gradient">Local Expertise</span>
            </h2>
            <p className="text-slate-400">
              OmniPriv operates across multiple regions to support enterprise customers
              wherever they are in the world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {offices.map((office) => (
              <div
                key={office.name}
                className="relative p-8 rounded-2xl border border-white/[0.07] bg-[#0A1628]/60 hover:border-[#00B8FF]/25 transition-all duration-300 group overflow-hidden card-shine"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00B8FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="icon-wrapper w-11 h-11 rounded-xl">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#00B8FF] uppercase tracking-wider mb-0.5">{office.region}</div>
                      <div className="text-base font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>{office.name}</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    <p>{office.address}</p>
                    <p>{office.city}</p>
                    <p className="text-slate-500">{office.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="mailto:info@omnipriv.com"
              className="inline-flex items-center gap-2 text-sm text-[#00B8FF] hover:text-white font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@omnipriv.com
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="container-xl">
          <div className="relative p-10 md:p-14 rounded-3xl border border-[#00B8FF]/15 bg-gradient-to-br from-[#0A1628] to-[#030711] overflow-hidden">
            {/* bg depth */}
            <div
              className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at bottom right, rgba(124,58,237,0.12) 0%, transparent 65%)" }}
            />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="badge-cyan mb-5">Get Started</div>
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-white mb-3"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Ready to Secure Your Critical Infrastructure?
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Talk to our team and see how OmniPriv can eliminate
                  privilege-based risk across your environment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Link href="/demo" className="btn-primary">
                  Schedule a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:info@omnipriv.com"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
