import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Tuition() {
  return (
    <>
      <PageSEO title={`Tuition`} />
      <div>
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <p>
            <button className="my-3 ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:my-12 sm:w-1/2 sm:py-2 lg:my-2">
              Contact Now
            </button>
          </p>
          <h1 className="py-2 text-center text-3xl uppercase leading-9 text-lime-400 dark:text-lime-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 lg:text-5xl">
            Tuition
          </h1>

          <div className="font-thin sm:leading-loose">
            <p className="my-3 text-justify leading-tight">
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
              <li className="my-2 sm:mb-24 lg:mb-0">
                Don’t see what you’re looking for? Make an enquiry and I’m sure we can help you out!
              </li>
            </ul>
          </div>
          <p>
            <button className="my=8 my-3 ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:mt-8 sm:w-1/2 sm:py-2 lg:my-2">
              Contact Now
            </button>
          </p>
        </div>
      </div>
    </>
  )
}
