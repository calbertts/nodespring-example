/**
 *
 * Example class
 * @author calbertts
 *
 */

import {Controller, Get, Post, Inject} from 'nodespring'

import MyService from '../services/MyService'
import DBService from '../interfaces/DBService'


@Controller
export default class MyClass {

  @Inject(MyService)
  myService

  @Inject(DBService)
  dbService


  @Post({contentType: 'application/json'})
  anotherMethod() {
    return {ok: "yes"}
  }

  @Get
  getNewsById(id, name) {
    /*console.log('injected value! => ', this.users.methodTwo() + " => " + this.testType.uniqueMethod() + ' : OK')
    return "I got it: " + JSON.stringify(this.anotherMethod())*/

    //console.log('myService', this.myService)
    //console.log('dbService', this.dbService)

    console.log('PREVIOUS NUMBER: ', this.dbService.getNumberOne())
    this.dbService.setNumberOne(-145)
    console.log('NEW NUMBER: ', this.dbService.getNumberOne())

    console.log('Values => ', id, name)
    let res = this.myService.service1()

    return res
  }
}