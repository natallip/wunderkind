module.exports = (function(){
  
  $('#form').submit(function(e) { 
    e.preventDefault();

    if ($(this)[0].name.value == '' || $(this)[0].email.value == '' || $(this)[0].text.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.js-thank-you').fadeIn();
      let timeout = window.setTimeout(()=>{
        $('.js-thank-you').fadeOut();
      }, 2000);
      
      $('#form').trigger('reset');
    });
    return false;
  });
})();