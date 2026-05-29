'use client'

import { useState } from 'react'
import { JANE_APP_URL } from '@/lib/constants'
import { AnimateIn } from '@/components/AnimateIn'

const adultSteps = [
  {
    n: 1,
    title: 'Book online',
    body: 'No referral needed. Takes 2 minutes.',
  },
  {
    n: 2,
    title: 'Complete your intake forms',
    body: 'Sent automatically after booking. Includes DSM-5 screening for ADHD, anxiety, and mood disorders — because these things rarely travel alone.',
  },
  {
    n: 3,
    title: 'Meet with Tatjana virtually',
    body: "45 to 60 minutes. She reviews your forms, your history, and what life has actually felt like. You don't need to prepare a speech.",
  },
  {
    n: 4,
    title: 'Get your diagnosis',
    body: 'Often confirmed during the appointment itself — not weeks later in a letter you have to decode.',
  },
  {
    n: 5,
    title: 'Receive your report',
    body: 'A formal medical diagnostic PDF delivered within a few days. Valid for insurance claims, workplace accommodations, or school.',
  },
  {
    n: 6,
    title: 'Ongoing care',
    body: "Book follow-ups for medication management, prescription refills, or anything that comes up next. We don't disappear after the diagnosis.",
  },
]

const youthSteps = [
  {
    n: 1,
    title: 'Book online',
    body: 'Parent or child can book — no referral needed.',
  },
  {
    n: 2,
    title: 'Complete intake forms',
    body: "Parent and child fill out separate forms. Teacher forms are included for academic and behavioural insight — because school sees things home doesn't.",
  },
  {
    n: 3,
    title: 'Two assessment sessions with Tatjana',
    body: 'One hour each, held virtually. We cover history, observations from home, school, and everywhere in between.',
  },
  {
    n: 4,
    title: 'Synthesis appointment',
    body: 'Everything comes together here. The diagnosis is given, questions are answered, and next steps are made clear for the whole family.',
  },
  {
    n: 5,
    title: 'Care plan',
    body: 'Treatment plan, education, and prescription if applicable — built around your child, not a generic checklist.',
  },
  {
    n: 6,
    title: 'Ongoing support',
    body: 'IEP help, medication reviews, specialist referrals, neurodivergent screening. We stay in it with you.',
  },
]

export function HowItWorks() {
  const [tab, setTab] = useState<'adult' | 'youth'>('adult')
  const steps = tab === 'adult' ? adultSteps : youthSteps

  return (
    <section className="bg-[#FAFAF8] py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimateIn>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-2 text-center">
            What to expect
          </h2>
          <p className="text-center text-[#6B7280] mb-10 text-sm">
            Select your path below
          </p>
        </AnimateIn>

        {/* Tab toggle */}
        <AnimateIn delay={100}>
          <div className="flex justify-center mb-14">
            <div
              className="inline-flex rounded-full border border-[#E5E5E3] bg-[#F2F2F0] p-1"
              role="tablist"
              aria-label="Assessment path"
            >
              <button
                role="tab"
                aria-selected={tab === 'adult'}
                onClick={() => setTab('adult')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  tab === 'adult'
                    ? 'bg-[#2C5F6F] text-white shadow-sm'
                    : 'text-[#6B7280] hover:text-[#1A1A1A]'
                }`}
              >
                Adults
              </button>
              <button
                role="tab"
                aria-selected={tab === 'youth'}
                onClick={() => setTab('youth')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  tab === 'youth'
                    ? 'bg-[#2C5F6F] text-white shadow-sm'
                    : 'text-[#6B7280] hover:text-[#1A1A1A]'
                }`}
              >
                Children &amp; Youth
              </button>
            </div>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="space-y-10">
          {steps.map((step, i) => (
            <AnimateIn key={`${tab}-${step.n}`} delay={i * 70}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#A8D0E0]/40 flex items-center justify-center mt-0.5">
                  <span className="text-[#2C5F6F] font-semibold text-sm">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#1A1A1A] mb-1.5">{step.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed text-[15px]">{step.body}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={500}>
          <div className="mt-14 text-center">
            <a
              href={JANE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3.5 rounded-full bg-[#2C5F6F] text-white text-sm font-medium hover:bg-[#2C5F6F]/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2C5F6F] focus:ring-offset-2"
            >
              Book Your Assessment
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
