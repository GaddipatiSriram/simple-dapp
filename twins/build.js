const json = require('../truffle-config.js');
const fs = require('fs');
const yaml = require('json2yaml');


fs.writeFile(`${__dirname}/truffle-config.yaml`,yaml.stringify(json), (err) =>{
  if(err){
    throw new Error('Unable to write truffle config into a json file.')
  }
});