import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { US_STATES, getStateBySlug } from "@/lib/states";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

export function generateStaticParams() {
  return US_STATES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};
  const url = `${SITE.url}/states/${slug}`;
  return {
    title: `${state.name} Workers' Comp Exemption | ${SITE.name}`,
    description: `Workers' compensation exemption filing help for ${state.name} business owners — sole proprietors, LLC members, and corporate officers.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${state.name} Workers' Comp Exemption`,
      description: `Workers' compensation exemption filing help for ${state.name} business owners.`,
      url,
    },
  };
}

export default async function StatePage({ params }: Props) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();
  const url = `${SITE.url}/states/${slug}`;

  const sorted = [...US_STATES].sort((a, b) => a.name.localeCompare(b.name));
  const pos = sorted.findIndex((s) => s.slug === slug);
  const prev = sorted[(pos - 1 + sorted.length) % sorted.length];
  const next = sorted[(pos + 1) % sorted.length];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "States", item: `${SITE.url}/states` },
      { "@type": "ListItem", position: 3, name: state.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="container-tight">
            <FadeIn>
              <Link href="/states" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-clay hover:text-clay-dark transition-colors">
                <ArrowLeft className="h-4 w-4" />All states
              </Link>
              <span className="mt-6 pill-clay inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />{state.abbr}
              </span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {state.name} Workers&rsquo; Comp Exemption
              </h1>
              <p className="mt-6 lead max-w-2xl">
                We file workers&rsquo; compensation exemptions for {state.name} sole proprietors,
                LLC members, and corporate officers. Send us your details and we&rsquo;ll confirm
                whether you qualify and handle the filing.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="container-tight">
            {/*
              PLACEHOLDER — Josh is supplying the {state.name} exemption form and the
              state-specific filing rules separately. Nothing state-specific is asserted
              here on purpose: publishing invented regulatory detail would be worse than
              publishing nothing. Replace this block per state as the content arrives.
            */}
            <FadeIn>
              <div className="rounded-3xl border border-adobe bg-sonoran-sand p-8 md:p-10 max-w-3xl">
                <h2 className="font-heading font-extrabold text-espresso text-2xl">
                  {state.name} exemption details
                </h2>
                <p className="mt-4 text-mocha">
                  State-specific requirements, the current {state.name} exemption form, and
                  filing instructions are being added to this page. In the meantime we can
                  answer {state.name} exemption questions directly.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/quote" className="btn-primary">
                    Request {state.name} exemption help<ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/services" className="btn-secondary">
                    See what we file
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="mt-12">
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-adobe pt-8">
                <Link href={`/states/${prev.slug}`} className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-mocha hover:text-clay transition-colors">
                  <ArrowLeft className="h-4 w-4" />{prev.name}
                </Link>
                <span className="text-xs text-mocha/60">
                  State {pos + 1} of {sorted.length}
                </span>
                <Link href={`/states/${next.slug}`} className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-mocha hover:text-clay transition-colors">
                  {next.name}<ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <CTABand
          title={`Workers' comp exemption filing in ${state.name}`}
          description={`Tell us about your ${state.name} business and we'll confirm whether you qualify for an exemption.`}
        />
      </main>
      <Footer />
    </>
  );
}
