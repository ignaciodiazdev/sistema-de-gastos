import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
import { Gasto } from '../types'

type GastoState = {
    gastos: Gasto[]
}

export const useAppStore = create<GastoState>()(() => ({
    gastos: [],
}))