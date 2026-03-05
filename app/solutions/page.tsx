import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark, Heart, Cpu, LayoutGrid, Building2, Globe,
  ArrowRight, CheckCircle2, Shield, Lock, Eye, Key, UserCheck,
  Server, Database, Network, BarChart3, Workflow, Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — PAM by Industry & Use Case",
  description:
    "OmniPriv delivers purpose-built PAM solutions for financial services, healthcare, manufacturing, technology, and government sectors. Secure privileged access at enterprise scale.",
};

const industries = [
  {
    id: "finance",
    icon: Landmark,
    name: "Financial Services",
    subtitle: "PCI-DSS · SOX · Basel III",
    color: "from-blue-500/15 to-cyan-500/5",
    border: "border-blue-500/15",
    accentColor: "text-blue-400",
    description:
      "Financial institutions face some of the most stringent regulatory requirements in the world. OmniPriv helps banks, investment firms, and insurance companies achieve and maintain compliance while reducing privileged access risk.",
    challenges: [
      "Hundreds of critical financial systems requiring controlled access",
      "PCI-DSS mandating strict access controls and session logging",
      "SOX compliance requiring full audit trails for all privileged actions",
      "Insider threat risk from privileged administrators",
    ],
    benefits: [
      "PCI-DSS compliant privileged access controls out-of-the-box",
      "SOX-ready audit trails and session recordings",
      "Just-In-Time access eliminates standing privileges",
      "Automated credential rotation for financial systems",
      "Real-time SOC integration for rapid incident response",
      "Multi-factor authentication on all privileged sessions",
    ],
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare",
    subtitle: "HIPAA · HITECH · HITRUST",
    color: "from-rose-500/15 to-pink-500/5",
    border: "border-rose-500/15",
    accentColor: "text-rose-400",
    description:
      "Healthcare organizations must protect patient data while giving clinical and IT staff fast, secure access to life-critical systems. OmniPriv balances access speed with airtight security controls.",
    challenges: [
      "HIPAA mandating strict controls on PHI access",
      "Diverse infrastructure: EHR systems, medical devices, cloud workloads",
      "High staff turnover requiring rapid account provisioning and deprovisioning",
      "Legacy systems that cannot support modern authentication protocols",
    ],
    benefits: [
      "HIPAA-compliant session auditing and access controls",
      "Secure access to EHR systems without exposing credentials",
      "Rapid on/offboarding for clinical staff",
      "Break-glass emergency access with mandatory audit trail",
      "Medical device access management",
      "Automated compliance reporting for OCR audits",
    ],
  },
  {
    id: "manufacturing",
    icon: Cpu,
    name: "Manufacturing & OT",
    subtitle: "ICS / SCADA · NERC CIP · IEC 62443",
    color: "from-orange-500/15 to-amber-500/5",
    border: "border-orange-500/15",
    accentColor: "text-orange-400",
    description:
      "Manufacturing environments bridge IT and OT networks, creating complex security challenges. OmniPriv provides secure, audited access to industrial control systems without disrupting operations.",
    challenges: [
      "Converging IT and OT networks creating new attack surfaces",
      "Legacy SCADA and ICS systems with limited authentication capabilities",
      "Third-party vendor access to critical manufacturing systems",
      "NERC CIP compliance for energy sector facilities",
    ],
    benefits: [
      "Secure third-party vendor access with full session recording",
      "Jump server for OT/ICS network segmentation",
      "NERC CIP and IEC 62443 compliance controls",
      "Agentless deployment on legacy OT systems",
      "Time-limited access windows for maintenance operations",
      "Operational continuity with high-availability deployment",
    ],
  },
  {
    id: "technology",
    icon: LayoutGrid,
    name: "Technology & DevOps",
    subtitle: "Cloud Security · CI/CD · DevSecOps",
    color: "from-purple-500/15 to-indigo-500/5",
    border: "border-purple-500/15",
    accentColor: "text-purple-400",
    description:
      "Technology companies move fast — but speed cannot come at the cost of security. OmniPriv integrates with modern DevOps toolchains to provide security guardrails without slowing down engineering teams.",
    challenges: [
      "Dynamic cloud infrastructure with constantly changing assets",
      "Secrets embedded in code, CI/CD pipelines, and containers",
      "Kubernetes clusters requiring granular, time-limited access",
      "Rapid team growth requiring scalable access management",
    ],
    benefits: [
      "Native Kubernetes pod access management",
      "Secrets management and injection for CI/CD pipelines",
      "Cloud asset auto-discovery for AWS, Azure, GCP",
      "JIT access for production environment changes",
      "Developer-friendly web terminal — no VPN or SSH clients",
      "API-first platform for DevOps automation",
    ],
  },
  {
    id: "government",
    icon: Building2,
    name: "Government & Public Sector",
    subtitle: "FedRAMP · FISMA · NIST 800-53",
    color: "from-teal-500/15 to-emerald-500/5",
    border: "border-teal-500/15",
    accentColor: "text-teal-400",
    description:
      "Government agencies require the highest levels of security, availability, and compliance. OmniPriv's FedRAMP-ready architecture meets federal security requirements while delivering the performance agencies demand.",
    challenges: [
      "FISMA compliance requiring comprehensive access controls",
      "Inter-agency access coordination with strict separation of duties",
      "On-premises deployment requirements for classified environments",
      "Air-gapped network support for sensitive installations",
    ],
    benefits: [
      "FedRAMP Ready architecture and controls",
      "NIST 800-53 and 800-171 compliant access controls",
      "Air-gapped and on-premises deployment support",
      "CAC / PIV smart card authentication",
      "Separation of duties and dual-control access",
      "FISMA-ready audit reporting",
    ],
  },
  {
    id: "enterprise",
    icon: Globe,
    name: "Global Enterprise",
    subtitle: "Multi-Region · Multi-Tenant · Scale",
    color: "from-cyan-500/15 to-blue-500/5",
    border: "border-cyan-500/15",
    accentColor: "text-cyan-400",
    description:
      "Large enterprises with global footprints need a PAM platform that scales to tens of thousands of assets across multiple regions and business units — without sacrificing performance or control.",
    challenges: [
      "Thousands of assets across dozens of geographies",
      "Multiple business units with separate security policies",
      "High-availability requirements for critical operations",
      "Complex compliance requirements across multiple jurisdictions",
    ],
    benefits: [
      "Horizontally scalable to millions of concurrent sessions",
      "Multi-region active-active deployment",
      "Multi-tenant architecture with per-org isolation",
      "Global compliance coverage (GDPR, CCPA, PDPA, etc.)",
      "Dedicated enterprise support with SLA guarantees",
      "Custom integrations and professional services",
    ],
  },
];

const useCases = [
  {
    icon: Server,
    title: "Remote & Third-Party Access",
    description:
      "Securely onboard contractors, vendors, and remote employees without giving them VPN access. OmniPriv grants time-limited, monitored access to exactly the systems they need — nothing more.",
    features: ["No VPN required", "Vendor session recording", "JIT access provisioning", "Automatic access expiry"],
  },
  {
    icon: Database,
    title: "Database Access Management",
    description:
      "Grant database access without ever exposing connection strings, passwords, or credentials. All database sessions are proxied, logged, and searchable — giving DBAs access and auditors traceability.",
    features: ["MySQL, PostgreSQL, Oracle, SQL Server", "Query-level audit logging", "Credential-free database access", "Real-time SQL monitoring"],
  },
  {
    icon: Network,
    title: "Cloud & Multi-Cloud Security",
    description:
      "Manage privileged access to cloud infrastructure across AWS, Azure, GCP, and private clouds from a single platform. Auto-discover cloud assets and enforce consistent access policies everywhere.",
    features: ["Multi-cloud asset discovery", "IAM role integration", "Cloud console access control", "Cloud-native deployment options"],
  },
  {
    icon: Workflow,
    title: "DevOps & Pipeline Security",
    description:
      "Secure your CI/CD pipelines without slowing down development. Inject secrets dynamically, control production access with JIT, and audit every deployment activity.",
    features: ["Secrets injection for CI/CD", "Kubernetes access proxy", "Production change approvals", "Developer-friendly API"],
  },
  {
    icon: BarChart3,
    title: "Compliance & Audit Management",
    description:
      "Turn weeks of audit preparation into hours. OmniPriv automatically collects, correlates, and formats the data your auditors need for SOC 2, ISO 27001, PCI-DSS, HIPAA, and more.",
    features: ["One-click audit reports", "Continuous compliance monitoring", "Evidence artifact generation", "Automated control testing"],
  },
  {
    icon: Zap,
    title: "Incident Response & Forensics",
    description:
      "When a security incident occurs, OmniPriv gives your team instant access to complete session recordings, command logs, and user activity timelines to identify the root cause and remediate fast.",
    features: ["Full session playback", "Command execution timeline", "User activity correlation", "SIEM alert integration"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-white/[0.04] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030711]" />
        <div className="container-xl relative z-10 text-center">
          <div className="badge-cyan mb-6 inline-flex mx-auto">Solutions</div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-syne)" }}>
            PAM Solutions for <span className="text-gradient">Every Industry</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Whether you're in banking, healthcare, manufacturing, or government — OmniPriv delivers purpose-built privileged access management tailored to your compliance requirements and operational needs.
          </p>
          <Link href="/demo" className="btn-primary text-base px-8 py-3.5">
            Request an Industry Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding-lg">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="badge-cyan mb-5">By Industry</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              Purpose-Built for Your Sector's Requirements
            </h2>
            <p className="text-slate-400 text-lg">
              Each industry faces unique compliance mandates, threat landscapes, and operational constraints. OmniPriv adapts to all of them.
            </p>
          </div>

          <div className="space-y-8">
            {industries.map((industry, idx) => (
              <div
                key={industry.id}
                id={industry.id}
                className={`relative rounded-2xl border ${industry.border} overflow-hidden scroll-mt-24`}
                style={{ background: "rgba(10,22,40,0.7)" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-50`} />
                <div className="relative z-10 p-8 md:p-10">
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                    <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="icon-wrapper">
                          <industry.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${industry.accentColor}`}>
                            {industry.subtitle}
                          </div>
                          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                            {industry.name}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-400 leading-relaxed mb-6">{industry.description}</p>
                      <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">Key Challenges</h4>
                      <ul className="space-y-2 mb-6">
                        {industry.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-sm text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0 mt-2" />
                            {c}
                          </li>
                        ))}
                      </ul>
                      <Link href="/demo" className="btn-primary text-sm">
                        Request {industry.name} Demo <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className={idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
                        How OmniPriv Helps
                      </h4>
                      <div className="space-y-3">
                        {industry.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-[#00B8FF]/15 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-[#00B8FF] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding border-t border-white/[0.04] bg-[#0A1628]/30">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="badge-cyan mb-5">By Use Case</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              <span className="text-gradient">Common PAM Scenarios</span> We Solve
            </h2>
            <p className="text-slate-400 text-lg">
              From third-party vendor access to CI/CD pipeline secrets — OmniPriv has a solution for every privileged access challenge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="p-6 rounded-2xl border border-white/[0.06] bg-[#0A1628]/60 hover:border-[#00B8FF]/20 transition-all card-shine group">
                <div className="icon-wrapper mb-5">
                  <uc.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>{uc.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{uc.description}</p>
                <div className="space-y-1.5">
                  {uc.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-[#00B8FF]" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="relative rounded-3xl overflow-hidden border border-[#00B8FF]/15 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#030711]" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00B8FF]/40 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Not Sure Which Solution Fits Your Needs?
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Talk to a PAM expert who understands your industry. We'll walk you through a customized solution architecture for your specific environment.
              </p>
              <Link href="/demo" className="btn-primary text-base px-8 py-3.5">
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
