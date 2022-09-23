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
      <h1 className="text-center text-5xl uppercase">Obeisant</h1>
      <h3 className="text-center text-lg">Mixing, Mastering, Production</h3>

      <p className="text-md mt-10 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat
        feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu
        pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.
      </p>

      <button className="ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
        Let's do this
      </button>
    </>
  )
}
