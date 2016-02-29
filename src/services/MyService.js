/**
 * MyService
 * @author
 */

import {Service, Inject} from 'nodespring'

import SuperType from '../interfaces/SuperType'

@Service
export default class MyService {

  @Inject(SuperType)
  mySuperTypeObject

  service1(parameter) {
    return 'text from MyService.service1 ::: ' + this.mySuperTypeObject.getVariable(parameter)
  }

  service2() {
    console.log('text from MyService.service2')
  }
}
