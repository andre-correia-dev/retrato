'use strict'

class CadastroController {
    index({view}){
        return view.render('layouts.cadastro')
    }
}

module.exports = CadastroController
