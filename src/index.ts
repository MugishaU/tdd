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
    let cost = 0

    let ACounter = 0
    let BCounter = 0

    for(const product of products){
        if(product === 'A'){
            ACounter++
        } else if(product === 'B'){
            BCounter++
        }

        cost += getPrice(product)
    }

    const A_DISCOUNT_QUALIFIER = 3
    const A_DISCOUNT_VALUE = 20

    const B_DISCOUNT_QUALIFIER = 2
    const B_DISCOUNT_VALUE = 15


    const discountA = Math.floor(ACounter / A_DISCOUNT_QUALIFIER) * A_DISCOUNT_VALUE
    const discountB = Math.floor(BCounter / B_DISCOUNT_QUALIFIER) * B_DISCOUNT_VALUE
        
    return cost - discountA - discountB
}