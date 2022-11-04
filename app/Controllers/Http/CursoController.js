'use strict'

const Course = use('App/Models/Curso');

class CursoController {
    async store({ request }) {

        const dataToCreate = request.only(['name', 'description', 'url', 'price']);
    
        return await Course.create(dataToCreate);
    
    }
}

module.exports = CursoController
