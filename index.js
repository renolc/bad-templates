const fs = require('fs')

module.exports = (dir) => {
  const dependents = {}

  const compile = (component) => {
    const name = component.split('.')[0]
    const html = fs.readFileSync(`${dir}/${component}`, 'utf8')
    try {
      eval(`${name}=\`${html}\``)
      const deps = dependents[name] || []
      deps.forEach(compile)
    } catch (e) {
      const dep = e.message.split(' ')[0]
      dependents[dep] = dependents[dep] || []
      dependents[dep].push(`${name}.html`)
    }
  }

  fs.readdirSync(dir)
    .filter((i) => i.slice(-5) === '.html')
    .forEach(compile)
}