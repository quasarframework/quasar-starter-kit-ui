const
  path = require('path'),
  fs = require('fs')

/**
 * Sorts dependencies in package.json alphabetically.
 * They are unsorted because they were grouped for the handlebars helpers
 * @param {object} data Data from questionnaire
 */
function sortDependencies(data) {
  const pkgFile = path.join(
    data.inPlace ? '' : data.destDirName,
    'package.json'
  )
  let sorted = false
  const pkg = JSON.parse(fs.readFileSync(pkgFile))

  if (pkg.dependencies) {
    sorted = true
    pkg.dependencies = sortObject(pkg.dependencies)
  }
  if (pkg.devDependencies) {
    sorted = true
    pkg.devDependencies = sortObject(pkg.devDependencies)
  }

  if (sorted) {
    fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2) + '\n')
  }
}

function sortObject(object) {
  // Based on https://github.com/yarnpkg/yarn/blob/v1.3.2/src/config.js#L79-L85
  const sortedObject = {}
  Object.keys(object)
    .sort()
    .forEach(item => {
      sortedObject[item] = object[item]
    })
  return sortedObject
}

/**
 * Prints the final message with instructions of necessary next steps.
 * @param {Object} data Data from questionnaire.
 */
function printMessage(data, { green, yellow }) {
  const message = `
 ${green('[*] Quasar UI Project initialization finished!')}

To get started:

  ${yellow(
    `${data.inPlace ? '' : `cd ${data.destDirName}\n  `}${installMsg(
      data
    )}${lintMsg(data)}quasar dev`
  )}

Documentation can be found at: https://quasar.dev

Quasar is relying on donations to evolve. We'd be very grateful if you can
read our manifest on "Why donations are important": https://quasar.dev/why-donate
Donation campaign: https://donate.quasar.dev
Any amount is very welcomed.
If invoices are required, please first contact razvan@quasar.dev

Please give us a star on Github if you appreciate our work:
https://github.com/quasarframework/quasar

Enjoy! - Quasar Team
`
  console.log(message)
}

/**
 * Handlebar helpers
 */
exports.helpers = {
  or (/* any, any, ..., options */) {
    var len = arguments.length - 1;
    var options = arguments[len];

    for (var i = 0; i < len; i++) {
      if (arguments[i]) {
        return options.fn(this)
      }
    }

    return options.inverse(this)
  }
}

exports.complete = function (data, { chalk }) {
  const green = chalk.green

  sortDependencies(data, green)
  printMessage(data, chalk)
}
