/**
 * DBServiceImpl
 * @author calbertts
 */

import {Implements, Inject, Scope} from 'nodespring'

import DBService from './../interfaces/DBService'
import TestType from '../interfaces/TestType'


@Implements(DBService, Scope.PROTOTYPE)
export default class DBServiceImpl2 {

  /*@Inject(TestType)
  myDBTestType*/

  numberOne = 1


  find(type, where) {
    return 'test1'
  }

  save(object) {
    return 'test2 other Impl'
  }

  setNumberOne(number) {
    this.numberOne = number
  }

  getNumberOne() {
    return this.numberOne
  }
}
