window.addEventListener('scroll', function(){
  // スクロール量を取得
     const scroll = window.scrollY;
  // 画面の高さを取得
   const windowHeight = window.innerHeight;
//   // すべての.main3_titleを取得
   const main3_titles = document.querySelectorAll('.main3_title');

 
//     // main3までの高さを取得
     const distanceToBox = main3_title.offsetTop;
//     // 下記条件が成り立つときだけboxにis-activeクラスを付与する
     if(scroll + windowHeight > distanceToBox) {
       main3_title.classList.add('is-active');
     }

 });


// window.addEventListener('scroll', function(){
//   // スクロール量を取得
//   const scroll = window.scrollY;
//   // 画面の高さを取得
//   const windowHeight = window.innerHeight;
//   // すべての.boxを取得
//   const main3rights = document.querySelectorAll('.main3_right');

//   main3rights.forEach(function(main3_right) {
//     // main3までの高さを取得
//     const distanceToBox = main3_right.offsetTop;
//     // 下記条件が成り立つときだけboxにis-activeクラスを付与する
//     if(scroll + windowHeight > distanceToBox) {
//       main3_right.classList.add('is-active');
//     }
//   });
// });




// // $(function () {

// //  // 各セクションのフェードイン
// //  $(window).scroll(function (){
// //   $('.main3').each(function(){
// //     var pos = $(this).offset().top;
// //     var scroll = $(window).scrollTop();
// //     var windowHeight = $(window).height();
// //     if (scroll > pos - windowHeight + 200){
// //       $(this).addClass('scroll');
// //     }
// //   });
// // });

// // });


// $(function(){
//   $(window).on('load scroll', function() {
//      var winScroll = $(window).scrollTop();
//      var winHeight = $(window).height();
//      var scrollPos = winScroll + (winHeight * 0.8);

//      $(".show").each(function() {
//         if($(this).offset().top < scrollPos) {
//            $(this).css({opacity: 1, transform: 'translate(0, 0)'});
//         }
//      });
//   });
// });