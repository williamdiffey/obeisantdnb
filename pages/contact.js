import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Contact() {
  return (
    <>
      <PageSEO title={`Contact`} description={siteMetadata.description} />
      <h1 className="py-4 text-center text-3xl uppercase leading-9 text-lime-400 dark:text-lime-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Contact Us
      </h1>
      <p className="my-3 text-center">
        Whatever your needs, submit a message below and we'll get right back to you
      </p>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col flex-wrap content-center"
      >
        <input
          className=""
          type="hidden"
          name="access_key"
          value="35a6fa66-c023-4b7a-ad17-f482d6255867"
        />
        <p>Name:</p>
        <input type="text" name="name" required className="mb-5 w-9/12 rounded-md text-black" />
        <p>Email</p>
        <input type="email" name="email" required className="mb-5 w-9/12 rounded-md text-black" />
        <p>Message</p>
        <textarea name="message" required className="rounded-md text-black"></textarea>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
          className="mb-5 w-9/12 rounded-md"
        />

        <button className="mt-8 ml-auto mr-auto block w-3/4 rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0">
          Submit
        </button>
      </form>
    </>
  )
}
