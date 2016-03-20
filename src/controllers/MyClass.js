/**
 *
 * Example class
 * @author calbertts
 *
 */

import {Controller, Get, Post, Inject, SocketListener} from 'nodespring'

import MyService from '../services/MyService'
import DBService from '../interfaces/DBService'


@Controller
export default class MyClass {

  @Inject(MyService)
  myService

  /*@Inject(DBService)
  dbService*/

  index() {
    this.index.response.render('index.html')
  }


  @Post({contentType: 'application/json'})
  anotherMethod() {
    return {ok: "yes"}
  }

  @Get
  getNewsById(id, name) {
    //console.log('injected value! => ', this.users.methodTwo() + " => " + this.testType.uniqueMethod() + ' : OK')
    //return "I got it: " + JSON.stringify(this.anotherMethod())

    DBService.getInstance().then((dbService) => {
      console.log('dbService', dbService)

      console.log('PREVIOUS NUMBER: ', dbService.getNumberOne())
      dbService.setNumberOne(-145)
      console.log('NEW NUMBER: ', dbService.getNumberOne())

      console.log('Values => ', id, name)
    })

    let res = this.myService.service1()
    return res
  }

  @SocketListener
  onCustomEvent(data, socket, io) {
    console.log('SERVER LISTENING MSG: ', data.myData)
  }
}