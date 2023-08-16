import { checkout } from "../src"

describe('checkout', () => {
    it('has no items input', () => {
        const result = checkout('')
        expect(result).toBe(0)
    })
})