// import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'catagory_id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignkey: 'catagory_id',
  onDelete: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  foreignKey: ''
})
// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {
  foreignKey: '',
  onDelete: 'CASCADE'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
