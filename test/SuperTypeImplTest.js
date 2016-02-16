import SuperTypeImpl from '../src/services/SuperTypeImpl'
import TestType from '../src/interfaces/TestType'


import {Mock, Test, Before, InjectMocks, TestClass} from 'nodespring'

@TestClass
export default class SuperTypeImplTest {

  @Mock(TestType)
  myOwnTypeMock

  @InjectMocks(SuperTypeImpl)
  superImpl

  @Before
  initTest() {
    console.log('Before method init')
  }

  @Test
  test1() {
    this.myOwnTypeMock.uniqueMethod = () => {
      return "I did it!"
    }

    console.log(this.superImpl.methodTwo())
  }

  @Test
  test2() {
    this.myOwnTypeMock.uniqueMethod = () => {
      return "From other test!"
    }

    console.log(this.superImpl.methodTwo())
  }
}