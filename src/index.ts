interface Product {
    name: string
    amount: number
    discount?: Discount
}

interface Discount {
    qualifier: number
    value: number
}

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
        case 'E':
            return 10 
        default:
            return 0
    }
}

export const getDiscount = (products: string): number => {
    let discount = 0
    const discounts: Record<string, Discount> = {
        A: {
            qualifier: 3,
            value: 20
        },
        B: {
            qualifier: 2,
            value: 15
        },
        E: {
            qualifier: 4,
            value: 10
        }
    }

    const counter: Record<string, number> = {}

    for(const product of products){
        if(discounts[product]){
            if(counter[product]){
                counter[product] += 1
            } else {
                counter[product] = 1
            }
        }
    }

    for(const count in counter){
        discount += (Math.floor(counter[count] / discounts[count].qualifier) * discounts[count].value)
    }

    return discount
}

export const checkout = (products: string): number => {

    let cost = 0

    // let ACounter = 0
    // let BCounter = 0

    for(const product of products){
        // if(product === 'A'){
        //     ACounter++
        // } else if(product === 'B'){
        //     BCounter++
        // }

        cost += getPrice(product)
    }

    // const A_DISCOUNT_QUALIFIER = 3
    // const A_DISCOUNT_VALUE = 20

    // const B_DISCOUNT_QUALIFIER = 2
    // const B_DISCOUNT_VALUE = 15


    // const discountA = Math.floor(ACounter / A_DISCOUNT_QUALIFIER) * A_DISCOUNT_VALUE
    // const discountB = Math.floor(BCounter / B_DISCOUNT_QUALIFIER) * B_DISCOUNT_VALUE
        
    // return cost - discountA - discountB
    const discount = getDiscount(products)
    return cost - discount
}