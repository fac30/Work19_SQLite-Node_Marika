const { listProducts } = require("../../solution/model/products.js");
const db = require("../database/db.js");

function listProducts() {
    db.prepare(/*sql*/ `
    SELECT
    id,
    product_name AS name, 
    quantity_per_unit, 
    unit_price, 
    units_in_stock, 
    units_on_order
    FROM products
    `);
    return select_products.all();
}

function searchProducts(string) {
    db.prepare(/*sql*/ `
    SELECT
    id,
    db.name
    FROM products
    WHERE product_name LIKE ?
    `);
    return search_products.all

} 



module.exports = {listProducts, searchProducts};