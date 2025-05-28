//read,write users

const fs = require('fs')

function readData(filename) {
    try {
    const data = fs.readFileSync(filename, 'utf-8')
    return JSON.parse(data); 
  
    }
    catch(err){
        console.error('Error reading file: ', err);
        return null;
    }

}

function writeData(filename, data){
    try{
        fs.writeFileSync(filename, JSON.stringify(data,null,2), 'utf-8')
    }
    catch(err){
        console.log('Error writing in file ', err);
    }
}

module.exports = {readData, writeData}; 
