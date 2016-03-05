import MyClass from '../src/controllers/MyClass'
import MyService from '../src/services/MyService'
import DBService from '../src/interfaces/DBService'

import {Mock, Test, Before, InjectMocks, TestClass} from 'nodespring'


@TestClass
export class MyClassTest {

  @Mock(DBService)
  myDBServiceMock

  @InjectMocks(MyClass)
  myClass

  @Mock(MyService)
  myServiceMock

  @Before
  initTest() {
    //console.log('Before each tests')
  }

  @Test
  test1(assert) {
    console.log(this.myDBServiceMock)

    /*this.myDBServiceMock.getNumberOne = () => {
      return this.myDBServiceMock.number
    }

    this.myDBServiceMock.setNumberOne = (num) => {
      this.myDBServiceMock.number = 1
    }*/

    try {
    this.myServiceMock.service1 = () => {

    }
    } catch(e) {
      console.log(e)
    }

    this.myClass.getNewsById(1, 'carlos')

    assert.ok(true)
    assert.done()
  }
}