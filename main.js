function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(document).ready(function() {
  var $form = $('form#get-early-access-form');

  $form.submit(function(e){
    e.preventDefault(); 
    if (validateEmail(document.querySelector('.email input').value)) {
      var formUrl = 'https://script.google.com/macros/s/AKfycbzxVJDPoE95M7UfOAocWyBI7rayJq53oqSZmky3YlmyOHwzxnjh/exec';
      var jqxhr = $.ajax({
        url: formUrl,
        method: 'GET',
        dataType: 'json',
        data: $form.serialize(),
        success: function(data) {}
      });
      document.querySelector('.email_success').style.display = 'block';
      document.querySelector('.email').style.display = 'none';
      gtag('event', 'submit', {
        'event_category': 'suscription',
        'event_label': document.querySelector('.email input').value,
      });
    } else {
      alert('Enter a valid email!');
    }
  });
});