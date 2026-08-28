// Rich, niche-accurate content blocks + centralized COPY for Work Comp Exemption.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Building2, Briefcase, HardHat, User, RefreshCw, FileCheck,
} from "lucide-react";

/* ============================================================
   COPY — centralized display strings consumed by components/pages.
   ============================================================ */
export const COPY = {
  hero: {
    h1Lead: "Workers' comp exemption filing that",
    h1Highlight: "keeps contractors on the job",
    subcopy:
      "Florida, Arizona, Texas, and 40+ states allow independent contractors, sole proprietors, LLC members, and corporate officers to file a workers' compensation exemption. We handle the paperwork, track expiration dates, and make sure your exemption is valid when a general contractor or inspector asks for it.",
    statValue: "5,000+",
    statLabel: "Exemptions filed for contractors — sole proprietors, LLC members, officers, and trades",
    imageAlt: "Contractor reviewing workers compensation exemption paperwork at a job site",
  },
  nav: { ariaLabel: "Work Comp Exemption home" },
  footer: {
    ctaTitle: "Ready to file your WC exemption?",
    ctaSubcopy: "15-minute consultation. Same-day review. Workers' comp exemption filing for contractors and business owners nationwide.",
    description:
      "Workers' compensation exemption filing services for independent contractors, sole proprietors, LLC members, and corporate officers — Florida, Arizona, Texas, and all states that allow WC exemptions. A division of Contractors Choice Agency — founded 2005, licensed all 50 states. NPN #8608479.",
  },
  servicesGrid: {
    h2Lead: "Exemption services built specifically for",
    h2Highlight: "contractors and business owners",
    lead: "Every state has different rules for who can file a WC exemption, how it's filed, and when it expires. We know each state's process and handle the paperwork so you don't get knocked off a job over a lapsed certificate.",
  },
  why: {
    eyebrow: "Why contractors choose us",
    h2Lead: "The exemption mistakes that",
    h2Highlight: "cost contractors the most",
    lead: "A WC exemption that's filed wrong, expired, or doesn't match your business structure is just as bad as having no exemption. Contractors get pulled from jobs, fined, and denied contracts over exemption paperwork errors. We get it right the first time.",
    sidebarTitle: "Run by people who know construction",
    sidebarBody:
      "Contractors Choice Agency was founded in 2005 by Josh Cotner, who came from the trades. We've filed thousands of exemptions and know exactly what Florida DFS, Arizona ICA, and other state agencies require.",
  },
  coverage: {
    eyebrow: "Where we file",
    h2Lead: "WC exemption filing.",
    h2Highlight: "All 50 states.",
    lead: "From Florida's Certificate of Election to Arizona's ICA exemption to Texas's non-subscriber options, Contractors Choice Agency advises contractors on exemption eligibility and handles filing in every state that offers it.",
    imageAlt: "Contractor at a job site with workers compensation exemption certificate — national exemption filing",
    badgeTitle: "National exemption filing for contractors.",
    badgeSub: "Advising and filing WC exemptions in all 50 states since 2005.",
  },
  process: {
    lead: "No state agency runaround. A quick consultation, the right forms for your state, and a filed exemption you can use on the job — handled start to finish.",
  },
  testimonials: {
    eyebrow: "From contractors",
    h2Lead: "Contractors who got their",
    h2Highlight: "exemption filed right",
  },
  finalCta: {
    h2Lead: "File Your WC Exemption",
    h2Highlight: "and get back to work.",
    lead: "Whether you need a Florida Certificate of Election today, an Arizona ICA exemption, or advice on Texas non-subscriber options — one call gets you the right answer for your state. No runaround, no generic advice.",
  },
  ctaBand: {
    defaultTitle: "Ready to file your workers' comp exemption?",
    defaultDescription:
      "Get a 15-minute consultation from specialists who know your state's exemption rules — sole proprietor, LLC, corporate officer, or contractor filing.",
  },
  faq: {
    defaultTitleLead: "Workers' comp exemptions,",
    defaultTitleHighlight: "in plain English",
  },
  servicesPage: {
    metaTitle: "Workers' Comp Exemption Services — All States",
    metaDescription:
      "Eight workers' compensation exemption services for contractors: Florida WC exemption, Arizona ICA exemption, Texas non-subscriber, contractor exemption, sole proprietor exemption, LLC member exemption, corporate officer exemption, and renewal filing. Licensed all 50 states.",
    h1Lead: "Exemption services built state-by-state for",
    h1Highlight: "contractors and business owners",
    lead: "Each service below addresses a specific exemption type — from Florida's construction-industry Certificate of Election to Texas's non-subscriber framework to renewal filing before your certificate expires on a job site.",
    ogTitle: "Workers' Comp Exemption Services | Contractors Choice Agency",
    ogDescription:
      "Florida WC exemption, Arizona ICA exemption, Texas non-subscriber, contractor exemption, sole proprietor, LLC, corporate officer, and renewal — filed correctly for all states.",
    ctaTitle: "Not sure which exemption you need?",
    ctaDescription:
      "Most contractors need a state-specific exemption based on their business structure — sole proprietor, LLC member, or corporate officer. We'll identify the right form and file it for you in one call.",
  },
  blogPage: {
    metaTitle: "Workers' Comp Exemption Blog — Guides & State Guides",
    metaDescription:
      "Plain-English guides on workers' compensation exemptions for contractors: Florida DFS filing, Arizona ICA process, Texas non-subscriber options, LLC member exemptions, and renewal requirements.",
    h1Lead: "Workers' comp exemptions,",
    h1Highlight: "decoded",
    lead: "State-by-state guides on WC exemption eligibility, filing process, renewal deadlines, and the common mistakes that get contractors pulled from jobs.",
    ogTitle: "Workers' Comp Exemption Blog | Contractors Choice Agency",
    ogDescription:
      "Plain-English guides on workers' comp exemptions for contractors: Florida, Arizona, Texas, LLC, sole proprietor, corporate officer, and renewal requirements.",
  },
  serviceDetail: {
    h1Suffix: "for contractors",
    imageAltSuffix: "contractor exemption filing",
    category: "Workers' Comp Exemption",
  },
  about: {
    metaTitle: "About Work Comp Exemption | Contractors Choice Agency",
    metaDescription:
      "Work Comp Exemption is the WC exemption division of Contractors Choice Agency, founded in 2005 by Josh Cotner. Florida, Arizona, Texas, and all-state exemption filing for independent contractors, sole proprietors, LLCs, and corporate officers. Licensed all 50 states.",
    h1Lead: "Built by people who know the trades,",
    h1Highlight: "for contractors who work independently",
    lead: "Work Comp Exemption is the contractor-focused division of Contractors Choice Agency — founded in 2005 by Josh Cotner, who knows exactly what happens when a lapsed exemption or a wrong filing gets you pulled off a job.",
    imageAlt: "A contractor reviewing workers comp exemption documents at a construction site",
    storyEyebrow: "Our story",
    storyTitle: "From the jobsite to the agency.",
    storyLead:
      "Josh Cotner ran equipment, read specs, and filed certificates before founding CCA in 2005. That background is why we understand what's at stake when a WC exemption lapses, a general contractor demands proof, and the state agency is closed for the day.",
    valuesTitle: "Four things we won't compromise on.",
    timeline: [
      { year: "2005", title: "Contractors Choice Agency founded", desc: "Josh Cotner opens CCA in Chandler, AZ, after years working in the trades — built to insure contractors and operators the right way." },
      { year: "10 yrs", title: "Expanded to WC exemption filing", desc: "After placing insurance for dozens of contractor categories, CCA adds WC exemption filing services — helping contractors legally opt out of coverage they don't need." },
      { year: "Today", title: "Dedicated exemption division", desc: "Work Comp Exemption focuses CCA's expertise on the growing number of contractors, LLCs, and corporate officers who qualify for — and need help filing — state WC exemptions." },
    ],
    values: [
      { icon: "HardHat", title: "Contractor-first, always", desc: "Josh spent years in the trades before starting the agency. We speak the language of contracting because we know what happens when a certificate lapse costs you a job or a contract." },
      { icon: "ShieldCheck", title: "Filed correctly the first time", desc: "Wrong business structure, wrong state form, expired certificate — we know every way an exemption fails at the gate and prevent it before it happens." },
      { icon: "Award", title: "A-rated markets when coverage is needed", desc: "When exemptions aren't available or aren't right, we place real workers' comp from A-rated carriers. You get the right solution — not just the cheapest one." },
      { icon: "Handshake", title: "Honest, no-pressure advice", desc: "If you don't qualify for an exemption, we'll tell you and show you the alternatives. We earn trust by being straight about what your business actually needs." },
    ],
  },
  quote: {
    h1Lead: "Get your",
    h1Highlight: "WC exemption consultation",
    lead: "Tell us about your business and state. We'll identify your exemption eligibility and come back with a clear filing plan in about 15 minutes — no obligation.",
    businessPlaceholder: "Smith Roofing LLC",
    emailPlaceholder: "mike@smithroofing.com",
    phonePlaceholder: "(813) 555-0100",
    messagePlaceholder:
      "State, business structure (sole prop, LLC, S-corp), trade type, number of owners, current WC situation, or anything else that helps us advise you correctly…",
    errorMessage: "Something went wrong. Please email us or try again.",
    trustNicheTitle: "Built for contractors",
    trustNicheDesc: "WC exemption guidance for your specific state and business structure — not generic advice.",
  },
  contact: {
    h1Lead: "Let's talk about your",
    h1Highlight: "WC exemption",
    lead: "Questions about your state's exemption rules, a filing you need done fast, or a renewal coming up — reach a person who knows contractor WC exemptions, not a queue.",
    errorMessage: "Something went wrong. Please email us and we'll pick it up from there.",
  },
  coveragePage: {
    metaTitle: "Workers' Comp Exemption Filing — All 50 States",
    metaDescription:
      "Contractors Choice Agency files workers' compensation exemptions in all 50 states — Florida, Arizona, Texas, Georgia, Tennessee, North Carolina, South Carolina, and everywhere contractors work.",
    h1Lead: "National reach.",
    h1Highlight: "All 50 states, every exemption market.",
    lead: "Contractors Choice Agency advises on WC exemption eligibility and handles filing in all 50 states — from Florida's DFS certificate process to Arizona's ICA exemption to Texas's non-subscriber framework.",
    sectionTitle: "States and regions we serve.",
    nationwideLead:
      "Whether you're in Florida, Arizona, Texas, or anywhere in between — one call, one consultation, your exemption filed correctly. NPN #8608479.",
    faqs: [
      { q: "Do you file WC exemptions in states other than Florida and Arizona?", a: "Yes. Contractors Choice Agency advises contractors in all 50 states on WC exemption eligibility. We file exemptions in every state that offers them and advise on alternatives — like occupational accident insurance — in states that don't." },
      { q: "Can you handle exemptions for contractors who work in multiple states?", a: "Yes. If you work across state lines, we identify which states you need exemptions in, which states require you to carry WC regardless, and how to structure your coverage and filing so you're compliant everywhere you work." },
      { q: "Do you understand the specific exemption rules of my state?", a: "Yes. We track exemption rules in all active states — Florida's two-year renewal cycle, Arizona's ICA requirements, Texas's non-subscriber framework, Georgia's State Board process, and more. State rules change; we stay current." },
      { q: "Can you handle the exemption for our whole crew or just the owners?", a: "We handle exemptions for business owners — sole proprietors, LLC members, and corporate officers. Employees are not eligible for WC exemptions in most states. If you need to cover your crew, we can place a workers' comp policy for them separately." },
    ],
  },
} as const;

/* ============================================================
   PROCESS
   ============================================================ */
export const PROCESS = [
  { step: "01", icon: PhoneCall, title: "Tell us about your business", description: "15-min call or form. State, business structure, trade type, number of owners, and your current WC situation. We identify your exemption eligibility right away." },
  { step: "02", icon: FileSearch, title: "We review your state's rules", description: "Every state has different eligibility requirements, forms, and filing deadlines. We pull the right form and confirm your structure qualifies before we file." },
  { step: "03", icon: FileSignature, title: "We file your exemption", description: "We prepare the correct state form, submit it to the right agency, and track the status until your Certificate of Exemption or Election is issued and in your hands." },
  { step: "04", icon: ShieldCheck, title: "We track your renewal date", description: "Exemptions expire. We alert you before your deadline and handle renewal so a certificate lapse never pulls you off a job or costs you a contract." },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  { icon: ShieldCheck, title: "Filed correctly the first time", description: "Wrong form, wrong business structure, wrong state — any of these voids your exemption at the worst moment. We verify eligibility before filing so your certificate holds at audit and on the job." },
  { icon: FileCheck, title: "Florida exemptions filed same day", description: "Florida's DFS portal can move fast — or it can stall. We know the process, submit through the right channels, and track status so your FL Certificate of Election arrives when you need it." },
  { icon: RefreshCw, title: "We track renewals so you don't have to", description: "Florida exemptions expire every two years. Other states have their own cycles. We alert you before expiration and handle the renewal so a lapsed certificate never costs you a contract." },
  { icon: Building2, title: "LLC and S-corp exemptions done right", description: "LLC member and corporate officer exemptions have ownership percentage and active-work requirements that vary by state. We match your business structure to the right election form — not a generic filing." },
  { icon: User, title: "Sole proprietor and owner-operator guidance", description: "Sole proprietors in most states can exempt themselves — but only if they meet activity and business-type tests. We confirm your eligibility and complete the filing without the state agency runaround." },
  { icon: HardHat, title: "Run by a former contractor", description: "Josh Cotner knows what it costs when a WC exemption fails on a job site. We've been filing exemptions since 2005 because we know what's at stake for contractors who work independently." },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS = [
  { q: "What is a workers' compensation exemption?", a: "A workers' compensation exemption is a legal election that allows certain business owners — sole proprietors, LLC members, and corporate officers — to opt out of workers' compensation coverage for themselves. The exemption doesn't remove WC requirements for employees, but it allows qualifying owners to exclude themselves from the policy or avoid carrying coverage entirely in states that allow it." },
  { q: "Who qualifies for a workers' comp exemption?", a: "Eligibility varies by state. In most states, sole proprietors, general and limited partners, LLC members, and corporate officers in construction can file for an exemption. Some states limit exemptions to certain industries or business structures. We determine your eligibility based on your state, business type, and role in the company before filing." },
  { q: "Is a WC exemption the same as not having workers' compensation?", a: "For you personally, yes — a filed exemption means your state acknowledges that you are excluded from WC coverage. But your employees still need workers' comp unless they also qualify for exemptions. And some general contractors require subcontractors to either carry WC or hold a valid exemption — the certificate proves you're not an uncovered worker." },
  { q: "How do I file a workers' comp exemption in Florida?", a: "In Florida, qualifying construction contractors file a Certificate of Election to be Exempt through the Florida Division of Financial Services (DFS) online portal. The certificate is issued electronically, costs $50, and must be renewed every two years. We handle the application, submission, and tracking so your certificate arrives without the common DFS portal errors." },
  { q: "How does the Arizona WC exemption work?", a: "Arizona sole proprietors and partners are not required to cover themselves under workers' compensation — but they must meet Arizona Industrial Commission (ICA) requirements to claim exempt status at audit. LLC members and corporate officers have additional tests. We guide you through the AZ process so your exemption holds when an inspector or general contractor asks for proof." },
  { q: "Is Texas workers' comp mandatory?", a: "No. Texas is the only state where workers' compensation is optional for most private employers. However, Texas contractors must still navigate independent contractor classification rules, non-subscriber liability, subcontractor coverage requirements, and state agency job requirements. We advise Texas contractors on the non-subscriber framework and occupational accident alternatives." },
  { q: "What is a non-subscriber in Texas?", a: "A Texas non-subscriber is an employer who chooses not to carry workers' compensation insurance. Non-subscribers lose some legal protections — employees can sue for negligence without the standard WC defenses — but can design their own benefit plans. We help Texas contractors understand non-subscriber risks and choose between WC, occupational accident coverage, or structured self-insured plans." },
  { q: "How long does a Florida WC exemption last?", a: "Florida WC exemptions are valid for two years from the date of issuance. After that, the certificate expires and must be renewed through DFS to remain valid. We track your expiration date and alert you in advance so a lapsed certificate never gets you pulled from a job or a contract." },
  { q: "Does a WC exemption cover me if I get injured on the job?", a: "No. A WC exemption means you are excluded from workers' compensation coverage — it does not provide any injury benefits. If you're injured while working, you have no WC claim to file. Many contractors who file exemptions choose occupational accident insurance as an alternative — it provides medical and disability benefits at a much lower cost than a full WC policy." },
  { q: "Can LLC members file for a WC exemption?", a: "In many states, yes. LLC members who actively work in the business can elect to exclude themselves from workers' compensation. The rules vary — some states cap the number of LLC members who can be excluded, others require a minimum ownership percentage, and others have active-work tests. We identify the right election form for your state and LLC structure." },
  { q: "Can a corporate officer be excluded from workers' comp?", a: "Yes, in most states. Officers of S-corps and C-corps can file a notice of election to be exempt from workers' compensation. The election must be filed with the state and sometimes also with your insurance carrier. We handle the paperwork so the exclusion is enforceable at audit and claim time." },
  { q: "What happens if my WC exemption lapses?", a: "If your exemption expires and you haven't renewed it, you are technically treated as a covered employee under your own business — which means you may be required to carry WC on yourself. More practically, a general contractor or job site inspector may pull you from the job until you can produce a valid certificate. We prevent lapses by tracking your renewal date." },
  { q: "Do general contractors require subcontractors to have a WC exemption?", a: "Often yes. General contractors are frequently required to either verify that subcontractors carry workers' comp or confirm they hold a valid state exemption. Without one or the other, the GC may be liable for injuries to the uninsured subcontractor. A valid exemption certificate is the document that proves you're legally excluded — not just uninsured." },
  { q: "What is an occupational accident policy and how does it compare to WC?", a: "Occupational accident insurance is a private injury policy — not WC — that provides medical and disability payments if you're injured while working. It costs much less than a standard WC policy and is often the right choice for contractors who qualify for a WC exemption but want some injury protection. We can place occupational accident coverage alongside your exemption filing." },
  { q: "Can I file a WC exemption if I have employees?", a: "You can file an exemption for yourself as an owner — but your employees still require workers' compensation coverage unless they also individually qualify for exemptions. The exemption is an owner election, not a business-wide opt-out. We handle the owner exemption and, if needed, place a WC policy for your crew separately." },
  { q: "How much does a Florida WC exemption cost?", a: "The Florida DFS charges a $50 application fee per exemption. Our service fee for preparing, submitting, and tracking your FL exemption is separate — but the state filing itself is $50. For renewal filings, the same $50 applies every two years. We'll tell you the total cost up front before you commit to anything." },
  { q: "What documents do I need to file a WC exemption?", a: "It depends on your state and business structure. For a Florida exemption, you typically need your contractor license number, Federal EIN, and business registration. For LLC and corporate officer exemptions, state agencies often want operating agreements or articles of incorporation showing your ownership percentage. We tell you exactly what your state requires before we start." },
  { q: "Can you file a WC exemption for a sole proprietor with no employees?", a: "Yes — and for sole proprietors in many states, an exemption is the fastest and most cost-effective path. If you have no employees and work independently, you often have no legal obligation to carry workers' comp, but a formal exemption certificate is what proves that to general contractors and inspectors. We file it for you." },
  { q: "How fast can I get a WC exemption filed?", a: "In Florida, exemptions filed through the DFS portal are typically issued within 1–3 business days. In Arizona and other states, processing times vary. We file the same day we have your information and track status until your certificate is issued. For urgent situations — like a job starting tomorrow — tell us in your request and we will prioritise it." },
  { q: "Do you file exemptions in states other than Florida, Arizona, and Texas?", a: "Yes. Contractors Choice Agency advises on WC exemption eligibility in all 50 states and files exemptions in every state that offers a formal certificate or election process — Georgia, Tennessee, North Carolina, South Carolina, and more. Call us for your specific state and we'll tell you exactly what's available." },
];

/* ============================================================
   GENERAL FAQ — pads service & location pages to 20.
   ============================================================ */
export const GENERAL_FAQS = [
  { q: "How much does a WC exemption filing cost?", a: "State filing fees vary — Florida charges $50 per certificate. Our service fee covers preparation, submission, and tracking. We quote the total cost up front, no surprises." },
  { q: "Do you file WC exemptions in all 50 states?", a: "Yes. Contractors Choice Agency advises on exemption eligibility in all 50 states and files in every state with a formal exemption or election process." },
  { q: "How fast can I get my exemption filed?", a: "Florida exemptions typically issue within 1–3 business days. Other states vary. We file same-day on receipt of your information and track status until your certificate arrives." },
  { q: "Will you file an exemption if I've been denied before?", a: "Often yes. Denials usually stem from incomplete applications or a business structure mismatch. We review what went wrong and refile correctly." },
  { q: "Can I bundle an exemption with occupational accident coverage?", a: "Yes. Many contractors who file exemptions choose occupational accident insurance as an alternative to WC for themselves. We can place that alongside your exemption filing in one call." },
  { q: "What does it mean to be a Texas non-subscriber?", a: "A Texas non-subscriber has opted out of the state workers' comp system. Non-subscribers can be sued for negligence without standard WC defenses. We help Texas contractors understand the risk and choose the right alternative." },
  { q: "Can LLC members and S-corp officers both file exemptions?", a: "In most states, yes. LLC members and corporate officers can each file individual exemptions. The ownership percentage, active-work requirements, and form vary by state." },
  { q: "How do I know when my exemption expires?", a: "We track your expiration date and send you an advance alert before renewal is due. Florida exemptions expire every two years; other states vary." },
  { q: "Does a WC exemption protect me from a personal injury lawsuit?", a: "No. An exemption removes you from the WC system; it doesn't limit a third party's ability to sue you for negligence on a job site. General liability still matters." },
  { q: "Can I get a WC exemption if I have a prior workers' comp claim?", a: "A prior claim doesn't disqualify you from filing an exemption — eligibility is based on your business structure and state rules, not claim history." },
  { q: "What if a general contractor requires WC coverage, not an exemption?", a: "Some GCs require all subs to carry WC regardless of exemption status. We can place a workers' comp policy for you if a client specifically requires coverage rather than a certificate." },
  { q: "What information do you need to get started?", a: "Your state, business structure (sole prop, LLC, S-corp), trade type, owner count, Federal EIN, and contractor license number where applicable. A 15-minute call covers it all." },
  { q: "Do you advise on occupational accident insurance as a WC alternative?", a: "Yes. Occupational accident insurance provides medical and disability benefits at a fraction of WC cost and is often the right solution for owners who file exemptions but want some injury protection." },
  { q: "What happens if I hire employees after filing my exemption?", a: "Your exemption covers you as an owner — employees hired after the fact still need workers' comp coverage unless they file their own exemptions. We handle both." },
];

/* ============================================================
   SERVICE DETAIL
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "florida-wc-exemption": {
    heroBlurb: "Florida allows qualifying construction contractors to file a Certificate of Election to be Exempt with the Division of Financial Services — opting out of workers' compensation coverage for themselves. We prepare, submit, and track your FL exemption so it's valid when you need it.",
    whatsCovered: ["Certificate of Election to be Exempt — construction industry", "Sole proprietor, partner, LLC member, and officer exemption elections", "DFS portal submission and status tracking", "Same-day filing for urgent situations", "Two-year renewal tracking and advance alerts", "Assistance correcting denied or incomplete applications"],
    whoItsFor: ["Florida roofing, electrical, plumbing, and HVAC contractors", "Sole proprietors and partners in construction without employees", "LLC members and corporate officers meeting FL eligibility criteria", "Contractors whose GC requires a valid FL exemption certificate"],
    whyCca: ["We file through the FL DFS portal daily — no first-time learning curve", "We alert you 60 days before your two-year expiration date", "Denied application? We review and refile with the corrected information"],
    faqs: [
      { q: "Who qualifies for a Florida WC exemption?", a: "Florida exemptions are available to sole proprietors, partners, LLC members, and corporate officers in the construction industry. You must have an active Florida contractor license. Exemptions are not available to non-construction businesses under the standard DFS process." },
      { q: "How long does a Florida exemption take?", a: "Most Florida DFS portal submissions are processed within 1–3 business days. The certificate is issued electronically and is immediately usable for job site and general contractor verification." },
      { q: "What does a Florida WC exemption cost?", a: "Florida charges a $50 state filing fee per certificate. Our service fee covers preparation, portal submission, and status tracking. We quote the combined cost up front." },
      { q: "Does my Florida exemption cover me in other states?", a: "No. A Florida Certificate of Election is valid only for work performed in Florida. If you work in other states, you need a separate exemption or WC coverage for each state where you perform construction work." },
      { q: "What happens if my Florida exemption expires on a job?", a: "Without a valid certificate, you are treated as an uncovered worker — and the general contractor may be held liable for your injuries. We track your expiration and file your renewal before that happens." },
      { q: "Can I file a Florida exemption if I have employees?", a: "Yes — you file an exemption for yourself as the owner. Your employees still require workers' compensation coverage. The exemption covers only the qualifying owner, not the business's workers." },
      { q: "What if my DFS application is denied?", a: "DFS denials are usually due to missing license information, incorrect business structure, or prior violations. We review the denial reason and refile the corrected application, often the same day." },
    ],
  },
  "arizona-wc-exemption": {
    heroBlurb: "Arizona sole proprietors and partners in construction are not required to carry workers' compensation on themselves under the Arizona ICA — but must meet active-work and business-structure tests to claim the exemption. We guide you through the process so your exemption holds at audit.",
    whatsCovered: ["Arizona ICA sole proprietor and partner exemption guidance", "LLC member exemption eligibility review and filing", "Corporate officer exclusion election and documentation", "Audit support when exemption status is challenged", "Active-work and business-structure eligibility verification", "Multi-state coordination for contractors working in AZ and beyond"],
    whoItsFor: ["Arizona sole proprietors in construction, roofing, electrical, and trades", "LLC members actively working in the business who meet AZ eligibility", "Corporate officers of Arizona-registered construction businesses", "Out-of-state contractors temporarily working jobs in Arizona"],
    whyCca: ["We know Arizona ICA's eligibility tests — not just the forms", "We verify your business structure qualifies before you file, preventing rejections", "Audit support if an ICA investigator questions your exempt status"],
    faqs: [
      { q: "Does Arizona have a formal WC exemption certificate like Florida?", a: "Not exactly. In Arizona, sole proprietors and partners are excluded from WC requirements by statute — there's no certificate to file. But the exclusion has conditions, and at audit or inspection, you need documentation that you meet them. We ensure you're properly set up." },
      { q: "Do Arizona LLC members need to file for an exemption?", a: "LLC members in Arizona can elect to exclude themselves from WC, but the election must be documented and communicated to your insurance carrier if you carry a WC policy. We handle the documentation and carrier notification." },
      { q: "What are Arizona's active-work requirements for the exemption?", a: "Arizona requires that qualifying owners be actively engaged in the business to claim exempt status. Passive owners or investors cannot claim the construction-industry exemption. We verify your role meets the active-work test before advising you on exempt status." },
      { q: "Does Arizona recognize a Florida WC exemption certificate?", a: "No. Each state's exemption or exclusion is state-specific. If you work in both Arizona and Florida, you need to satisfy each state's requirements separately. We handle multi-state situations regularly." },
      { q: "What happens if an Arizona ICA audit disputes my exemption?", a: "ICA auditors can challenge exempt status if your business structure, ownership, or work activities don't meet the exclusion criteria. We prepare proper documentation up front and provide audit support if your status is questioned." },
    ],
  },
  "texas-wc-exemption": {
    heroBlurb: "Texas is the only state where workers' compensation is not mandatory for most private employers — but navigating non-subscriber liability, independent contractor classification, and subcontractor WC requirements is complex. We advise Texas contractors on lawful exemption and non-subscriber strategies.",
    whatsCovered: ["Texas WC non-subscriber status analysis and setup", "Independent contractor classification review", "Occupational accident insurance as a WC alternative", "Subcontractor WC requirement compliance guidance", "Texas Department of Insurance non-subscriber posting requirements", "Non-subscriber benefit plan design and placement"],
    whoItsFor: ["Texas sole proprietors and small contractors avoiding the WC system", "General contractors evaluating non-subscriber status and liability", "Texas subcontractors with GC requirements for coverage or exemption", "Business owners comparing WC cost against non-subscriber alternatives"],
    whyCca: ["We know Texas non-subscriber law — not just the opt-out form", "We place occupational accident insurance as a WC alternative when it's the right fit", "We advise on subcontractor flow-down requirements so your subs are compliant too"],
    faqs: [
      { q: "Is workers' comp required in Texas?", a: "No. Texas is the only state where private employers are generally not required to carry workers' compensation. However, state agency contractors and some public projects do require WC. We help Texas contractors identify when WC is required and when they can legally operate without it." },
      { q: "What are the risks of being a Texas non-subscriber?", a: "Non-subscribers lose the employer negligence defenses that come with being in the WC system. Employees can sue for negligence without the standard 'course and scope' burden. Non-subscribers must also post notices and file annual non-subscriber reports with TDI." },
      { q: "What is occupational accident insurance and why do Texas contractors use it?", a: "Occupational accident insurance is a private benefit policy — not WC — that provides medical and disability payments if you're injured at work. Texas contractors use it as a lower-cost WC alternative that provides some injury protection without entering the state WC system." },
      { q: "Does my GC require me to carry WC even in Texas?", a: "Some Texas GCs require subcontractors to carry WC or provide a certificate of coverage regardless of state law. Others accept occupational accident insurance or a documented non-subscriber status. We review your contract requirements and match you to the right solution." },
      { q: "Can I hire employees as a Texas non-subscriber?", a: "Yes. Texas non-subscribers can have employees — they just operate outside the WC system. The tradeoff is liability exposure. Many Texas employers with employees use a non-subscriber benefit plan designed to limit lawsuit exposure while avoiding WC premium costs." },
    ],
  },
  "contractor-wc-exemption": {
    heroBlurb: "General contractors, roofing contractors, HVAC technicians, electricians, and plumbers who work independently can qualify for a workers' comp exemption in states that allow it. We determine eligibility, prepare the right state form, and file on your behalf.",
    whatsCovered: ["State-specific contractor exemption eligibility determination", "Exemption application preparation for all qualifying trade types", "State agency submission and tracking", "General contractor certificate verification support", "Multi-state exemption coordination for contractors who work across state lines", "Renewal tracking for all active certificates"],
    whoItsFor: ["Independent roofing, HVAC, electrical, and plumbing contractors", "General contractors operating as sole proprietors or small LLCs", "Specialty trade contractors required to show exemption to GCs", "Any contractor paying WC premiums on themselves who may qualify to stop"],
    whyCca: ["We've filed exemptions for contractors in every major trade category", "We know which states offer exemptions for which trade types — eligibility is not uniform", "Fast filing — most exemptions are submitted within one business day of receiving your information"],
    faqs: [
      { q: "What trades qualify for a WC exemption?", a: "Exemptions are most commonly available to contractors in the construction industry — including roofing, electrical, plumbing, HVAC, general contracting, painting, and specialty trades. Non-construction businesses often do not qualify. We confirm your trade type qualifies before filing." },
      { q: "Does my exemption transfer between states?", a: "No. State WC exemptions are state-specific. If you work in multiple states, you need a separate exemption or coverage in each state where you perform work. We handle multi-state filings." },
      { q: "Can I get an exemption if I subcontract under a GC?", a: "In most states, yes — as long as your business structure and trade type qualify. Many GCs require either proof of WC or a valid exemption certificate. We file the exemption and provide the certificate for your GC's file." },
      { q: "What if I go from sole proprietor to LLC?", a: "Changing your business structure may require a new exemption election or form. LLC exemptions have different requirements than sole proprietor exclusions in most states. We review your new structure and refile accordingly." },
    ],
  },
  "sole-proprietor-exemption": {
    heroBlurb: "Most states allow sole proprietors to exclude themselves from workers' compensation requirements. We identify your state's specific rules, verify you meet the eligibility criteria, and complete the exemption paperwork so you're compliant when a GC or inspector asks.",
    whatsCovered: ["Sole proprietor WC exemption eligibility determination by state", "Exemption application preparation and state agency submission", "Active-work and business-type eligibility verification", "GC certificate of exemption delivery", "Renewal tracking and re-filing before expiration", "Occupational accident insurance placement for injured-owner coverage"],
    whoItsFor: ["Solo contractors and owner-operators with no employees", "Self-employed tradespeople required to show exemption to GCs", "Sole proprietors currently paying WC premiums on themselves", "Single-person businesses in construction, trades, and specialty services"],
    whyCca: ["Fast eligibility determination — most sole proprietors qualify in their state", "We know the difference between states that auto-exclude and states that require filing", "Occupational accident coverage available alongside your exemption for injury protection"],
    faqs: [
      { q: "Do sole proprietors automatically qualify for a WC exemption?", a: "In many states, sole proprietors in construction are excluded from WC requirements by default — but some states require a formal filing to establish and document the exclusion. We tell you which category your state falls into and handle any required filing." },
      { q: "What if I have a helper or casual worker?", a: "Once you hire a worker — even part-time or casual — your WC obligation may activate for that person. The exemption covers you as the sole owner; it doesn't cover helpers or casual labor. We advise on how to handle occasional help compliantly." },
      { q: "Can I still bid on jobs that require WC certificates if I have an exemption?", a: "Yes. A valid exemption certificate is the document that proves to a GC that you're legally excluded — not just uninsured. Most GCs accept a state-issued exemption certificate in place of a WC certificate of insurance." },
      { q: "Does a sole proprietor exemption cover injuries to me personally?", a: "No. The exemption removes you from the WC system; it doesn't provide injury benefits. Occupational accident insurance is a common supplement for sole proprietors who want medical and disability coverage without a full WC policy." },
    ],
  },
  "llc-exemption": {
    heroBlurb: "LLC members and managers who actively work in the business can qualify for a workers' comp exemption in many states — but member count, ownership percentage, and active-work requirements vary significantly. We handle LLC-specific exemption filings and ensure your operating agreement supports the election.",
    whatsCovered: ["LLC member WC exemption eligibility review by state", "Single-member and multi-member LLC exemption filings", "Operating agreement review for exemption qualification support", "State agency submission and certificate tracking", "Multi-state LLC exemption coordination", "Carrier notification for LLCs with existing WC policies"],
    whoItsFor: ["LLC members who actively work in the business and want to exclude themselves", "Multi-member LLCs where all or some owners qualify for exemption", "Single-member LLCs in construction operating as sole-member businesses", "LLC owners currently included in a WC policy who may qualify for exclusion"],
    whyCca: ["We review your LLC structure before filing — member count and ownership tests vary by state", "We handle carrier notification for LLCs with existing WC policies", "Operating agreement review included — some states require it to document member ownership"],
    faqs: [
      { q: "Can all LLC members file for a WC exemption?", a: "In most states, yes — but many states cap the number of LLC members who can be excluded or require a minimum ownership percentage. We review your specific LLC structure against your state's rules before filing." },
      { q: "Does the LLC's operating agreement matter for the exemption?", a: "Yes, in many states. The operating agreement is the primary document showing member ownership percentages and active-work status. Some states require it as part of the exemption application. We review it before filing to confirm it supports the election." },
      { q: "What if our LLC has both active and passive members?", a: "Passive members — investors who don't work in the business — typically don't qualify for WC exemptions. Active members who perform the work often do. We separate the two and file for qualifying members only." },
      { q: "Does an LLC exemption affect our WC policy for employees?", a: "No. An LLC member exclusion removes that owner from the WC payroll — but employees remain covered. We notify the carrier of the exclusion so the premium reflects the change at the next audit." },
    ],
  },
  "corporate-officer-exemption": {
    heroBlurb: "Corporate officers of S-corporations and C-corporations can elect to be excluded from workers' compensation in most states — but the election must be filed correctly with the state agency and sometimes also with your insurance carrier. We handle both filings so the exclusion is enforceable.",
    whatsCovered: ["Corporate officer WC exclusion election by state", "S-corp and C-corp officer exemption filing with state agency", "Insurance carrier notification of officer exclusion", "Notice of election to be exempt documentation", "Multi-officer exclusion filings", "Renewal tracking and updated carrier endorsements"],
    whoItsFor: ["S-corp and C-corp officers actively working in construction or trades", "Corporate officers currently included in WC payroll who want to be excluded", "Small business corporations with officer-owners who want to reduce WC premium", "Officers whose GC requires either WC coverage or a valid exemption certificate"],
    whyCca: ["We file with the state agency AND notify your carrier — both are required to make the exclusion enforceable", "We know the officer count limits and ownership tests by state", "Audit support when a WC auditor includes an officer who was elected to be excluded"],
    faqs: [
      { q: "What's the difference between a sole proprietor exemption and a corporate officer exemption?", a: "A sole proprietor exclusion removes a self-employed individual from WC requirements. A corporate officer exemption is a formal election by an officer of a corporation to be excluded from the company's WC policy. The forms, filing agencies, and requirements differ significantly." },
      { q: "Can all corporate officers file for an exemption?", a: "Most states allow up to three corporate officers to be excluded from WC at any one time. Additional officers must be covered. Ownership percentage requirements also apply in some states." },
      { q: "Do I need to notify my insurance carrier about the officer exclusion?", a: "Yes — in most states, you must notify your WC carrier of the exclusion in addition to filing with the state agency. Without carrier notification, the officer may remain on the policy payroll and continue to be charged premium." },
      { q: "What if an excluded officer is injured on the job?", a: "An excluded officer has no WC claim — the exclusion removes them from coverage. For officers who want injury protection, occupational accident insurance provides medical and disability benefits at a lower cost than a full WC policy." },
      { q: "Does the corporate officer exemption apply to LLCs as well?", a: "LLCs use a different exemption framework — member exclusions rather than officer elections. We handle both and match the right filing type to your business structure." },
    ],
  },
  "exemption-renewal": {
    heroBlurb: "Workers' compensation exemptions in most states expire — Florida exemptions renew every two years, and other states have their own cycles. We track your expiration date, alert you in advance, and handle the renewal paperwork so your exemption never lapses on a job site.",
    whatsCovered: ["Exemption expiration tracking for all active certificates", "60-day advance renewal alerts", "Florida DFS two-year renewal filing", "Multi-state renewal coordination for contractors with multiple certificates", "Same-day renewal filing for urgent lapses", "Renewal denial review and corrected refiling"],
    whoItsFor: ["Any contractor with an existing WC exemption approaching expiration", "Florida contractors with two-year certificate renewal cycles", "Multi-state contractors managing exemptions in several states", "Contractors who have had exemptions lapse in the past and want to prevent it happening again"],
    whyCca: ["We track your expiration date from the day we file — renewal is not your problem to remember", "Florida DFS renewals submitted same day we receive your renewal trigger alert", "If you've already lapsed, we file an emergency renewal and help you explain the gap to your GC"],
    faqs: [
      { q: "When does a Florida WC exemption expire?", a: "Florida Certificates of Election to be Exempt expire two years from the issuance date. The expiration date is printed on the certificate. We alert you 60 days before expiration and file your renewal before the certificate lapses." },
      { q: "Can I continue working while my exemption is expired?", a: "Technically you're operating without a valid exemption certificate until renewal is issued. In Florida, this means you could be considered an uncovered worker on a job site. We recommend filing renewal before the expiration date, not after." },
      { q: "What if my exemption has already lapsed?", a: "If your certificate has expired, we file an emergency renewal as quickly as possible. Depending on your state, there may be a gap period where you're technically unexempted — we advise you on how to handle that gap with GCs and inspectors." },
      { q: "Do all states require exemption renewals?", a: "Not all states have formal renewal requirements — some exclusions are permanent until your business structure changes. Florida's two-year cycle is the most common renewal requirement we handle. We track the renewal schedule for each state where you hold an exemption." },
      { q: "What changes at renewal could affect my eligibility?", a: "If your business structure has changed — you added members, changed from sole prop to LLC, or added officers — your exemption type may need to change at renewal. We review your current structure at renewal time to make sure you're still filing the right form." },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Florida", note: "Most active WC exemption state — DFS Certificate of Election, 2-year renewal" },
  { name: "Arizona", note: "ICA sole proprietor and LLC member exclusion — active-work tests" },
  { name: "Texas", note: "Voluntary WC state — non-subscriber framework and alternatives" },
  { name: "Georgia", note: "State Board of Workers' Compensation officer and LLC exemptions" },
  { name: "Tennessee", note: "Sole proprietor and partner construction exemptions" },
  { name: "North Carolina", note: "Single-member LLC and sole proprietor exemption filing" },
  { name: "South Carolina", note: "DEW exemption applications for construction contractors" },
  { name: "Nationwide", note: "All 50 states — exemption eligibility analysis and alternative coverage" },
];

export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export const QUOTE_SERVICE_TYPES = [
  "Florida WC Exemption Filing",
  "Arizona WC Exemption (ICA)",
  "Texas Non-Subscriber / WC Opt-Out",
  "Contractor WC Exemption",
  "Sole Proprietor Exemption",
  "LLC Member Exemption",
  "Corporate Officer Exemption",
  "Exemption Renewal",
  "Occupational Accident Insurance",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
