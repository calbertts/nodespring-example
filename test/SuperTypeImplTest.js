import SuperTypeImpl from '../src/services/SuperTypeImpl'
import TestType from '../src/interfaces/TestType'

import {Mock, Test, Before, InjectMocks, TestClass} from 'nodespring'


@TestClass
export class SuperTypeImplTest {

  @Mock(TestType)
  myOwnTypeMock

  @InjectMocks(SuperTypeImpl)
  superImpl

  @Before
  initTest() {
  }

  @Test
  test1(assert) {
    this.myOwnTypeMock.uniqueMethod = () => {
      return "I did it!"
    }

    this.superImpl.methodTwo()
    assert.done()
  }

  @Test
  test2(assert) {
    this.myOwnTypeMock.uniqueMethod = () => {
      return "From other test!"
    }

    this.superImpl.methodTwo()
    assert.done()
  }
}