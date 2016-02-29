/**
 * DBServiceImpl
 * @author calbertts
 */

import {Implements, Inject, Scope} from 'nodespring'

import DBService from './../interfaces/DBService'
import TestType from '../interfaces/TestType'
import MyClass from '../controllers/MyClass'


@Implements(DBService, Scope.PROTOTYPE)
export default class DBServiceImpl {

  //@Inject(MyClass)
  //myClass

  @Inject(TestType)
  myDBTestType

  numberOne = 1


  find(type, where) {
    return 'test1'
  }

  save(object) {
    return 'test2'
  }

  setNumberOne(number) {
    this.numberOne = number
  }

  getNumberOne() {
    return this.numberOne
  }
}
