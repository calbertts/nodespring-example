/**
 * App
 * @author calbertts
 */

import express from 'express'
import {ModuleContainer} from 'nodespring'


class App {

  constructor() {
    this.app = express()
    this.context = __dirname

    const port = 5000

    ModuleContainer.init(this.app)
    ModuleContainer.loadModules(this.context)

    this.app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    this.app.listen(port, function () {
      console.log('Server running at http://localhost:5000');
    })
  }
}

new App()