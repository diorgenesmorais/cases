import { removeObjectProperties, removeObjectProperty } from "./handleObject"

describe('Using computed property name', () => {
    it('removeObjectProperty() should be a function', () => {
        expect(removeObjectProperty).toBeInstanceOf(Function)
    })

    it('Should be remove object property "CLASSE"', () => {
        const resource = {
            CLASSE: '140',
            ATTS: 'Alteração Tarifa Social',
            RCTS: 'Recadastramento Tarifa Social',
            RVTS: 'Revisão Cadastral Tarifa Social'
        }

        const actual = removeObjectProperty('CLASSE', resource)

        expect(actual.CLASSE).toBeUndefined()
    })

    it('Should removed the properties of list', () => {
        const resource = {
            CLASSE: '140',
            ATTS: 'Alteração Tarifa Social',
            RCTS: 'Recadastramento Tarifa Social',
            RVTS: 'Revisão Cadastral Tarifa Social'
        }

        const actual = removeObjectProperties(['RVTS', 'ATTS', 'RCTS'], resource)
        const expected = JSON.stringify({
            CLASSE: '140'
        })

        expect(JSON.stringify(actual)).toBe(expected)
    })
})