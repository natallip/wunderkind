  $('.js-overlay-thank-you').click(function() { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut();    
  });

$(document).mouseup(function (e) { // по клику вне попапа
  let popup = $('.popup');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-thank-you').fadeOut();
  }  
});