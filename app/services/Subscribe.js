
class Subscribe {

/**
     * Permet la validation d'une adresse email
     *
     * @param email
     * @returns {boolean}
     */
    mail(email) {
        return this._valid(email, /[a-z.]+@[a-z]+\.[a-z]{2,}/)
    }


}
// export du service Subscribe
module.exports = Subscribe;