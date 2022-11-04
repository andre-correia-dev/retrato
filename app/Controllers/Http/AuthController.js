'use strict'

const auth = require("../../../config/auth")
const User = require("../../Models/User")

class AuthController {
    async register({request,response}){
        const data= request.only(['username','email','password'])

        const user = await User.create(data)
        return response.redirect('/login')

  }
  async authenticate({request,auth,response}){
      const {email,password} = request.all();

      const token = await auth.attempt(email,password)

      return response.redirect('/home')

  }
}

module.exports = AuthController
