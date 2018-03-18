const db = require("../configuration/dbconnection");
// const multer = require("milter");

var customer = {
    getAllCustomer: function(callback){
        return db.query("SELECT * FROM customer_tbl", callback);
    },
    addCustomer: function(cust, callback){
        return db.query("INSERT INTO customer_tbl values(?,?,?,?,?,?)", [
            cust.username, cust.email, cust.gender, cust.hobby, cust.mobile_no, cust.user_img
        ], callback);
    },
    deleteCustomer: function(id, callback){
        return db.query("DELETE FROM customer_tbl WHERE email=?", [id], callback);
    },
    updateCustomer: function(id, cust, callback){
        return db.query ("UPDATE customer_tbl SET username=?, email=?, gender=?, hobby=?, mobile_no=?, user_img=? WHERE username=?", [
            cust.username, cust.email, cust.gender, cust.hobby, cust.mobile_no, cust.user_img, id
        ] ,callback);
    }
};

module.exports = customer;