import './_layout.css'
import '~/tamagui/tamagui.css'

import { SchemeProvider } from '@vxrn/color-scheme'
import { LoadProgressBar, Slot } from 'one'
import { isWeb, View } from 'tamagui'
import { TamaguiRootProvider } from '../src/tamagui/TamaguiRootProvider'

export default function Layout() {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.svg" />

        <title>👋</title>
      </head>

      <body>
        <LoadProgressBar />

        <SchemeProvider>
          <TamaguiRootProvider>
            <Slot />
          </TamaguiRootProvider>
        </SchemeProvider>
      </body>
    </html>
  )
}
