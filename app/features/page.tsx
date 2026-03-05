import type { Metadata } from "next";
import Link from "next/link";
import {
  UserCheck, Lock, Key, Eye, CheckCircle2, ArrowRight,
  Shield, Fingerprint, Wifi, RefreshCw, Database, Server,
  Monitor, Globe, Layers, Clock, Workflow, BarChart3,
  FileSearch, Network, AlertTriangle, Zap, Cpu, Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Complete PAM Capabilities",
  description:
    "Explore OmniPriv's full feature set: Multi-factor authentication, RBAC, JIT access, credential vaulting, session recording, and compliance reporting for enterprise environments.",
};

const authFeatures = [
  { icon: Shield, title: "Built-in CAPTCHA", desc: "Configurable CAPTCHA protects login pages from automated brute-force attacks." },
  { icon: Wifi, title: "LDAP / AD Integration", desc: "Bidirectional sync with Active Directory and LDAP directories. Automatic user and group provisioning." },
  { icon: Zap, title: "Single Sign-On (SSO)", desc: "SAML 2.0, OAuth 2.0, and OpenID Connect support for seamless enterprise identity integration." },
  { icon: Fingerprint, title: "Multi-Factor Authentication", desc: "TOTP (Google Authenticator), FIDO2/WebAuthn hardware keys, SMS/email OTP, and push notifications." },
  { icon: Globe, title: "RADIUS Support", desc: "Manage network device authentication through the industry-standard RADIUS protocol." },
  { icon: Clock, title: "Conditional Access", desc: "Context-aware policies based on user location, device posture, time of day, and risk score." },
];

const authzFeatures = [
  { icon: Lock, title: "Role-Based Access Control (RBAC)", desc: "Fine-grained permission model with custom roles, assignable at the organization, project, or asset level." },
  { icon: Clock, title: "Just-In-Time (JIT) Access", desc: "Provision time-limited access for specific tasks. Access expires automatically—no standing privileges." },
  { icon: Globe, title: "IP & Time-Based ACLs", desc: "Restrict access by source IP range, day of week, and time window to enforce least-privilege policies." },
  { icon: Building2, title: "Multi-Tenant Architecture", desc: "Full resource isolation with per-organization policies, users, and assets. Ideal for MSSPs and enterprises with subsidiaries." },
  { icon: Workflow, title: "Approval Workflows", desc: "Require manager or peer approval before sensitive access is granted. Integrate with ITSM platforms." },
  { icon: AlertTriangle, title: "Command-Level Controls", desc: "Whitelist or blacklist specific shell commands for SSH sessions. Block dangerous operations in real time." },
];

const accountFeatures = [
  { icon: FileSearch, title: "Asset & Account Discovery", desc: "Automatically discover privileged accounts across your entire infrastructure — on-prem, cloud, and hybrid." },
  { icon: RefreshCw, title: "Credential Rotation", desc: "Rotate passwords, SSH keys, and API tokens on a schedule or on-demand, for thousands of assets simultaneously." },
  { icon: Database, title: "Encrypted Credential Vault", desc: "Store credentials with AES-256 encryption. No user ever sees raw passwords — they authenticate through OmniPriv." },
  { icon: Server, title: "Credential Push", desc: "Push updated credentials directly to target assets after rotation. No manual steps, no outages." },
  { icon: Key, title: "Break-Glass Access", desc: "Emergency access procedures with mandatory approval, time limits, and full session recording." },
  { icon: Layers, title: "Account Lifecycle Management", desc: "Provision, deprovision, and modify privileged accounts across all systems from a single control plane." },
];

const auditFeatures = [
  { icon: Monitor, title: "HD Session Recording", desc: "Record every privileged session in text (searchable) or video format. Replay any session from any point in time." },
  { icon: Eye, title: "Real-Time Session Monitoring", desc: "Watch live sessions, send notifications to users, or terminate suspicious sessions in one click." },
  { icon: BarChart3, title: "Analytics Dashboards", desc: "Executive-level risk dashboards showing access patterns, anomalies, and compliance status." },
  { icon: FileSearch, title: "Command History", desc: "Full keystroke logging and command execution history for every SSH and terminal session." },
  { icon: Network, title: "SIEM Integration", desc: "Stream all events to Splunk, IBM QRadar, Elastic SIEM, or any syslog-compatible system." },
  { icon: Shield, title: "Compliance Reports", desc: "One-click audit reports pre-formatted for SOC 2, ISO 27001, PCI-DSS, HIPAA, and more." },
];

const protocolSupport = [
  { protocol: "SSH / SFTP", category: "Linux & Unix", color: "bg-blue-500/10 border-blue-500/20 text-blue-400" },
  { protocol: "RDP", category: "Windows", color: "bg-purple-500/10 border-purple-500/20 text-purple-400" },
  { protocol: "VNC", category: "Desktop", color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400" },
  { protocol: "Telnet / Serial", category: "Network Devices", color: "bg-orange-500/10 border-orange-500/20 text-orange-400" },
  { protocol: "MySQL", category: "Database", color: "bg-teal-500/10 border-teal-500/20 text-teal-400" },
  { protocol: "PostgreSQL", category: "Database", color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
  { protocol: "Oracle DB", category: "Database", color: "bg-red-500/10 border-red-500/20 text-red-400" },
  { protocol: "SQL Server", category: "Database", color: "bg-pink-500/10 border-pink-500/20 text-pink-400" },
  { protocol: "MongoDB", category: "Database", color: "bg-green-500/10 border-green-500/20 text-green-400" },
  { protocol: "Redis", category: "Database", color: "bg-rose-500/10 border-rose-500/20 text-rose-400" },
  { protocol: "Kubernetes", category: "Cloud Native", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" },
  { protocol: "Web Apps", category: "Web Access", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" },
  { protocol: "RemoteApp", category: "Applications", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400" },
  { protocol: "AWS", category: "Cloud", color: "bg-amber-500/10 border-amber-500/20 text-amber-400" },
  { protocol: "Azure", category: "Cloud", color: "bg-blue-500/10 border-blue-500/20 text-blue-400" },
  { protocol: "GCP", category: "Cloud", color: "bg-red-500/10 border-red-500/20 text-red-300" },
];

const comparisonRows = [
  { feature: "Bastion Host / Jump Server", basic: true, standard: true, professional: true, enterprise: true },
  { feature: "SSH / RDP / VNC Access", basic: true, standard: true, professional: true, enterprise: true },
  { feature: "Database Proxy", basic: true, standard: true, professional: true, enterprise: true },
  { feature: "Multi-Factor Authentication", basic: true, standard: true, professional: true, enterprise: true },
  { feature: "Session Recording", basic: true, standard: true, professional: true, enterprise: true },
  { feature: "LDAP / AD Integration", basic: "50 users", standard: true, professional: true, enterprise: true },
  { feature: "Single Sign-On (SSO)", basic: false, standard: true, professional: true, enterprise: true },
  { feature: "RBAC & Custom Roles", basic: false, standard: true, professional: true, enterprise: true },
  { feature: "Just-In-Time Access", basic: false, standard: false, professional: true, enterprise: true },
  { feature: "Credential Rotation", basic: false, standard: true, professional: true, enterprise: true },
  { feature: "Multi-Tenant / Multi-Org", basic: false, standard: false, professional: true, enterprise: true },
  { feature: "Kubernetes Access", basic: false, standard: true, professional: true, enterprise: true },
  { feature: "Approval Workflows", basic: false, standard: false, professional: true, enterprise: true },
  { feature: "SIEM Integration", basic: false, standard: false, professional: true, enterprise: true },
  { feature: "High Availability Cluster", basic: false, standard: "Active-Standby", professional: "Active-Standby", enterprise: "Full HA" },
  { feature: "Custom Branding & Theme", basic: false, standard: false, professional: true, enterprise: true },
  { feature: "Dedicated Support SLA", basic: false, standard: false, professional: "Business hours", enterprise: "24/7 Priority" },
  { feature: "Professional Services", basic: false, standard: false, professional: false, enterprise: true },
];

function CheckOrText({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 className="w-4 h-4 text-[#00B8FF] mx-auto" />;
  if (value === false) return <span className="text-slate-600 text-lg mx-auto block text-center">—</span>;
  return <span className="text-xs text-slate-400 text-center block">{value as string}</span>;
}

function FeatureSection({
  id, icon: Icon, title, subtitle, description, features, reverse = false,
}: {
  id: string; icon: React.ElementType; title: string; subtitle: string; description: string;
  features: { icon: React.ElementType; title: string; desc: string }[]; reverse?: boolean;
}) {
  return (
    <div id={id} className="scroll-mt-24 section-padding border-b border-white/[0.04]">
      <div className="container-xl">
        <div className={`grid lg:grid-cols-2 gap-16 items-start ${reverse ? "lg:grid-flow-dense" : ""}`}>
          <div className={reverse ? "lg:col-start-2" : ""}>
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-wrapper w-12 h-12 rounded-xl">
                <Icon className="w-6 h-6" />
              </div>
              <div className="badge-cyan">{subtitle}</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              {title}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">{description}</p>

          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            {features.map((f) => (
              <div key={f.title} className="p-5 rounded-xl border border-white/[0.06] bg-[#0A1628]/60 hover:border-[#00B8FF]/20 transition-all group card-shine">
                <div className="icon-wrapper w-10 h-10 rounded-lg mb-3">
                  <f.icon className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white mb-1.5" style={{ fontFamily: "var(--font-syne)" }}>{f.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-white/[0.04] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030711]" />
        <div className="container-xl relative z-10 text-center">
          <div className="badge-cyan mb-6 inline-flex mx-auto">Platform Features</div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-syne)" }}>
            Complete <span className="text-gradient">PAM Feature Set</span> for Modern Enterprises
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Every capability your security team needs to manage privileged access, protect sensitive systems, and maintain continuous compliance — in one unified platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo" className="btn-primary text-base px-8 py-3.5">
              Talk to Sales <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#comparison" className="btn-secondary text-base px-8 py-3.5">
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Protocol Support */}
      <section className="py-12 border-b border-white/[0.04] bg-[#0A1628]/30">
        <div className="container-xl">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Supported Protocols & Asset Types
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {protocolSupport.map((p) => (
              <span key={p.protocol} className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold ${p.color}`}>
                {p.protocol}
                <span className="ml-1.5 opacity-60">({p.category})</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <FeatureSection
        id="authentication"
        icon={UserCheck}
        title="Authentication — Verify Every Identity"
        subtitle="01 — Authentication"
        description="Block unauthorized access with enterprise-grade identity verification. OmniPriv integrates seamlessly with your existing identity infrastructure while adding layers of protection that prevent credential abuse, account takeovers, and unauthorized entry."
        features={authFeatures}
      />

      {/* Authorization */}
      <FeatureSection
        id="authorization"
        icon={Lock}
        title="Authorization — Enforce Least Privilege"
        subtitle="02 — Authorization"
        description="Prevent internal misuse and privilege escalation with granular access controls. Every access decision is policy-driven, time-limited, and fully logged — giving your security team complete control over who can do what, where, and when."
        features={authzFeatures}
        reverse
      />

      {/* Account Management */}
      <FeatureSection
        id="account"
        icon={Key}
        title="Account Management — Full Credential Lifecycle"
        subtitle="03 — Account Management"
        description="Eliminate the credential hygiene problem that plagues enterprise IT. OmniPriv automates every aspect of privileged account management — from discovery to rotation to deprovisioning — so your team focuses on security, not manual credential tasks."
        features={accountFeatures}
      />

      {/* Audit */}
      <FeatureSection
        id="audit"
        icon={Eye}
        title="Audit & Compliance — Full Traceability"
        subtitle="04 — Audit & Compliance"
        description="Every privileged action leaves a permanent, tamper-proof record in OmniPriv. Compliance teams can generate audit reports in minutes, security teams can investigate incidents in real time, and executives get the visibility they need to manage risk."
        features={auditFeatures}
        reverse
      />

      {/* Comparison Table */}
      <section id="comparison" className="section-padding scroll-mt-24">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-cyan mb-5">Plan Comparison</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              Find the Right Plan for Your Organization
            </h2>
            <p className="text-slate-400">
              All plans are enterprise-grade. Contact our team for custom pricing tailored to your infrastructure.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] overflow-hidden overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="w-1/3 text-left">Feature</th>
                  {["Basic", "Standard", "Professional", "Enterprise"].map((plan) => (
                    <th key={plan} className="text-center">
                      <div className="text-[#00B8FF]">{plan}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="font-medium text-slate-300">{row.feature}</td>
                    <td className="text-center"><CheckOrText value={row.basic} /></td>
                    <td className="text-center"><CheckOrText value={row.standard} /></td>
                    <td className="text-center"><CheckOrText value={row.professional} /></td>
                    <td className="text-center"><CheckOrText value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link href="/demo" className="btn-primary text-base px-8 py-3.5">
              Contact Us for Custom Pricing <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
