import { rootReducer } from "./store/configureStore";

export type RootState = ReturnType<typeof rootReducer>

export interface IRockets {
    rockets: IRocket[]
}

export interface IAction {
    type: string
    payload: IRocket[]
}

export interface IRocket {
    id: string
    name: string
    description: string
    success_rate_pct: number
    active: boolean
    first_flight: string
    wikipedia: string
    cost_per_launch: number
    flickr_images: string[]
}