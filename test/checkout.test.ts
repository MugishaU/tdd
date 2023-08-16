import { checkout, getPrice } from "../src"

describe('index.ts', () => {
    describe('getPrice', () => {
        it('returns 0 when no products given', () => {
            const result = getPrice('')
            expect(result).toBe(0)
        })
        it('returns 50 for product A', () => {
            const result = getPrice('A')
            expect(result).toBe(50)
        })
        it('returns 30 for product B', () => {
            const result = getPrice('B')
            expect(result).toBe(30)
        })
        it('returns 20 for product C', () => {
            const result = getPrice('C')
            expect(result).toBe(20)
        })
        it('returns 15 for product D', () => {
            const result = getPrice('D')
            expect(result).toBe(15)
        })
    })

    describe('checkout', () => {
        it('returns 80 when product A and B given', () => {
            const result = checkout('AB')
            expect(result).toBe(80)
        })
    
        it('returns 50 when product B and B given', () => {
            const result = checkout('BC')
            expect(result).toBe(50)
        })
    
    
        it('returns 65 when product A and D given', () => {
            const result = checkout('DA')
            expect(result).toBe(65)
        })

        it('returns 120 when given products: A, C, A', () => {
            const result = checkout('ACA')
            expect(result).toBe(120)
        })
    })
})
