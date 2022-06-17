import { errorMessage, formatInDatePattern } from './handleString'

describe('Converting texts', () => {
    it('formatInDatePattern() should be a function', () => {
        expect(formatInDatePattern).toBeInstanceOf(Function)
    })

    it('formatInDatePattern() should return "16/06/2022"', () => {
        const actual = formatInDatePattern('2022-06-16')
        const expected = '16/06/2022'

        expect(actual).toBe(expected)
    })

    it('formatInDatePattern() should return "13/02/2022"', () => {
        const actual = formatInDatePattern('20220213')
        const expected = '13/02/2022'

        expect(actual).toBe(expected)
    })

    it('formatInDatePattern() should throw a TypeError', () => {
        try {
            formatInDatePattern(null)
        } catch (error) {
            expect(error.name).toBe('TypeError')
        }
    })

    it(`formatInDatePattern() should throw a TypeError with message "${errorMessage}"`, () => {
        try {
            formatInDatePattern(null)
        } catch (error) {
            expect(error.message).toBe(errorMessage)
        }
    })

    it(`formatInDatePattern() should return empty`, () => {
        const actual = formatInDatePattern('diorgenes')

        expect(actual).toBe('')
    })
})
