const assert = require('assert');

const Subscribe = require('../../../app/Services/Subscribe');

describe('Subscribe', () => {
    describe('#mail', () => {
        let mailValidator;

        beforeEach(() => {
            mailValidator = new Validator()
        });

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
                const result = mailValidator.mail(email);

                // Assert
                assert.equal(result, false)
            });
        });

        it("Vérifier un jeu de donnée d'adresse email valide", () => {
            // Arrange
            const validMail = [
                'john@doe.fr',
                'johndoe@domain.com',
                'john.doe@domain.t',
                'u@domain.gouv'
            ]

            // Act
            validMail.forEach(email => {
                const result = mailValidator.mail(email);

                // Assert
                assert.equal(result, false)
            });
        });
    });
});