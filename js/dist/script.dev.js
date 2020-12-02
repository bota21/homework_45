"use strict";

$(function () {
  var Wwidth = $(window).width();
  $('#control').click(function () {
    $('#video')[0].play();
    $('.promo_title').hide();
    $('.promo_button').hide();
    $(this).hide();
    $('.pause').show();
  });
  $('.pause').click(function () {
    $('#video')[0].pause();
    $('#control').show();

    if (Wwidth > '765') {
      $('.promo_title').show();
      $('.promo_button').show();
    }

    ;
    $(this).hide();
  });
  $('.burger_menu').on('click', function () {
    $('.menu').addClass('active');
    $('.menu').toggle();
  });
});