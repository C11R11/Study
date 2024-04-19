var fs = require('fs')
, ini = require('ini')

let configFilePath

if (process.platform === 'win32') {

    configFilePath = "configWIN.ini"

}else
{
    configFilePath = "configLINUX.ini"
}

var config = ini.parse(fs.readFileSync(configFilePath, 'utf-8'))

//console.log(JSON.stringify(config))
console.log("database", config.database)
console.log("default datadir", config.datadir)

/* config.scope = 'local'
config.database.database = 'use_another_database'
config.paths.default.tmpdir = '/tmp'
delete config.paths.default.datadir
config.paths.default.array.push('fourth value')

fs.writeFileSync('./config_modified.ini', ini.stringify(config, { section: 'section' })) */