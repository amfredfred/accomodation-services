export interface IRoom {
    services?: 'check_in' | 'check_out' | 'adults_count' | 'children_count'
    title?: string,
    id?: string
    type?: string,
    description?: string,
    photos?: string[],
    avaiability?: {},
    price?: string,
    term?: string,
    rating?: number[]
    features?: {
        wifi?: boolean
        bars?: boolean
        spar?: boolean
        swimmingPool?: boolean
        atmMachine?: boolean
        restaurant?: boolean
    }
    bookedTill?: number | null
    subTotal?: number
    //
    check_in?: number | null
    check_out?: number | null
    adults_count?: number | 2
    children_count?: number | 0
}

export interface IBooking {
    check_in?: number | null
    check_out?: number | null
    adults_count?: number | 2
    children_count?: number | 0
}

export interface IAccomodationServices {
    actions?: 'user' | 'cart' | 'check_in' | 'check_out' | 'adults_count' | 'children_count'
    user: {
        isAuthenticated: boolean
    }
    cart: {
        isShowing: boolean
        isCheckingout: boolean
        selections: [IRoom]
    }
}

export const AccomodationServices: IAccomodationServices = {
    user: {
        isAuthenticated: false
    },
    cart: {
        isShowing: false,
        isCheckingout: false,
        selections: [] as any
    }
}

export interface ILayouts {
    children: React.ReactNode
}
