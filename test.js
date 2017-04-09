const compile = require('./index')
const assert = require('assert')

compile('./test-files')

assert.equal(simple, 'simple file')
assert.equal(complex, 'first line\nsimple file\nlast line')