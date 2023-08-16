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

        it('applies the discount and returns 130 when given A three times', () => {
            const result = checkout('AAA')
            expect(result).toBe(130)
        })

        it('applies the discount and returns 45 when given B three times', () => {
            const result = checkout('BB')
            expect(result).toBe(45)
        })

        it('applies the discount multiple times and returns 260 when given A six times', () => {
            const result = checkout('AAAAAA')
            expect(result).toBe(260)
        })

        it('applies the discount multiple times and returns 90 when given B four times', () => {
            const result = checkout('BBBB')
            expect(result).toBe(90)
        })

        describe('can handle complex inputs', () => {
            it('returns 260 when given products AABCDADDCD', () => {
                const result = checkout('AABCDADDCD')
                expect(result).toBe(260)
            })

            it('returns 310 when given products AAABBBCCCDDD', () => {
                const result = checkout('AAABBBCCCDDD')
                expect(result).toBe(310)
            })
        })

        describe('can handle a new product E', () => {
            it('returns 10 for product E', () => {
                const result = checkout('E')
                expect(result).toBe(10)
            })

            it('returns a discount 4 E\'s is 30', () => {
                const result = checkout('EEEE')
                expect(result).toBe(30)
            })
        })

    })
})