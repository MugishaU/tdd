export const getPrice = (product: string): number => {
    switch (product){
        case 'A':
            return 50
        case 'B':
            return 30
        case 'C':
            return 20
        case 'D':
            return 15
        default:
            return 0
    }
}

export const checkout = (products: string): number => {
    const cost = products
        .split('')
        .map(product => getPrice(product))
        .reduce((a,b) => a + b)

    return cost
}