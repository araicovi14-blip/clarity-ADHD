import type { Metadata } from "next";
import Link from "next/link";
import { JANE_APP_URL } from "@/lib/constants";
import { HowItWorks } from "@/components/HowItWorks";
import { CTABanner } from "@/components/CTABanner";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title:
    "Clarity ADHD — Virtual ADHD Assessments in BC | No Waitlist, No Referral",
  description:
    "Private ADHD assessments for children, youth, and adults across BC. Virtual appointments available within a week. No referral needed. Led by Tatjana Dunat, MSN, FNP-C.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ContrastBar />
      <HowItWorks />
      <WhoWeHelp />
      <WhyClarity />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="min-h-[92vh] bg-[#FAFAF8] flex items-center pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center py-20 md:py-28">
        {/* Text */}
        <div>
          <p
            className="font-serif text-2xl text-[#B8E0F7] mb-5 opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0s forwards" }}
          >
            Clarity <span className="text-[#B8E0F7]">ADHD</span>
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] text-[#1A1A1A] leading-[1.15] mb-6 opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.1s forwards" }}
          >
            For families and individuals in BC who&apos;ve felt dismissed or
            overlooked — Clarity ADHD gives you real answers, fast.
          </h1>
          <p
            className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-lg opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.4s forwards" }}
          >
            Virtual ADHD assessments for children, youth, and adults across BC.
            No referral. No waitlist. Within a week.
          </p>
          <div
            className="opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.65s forwards" }}
          >
            <a
              href={JANE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-[#B8E0F7] text-white text-sm font-medium hover:bg-[#B8E0F7]/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B8E0F7] focus:ring-offset-2"
            >
              Book Your Assessment
            </a>
          </div>
        </div>

        {/* Photo placeholder — right side */}
        <div className="hidden md:block">
          {/* TODO: replace with real photo of Tatjana */}
          <div
            className="aspect-[4/5] rounded-3xl bg-[#B8E0F7]/25 w-full max-w-md ml-auto opacity-0 overflow-hidden relative"
            style={{ animation: "fadeIn 1s ease-out 0.5s forwards" }}
            role="img"
            aria-label="Photo of Tatjana Dunat, Nurse Practitioner and founder of Clarity ADHD"
          >
            {/* subtle inner texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8E0F7]/20 to-[#B8E0F7]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTRAST BAR
───────────────────────────────────────── */
function ContrastBar() {
  return (
    <section className="bg-[#F2F2F0] py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8 md:gap-20 text-center divide-x divide-[#1A1A1A]/10">
        <AnimateIn>
          <div className="pr-4 md:pr-0">
            <p className="font-serif text-4xl md:text-5xl text-[#6B7280] mb-3">
              2–3 years
            </p>
            <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed max-w-[160px] mx-auto">
              Average public wait for ADHD assessment in BC
            </p>
          </div>
        </AnimateIn>
        <AnimateIn delay={160}>
          <div className="pl-4 md:pl-0">
            <p className="font-serif text-4xl md:text-5xl text-[#B8E0F7] mb-3">
              Within a week
            </p>
            <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed max-w-[160px] mx-auto">
              Average wait at Clarity ADHD
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WHO WE HELP
───────────────────────────────────────── */
function WhoWeHelp() {
  return (
    <section className="bg-[#F2F2F0] py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-12 text-center">
            Who we help
          </h2>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-5">
          <AnimateIn delay={100}>
            <Link
              href="/for-families"
              className="group block bg-[#FAFAF8] rounded-2xl p-8 md:p-10 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#B8E0F7] transition-colors duration-200">
                Families &amp; Kids
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-[15px]">
                From toddlers to teens, we understand how ADHD shows up at
                every age. And we know how to talk to the whole family.
              </p>
              <span className="inline-block mt-7 text-sm text-[#B8E0F7] font-medium">
                Learn more →
              </span>
            </Link>
          </AnimateIn>
          <AnimateIn delay={200}>
            <Link
              href="/for-adults"
              className="group block bg-[#FAFAF8] rounded-2xl p-8 md:p-10 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#B8E0F7] transition-colors duration-200">
                Adults
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-[15px]">
                You&apos;ve probably been explaining yourself for years. You
                shouldn&apos;t have to anymore.
              </p>
              <span className="inline-block mt-7 text-sm text-[#B8E0F7] font-medium">
                Learn more →
              </span>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WHY CLARITY
───────────────────────────────────────── */
function WhyClarity() {
  return (
    <section className="bg-[#FAFAF8] py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimateIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-7">
            Why Clarity
          </p>
          <p className="font-serif text-2xl md:text-[1.75rem] text-[#1A1A1A] leading-[1.5] mb-8">
            Most clinicians have credentials. Tatjana has perspective. Thirty
            years across pediatric wards, the Downtown Eastside, and university
            classrooms — before ever opening a private clinic. There&apos;s a
            difference between knowing ADHD from a textbook and knowing it from
            real life.
          </p>
          <Link
            href="/our-story"
            className="text-sm text-[#B8E0F7] font-medium hover:underline underline-offset-4"
          >
            Read her story →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Clarity ADHD made the entire assessment process feel supportive, efficient, and incredibly validating for our family.",
    name: "Sarah H.",
    role: "Parent",
  },
  {
    quote:
      "I felt heard, understood, and guided — Clarity ADHD gave me clarity, confidence, and a plan that actually works.",
    name: "Jason K.",
    role: "",
  },
  {
    quote:
      "Clarity ADHD delivered a comprehensive assessment and clear diagnosis in half the time of other clinics, without ever compromising on care.",
    name: "Veronica F.",
    role: "",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-[#F2F2F0] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-12 text-center">
            What people say
          </h2>
        </AnimateIn>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 110}>
              <blockquote className="bg-[#FAFAF8] rounded-2xl p-8 h-full flex flex-col">
                <p className="text-[#1A1A1A] leading-relaxed text-[15px] mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="text-sm font-medium text-[#1A1A1A]">
                      {t.name}
                    </span>
                    {t.role && (
                      <span className="text-sm text-[#6B7280]">
                        {" "}
                        — {t.role}
                      </span>
                    )}
                  </cite>
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
