# OmniPriv Website — Project Plan

## Overview
OmniPriv is a **premium, enterprise-grade Privileged Access Management (PAM)** solution. This website positions OmniPriv as the go-to PAM platform for Fortune 500 companies, driving demo requests and enterprise sales conversations.

---

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Fonts | Syne (headings) + Inter (body) via `next/font/google` |
| SEO | Next.js Metadata API, JSON-LD, Open Graph |
| Deployment | Vercel / AWS / Node.js |

---

## Color Scheme
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#00B8FF` | CTAs, highlights, icons |
| Primary Dark | `#0090CD` | Hover states |
| Background | `#030711` | Page background |
| Surface | `#0A1628` | Cards |
| Surface 2 | `#0F1E35` | Elevated cards |
| Border | `rgba(255,255,255,0.08)` | Card borders |
| Text | `#E2E8F0` | Body text |
| Muted | `#94A3B8` | Secondary text |
| Danger | `#FF4D4F` | Error states |
| Success | `#52C41A` | Success states |

---

## Site Architecture

### Pages
```
/ ...................... Homepage
/features ............. Product Features (4 Pillars)
/solutions ............ Solutions by Industry & Use Case
/enterprise ........... Enterprise Plans (Contact for Pricing)
/security ............. Security & Compliance Center
/integrations ......... Integrations & Ecosystem
/docs ................. Documentation Hub
/blog ................. Blog & Resources
/case-studies ......... Customer Success Stories
/about ................ About OmniPriv
/demo ................. Request a Demo (Primary CTA)
/privacy-policy ....... Privacy Policy
/terms ................ Terms of Service
```

### Navigation Structure
```
[Logo]  Products ▾  Solutions ▾  Enterprise  Resources ▾  About    [Request Demo]
        Features    By Industry  Pricing      Docs                    (CTA Button)
        Security    By Use Case  Support      Blog
        Integrations             SLA          Case Studies
```

---

## Page-by-Page Plan

### Homepage (`/`)
1. **Hero** — "Zero-Trust Privileged Access Management for the Enterprise" + Demo CTA
2. **Stats Strip** — 500,000+ deployments | 3,000+ enterprise customers | 99.9% uptime | 50+ integrations
3. **Trusted By** — Scrolling logo marquee (Microsoft, Siemens, Tencent, Ford, Deloitte, etc.)
4. **The Four Pillars** — Authentication | Authorization | Account Management | Audit & Compliance
5. **Features Grid** — 8-12 feature cards (Bastion Host, MFA/SSO, Session Recording, JIT Access…)
6. **How It Works** — 3-step visual flow
7. **Compliance** — SOC2, ISO 27001, GDPR, HIPAA, PCI-DSS badges
8. **Testimonials** — 3 enterprise customer quotes with avatar/company
9. **Blog Preview** — 3 latest articles
10. **Demo CTA** — Full-width banner with form link

### Features (`/features`)
- Authentication deep-dive
- Authorization deep-dive
- Account Management deep-dive
- Audit & Compliance deep-dive
- Feature comparison table

### Solutions (`/solutions`)
- By Industry: Finance, Healthcare, Manufacturing, Technology, Government
- By Use Case: Remote Access Security, Cloud & Multi-Cloud, DevOps Security, Compliance & Audit

### Enterprise (`/enterprise`)
- Enterprise overview
- Plan tiers (Basic / Standard / Professional / Enterprise)
- All CTAs → "Contact Sales" / "Request a Demo"
- Feature comparison table
- SLA details
- Dedicated support

### Security (`/security`)
- Zero-Trust Architecture
- End-to-End Encryption
- Compliance Certifications
- Vulnerability Disclosure
- Pen Test Results

### Docs (`/docs`)
- Quick Start
- Architecture Overview
- API Reference
- Integrations
- Deployment Guides

### Blog (`/blog`)
- Article listing with categories
- Featured article
- Newsletter signup

### About (`/about`)
- Company story & mission
- Core values
- Leadership team
- Partners & certifications
- Careers link

### Demo (`/demo`) — PRIMARY CTA
- Demo request form: Name, Work Email, Phone, Company, Title, Company Size, Message
- What to expect after submission
- Contact details

---

## Key Brand Rules
- ❌ NO GitHub links or open-source references
- ❌ NO free download buttons
- ❌ NO community edition references
- ✅ All CTAs → "Request a Demo" or "Contact Sales"
- ✅ Enterprise-first messaging
- ✅ Premium, paid solution positioning
- ✅ Security-first language throughout

---

## SEO Strategy
- Metadata API with per-page title/description
- JSON-LD structured data (Organization, SoftwareApplication, FAQPage)
- Semantic HTML5 landmarks
- Open Graph & Twitter Card tags
- Canonical URLs
- robots.txt + sitemap.xml

---

## Development Checklist
- [x] Plan complete
- [ ] Next.js project scaffolded
- [ ] Tailwind configured with brand tokens
- [ ] Header & Footer components
- [ ] Homepage all sections
- [ ] Features page
- [ ] Solutions page
- [ ] Enterprise page
- [ ] Security page
- [ ] Docs page
- [ ] Blog page
- [ ] About page
- [ ] Demo page
- [ ] Privacy & Terms pages
- [ ] SEO metadata on all pages
- [ ] Responsive on mobile/tablet/desktop
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance audit (Core Web Vitals)
