import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Tuition() {
  return (
    <>
      <PageSEO title={`Tuition`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <p>All prices are GST inclusive </p>
          <h1>Tuition</h1>
          Sebastian possesses years of one-to-one tuition and workshop hosting experience, with a
          clear, well-rounded manner of communication, explanation, and examples given. Sebastian
          will teach and provide you with what you need to know, in an effortless way you'll
          understand. You’ll be given industry-insider information guaranteed to see you swiftly
          advance in your desired field of learning and sonic requirements. Sebastian offers:
          In-person (Hamilton, New Zealand) tuition & international tuition via Zoom In-depth
          beginner to advanced EDM, Dance Music, and Electronica production Mixing a track from the
          ground up and all-things mixing related Mastering ethos & approach - mastering targets,
          goals and benchmarks General song composition & arrangement - most styles of contemporary
          music Artist mentoring to help develop your style & sound - similar services and role as a
          producer in the ‘traditional’ sense of the word (like Quincy Jones or Rick Rubin) DAW
          (Digital Audio Workstation) specific help Sound design (synthesis) for contemporary and
          classic synth-sounds The art of sampling Music-theory hacks for computer music production
          and basic music-theory If you don’t see what you’re looking for, please make an enquiry,
          and I’m sure I can help you out. Tuition Learn music production & audio engineering,
          mixing & mastering, electronic production & more In depth tuition, from beginner to
          advanced. Learn how to produce EDM / Electronica / DnB. All prices are GST inclusive
          _______ 1 hr – $85.00 NZD 1.5 hr – $120.00 NZD 2.0 hr – $150.00 NZD
          <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
            Let's do this
          </button>
        </div>
      </div>
    </>
  )
}
