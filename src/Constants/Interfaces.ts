export interface IAccomodationServices {
    actions?: 'user' | 'cart'
    user: {
        isAuthenticated: boolean
    }
    cart: object[ ]
}

export const AccomodationServices: IAccomodationServices = {
    user: {
        isAuthenticated: false
    },
    cart: []
}

export interface ILayouts {
    children: React.ReactNode
}

export interface IRoom {
    title?: string,
    type?: string,
    description?: string,
    photos?: string[],
    avaiability?: {},
    price?: string,
    term?: string,
    features?: {
    }
}