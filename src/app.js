/**
 * MyApp
 * @author calbertts
 */

import {ExpressApp} from 'nodespring'
import express from 'express'
import path from 'path'
import ejs from 'ejs'


class MyApp extends ExpressApp {

  constructor() {
    super(
      {
        port: 5000,
        classDir: __dirname,
        implConfig: {
          '/interfaces/DBService': './services/DBServiceImpl'
        },
        logging: true
      }
    )

    this.expressApp.engine('html', ejs.renderFile)
    this.expressApp.set('view engine', 'html')
    this.expressApp.set('views', path.join(__dirname, '../../views'))
    this.expressApp.use(express.static(path.join(__dirname, '../../views')))
  }
}

new MyApp().start()