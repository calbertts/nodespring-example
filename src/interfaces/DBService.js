/**
 * DBService
 */

import {Interface} from 'nodespring'

@Interface
export default class DBService {

  find(type, where) {}
  save(object) {}
  //getNumberOne() {}
  //setNumberOne(number) {}
}
