//Get Product Model
let Product = require('../models/product')

//Get Category Model
let Category = require('../models/category');

//get search page
exports.getSearchPage = (req, res) => {
    Product.find({}, (err, products) => {
        res.render('search/search.ejs', {
            products: products
        })
    })
}

//Search product
exports.getSearch = (req, res) => {
    Product.find({"title" : {"$regex" : req.query['search'], "$options" : "i",}}, function(err, products) {
        res.render('search/search.ejs', {
            products: products
        })
    })
}

//Get saved Products
exports.getSavedProducts = (req, res) => {
    let count;

    Product.count(function (err, c) {
        count = c;
    });
   
    Product.find({"isSave" : true}, function(err, products) {
        res.render('saved/saved-product.ejs', {
            products: products,
            count: count
        });
    })
}

//save product
exports.saveProduct = (req, res, next) => {
    Product.findOne({_id: req.params.id}, function(err, foundProduct) {
        if(foundProduct) {
            foundProduct.isSave = !(foundProduct.isSave);

            foundProduct.save(function(err) {
                if(err) return next(err);
                res.redirect('/product/saved-product');  //foundProduct._id
            })
        }
    })
}

//get all products
exports.getHome = (req, res) => {
    Product.find({category: 'Phones'}, function (err, products) {
        if(err) {
            console.log(err);
        } else {
            res.render('Home/home.ejs', {
                products: products
            })
        }
    }).limit(4);
}

//Get products by Category
exports.getCategory = (req, res) => {

    let categorytitle = req.params.category;
    // console.log(categorytitle);
    Category.findOne({title: categorytitle}, (err) => {
        Product.find({category: categorytitle}, (err, products) => {
            if(err) {
                console.log(err);
            }
            res.render('product/product', {
                title: req.params.category,
                products: products
            })
        })
    })
}

//Get categories page 
exports.getCategoryPage = (req, res) => {
    res.render('Category/Category');
}

//Get About page 
exports.getAboutPage = (req, res) => {
    res.render('About-Us/about-us');
}