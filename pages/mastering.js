import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Mixing & Mastering`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <p>All prices are GST inclusive </p>
          <h1>Mastering</h1>
          <p> 1 track $92.00 NZD </p>
          <p>2 tracks $165.00 NZD 3 tracks $240.00 </p>
          <p> NZD 4 tracks $310.00 NZD New Pre-master/Export $29.00 NZD </p>

          <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
            Let's do this
          </button>

          <h2>Stem Mastering</h2>
          <p>Stem Mastering up to 8 stems of the song: $130.00 – $210.00 NZD </p>

          <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
            Get things started
          </button>

          <h2>The Works</h2>
          <p>
            Mix your song from the ground up AND give it the final mastering polish, for maximum
            sonic control and best possible end result. No track count limit. The rate depends on
            the amount of stems. For a quote, please send stem count and a reference mix.{' '}
          </p>

          <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
            Make your music shine
          </button>

          <h2>Other Services Mix </h2>
          <h2>Master & Track Feedback </h2>
          <p>
            A detailed feedback, review and summary of how your track is performing in either the
            Mix, Master and Arrangement/Composition to achieve best results. Mixdown and arrangement
            suggestions for mastering, as well as commenting on your mastering if applicable. Price
            is GST inclusive $30 NZD per track Get a Free Quote{' '}
          </p>

          <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
            Let's talk
          </button>

          <h2>Physical Studio Time </h2>
          <p>
            Wanting to sample some synths? Have a hands on tutorial with analog gear? Run some audio
            through analog gear? Book in physical studio time with me. Alternatively, see here for
            tuition options. All prices are GST inclusive $85 – $175 NZD per hour depending on the
            work. Get a Free Quote{' '}
          </p>
          <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
            Have a chat
          </button>
        </div>
      </div>
    </>
  )
}
