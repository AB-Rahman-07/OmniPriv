"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";

const productLinks = [
  { label: "Authentication & MFA", href: "/features#authentication" },
  { label: "Authorization & RBAC", href: "/features#authorization" },
  { label: "Account Management", href: "/features#account" },
  { label: "Session Auditing", href: "/features#audit" },
  { label: "Credential Vault", href: "/features#vault" },
  { label: "Just-In-Time Access", href: "/features#jit" },
  { label: "Integrations", href: "/integrations" },
];

const solutionLinks = [
  { label: "Financial Services", href: "/solutions#finance" },
  { label: "Healthcare", href: "/solutions#healthcare" },
  { label: "Manufacturing & OT", href: "/solutions#manufacturing" },
  { label: "Technology & DevOps", href: "/solutions#technology" },
  { label: "Government", href: "/solutions#government" },
  { label: "Global Enterprise", href: "/solutions#enterprise" },
];

const resourceLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Security Center", href: "/security" },
  { label: "API Reference", href: "/docs#api" },
];

const companyLinks = [
  { label: "About OmniPriv", href: "/about" },
  { label: "Enterprise Plans", href: "/enterprise" },
  { label: "Request a Demo", href: "/demo" },
  { label: "Contact Sales", href: "/demo" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const certBadges = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR",
  "HIPAA",
  "PCI-DSS",
  "FedRAMP Ready",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030711] border-t border-white/[0.06] overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00B8FF]/40 to-transparent" />

      {/* Newsletter bar */}
      <div className="border-b border-white/[0.06] bg-[#0A1628]/50">
        <div className="container-xl py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-white text-lg mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                Stay ahead of privilege-based threats
              </h3>
              <p className="text-slate-400 text-sm">
                Get PAM insights, security advisories, and best practices from our team.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Work email address"
                className="input-dark w-full md:w-72"
                autoComplete="email"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/omnipriv-logo-white.webp"
                alt="OmniPriv"
                width={160}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise Privileged Access Management. Secure, audit, and control every privileged session across your hybrid infrastructure.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-8">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/[0.08] hover:border-[#00B8FF]/40 flex items-center justify-center text-slate-400 hover:text-[#00B8FF] transition-all duration-200 hover:bg-[#00B8FF]/[0.08]"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-2.5">
              {[
                { Icon: Mail, text: "sales@OmniPriv.com", href: "mailto:sales@OmniPriv.com" },
                { Icon: Phone, text: "+1 (800) 555-0199", href: "tel:+18005550199" },
                { Icon: MapPin, text: "San Francisco, CA", href: "#" },
              ].map(({ Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-[#00B8FF] transition-colors group/contact"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00B8FF]/60 group-hover/contact:text-[#00B8FF] transition-colors flex-shrink-0" />
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#00B8FF] transition-colors duration-200 flex items-center gap-1.5 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00B8FF]/30 group-hover/link:bg-[#00B8FF] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#00B8FF] transition-colors duration-200 flex items-center gap-1.5 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00B8FF]/30 group-hover/link:bg-[#00B8FF] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#00B8FF] transition-colors duration-200 flex items-center gap-1.5 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00B8FF]/30 group-hover/link:bg-[#00B8FF] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#00B8FF] transition-colors duration-200 flex items-center gap-1.5 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00B8FF]/30 group-hover/link:bg-[#00B8FF] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="mt-14 pt-8 border-t border-white/[0.05]">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-4">
            Certifications & Compliance
          </p>
          <div className="flex flex-wrap gap-2">
            {certBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 bg-[#00B8FF]/[0.07] border border-[#00B8FF]/15 rounded-full text-xs font-semibold text-[#00B8FF]/80"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 p-6 rounded-2xl border border-[#00B8FF]/15 bg-gradient-to-r from-[#00B8FF]/[0.06] to-[#0060FF]/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "var(--font-syne)" }}>
              Ready to secure your privileged access?
            </p>
            <p className="text-slate-400 text-sm">
              Talk to our PAM experts and get a personalized demo.
            </p>
          </div>
          <Link
            href="/demo"
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05] bg-[#020609]/60">
        <div className="container-xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} OmniPriv Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-[#00B8FF] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-slate-500 hover:text-[#00B8FF] transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-xs text-slate-500 hover:text-[#00B8FF] transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
