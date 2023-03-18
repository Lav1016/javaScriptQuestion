let products = [];

const fetchProducts = async () => {
  const d = await fetch("https://dummyjson.com/products");
  const res = await d.json();
  products = res.products;
  console.log("products", products);
  main()
  //   getPrice(3);
};

fetchProducts();

const main = () => {
  
  //   // filter product by price
  // //   const filterByprice = (price) => {
  // //     const pricefilter = products.filter((product) => product.price <= price);
  // //     console.log("----------->>", pricefilter);
  // //   };
  // //   filterByprice(125);

  // // fetch data by rating
  // //   const minimumRating = (rating) => {
  // //     const filterrating = rating.filter((product) => product.rating >= 3.5);
  // //     console.log("___________", filterrating);
  // //   };
  // //   minimumRating(products);

  // fetch product by brand
//   const getProductByName = (brand) => {
//     const findproduct = products.find((product) => product.brand === brand);
//     console.log("-------------", findproduct);
//   };

  // //   getProductByName("Apple");

  // //   const getAllProductsImages = () => {
  // //     const productimage = products.map((imageUrl) => imageUrl.images);
  // //     console.log("*******", productimage);
  // //   };
  // //   getAllProductsImages();

  // //   const filterbycategory =(category)=>{
  // //       const filtercategory = products.filter((product)=>product.category ===category)
  // //       console.log(filtercategory);
  // //   }
  // //   filterbycategory("smartphones")
//   const getPrice = (id) => {
//     const getbyid = products.find((product) => product.id === id);
//     console.log("-----------", getbyid)

//   };
//   getPrice(5);

















};

