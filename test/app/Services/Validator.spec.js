const assert = require('assert')

const Validator = require('../../../app/Services/Validator')

describe('Validator', () => {
    describe('#mail', () => {
        let mailValidator

        beforeEach(() => {
            mailValidator = new Validator()
        })

        it('Cas nominal (john.doe@domain.tld)', () => {
            // Arrange
            // Act
            const result = mailValidator.mail('john.doe@domain.tld')

            // Assert
            assert.equal(result, true)
        })

        it("Vérifier un jeu de donnée d'adresse email invalide", () => {
            // Arrange
            const invalidMail = [
                'john.doedomain.tld',
                'john.doe@domain',
                'john.doe@domain.t',
                '@domain.tld',
                'john@.tld',
                '@toto.fr'
            ]

            // Act
            invalidMail.forEach(email => {
                const result = mailValidator.mail(email)

                // Assert
                assert.equal(result, false)
            })
        })
    })
})