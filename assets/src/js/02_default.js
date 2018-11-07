$(document).ready(function () {
    console.log('hello');
    console.log('hello');


    $('.a-btn--settings-switch').click(function () {
        console.log('click');
        $(this).toggleClass('off');
    });
});
