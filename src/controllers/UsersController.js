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
import DBServiceImpl from '../services/DBServiceImpl'


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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.superType.methodTwo() + "YES")
      }, 0)
    })
  }
}