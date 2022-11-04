'use strict'
const Event = use('App/Models/Event')
class HomeController {
  async index({ view }) {
   
    return view.render('home.index', { })
  }
}
module.exports = HomeController

