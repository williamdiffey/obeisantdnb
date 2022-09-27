import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Tuition() {
  return (
    <>
      <PageSEO title={`Tuition`} />
      <div>
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-3xl font-bold uppercase leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tuition
          </h1>
          <div className="my-5">
            <p className="my-3">
              Sebastian possesses years of one-to-one tuition and workshop hosting experience, with
              a clear, well-rounded manner of communication, explanation, and examples given.
              Sebastian will teach and provide you with what you need to know, in an effortless way
              you'll understand. You’ll be given industry-insider information guaranteed to see you
              swiftly advance in your desired field of learning and sonic requirements.
            </p>
            <ul className="list-inside list-disc">
              <li className="my-2">
                In-person (Hamilton, New Zealand) tuition & international tuition via Zoom
              </li>
              <li className="my-2">
                In-depth beginner to advanced EDM, Dance Music, and Electronica production
              </li>
              <li className="my-2">
                Mixing a track from the ground up and all-things mixing related
              </li>
              <li className="my-2">
                Mastering ethos & approach - mastering targets, goals and benchmarks
              </li>
              <li className="my-2">
                General song composition & arrangement - most styles of contemporary music
              </li>
              <li className="my-2">
                Artist mentoring to help develop your style & sound - similar services and role as a
                producer in the ‘traditional’ sense of the word (like Quincy Jones or Rick Rubin)
              </li>
              <li className="my-2">DAW (Digital Audio Workstation) specific help</li>
              <li className="my-2">
                Sound design (synthesis) for contemporary and classic synth-sounds
              </li>
              <li className="my-2">The art of sampling</li>
              <li>Music-theory hacks for computer music production and basic music-theory</li>
              <li className="my-2">
                If you don’t see what you’re looking for, please make an enquiry, and I’m sure I can
                help you out.
              </li>
            </ul>
          </div>
          <p>
            <button className="my-3 ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
              Let's do this
            </button>
          </p>
          <hr />

          <p className="font-emphasis mt-5 text-center">All prices are GST inclusive </p>
        </div>
      </div>
    </>
  )
}
