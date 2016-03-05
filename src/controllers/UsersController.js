/**
 *
 * Example class
 * @author calbertts
 *
 */

import {Controller, Get, Post, Inject} from 'nodespring'

import SuperType from '../interfaces/SuperType'
import TestType from '../interfaces/TestType'
import DBService from '../interfaces/DBService'


@Controller({path: 'users'})
export default class UsersController {

  @Inject(TestType)
  testType;

  @Inject(SuperType)
  superType;

  @Inject(DBService)
  dbService;

  anotherMethod() {
    return "message two"
  }

  @Get({contentType: 'application/json'})
  other(user) {
    return {
      message: this.anotherMethod()
    }
  }

  @Get
  test(user) {
    /*console.log('dbService', this.dbService)
    console.log('superType', this.superType)
    console.log('testType', this.testType)*/

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.superType.setVariable("new Value from UserController")

        console.log('PREVIOUS NUMBER: ' + this.superType.dbService.getNumberOne())
        this.superType.dbService.setNumberOne(32)
        console.log('NEW NUMBER: ' + this.superType.dbService.getNumberOne())

        resolve(this.superType.getVariable() + "YES")
      }, 0)
    })
  }
}