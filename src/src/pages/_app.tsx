import { AppType } from 'next/dist/shared/lib/utils'
import { withTRPC } from '@trpc/next'
import { serverRouter } from '@/server/router'

import '@/styles/globals.css'
import '@/styles/Navbar.css'
import '@/styles/Header.css'
import '@/styles/Search.css'
import '@/styles/Result.css'
import '@/styles/MatkulCard.css'
import '@/styles/Footer.css'
import '@/styles/MatkulHeader.css'
import '@/styles/DescRating.css'
import '@/styles/PageHeader.css'
import '@/styles/AboutContent.css'
import '@/styles/Feedback.css'
import '@/styles/FeedbackCard.css'
import '@/styles/SubmissionForm.css'
import '@/styles/404.css'
import absoluteUrl from 'next-absolute-url'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default withTRPC<typeof serverRouter>({
  config({ ctx }) {
    let host: string
    if (process.env.VERCEL_URL) {
      host = process.env.VERCEL_URL as string
    } else if (ctx) {
      host = absoluteUrl(ctx.req)['origin'].concat('/')
    } else {
      host = ''
    }

    return {
      url: `${host}/api/trpc`,
    }
  },
  ssr: true,
})(MyApp)
