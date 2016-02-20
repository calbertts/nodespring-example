/**
 *
 */

import {Implements, Inject} from 'nodespring'
import DBService from './../interfaces/DBService'

import TestType from '../interfaces/TestType'


@Implements(DBService)
export default class DBServiceImpl {

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
