/**
 *
 * Example class
 * @author calbertts
 *
 */

import {Controller, Get, Post, Inject} from 'nodespring'

import SuperType from '../interfaces/SuperType'
import TestType from '../interfaces/TestType'


@Controller
export class MyClass {

  @Inject(TestType)
  testType;

  @Inject(SuperType)
  users;

  @Post({contentType: 'application/json'})
  anotherMethod() {
    return {ok: "yes"}
  }

  @Get
  getNewsById(id, name) {
    console.log('injected value! => ', this.users.methodTwo() + " => " + this.testType.uniqueMethod() + ' : OK')
    console.log('Values => ', id, name)
    return "I got it: " + JSON.stringify(this.anotherMethod())
  }
}