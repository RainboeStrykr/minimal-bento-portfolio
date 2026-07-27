# Deehan Paul — Portfolio &middot;

A minimal, pixel-perfect personal portfolio website for **Deehan Paul** showcasing work as a full-stack developer.

Live site — configured for deployment to Vercel with Next.js 16 (Turbopack).

![walkthrough](/walkthrough.mp4)

## Overview

This is a modern, animated Next.js portfolio featuring a bento-style home grid, an
Apple-style projects carousel, light/dark themes, Framer Motion animations, and
rich SEO metadata.

**About Deehan Paul:** 20 year-old developer based in Bhubaneshwar, India.
Building modern, animated web experiences with Next.js, TypeScript, and
Framer Motion.

### Tech Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v3** (with `tailwind-merge`, `tailwindcss-animate`)
- **Framer Motion** for animations & micro-interactions
- **shadcn/ui pattern** (CVA, Radix UI primitives, custom components under `components/ui/`)
- **next-themes** — Light / Dark mode toggle
- **Lucide React** & **Tabler Icons** — Icon libraries
- **@vercel/analytics** — Privacy-friendly analytics
- **Magic UI** — Bento grid, animated grid pattern, ripple, flickering grid, typing animation helpers

### Features

- Home page with a Bento grid (profile, tech stack, links, projects preview, music track, resume, tools, waveforms)
- Dedicated `/projects` route with an Apple-style cards carousel (clickable projects + GitHub links)
- Light / Dark theme with persisted preference (localStorage)
- Framer Motion entrance and hover animations throughout
- SEO & metadata configured for Deehan Paul (OpenGraph, Twitter/X cards, canonical URLs, robots directives)
- PWA-ready (web manifest + complete favicon set under `public/favicon/`)
- Privacy-friendly Vercel Analytics
- Clickable resume card linking to `/resume.pdf`

---

## Development

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS recommended — the project ships with Next 16 + React 19)
- [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/) or any compatible package manager
- [Git](https://git-scm.com/)

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/DeehanPaul123/<your-repo>.git
cd <your-repo>
```

#### 2. Install dependencies

```bash
pnpm install
# or
npm install
```

#### 3. Environment variables

This project does not require any environment variables out of the box.

If you later add integrations that need secrets (e.g. analytics IDs, custom
API keys), create a `.env.local` file at the repo root and add them there.
Next.js will pick them up automatically.

#### 4. Run the development server

```bash
pnpm dev
# or
npm run dev
```

The application will be available at **[http://localhost:3000](http://localhost:3000)**.

### Building for Production

```bash
pnpm build
# or
npm run build
```

Then start the production server with:

```bash
pnpm start
# or
npm run start
```

### Scripts

| Script | Description |
| ------ | ----------- |
| `pnpm dev` / `npm run dev` | Start the Next.js dev server (Turbopack) |
| `pnpm build` / `npm run build` | Create an optimized production build |
| `pnpm start` / `npm run start` | Start the production Next.js server |
| `pnpm lint` / `npm run lint` | Run ESLint across the project |

---

## License

Licensed under the **MIT License** — see [`LICENSE`](./LICENSE).

You're free to use this code! If you do, please **remove all of Deehan Paul's personal information** before publishing your own version (name, social handles, profile images, resume.pdf, project content, custom domain, analytics). Enjoy — it's awesome to see this code being useful!

---

## Contributing

Thank you for your interest in contributing!

### How to Contribute

#### Reporting bugs or suggesting features
- Open a **GitHub Issue** on this repository
- Use a clear, descriptive title + include steps to reproduce (for bugs) or concrete use-cases (for features)

#### Submitting changes

1. **Fork** the repository and clone your fork locally.
2. **Setup** — see [Development](#development) above for prerequisites and install steps.
3. Create a branch from `main` (e.g. `git checkout -b fix/typo-readme`).
4. Make your changes and ensure `pnpm lint` (or `npm run lint`) passes.
5. Commit with a clear message (e.g. `fix: correct link in footer`).
6. Push to your fork and open a **Pull Request** against `main`.
7. In the PR description: explain what changed, why, and link any related issues.

### Code of Conduct

This project follows the **Contributor Covenant, version 2.0**
(included in a shortened form below). By participating you are expected to
uphold this standard.

---

## Code of Conduct (Contributor Covenant v2.0 — Short Version)

### Our Pledge
We pledge to make participation in our community a harassment-free experience for
everyone — regardless of age, body size, visible or invisible disability, ethnicity,
sex characteristics, gender identity and expression, level of experience, education,
socio-economic status, nationality, personal appearance, race, religion, or sexual
identity and orientation.

### Our Standards
**Positive behavior:** empathy & kindness, respect for differing opinions,
gracefully accepting constructive feedback, taking responsibility, focusing on what
is best for the overall community.

**Unacceptable behavior:** sexualized language/imagery, trolling/insults/derogatory
comments, private or public harassment, publishing others' private information
without explicit permission, or any other conduct which could reasonably be
considered inappropriate in a professional setting.

### Reporting
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported
to the community leaders at **<deehanpaul456@gmail.com>**. All complaints will be
reviewed and investigated promptly and fairly. All community leaders are obligated
to respect the privacy and security of the reporter of any incident.

### Enforcement guidelines
Community leaders will follow these guidelines in determining consequences for any
action they deem in violation:
1. **Correction** — private written warning + (optional) public apology request
2. **Warning** — warning with consequences for continued behavior; no unsolicited
   interaction with those involved for a specified period
3. **Temporary Ban** — temporary ban from any public interaction in the community
4. **Permanent Ban** — permanent ban from any sort of public interaction within
   the community

*Full original text: [contributor-covenant.org/version/2/0/code_of_conduct.html](https://www.contributor-covenant.org/version/2/0/code_of_conduct.html)*

---

## Security Policy

### Supported versions
Security updates are released for the current `0.1.x` release line.

### Reporting a vulnerability

If you discover a security vulnerability please **do not** open a public GitHub issue.

Instead, contact privately via:

- **Email:** <deehanpaul456@gmail.com>

Include in your report:
- A clear description of the vulnerability
- Steps to reproduce (if applicable)
- Potential impact
- Any suggested fix (optional)

We will acknowledge your report as soon as possible and keep you updated on the
status of any fix. Thank you for helping keep the project and its users safe.

### Disclosure & update process
- We will assess and triage the report promptly
- Where appropriate we'll work on a fix and coordinate with you before public
  disclosure
- Security updates will be released as patch versions and documented via release
  notes / a security advisory

---

## Privacy Policy

**Last updated:** July 27, 2026

The website is a personal portfolio created and maintained by **Deehan Paul**
(“I”, “me”, or “my”). I respect your privacy and am committed to handling data
in a transparent, minimal, and secure way. This section summarizes what the site
collects, how it's used, and what rights you may have.

### 1. Data I collect

#### 1.1 Information you provide directly
- **Contact information** when you email me (email address + message content)
- **Other information** you voluntarily provide when communicating via the social
  channels linked on the site (GitHub, LinkedIn, Gmail)

This information is used **only** to respond and maintain communication. It is
never used for mass advertising or sold to third parties.

#### 1.2 Usage data
The system may automatically collect certain anonymous, aggregated data:
- **Vercel Analytics** — page views, referrer, country/region/city, device type,
  browser, and OS. This data is **not** tied to your identity or IP address and
  session data is discarded after 24 hours.
- **Hosting logs** — the hosting provider (Vercel) may log IP addresses and HTTP
  request data for operational, security, and performance purposes.

No attempt is made to link usage data to your real-world identity.

#### 1.3 Local storage & cookies
- **Local storage** is used only to save your **theme preference** (light/dark)
  for return visits.
- **No third-party advertising or tracking cookies** are used on this site.

### 2. Third-party tools and services

#### 2.1 Vercel (Hosting & Analytics)
The site is built and hosted on Vercel. Vercel provides:
- **Hosting / CDN** — may log IP/HTTP data for ops, security, and performance
- **Web Analytics** — privacy-focused, anonymous, aggregated; no cross-site
  tracking cookies; sessions auto-discarded after 24h

See: [vercel.com/docs/analytics](https://vercel.com/docs/analytics)

#### 2.2 Fonts and assets
- **Google Fonts (Space Grotesk)** are loaded via Next.js font optimization. Your
  browser may reveal its IP to Google when loading fonts.

### 3. How your data is used
- Operating the website (reliability, security, abuse protection)
- Anonymous analytics & site improvements
- Responding when you contact me directly

Data is **never** sold or rented for advertising or third-party marketing.

### 4. Legal bases (where applicable)
Depending on your jurisdiction, processing may be based on:
- Your consent (where required)
- Legitimate interests in operating, securing, and improving the website
- Performance of your requests (e.g. replies to contact messages)

### 5. Data retention
- **Analytics data:** retained only per Vercel's configuration; session-level
  data is discarded after 24 hours
- **Hosting logs:** subject to Vercel's own retention practices
- **Communications (emails, etc.):** kept as long as needed to complete the
  conversation or maintain a record; ask for deletion and we'll comply where
  technically feasible

### 6. Your rights
Depending on your jurisdiction you may have rights to:
- **Access** — ask what personal data (if any identifiable) is held
- **Rectification / Deletion** — request correction or removal of personal info
  you provided
- **Object or restrict processing** (where based on legitimate interests)

### 7. Contact
Questions about this policy or data requests:

- **Email:** <deehanpaul456@gmail.com>
- **GitHub:** [github.com/Deehan123](https://github.com/Deehan123)
- **LinkedIn:** [linkedin.com/in/deehan-paul-230963347](https://www.linkedin.com/in/deehan-paul-230963347/)

### 8. Changes to this policy
This document may be updated when tools, storage, or applicable guidance change.
Material changes will be noted by bumping the "Last updated" date above.

**Disclaimer:** This Privacy Policy is for informational purposes and is not legal
advice. If you reuse or adapt this text, consult a qualified legal professional
to make sure it fits your use case and local laws.

---

## Acknowledgments

Open-source libraries and tools that make this portfolio possible:

- [React](https://react.dev)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)
- [Tabler Icons](https://tabler.io/icons)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Vercel Analytics](https://vercel.com/analytics)
- Magic UI pattern components
- And other open-source dependencies listed in `package.json`
