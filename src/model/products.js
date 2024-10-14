const db = require("../database/db.js");

function listProducts() {
  const select_products = db.prepare(/*sql*/ `
    SELECT
      id,
      product_name AS name,
      quantity_per_unit,
      printf('£%.2f', unit_price) AS unit_price,
      units_in_stock,
      units_on_order,
      printf('£%.2f'unit_price * units_in_stock) AS stock_value
    FROM products
  `);
  return select_products.all();
}

function searchProducts(string) {
  const search_products = db.prepare(/*sql*/ `
    SELECT
      id,
      product_name AS name
    FROM products
    WHERE product_name LIKE ?
  `);
  return search_products.all(`%${string}%`);
}

function getProduct(id) {
  const get_product = db.prepare(/*sql*/ `
    SELECT
      p.id,
      p.product_name AS name,
      c.name AS category_name,
      c.description AS category_description
    FROM products p
    JOIN categories c ON p.category_id = c.id
    WHERE p.id = ?
  `);
  return get_product.get(id);
}

module.exports = { listProducts, searchProducts, getProduct };