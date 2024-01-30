'use client'

import React from 'react'
import { US as UsFlag, BR as BrFlag } from 'country-flag-icons/react/3x2'

export default function Page() {
  return (
    <div>
      <UsFlag title="United States" />
      <BrFlag title="Brazil" />
      <h1>Hello, Next.js!</h1>
    </div>
  )
}
