/**
 * Testing MyService
 */

import MyService from '../src/services/MyService'
import SuperType from '../src/interfaces/SuperType'

import {Mock, Test, Before, InjectMocks, TestClass} from 'nodespring'


@TestClass
export class MyServiceTest {

  @Mock(SuperType)
  superTypeMock

  @InjectMocks(MyService)
  myService

  @Before
  initTest() {
    console.log('Before method init on service')
  }

  @Test
  test1() {
    this.superTypeMock.getVariable = () => {
      return "I did it from service!"
    }

    console.log(this.myService.service1())
  }

  @Test
  test2() {
    console.log('final test')
  }
}