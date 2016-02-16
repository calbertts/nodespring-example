import SuperTypeImpl from '../src/services/SuperTypeImpl'
import TestType from '../src/interfaces/TestType'


import {Mock, Test, InjectMocks, TestClass} from 'nodespring'


@TestClass
export default class SuperTypeImplTest {

  @Mock(TestType)
  myOwnTypeMock;

  @InjectMocks(SuperTypeImpl)
  superImpl

  @Test
  test1() {
    this.myOwnTypeMock.uniqueMethod = () => {
      return "Ops! I did it!"
    }

    console.log(this.superImpl.methodTwo())

    console.log('executing the first test')
  }
}