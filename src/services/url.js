const url ={
    BASE_URL: 'https://localhost:7195/api/',
    CATEGORY:{
       LIST: '/category',
       CREATE: '/category',
       DETAIL: '/category/get-by-id',
      
    },
    PRODUCT:{
      LIST: '/product',
      CREATE: '/product',
      DETAIL: '/product/get-by-categoryId',
   }
    }
    export default url;
    