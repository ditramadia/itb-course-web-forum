import { AppType } from 'next/dist/shared/lib/utils'
import { withTRPC } from '@trpc/next'
import { ServerRouter } from '@/server/router'

import '@/styles/globals.css'
import '@/styles/Navbar.css'
import '@/styles/Header.css'
import '@/styles/Search.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default withTRPC<ServerRouter>({
  config() {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc'

    return {
      url,
    }
  },
  ssr: true,
})(MyApp)
