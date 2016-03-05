/**
 * DBServiceImpl
 * @author calbertts
 */

import {Implements, Inject, Scope} from 'nodespring'

import DBService from './../interfaces/DBService'
import TestType from '../interfaces/TestType'


@Implements(DBService)
export default class DBServiceImpl2 {

  @Inject(TestType)
  myDBTestType

  numberOne = 1000


  find(type, where) {
    return 'test1x'
  }

  save(object) {
    return 'test2x'
  }

  setNumberOne(number) {
    this.numberOne = number
  }

  getNumberOne() {
    return this.numberOne
  }
}
