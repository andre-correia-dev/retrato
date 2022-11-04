'use strict'

class LoginController {
    index({view}){
        return view.render('layouts.login')
    }
}

module.exports = LoginController
