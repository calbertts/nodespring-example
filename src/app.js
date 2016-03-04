/**
 * MyApp
 * @author calbertts
 */

import {ExpressApp} from 'nodespring'


class MyApp extends ExpressApp {

  constructor() {
    super(
      {
        port: 5000,
        classDir: __dirname,
        implConfig: {
          '/interfaces/DBService': './services/DBServiceImpl'
        }
      }
    )
  }
}

new MyApp().start()