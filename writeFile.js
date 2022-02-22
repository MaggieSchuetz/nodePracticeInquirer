const fs = require('fs');
module.exports = function writeFile(name) {
  fs.writeFileSync(
    `./${name}.js`,
    `function ${name}() {
    
  }`
  );
};
