import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Audio Services`} />
      <div>
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <p>
            <button className="my-3 ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
              Contact Now
            </button>
          </p>
          <h1 className="py-4 text-center text-3xl uppercase leading-9 text-lime-400 dark:text-lime-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Audio Services
          </h1>
          <div className="my-5">
            <h2 className="text-2xl font-bold leading-9 text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
              Mastering
            </h2>
            {/* <p className="my-3">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Fusce sit amet congue ipsum. Donec at mi tortor. Vestibulum eget varius nisi.
              Pellentesque eleifend vestibulum velit nec tincidunt. Donec rhoncus nulla vel lacus
              rhoncus bibendum.
            </p> */}
            <ul className="list-inside list-disc">
              <li>1 track $92.00 NZD</li>
              <li>2 tracks $165.00 NZD</li>
              <li>3 tracks $240.00 NZD</li>
              <li>4 tracks $310.00 NZD </li>
              <li>New Pre-master/Export $29.00 NZD </li>
            </ul>
          </div>
          <hr />
          <div className="my-5">
            <h2 className="text-2xl font-bold leading-9 text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
              Stem Mastering
            </h2>
            {/* <p className="my-3">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Fusce sit amet congue ipsum. Donec at mi tortor. Vestibulum eget varius nisi.
              Pellentesque eleifend vestibulum velit nec tincidunt. Donec rhoncus nulla vel lacus
              rhoncus bibendum.
            </p> */}
            <ul className="list-inside list-disc">
              <li>Up to 8 stems: $130.00 – $210.00 NZD</li>
              <li>Or get in touch for a bespoke quote</li>
            </ul>
          </div>
          <hr />

          <div className="my-5">
            <h2 className="text-2xl font-bold leading-9 text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
              The Works
            </h2>
            <p className="my-3">
              Mix your song from the ground up AND give it the final mastering polish, for maximum
              sonic control and best possible end result. No track count limit. The rate depends on
              the amount of stems. For a quote, please send stem count and a reference mix.{' '}
            </p>
            <ul className="list-inside list-disc">
              <li>From $220 NZD</li>
            </ul>
          </div>
          <hr />

          <div className="my-5">
            <h2 className="text-2xl font-bold leading-9 text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
              Master & Track Feedback
            </h2>
            <p className="my-3">
              A detailed feedback, review and summary of how your track is performing in either the
              Mix, Master and Arrangement/Composition to achieve best results. Mixdown and
              arrangement suggestions for mastering, as well as commenting on your mastering if
              applicable.
            </p>
            <ul className="list-inside list-disc">
              <li> $30 NZD per track</li>
            </ul>
          </div>
          <hr />

          <div className="my-5">
            <h2 className="text-2xl font-bold leading-9 text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
              Physical Studio Time
            </h2>
            <p className="my-3">
              Wanting to sample some synths? Have a hands on tutorial with analog gear? Run some
              audio through analog gear? Book in physical studio time with me. Alternatively, see{' '}
              <Link className="text-lime-400" href="/tuition">
                here
              </Link>{' '}
              for tuition options.
            </p>
            <ul className="list-inside list-disc">
              <li>$85 – $175 NZD per hour depending on the work.</li>
            </ul>
          </div>
          <hr />
          <p>
            <button className="my-3 ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
              Contact Now
            </button>
          </p>
        </div>
        <p className="font-emphasis text-center">All prices are GST inclusive </p>
      </div>
    </>
  )
}
