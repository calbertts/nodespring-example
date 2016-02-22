/**
 * Testing MyService
 */

import {Mock, Test, Before, InjectMocks, TestClass} from 'nodespring'

import MyService from '../src/services/MyService'
import SuperType from '../src/interfaces/SuperType'


@TestClass
export class MyServiceTest {

  @Mock(SuperType)
  superTypeMock

  @InjectMocks(MyService)
  myService

  @Before
  initTest() {
    // stuff before test
  }

  @Test
  test1(assert) {
    this.superTypeMock.getVariable = (parameter) => {
      return "parameter from mock: " + parameter
    }

    setTimeout(() => {
      assert.notEqual(
        this.myService.service1("myParameter"),
        "text from MyService.service1 ::: parameter from mock: myParameter"
      )

      assert.done()
    }, 5000)
  }

  @Test
  test2(assert) {
    this.myService.service2()
    assert.ok(true)
    assert.done()
  }

  @Test
  test3(assert) {
    assert.ok(true)
    assert.done()
  }

  @Test
  test4(assert) {
    setTimeout(() => {
      assert.equal("one", "one")
      assert.done()
    }, 3000)
  }
}