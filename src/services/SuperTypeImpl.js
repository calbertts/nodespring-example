/**
 *
 */

import {Implements, Inject, PostInject} from 'nodespring'

import SuperType from '../interfaces/SuperType'
import TestType from '../interfaces/TestType'
import DBService from '../interfaces/DBService'


@Implements(SuperType)
export default class SuperTypeImpl {

  @Inject(TestType)
  myOwnType;

  @Inject(DBService)
  dbService;

  variable = "myText"

  @PostInject
  init() {
    console.log('All instances injected!')
  }

  methodOne(id, isOK) {
    return 'value from INJECTED MODULE!!!'
  }

  methodTwo(name, type) {
    return "Sending something => " + JSON.stringify(this.myOwnType.uniqueMethod())
  }

  setVariable(value) {
    this.variable = value
  }

  getVariable() {
    return this.variable + " DBService: " + this.dbService.getNumberOne()
  }

  setNumberOne(number) {
    this.dbService.setNumberOne(number)
  }
}