import MyClass from '../src/controllers/MyClass'
import TestType from '../src/interfaces/TestType'
import SuperType from '../src/interfaces/SuperType'

import {Mock, Test, Before, InjectMocks, TestClass} from 'nodespring'


@TestClass
export class MyClassTest {

  @Mock(TestType)
  testTypeMock

  @Mock(SuperType)
  superTypeMock

  @InjectMocks(MyClass)
  myClass

  @Before
  initTest() {
    console.log('Before each tests')
  }

  @Test
  test1() {
    this.myClass.getNewsById(1, 'carlos')
  }
}