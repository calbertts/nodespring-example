/**
 * Test example
 */

import {Mock, Test, Before, InjectMocks, TestClass} from 'nodespring'

import SuperTypeImpl from '../src/services/SuperTypeImpl'
import TestType from '../src/interfaces/TestType'
import DBService from '../src/interfaces/DBService'


@TestClass
export class SuperTypeImplTest {

  @Mock(TestType)
  myOwnTypeMock

  @Mock(DBService)
  dbServiceMock

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