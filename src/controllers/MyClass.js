/**
 *
 * Example class
 * @author calbertts
 *
 */

import {Controller, Get, Post, Inject} from 'nodespring'

import MyService from '../services/MyService'


@Controller
export default class MyClass {

  @Inject(MyService)
  myService


  @Post({contentType: 'application/json'})
  anotherMethod() {
    return {ok: "yes"}
  }

  @Get
  getNewsById(id, name) {
    /*console.log('injected value! => ', this.users.methodTwo() + " => " + this.testType.uniqueMethod() + ' : OK')
    return "I got it: " + JSON.stringify(this.anotherMethod())*/

    console.log('Values => ', id, name)
    return this.myService.service1()
  }
}