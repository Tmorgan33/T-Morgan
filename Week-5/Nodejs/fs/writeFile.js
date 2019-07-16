var fs = require('fs');

exports.wf = function(data) {
    fs.writeFile('db.txt', data, function (err) {
        if(err) {
            reject(err);
           

            return new Promise(function (resolve, reject) {
                resolve("done Writing File");
            });       
        }
    });
}