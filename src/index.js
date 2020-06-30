
const path = require('path');
const fs = require('fs')
const loaderUtils = require('loader-utils')


module.exports = function (content,map) {
   
    const options = loaderUtils.getOptions(this);

    
    const entry = this._module.resource;
    const fileinfo = path.parse(entry);
    const srcDir = fileinfo.dir; 
    var basename = fileinfo.name;

    const cssFileName = `${srcDir}/${basename}.css`

    fs.writeFileSync(cssFileName, content);

    const callback = this.async();

    this.callback(null,content,map);
    
}