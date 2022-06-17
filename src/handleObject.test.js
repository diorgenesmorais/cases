import { removeObjectProperty } from "./handleObject"

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
})