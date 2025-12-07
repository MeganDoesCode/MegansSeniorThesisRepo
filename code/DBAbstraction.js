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
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    } //getProducts function

    getCardsProducts() {
        const sql = 'SELECT * FROM Products WHERE Category = "Cards"';
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    } //getProducts function

    getClothesProducts() {
        const sql = 'SELECT * FROM Products WHERE Category = "Clothes"';
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    } //getProducts function

    getSewingProducts() {
        const sql = 'SELECT * FROM Products WHERE Category = "Sewing"';
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    } //getProducts function

    getGardenProducts() {
        const sql = 'SELECT * FROM Products WHERE Category = "Garden"';
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    } //getProducts function

    getKitchenProducts() {
        const sql = 'SELECT * FROM Products WHERE Category = "Kitchen"';
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    } //getProducts function

    getMiscProducts() {
        const sql = 'SELECT * FROM Products WHERE Category = "Misc"';
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    } //getProducts function

    getBakingProducts() {
        const sql = 'SELECT * FROM Products WHERE Category = "Baking"';
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    } //getProducts function

} //class
 
module.exports = DBAbstraction;