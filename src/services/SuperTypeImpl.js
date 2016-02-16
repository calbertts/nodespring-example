/**
 *
 */

import {Implements, Inject} from 'nodespring'

import SuperType from '../interfaces/SuperType'
import TestType from '../interfaces/TestType'


@Implements(SuperType)
export default class SuperTypeImpl {

  @Inject(TestType)
  myOwnType;

  methodOne(id, isOK) {
    return 'value from INJECTED MODULE!!!'
  }

  methodTwo(name, type) {
    return "Sending something => " + JSON.stringify(this.myOwnType.uniqueMethod())
  }
}