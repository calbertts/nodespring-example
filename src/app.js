/**
 * MyApp
 * @author calbertts
 */

import {ExpressApp} from 'nodespring'


class MyApp extends ExpressApp {

  constructor() {
    super({
      port: 5000,
      classDir: __dirname
    })
  }
}

new MyApp().start()