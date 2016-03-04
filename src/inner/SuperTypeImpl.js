/**
 * SuperTypeImpl
 * @author calbertts
 */

import {Implements, Inject, PostInject} from 'nodespring'

import SuperType from '../inner/SuperType'
import TestType from '../interfaces/TestType'
//import DBService from '../interfaces/DBService'


@Implements(SuperType)
export default class SuperTypeImpl {

  /*@Inject(DBService)
  dbService;*/

  variable = "myText"


  thisOne() {
    return 'value from INJECTED MODULE!!!'
  }

  thisTwo() {
    return "Sending something => " + JSON.stringify(this.myOwnType.uniqueMethod())
  }
}