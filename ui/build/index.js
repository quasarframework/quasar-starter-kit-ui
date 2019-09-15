process.env.NODE_ENV = 'production'

const
  type = process.argv[2],
  parallel = !type && require('os').cpus().length > 1,
  { join } = require('path'),
  { createFolder } = require('./utils'),
  runJob = parallel ? require('child_process').fork : require,
  { green, blue } = require('chalk')

console.log()

require('./script.clean.js')

console.log(` 📦 Building ${green('v' + require('../package.json').version)}...${parallel ? blue(' [multi-threaded]') : ''}\n`)

createFolder('dist')

runJob(join(__dirname, './script.javascript'))
runJob(join(__dirname, './script.css'))
