import { createContext, useContext } from 'react'
import { RootContextTypes } from '../types'

export const RootContext = createContext<RootContextTypes | null>(null)

export const useRootContext = () => useContext(RootContext) as RootContextTypes
