module.exports = (function(){
  $('#assortment').owlCarousel({
    loop:true,
    dots: true,
    nav:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        margin:0
      },
      768:{
        items:2,
        margin: 30        
      },
      1200: {
        items:3,
        margin:50
      }
    }
  });  
})();