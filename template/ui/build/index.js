process.env.NODE_ENV = 'production'

{{#or componentCss directiveCss}}
const parallel = require('os').cpus().length > 1
const runJob = parallel ? require('child_process').fork : require
{{/or}}
const { join } = require('path')
const { createFolder } = require('./utils')
const { green, blue } = require('chalk')

console.log()

require('./script.clean.js')

console.log(` 📦 Building ${green('v' + require('../package.json').version)}...${parallel ? blue(' [multi-threaded]') : ''}\n`)

createFolder('dist')

{{#or componentCss directiveCss}}
runJob(join(__dirname, './script.javascript'))
runJob(join(__dirname, './script.css'))
{{else}}
require(join(__dirname, './script.javascript')
{{/or}}
