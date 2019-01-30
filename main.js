function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(document).ready(function() {
  var $form = $('.bottom-email form#get-early-access-form');
  var $form2 = $('.top-email form#get-early-access-form');

  $form.submit(function(e){
    e.preventDefault(); 
    if (validateEmail(document.querySelector('.bottom-email input').value)) {
      var formUrl = 'https://script.google.com/macros/s/AKfycbzxVJDPoE95M7UfOAocWyBI7rayJq53oqSZmky3YlmyOHwzxnjh/exec';
      var jqxhr = $.ajax({
        url: formUrl,
        method: 'GET',
        dataType: 'json',
        data: $form.serialize(),
        success: function(data) {}
      });
      document.querySelector('.bottom-email .email_success').style.display = 'block';
      document.querySelector('.bottom-email #get-early-access-form').style.display = 'none';
      gtag('event', 'submit', {
        'event_category': 'suscription_bottom',
        'event_label': document.querySelector('.bottom-email input').value,
      });
    } else {
      alert('Enter a valid email!');
    }
  });

  $form2.submit(function(e){
    e.preventDefault(); 
    if (validateEmail(document.querySelector('.top-email input').value)) {
      var formUrl = 'https://script.google.com/macros/s/AKfycbzxVJDPoE95M7UfOAocWyBI7rayJq53oqSZmky3YlmyOHwzxnjh/exec';
      var jqxhr = $.ajax({
        url: formUrl,
        method: 'GET',
        dataType: 'json',
        data: $form2.serialize(),
        success: function(data) {}
      });
      gtag('event', 'submit', {
        'event_category': 'suscription_top',
        'event_label': document.querySelector('.top-email input').value,
      });
      document.querySelector('.top-email .email_success').style.display = 'block';
      document.querySelector('.top-email #get-early-access-form').style.display = 'none';
    } else {
      alert('Enter a valid email!');
    }
  });
});