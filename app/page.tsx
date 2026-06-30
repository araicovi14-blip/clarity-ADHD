import type { Metadata } from "next";
import Image from "next/image";
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

/* ───────────────────────────────────────────
   HERO
─────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden flex items-center">

      {/* Faded flower — ambient background art, left-bleeding */}
      <div className="absolute top-1/2 -translate-y-[50%] -left-[20%] md:-left-[10%] lg:-left-[8%] pointer-events-none select-none">
        <Image
          src="/images/Logo.png"
          alt=""
          width={1024}
          height={1024}
          className="w-[400px] md:w-[620px] lg:w-[740px] h-auto opacity-[0.12] mix-blend-multiply"
          aria-hidden="true"
          priority
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-0 md:min-h-screen md:flex md:items-center">
        <div className="w-full md:ml-[36%] lg:ml-[40%] max-w-2xl">

          <h1
            className="font-serif text-[clamp(2rem,4.2vw,3.5rem)] text-[#1A1A1A] leading-[1.22] mb-7 opacity-0"
            style={{ animation: "fadeInUp 1s ease-out 0.4s forwards" }}
          >
            For families and individuals in BC who&apos;ve felt dismissed or
            overlooked — Clarity ADHD gives you real answers, fast.
          </h1>

          <p
            className="text-[#6B7280] text-base md:text-[1.05rem] leading-relaxed mb-10 opacity-0"
            style={{ animation: "fadeInUp 0.9s ease-out 0.6s forwards" }}
          >
            Virtual ADHD assessments for children, youth, and adults across BC.
            No referral. No waitlist. Within a week.
          </p>

          <div
            className="opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.8s forwards" }}
          >
            <a
              href={JANE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-4 rounded-full bg-[#2C5F6F] text-[#FAF7F2] text-sm font-medium hover:bg-[#2C5F6F]/85 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2C5F6F] focus:ring-offset-2 focus:ring-offset-[#FAF7F2]"
            >
              Book Your Assessment
            </a>
          </div>
        </div>
      </div>

      {/* Hummingbird — bottom right, gently floating */}
      <div
        className="absolute bottom-10 right-8 md:bottom-14 md:right-14 opacity-0"
        style={{ animation: "fadeIn 1.2s ease-out 1.1s forwards" }}
        aria-hidden="true"
      >
        <svg
          width="72"
          height="56"
          viewBox="0 0 72 56"
          fill="none"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          {/* upper wing */}
          <path
            d="M34 25 C28 13 14 8 4 15 C12 17 24 21 32 27Z"
            fill="#2C5F6F"
            opacity="0.35"
          />
          {/* lower wing */}
          <path
            d="M34 30 C28 42 14 47 4 40 C12 38 24 34 32 30Z"
            fill="#2C5F6F"
            opacity="0.22"
          />
          {/* body */}
          <path
            d="M10 28 C16 21 26 19 38 21 C45 22 51 25 53 28 C51 31 45 34 38 35 C26 37 16 35 10 28Z"
            fill="#2C5F6F"
            opacity="0.48"
          />
          {/* head */}
          <circle cx="53" cy="27" r="6.5" fill="#2C5F6F" opacity="0.48" />
          {/* beak */}
          <path
            d="M59 25 L72 20"
            stroke="#2C5F6F"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.48"
          />
          {/* forked tail */}
          <path
            d="M11 26 L2 19"
            stroke="#2C5F6F"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M11 30 L1 38"
            stroke="#2C5F6F"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
      </div>

    </section>
  );
}

/* ───────────────────────────────────────────
   CONTRAST BAR
─────────────────────────────────────────── */
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
            <p className="font-serif text-4xl md:text-5xl text-[#2C5F6F] mb-3">
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

/* ───────────────────────────────────────────
   WHO WE HELP
─────────────────────────────────────────── */
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
              className="group block bg-[#FAF7F2] rounded-2xl p-8 md:p-10 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#2C5F6F] transition-colors duration-200">
                Families &amp; Kids
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-[15px]">
                From toddlers to teens, we understand how ADHD shows up at
                every age. And we know how to talk to the whole family.
              </p>
              <span className="inline-block mt-7 text-sm text-[#2C5F6F] font-medium">
                Learn more →
              </span>
            </Link>
          </AnimateIn>
          <AnimateIn delay={200}>
            <Link
              href="/for-adults"
              className="group block bg-[#FAF7F2] rounded-2xl p-8 md:p-10 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#2C5F6F] transition-colors duration-200">
                Adults
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-[15px]">
                You&apos;ve probably been explaining yourself for years. You
                shouldn&apos;t have to anymore.
              </p>
              <span className="inline-block mt-7 text-sm text-[#2C5F6F] font-medium">
                Learn more →
              </span>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   WHY CLARITY
─────────────────────────────────────────── */
function WhyClarity() {
  return (
    <section className="bg-[#FAF7F2] py-20 md:py-28 px-6">
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
            className="text-sm text-[#2C5F6F] font-medium hover:underline underline-offset-4"
          >
            Read her story →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   TESTIMONIALS
─────────────────────────────────────────── */
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
              <blockquote className="bg-[#FAF7F2] rounded-2xl p-8 h-full flex flex-col">
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
