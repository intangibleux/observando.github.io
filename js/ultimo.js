$(function() {
    $.getJSON('https://freelance.axelvf.com.ar/observando/mailchimp.php')
        .success(function(data) {
            window.location.href = data[0].link;
        })
        .error(function(e) {
            console.error(e);
        })
});