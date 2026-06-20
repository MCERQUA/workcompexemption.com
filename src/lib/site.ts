// Centralized site data — used across nav, footer, schema, CTAs
// Work Comp Exemption — workers' compensation exemption filing services

export const SITE = {
  name: "Work Comp Exemption",
  legalName: "Work Comp Exemption (by Contractors Choice Agency)",
  domain: "workcompexemption.com",
  url: "https://workcompexemption.com",
  tagline: "Workers' Compensation Exemption Filing Made Easy",
  description:
    "Workers' compensation exemption filing services for independent contractors, sole proprietors, LLC members, and corporate officers in Florida, Arizona, Texas, and all states that allow WC exemptions. Fast processing, state-compliant forms, and expert guidance from a licensed agency. NPN #8608479.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "Same-day exemption review",
  quoteSla: "15-minute consultation turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Work Comp Exemption",
  brandSub: "Exemption Filing",
  nicheShort: "contractor",
  nicheShortCap: "Contractor",
  nichePlural: "contractors",
  nichePluralCap: "Contractors",
  operator: "independent contractor",
  operatorCap: "Independent Contractor",
  industry: "construction and contracting",
  industryCap: "Construction and Contracting",
  audience: "contractors and sole proprietors",
  audienceCap: "Contractors and Sole Proprietors",
  ownerTitle: "contractor",
  regionPill: "Florida · Arizona · Texas · Nationwide",
  serviceSuffix: "Contractors & Business Owners",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "florida-wc-exemption",
    title: "Florida WC Exemption",
    short: "FL construction exemption fast-filed",
    description:
      "Florida allows construction contractors — sole proprietors, partners, and corporate officers — to opt out of workers' compensation coverage by filing a Certificate of Election to be Exempt with the Florida DFS. We prepare, file, and track your FL exemption so you stay compliant and keep your license.",
    icon: "FileCheck",
    keywords: ["florida workers comp exemption", "FL WC exemption form", "Florida construction exemption", "workers compensation exemption Florida"],
  },
  {
    slug: "arizona-wc-exemption",
    title: "Arizona WC Exemption",
    short: "AZ sole proprietor & officer exemption",
    description:
      "Arizona sole proprietors and partners in construction are not required to carry workers' compensation on themselves — but must meet strict ICA requirements to claim the exemption. We guide you through the Arizona Industrial Commission process so your exemption holds at audit and on job sites.",
    icon: "ClipboardCheck",
    keywords: ["arizona workers comp exemption", "AZ WC exemption", "Arizona construction exemption", "sole proprietor exemption Arizona"],
  },
  {
    slug: "texas-wc-exemption",
    title: "Texas WC Exemption",
    short: "TX non-subscriber & contractor exemption",
    description:
      "Texas is the only state that does not require most employers to carry workers' compensation — but navigating non-subscriber status, independent contractor classification, and subcontractor requirements is complex. We advise Texas contractors on lawful exemption and non-subscriber strategies.",
    icon: "Star",
    keywords: ["texas workers comp exemption", "TX WC exemption", "Texas non-subscriber insurance", "independent contractor exemption Texas"],
  },
  {
    slug: "contractor-wc-exemption",
    title: "Contractor WC Exemption",
    short: "General & specialty contractor exemption filing",
    description:
      "General contractors, roofing contractors, HVAC technicians, electricians, and plumbers who work independently can qualify for a workers' comp exemption in states that allow it. We determine your eligibility, prepare the correct state forms, and file on your behalf.",
    icon: "HardHat",
    keywords: ["contractor workers comp exemption", "general contractor WC exemption", "roofing contractor exemption", "specialty contractor workers comp exemption"],
  },
  {
    slug: "sole-proprietor-exemption",
    title: "Sole Proprietor Exemption",
    short: "Single-owner business WC exemption",
    description:
      "Most states allow sole proprietors to exclude themselves from workers' compensation requirements. We identify your state's specific rules, ensure you meet the active-work and business-type criteria, and complete the exemption paperwork so you're protected from fines at inspection.",
    icon: "User",
    keywords: ["sole proprietor workers comp exemption", "self-employed workers comp exemption", "individual contractor exemption", "owner operator WC exemption"],
  },
  {
    slug: "llc-exemption",
    title: "LLC Member Exemption",
    short: "LLC member & manager WC exemption",
    description:
      "LLC members and managers who actively work in the business can qualify for a workers' comp exemption in many states — but member count, ownership percentage, and active-work requirements vary. We handle LLC-specific exemption filings and ensure your operating agreement supports the election.",
    icon: "Building2",
    keywords: ["LLC workers comp exemption", "LLC member exemption", "limited liability company WC exemption", "LLC manager exemption workers compensation"],
  },
  {
    slug: "corporate-officer-exemption",
    title: "Corporate Officer Exemption",
    short: "S-corp & C-corp officer exemption",
    description:
      "Corporate officers of S-corporations and C-corporations can elect to be excluded from workers' compensation in most states — but the election must be filed correctly with the state and with your insurance carrier. We handle the notice-of-election paperwork and carrier filings so your exemption is enforceable.",
    icon: "Briefcase",
    keywords: ["corporate officer workers comp exemption", "officer exemption workers compensation", "S-corp officer WC exemption", "C-corp officer exemption"],
  },
  {
    slug: "exemption-renewal",
    title: "Exemption Renewal",
    short: "Keep your exemption current & valid",
    description:
      "Workers' compensation exemptions in most states expire — Florida exemptions renew every two years, and other states have their own renewal cycles. We track your expiration date, alert you in advance, and handle the renewal paperwork so your exemption never lapses on a job site.",
    icon: "RefreshCw",
    keywords: ["workers comp exemption renewal", "WC exemption renewal Florida", "renew workers compensation exemption", "exemption expiration renewal"],
  },
] as const;

export const LOCATIONS = [
  { slug: "florida", name: "Florida", region: "FL Construction Market", blurb: "Florida has one of the most active WC exemption programs in the country — with strict DFS filing requirements for construction contractors. We file FL exemptions daily and know exactly what the Florida Division of Workers' Compensation requires to keep your certificate valid." },
  { slug: "arizona", name: "Arizona", region: "AZ Industrial Commission", blurb: "Arizona sole proprietors and small contractors navigate the Industrial Commission's exemption rules constantly. We handle AZ exemption applications and ensure your business structure and active-work status satisfy the ICA requirements that come up at audit." },
  { slug: "texas", name: "Texas", region: "TX Non-Subscriber Market", blurb: "Texas is unique — WC is optional for most employers. But independent contractor misclassification and non-subscriber liability are real risks. We advise Texas contractors on lawful exemption, non-subscriber strategies, and occupational accident alternatives." },
  { slug: "georgia", name: "Georgia", region: "GA Contractor Exemption", blurb: "Georgia allows corporate officers and LLC members in construction to file for WC exemptions with the State Board of Workers' Compensation. We handle the Georgia exemption paperwork for contractors, subcontractors, and specialty trades statewide." },
  { slug: "tennessee", name: "Tennessee", region: "TN Construction Exemption", blurb: "Tennessee allows sole proprietors and partners in construction to opt out of workers' comp. We guide Tennessee contractors through the exemption requirements and make sure your exemption is recognized by general contractors requiring proof of coverage." },
  { slug: "north-carolina", name: "North Carolina", region: "NC Exemption Filing", blurb: "North Carolina has specific rules for LLC members and sole proprietors in construction. We prepare NC exemption applications and ensure your business structure qualifies — especially for single-member LLCs and family-owned businesses." },
  { slug: "south-carolina", name: "South Carolina", region: "SC Contractor Exemption", blurb: "South Carolina contractors can apply for WC exemptions through the SC Department of Employment and Workforce. We handle exemption filing and help contractors understand what documentation is required to maintain valid exempt status." },
  { slug: "nationwide", name: "Nationwide", region: "All States", blurb: "Workers' compensation exemption rules vary significantly by state — from Florida's strict DFS filing process to Texas's opt-out system. We advise contractors in all 50 states on exemption eligibility, handle filing where available, and recommend alternatives when exemptions aren't an option." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "WC exemption specialists", icon: "FileCheck" },
  { label: "15-minute consultation", icon: "Timer" },
  { label: "Same-day exemption review", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 5000, suffix: "+", label: "Exemptions filed for contractors nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years helping contractors stay compliant", prefix: "" },
  { value: 15, suffix: " min", label: "Average consultation turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & advising", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "I had no idea my Florida WC exemption had expired until a general contractor called me off a job. These folks filed a new one same day and I was back to work the next morning. Lifesaver.", name: "Mike T.", role: "Roofing Contractor", location: "Tampa, FL" },
  { quote: "As a sole proprietor electrician in Arizona, I was paying for workers' comp on myself that I didn't need. They walked me through the ICA exemption process and I got that money back. Wish I'd called sooner.", name: "Carlos R.", role: "Electrical Contractor", location: "Phoenix, AZ" },
  { quote: "I thought Texas WC was mandatory — it's not, but the rules around non-subscriber status are confusing. They explained my options clearly, helped me set up an occupational accident policy instead, and I saved a ton.", name: "James B.", role: "General Contractor", location: "Dallas, TX" },
] as const;
