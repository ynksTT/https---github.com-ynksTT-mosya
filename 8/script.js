$(function () {

  // ボタンアニメーション
  $('animate').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5, 
    }, 100);
  });
  
  $('animate').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });

});