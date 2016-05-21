/**
 *
 * Example class
 * @author calbertts
 *
 */

import {Controller, Get, Post, Inject, PostInject} from 'nodespring'

import SuperType from '../interfaces/SuperType'
import TestType from '../interfaces/TestType'
import DBService from '../interfaces/DBService'
import MyService from '../services/MyService'
import cluster from 'cluster'


@Controller({path: 'users'})
export default class UsersController {

  @Inject(TestType)
  testType;

  @Inject(SuperType)
  superType;

  @Inject(MyService)
  myService

  @PostInject
  init() {
  }

  anotherMethod() {
    return "message two: node: " + (cluster.worker ? cluster.worker.id : 'no worker')
  }

  @Get({contentType: 'application/json'})
  other(user) {
    console.log('Using node: ', (cluster.worker ? cluster.worker.id : 'no worker'))

    SuperType.getInstance().then((superTypeInstance) => {
      //console.log('OTHER:', superTypeInstance)
    })

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

        resolve(this.superType.getVariable() + "YES: NODE: "  + (cluster.worker ? cluster.worker.id : 'no worker'))
      }, 0)
    })
  }
}