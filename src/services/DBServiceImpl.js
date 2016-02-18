/**
 *
 */

import {Implements, Inject} from 'nodespring'
import DBService from './../interfaces/DBService'


@Implements(DBService)
export default class DBServiceImpl {

  find(type, where) {
    return 'test1'
  }

  save(object) {
    return 'test2'
  }
}
