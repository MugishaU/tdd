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
    const productArray = products.split('')

    let ACounter = 0
    let BCounter = 0

    for(const product of productArray){
        if(product === 'A'){
            ACounter++
        } else if(product === 'B'){
            BCounter++
        }

        cost += getPrice(product)
    }

    const discountA = Math.floor(ACounter / 3) * 20
    const discountB = Math.floor(BCounter / 2) * 15
        
    return cost - discountA - discountB
}