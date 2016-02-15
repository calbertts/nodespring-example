/**
 * TestType
 */

import {Interface} from 'nodespring'


@Interface
export default class TestType {

  uniqueMethod() {
    return {
      params: {
        id: Number
      },
      returnValue: String
    }
  }
}