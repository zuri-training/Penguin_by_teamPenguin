// const express = require('express');
// const axios = require('axios');
// const cheerio =  require('cheerio');
// const mongoose = require('mongoose');


// const url = 'https://www.jumia.com.ng/apple-iphone-xs-max-256gb-gold-free-pouch-screen-protector-116534880.html'

// const url2 = 'https://phonemart.ng/product/apple-iphone-xs-max-256gb-gold/'

const url3 = 'https://www.jumia.com.ng/apple-iphone-x-64gb-3gb-space-grey-5.8-free-case-screen-guide-191696629.html'

const url4 = 'https://phonemart.ng/product/apple-iphone-x-64gb-space-gray/'

const url5 = 'https://www.jumia.com.ng/apple-iphone-11-pro-max-6.5-inch-super-retina-4gb-ram-64gb-romios-13-12mp12mp12mp12mp-4g-lte-smartphone-gold-133770390.html'

const url6 = 'https://phonemart.ng/product/apple-iphone-11-pro-max-64gb-gold/'

// const url7 = 'https://www.mikkyworld.com/product/lenovo-laptop-v15-igl-15-6-hd-tn-display-intel-celeron-n4020-4gb-ram-1tb-hdd-windows-10-home/'

// const url = 'https://www.onekioskafrica.com/product/hp-notebook-15-intel-celeron-8gb-ram-1tb-hdd-windows-10-hp-mouse/'

// const url = 'https://www.jumia.com.ng/airpods-pro-with-magsafe-charging-case-white-apple-mpg1636718.html'

// const url8 = 'https://phonemart.ng/product/apple-airpod-pro-white/'

// const url9 = 'https://www.jumia.com.ng/apple-airpods-2-with-charging-case-latest-model-35142864.html'

const url10 = 'https://phonemart.ng/product/apple-airpod-2-wire/'

const url11 = 'https://obejor.com.ng/product/apple-macbook-air-13-m1-chip-8gb-256gb-2020-model/'

const ur112 = 'https://www.jumia.com.ng/macbook-air-13-m1-chip-8gb-256gb-2020-model-gray-apple-mpg1595445.html'

const url13  = 'https://www.jumia.com.ng/lenovo-v15-igl-intel-celeron-1tb-hdd-4gb-ram-win-10-201829248.html'

const url14 = 'https://www.mikkyworld.com/product/lenovo-laptop-v15-igl-15-6-hd-tn-display-intel-celeron-n4020-4gb-ram-1tb-hdd-windows-10-home/'

// const fetchData = async () => {
//     try {
//         const milkylap3 = await axios.get(url14);
//         const $ = cheerio.load(milkylap3.data);
//         // console.log($)
//         $(
//             "#product-21346"
//         ).each((i, el) => {
//             const slug = 14;
//             const title = $(el).find('.entry-title').text().slice(0, 43);
//             const price = $(el).find('.woocommerce-Price-amount > bdi').text().slice(0, 8);
//             const image = $(el).find('.woocommerce-product-gallery__image > a').attr('href');
//             const category = 'laptops';
//             const link = 'https://www.mikkyworld.com/product/lenovo-laptop-v15-igl-15-6-hd-tn-display-intel-celeron-n4020-4gb-ram-1tb-hdd-windows-10-home/'
//             // console.log(title, price, image)
//             Product.findOne({slug: slug}, function(err, product) {
//                 if(product) {
//                     // console.log('Product already exists');
//                 } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link: link
//                     });
//                     // console.log(title, slug, price, image, category, link);
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     });
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData();

// const fetchData = async () => {
//     try {
//        const jumialap2 = await axios.get(url13);
//        const $ = cheerio.load(jumialap2.data);
//     //    console.log($);
//     $(
//         "#jm > main > div:nth-child(1) > section"
//     ).each((i, el) => {
//         const slug = 13;
//         const title = $(el).find('.-fs0').text().slice(14, 46);
//         const price = $(el).find('.-fs24').text();
//         // let brand = $('._more').text();
//         const image = $(el).find('#imgs > a > .-fh').attr('data-src');
//         const category = 'laptops';
//         const link = 'https://www.jumia.com.ng/lenovo-v15-igl-intel-celeron-1tb-hdd-4gb-ram-win-10-201829248.html'
        
//         Product.findOne({slug: slug}, function(err, product) {
//             if(product) {
//                 // console.log('Product already exists');
//             } else {
//                 let product = new Product({
//                     slug : slug,
//                     title : title,
//                     price: price,
//                     image: image,
//                     category: category,
//                     link: link
//                 });
//                 // console.log(title, slug, price, image, category);
//                 product.save((err) => {
//                     if(err) return console.log(err);
//                 });
//             }
//         })
//     })
//     } catch (error) {
//         console.log(error);
//     }
// }



// const fetchData = async () => {
//     try {
//     const jumialap1 = await axios.get(ur112);
//     const $ = cheerio.load(jumialap1.data);
//     // console.log($)
    
//     $(
//         "#jm > main > div:nth-child(1) > section"
//     ).each((i, el) => {
//         const slug = 12;
//         const title = $(el).find('.-fs0').text();
//         const price = $(el).find('.-fs24').text();
//         // let brand = $('._more').text();
//         const image = $(el).find('#imgs > a > .-fh').attr('data-src');
//         const category = 'laptops';
//         const link = 'https://www.jumia.com.ng/macbook-air-13-m1-chip-8gb-256gb-2020-model-gray-apple-mpg1595445.html'
        
//         Product.findOne({slug: slug}, function(err, product) {
//             if(product) {
//                 // console.log('Product already exists');
//             } else {
//                 let product = new Product({
//                     slug : slug,
//                     title : title,
//                     price: price,
//                     image: image,
//                     category: category,
//                     link: link
//                 });
//                 console.log(title, slug, price, image, category);
//                 product.save((err) => {
//                     if(err) return console.log(err);
//                 });
//             }
//         })
//     })
//     } catch (error) {
//         console.log(error);
//     }
// }

// const fetchData = async () => {
//     try {
//         const obelap1 = await axios.get(url11);
//         const $ = cheerio.load(obelap1.data);
//         // console.log($);
//         $(
//             "#product-9858 > div.single-product-wrapper.row"
//         ).each((i, el) => {
//             const slug = 11;
//             const title = $(el).find('.entry-title').text();
//             const price = $(el).find('.woocommerce-Price-amount').text().slice(0, -8);
//             const image = $(el).find('.woocommerce-product-gallery__image > a').attr('href');
//             const link = 'https://obejor.com.ng/product/apple-macbook-air-13-m1-chip-8gb-256gb-2020-model/'
//             const category = 'laptops';
//             // console.log(price);
//             Product.findOne({slug: slug}, function(err, product) {
//                 if(product) {
//                     // console.log('Product already exists');
//                 } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link: link
//                     });
//                     // console.log(title, slug, price, image, category, link);
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     });
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }




// const fetchData = async () => {
//     try {
//         const pmartacce2 = await axios.get(url10);
//         const $ = cheerio.load(pmartacce2.data);
//         $(
//             "#product-2912 > div:nth-child(1) > div.row.product-image-summary-wrap"
//         ).each((i, el) => {
//             const slug = 10;
//             const title = $(el).find('.entry-title').text();
//             const price = $(el).find('.woocommerce-Price-amount').text().slice(22);
//             const image = $(el).find('.woocommerce-product-gallery__image > a').attr('href');
//             const category = 'accessories';
//             const link = 'https://phonemart.ng/product/apple-airpod-2-wire/'
//             Product.findOne({slug: slug}, function(err, product) {
//                 if(product) {
//                     // console.log('Product already exists');
//                 } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link: link
//                     });
//                     // console.log(title, slug, price, image, category, link);
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     });
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// const fetchData = async () => {
//     try {
//         const jumiaacce2 = await axios.get(url9);
//         const $ = cheerio.load(jumiaacce2.data);
//         // console.log($);
//         $(
//             "#jm > main > div:nth-child(1) > section" 
//         ).each((i, el) => {
//             const slug = 9;
//             const title = $(el).find('.-fs0').text().slice(14, 30);
//             const price = $(el).find('.-fs24').text();
//             const image = $(el).find('#imgs > a > .-fh').attr('data-src');
//             const category = 'accessories';
//             const link = 'https://www.jumia.com.ng/apple-airpods-2-with-charging-case-latest-model-35142864.html';
//             Product.findOne({slug: slug}, function(err, product) {
//                 if(product) {
//                     console.log('product already exists');
//                 } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link : link 
//                     });
//                     // console.log(slug, title, price, image, category, link)
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     })
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(err);
//     }
// }

// const fetchData = async () => {
//     try {
//         const pmartacce = await axios.get(url8);
//         const $ = cheerio.load(pmartacce.data);
//         // console.log($);
//         $(
//             "#product-2910"
//         ).each((i, el) => {
//             const slug = 8;
//             const title = $(el).find('.entry-title').text();
//             const price = $(el).find('.woocommerce-Price-amount').text().slice(21, 30);
//             const image = $(el).find('.woocommerce-product-gallery__image > a').attr('href');
//             const category = 'accessories';
//             const link = 'https://phonemart.ng/product/apple-airpod-pro-white/'
//             Product.findOne({slug: slug}, function(err, product) {
//                 if(product) {
//                     console.log('Product already exists');
//                 } else{
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link: link
//                     });
//                     // console.log(title, slug, price, image, category, link);
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     });
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// const fetchData = async () => {
//     try {
//         const jumiaacce = await axios.get(url7);
//         const $ = cheerio.load(jumiaacce.data);
//         // console.log($);
//         $(
//             "#jm > main > div:nth-child(1) > section"
//         ).each((i, el) => {
//             const slug = 7;
//             const title = $(el).find('.-fs0').text();
//             const price = $(el).find('.-fs24').text();
//             const image = $(el).find('#imgs > a > .-fh').attr('data-src');
//             category = 'accessories';
//             const link = 'https://www.jumia.com.ng/airpods-pro-with-magsafe-charging-case-white-apple-mpg1636718.html';
//             // console.log(title, price, image, category, link)
//             Product.findOne({slug: slug}, function(err, product) {
//                if(product) {
//                     console.log('Product already exists');
//                } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link : link
                        
//                     });
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     })
//                 }
//             })
//         })
//     } catch (error) {
        
//     }
// } 



// const fetchData = async () => {
//     try {
//         const pmart3 = await axios.get(url6);
//         const $ = cheerio.load(pmart3.data);
//         // console.log($);
//         $(
//             "#product-2891 > div:nth-child(1) > div.row.product-image-summary-wrap"
            
//         ).each((i, el) => {
//             const slug = 6;
//             const title = $(el).find('.entry-title').text();
//             const price = $(el).find('.woocommerce-Price-amount').text().slice(22);
//             const image = $(el).find('.woocommerce-product-gallery__image > a').attr('href');
//             const category = 'phone';
//             const link = 'https://phonemart.ng/product/apple-iphone-11-pro-max-64gb-gold/'
            
//             Product.findOne({slug: slug}, function(err, product) {
//                 if(product) {
//                     // console.log('Product already exists');
//                 } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link: link
//                     });
//                     // console.log(title, slug, price, image, category);
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     });
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }



// const fetchData = async () => {
//     try {
//        const jumia3 = await axios.get(url5);
//        const $ = cheerio.load(jumia3.data);
//     //console.log($);

//     $(
//         "#jm > main > div:nth-child(1) > section > div"
//     ).each((i, el) => {
//         const slug = 5;
//         const title = $(el).find('.-fs0').text().slice(0, 23);
//         const price = $(el).find('.-fs24').text();
//         const image = $(el).find('#imgs > a > .-fh').attr('data-src');
//         const category = 'phone';
//         const link = 'https://www.jumia.com.ng/apple-iphone-11-pro-max-6.5-inch-super-retina-4gb-ram-64gb-romios-13-12mp12mp12mp12mp-4g-lte-smartphone-gold-133770390.html'
//         // console.log(title, slug, price, image, category, link); 
//         Product.findOne({slug: slug}, function(err, product) {
//             if(product) {
//                 console.log('product already exists');
//             } else {
//                 let product = new Product({
//                     slug : slug,
//                     title : title,
//                     price: price,
//                     image: image,
//                     category: category,
//                     link : link
                    
//                 });
//                 product.save((err) => {
//                     if(err) return console.log(err);
//                 })
//             }
//         })
//     })   
//     }catch (error) {
//         console.log(error);
//     }
// }



// const fetchData = async () => {
//     try {
//         const pmart2 = await axios.get(url4);
//         const $ = cheerio.load(pmart2.data);
//         // console.log($);
//         //product_title entry-title
//         $(
//             "#product-2883 > div:nth-child(1) > div.row.product-image-summary-wrap"
//         ).each((i, el) => {
//             const slug = 4;
//             const title = $(el).find('.entry-title').text();
//             const price = $(el).find('.woocommerce-Price-amount').text().slice(22);
//             const image = $(el).find('.woocommerce-product-gallery__image > a').attr('href');
//             const category = 'phone';
//             const link = 'https://phonemart.ng/product/apple-iphone-x-64gb-space-gray/'
//             // console.log(title, price, image, category, link)
//             Product.findOne({slug: slug}, function(err, product) {
//                 if(product) {
//                     console.log('Product already exists');
//                 } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link: link
//                     });
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     });
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }



// const fetchData =async () => {
//     try {
//         const jumia2 = await axios.get(url3);
//         const $ = cheerio.load(jumia2.data);
//         // console.log($);
//         $(
//            "#jm > main > div:nth-child(1) > section"
//            //-fs20 -pts -pbxs
//            //-b -ltr -tal -fs24
//         ).each((i, el) => {
//             const slug = 3;
//             const title = $(el).find('.-fs20').text();
//             const price = $(el).find('.-fs24').text();
//             const image = $(el).find('#imgs > a > .-fh').attr('data-src');
//             const category = 'phone';
//             const link = 'https://www.jumia.com.ng/apple-iphone-x-64gb-3gb-space-grey-5.8-free-case-screen-guide-191696629.html'
//             // console.log(title, price, image, category, link);
//             Product.findOne({slug: slug}, (function(err, product){
//                 if(product) {
//                     console.log('product already exists');
//                 } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link : link
                        
//                     });
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     })
//                 }
//             }))
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }



// const fetchData = async () => {
//     try {
//         const kong = await axios.get(url2);
//         const $ = cheerio.load(kong.data);
//         // console.log($);
//         $(
//             "#product-3202 > div:nth-child(1) > div.row.product-image-summary-wrap"
//         ).each((i, el) => {
//             const slug = 2;
//             const title = $(el).find('.entry-title').text();
//             const price = $(el).find('.woocommerce-Price-amount').text().slice(22);
//             const image = $(el).find('.woocommerce-product-gallery__image > a').attr('href');
//             const category = 'phone';
//             const link = 'https://phonemart.ng/product/apple-iphone-xs-max-256gb-gold/'
//             // console.log(image);
//             Product.findOne({slug: slug}, function(err, product) {
//                 if(product) {
//                     // console.log('Product already exists');
//                 } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link: link
//                     });
//                     // console.log(title, slug, price, image, category);
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     });
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchData();

// const fetchData = async () => {
//     try {
//         const myPosts = await axios.get(url);
//         const $ = cheerio.load(myPosts.data);
//         // console.log($);

//         $(
//             "#jm > main > div:nth-child(1) > section > div"
//         ).each((i, el) => {
//             const slug = 1;
//             const title = $(el).find('.-fs0').text();
//             const price = $(el).find('.-fs24').text();
//             // let brand = $('._more').text();
//             const image = $(el).find('#imgs > a > .-fh').attr('data-src');
//             const category = 'phone';
//             const link = 'https://www.jumia.com.ng/apple-iphone-xs-max-256gb-gold-free-pouch-screen-protector-116534880.html'
//             // console.log(link);
//             Product.findOne({slug: slug}, function(err, product){
//                 if(product) {
//                     console.log('product already exists');
//                 } else {
//                     let product = new Product({
//                         slug : slug,
//                         title : title,
//                         price: price,
//                         image: image,
//                         category: category,
//                         link : link
                        
//                     });
//                     product.save((err) => {
//                         if(err) return console.log(err);
//                     })
                    
//                 }
//             })
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchData();


