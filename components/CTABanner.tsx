import { JANE_APP_URL } from '@/lib/constants'

interface CTABannerProps {
  headline?: string
  subtext?: string
  buttonLabel?: string
}

export function CTABanner({
  headline = 'Ready to get clarity?',
  subtext = 'Appointments available within a week. No referral needed.',
  buttonLabel = 'Book Now',
}: CTABannerProps) {
  return (
    <section className="bg-[#2C5F6F] py-20 md:py-28 px-6 text-center">
      <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-snug">
        {headline}
      </h2>
      <p className="text-[#A8D0E0] text-base md:text-lg mb-10 max-w-sm mx-auto leading-relaxed">
        {subtext}
      </p>
      <a
        href={JANE_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 rounded-full bg-white text-[#2C5F6F] text-sm font-medium hover:bg-[#A8D0E0] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2C5F6F]"
      >
        {buttonLabel}
      </a>
    </section>
  )
}
