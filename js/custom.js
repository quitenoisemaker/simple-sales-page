$(document).on('submit', '#register', function(ev) {
    ev.preventDefault();
    let mee = $(this);
    let mee_form = $(this).serialize();
    $('.default-load').attr('hidden', true);
    $('.let-load').removeAttr('hidden');
    $('input').attr('readonly', true);
    $('#register').find('button').attr('disabled', true);

    $.ajax({
        url: 'config/data?action=register',
        type: 'POST',
        // dataType: 'json',
        data: mee_form,
        success: function(data) {
            // alert(data)
            if (data == true) {
                window.location = 'index';
            }
        },
        error: function(error_msg) {
            console.log(error_msg);
        }

    })

})


// Set the count down timer
  if ($('.countdown').length) {
    var count = $('.countdown').data('count');
    var template = $('.countdown').html();
    $('.countdown').countdown(count, function(event) {
      $(this).html(event.strftime(template));
    });
  }