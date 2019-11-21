var fs = require('fs')
var yaml = require('yaml')
var Dredd = require('dredd')

var dreddConfig = yaml.parse(fs.readFileSync('./dredd.yml', 'utf8'))

var dredd = new Dredd(dreddConfig)
dredd.run((err, results) => {
  console.log(err, results)
})
