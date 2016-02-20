/**
 * Testing Service decorator
 */

import {Service, Inject} from 'nodespring'

import SuperType from '../interfaces/SuperType'

@Service
export default class MyService {

  @Inject(SuperType)
  mySuperTypeObject

  service1() {
    return 'text from MyService.service1 ::: ' + this.mySuperTypeObject.getVariable()
  }

  service2() {
    console.log('text from MyService.service2')
  }
}
