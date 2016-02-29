/**
 * TestTypeImpl
 * @author calbertts
 */

import {Implements} from 'nodespring'
import TestType from '../interfaces/TestType'


@Implements(TestType)
export default class TestTypeImpl {

  uniqueMethod(id) {
    return 'TestType:uniqueMethod'
  }
}