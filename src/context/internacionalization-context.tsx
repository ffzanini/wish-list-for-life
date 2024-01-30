'use client'
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react'

import { en, pt } from '../locales'

type Locations = 'pt' | 'en'

export interface InternacionalizationInterface {
  location: Locations
  setLocation: (location: Locations) => void
  translations: typeof pt
}

const InternacionalizationContext = createContext(
  {} as InternacionalizationInterface,
)

const useTranslation = () => {
  const context = useContext(InternacionalizationContext)

  if (context === undefined) {
    throw new Error(
      'useTranslation must be used within IternacionalizationProvider',
    )
  }

  return context
}

const InternacionalizaionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [location, setLocation] = useState<Locations>('en')

  const getTranslations = useCallback(() => {
    if (location === 'en') return en
    return pt
  }, [location])

  const objTranslations = useMemo(
    () => ({ location, setLocation, translations: getTranslations() }),
    [location, getTranslations],
  )
  return (
    <InternacionalizationContext.Provider value={objTranslations}>
      {children}
    </InternacionalizationContext.Provider>
  )
}

export { InternacionalizaionProvider, useTranslation }
