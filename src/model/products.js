const { listProducts } = require("../../solution/model/products.js");
const db = require("../database/db.js");

function listProducts() {
    const select_products = db.prepare(/*sql*/ `
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
    const search_products = db.prepare(/*sql*/ `
    SELECT
    id,
    product.name AS name
    FROM products
    WHERE product_name LIKE ?
    `);
    return search_products.all(`%${string}%`)

} 

function getProduct(id) {
    const get_products = db.prepare(/*sql*/ `
        SELECT
        id,
        product_name AS name
        FROM products
        WHERE id = ?
        `);
        return search_products.get(id);
};


module.exports = {listProducts, searchProducts, getProduct};