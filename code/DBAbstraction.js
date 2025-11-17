const sqlite3 = require('sqlite3'); 
 
class DBAbstraction { 
    constructor(fileName) { 
        this.fileName = fileName; 
    } //constructor

    init() { 
        return new Promise((resolve, reject) => { 
            this.db = new sqlite3.Database(this.fileName, (err) => { 
                if(err) { 
                    reject(err); 
                } else { 
                    resolve(); 
                } 
            }); 
        }); 
    } //init function

    getProducts() {
        const sql = 'SELECT * FROM Products';
        return new Promise((resolve, reject) => {
            this.db.get(sql, [], (err, row) => {
                if(err){
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    } //getProducts function

} //class
 
module.exports = DBAbstraction;