import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from 'next/image'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* <h1 className="text-1xl text-center font-extrabold uppercase leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Obeisant
      </h1> */}

      <div className="grid">
        <div className="ml-auto mr-auto">
          <Image src="/static/images/FPlogo.png" alt="logo" width={100} height={125} />
        </div>
      </div>

      <h3 className="text-center text-lg text-lime-400">Mixing, Mastering, Tuition</h3>

      <p className="text-md mt-5 mb-10">
        Obeisant (Sebastian Gawlik) is a Drum ‘n’ Bass and Electronica Producer, Recording, Mixing,
        & Mastering Engineer, and Educator from Hamilton, New Zealand. With over 18 years of
        experience behind the controls of analog equipment and computer audio software, including a
        Diploma of Music Industry: Technical Production (Audio Engineering), Sebastian promises top
        quality Mixing & Mastering services through a well-trained ear. He uses the best industry
        leading tools, with a selection of specialty hardware that can be used for added colour and
        flare upon request. <br /> <br /> Check out our{' '}
        <Link href="/mastering" className="text-lime-400">
          Mixing & Mastering Services{' '}
        </Link>
        or up your skills with some{' '}
        <Link href="/tuition" className="text-lime-400">
          Tuition{' '}
        </Link>
        or{' '}
        <Link href="contact" className="text-lime-400">
          Get in Touch
        </Link>{' '}
        to discuss your bespoke requirements.
      </p>

      {/* <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
        <Link href="/mastering">Mastering</Link>
      </button>

      <button className="my-3 ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
        <Link href="/tuition">Tuition</Link>
      </button> */}

      <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
        <Link href="/contact">Let's do this</Link>
      </button>
    </>
  )
}
