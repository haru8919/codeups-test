jQuery(function ($) {
  $(".js-hamburger, .js-drawer").on("click", function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").toggleClass("is-open");

    // ドロワーメニューが開いている間は本文のスクロールを無効にする
    if ($(".js-drawer").hasClass("is-open")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "");
    }
  });
});

// スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});

const swiper2 = new Swiper(".swiper2", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 18,

  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1025: {
      spaceBetween: 40,
    },
  },
});
// imgアニメーション
$(document).ready(function () {
  var boxes = $(".colorbox"); // 全ての .colorbox 要素を取得
  var speed = 700; // アニメーションの速度を設定

  boxes.each(function () {
    var box = $(this);
    var color = $("<div class='color'></div>").appendTo(box); // 各 .colorbox に <div class="color"></div> を追加
    var image = box.find("img");
    var counter = 0;

    image.css("opacity", "0"); // 画像を初めは非表示にする
    color.css("width", "0"); // .color 要素を初期状態で非表示にする

    $(window).on("scroll", function () {
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      var boxOffset = box.offset().top;
      var boxHeight = box.height();

      // スクロール位置が .colorbox 要素の位置付近にあるかをチェック
      if (scrollTop + windowHeight > boxOffset && scrollTop < boxOffset + boxHeight) {
        if (counter == 0) {
          // アニメーションの開始
          color.delay(200).animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1"); // 画像を表示
            color.css({ left: "0", right: "auto" }); // .color 要素の位置を調整
            color.animate({ width: "0" }, speed); // アニメーションを逆にして非表示にする
          });
          counter = 1;
        }
      }
    });
  });
});

// トップバックbtn
document.addEventListener("DOMContentLoaded", function () {
  var topButton = document.getElementById("topButton");
  var footer = document.querySelector("footer");

  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY || window.pageYOffset; // クロスブラウザ対応
    var footerTop = footer.getBoundingClientRect().top + window.scrollY;
    var windowHeight = window.innerHeight;

    if (scrollY > 200 && scrollY + windowHeight < footerTop) {
      // ページが一定量以上スクロールされ、かつフッターが画面内に表示されていない場合
      topButton.classList.add("active"); // ボタンにactiveクラスを追加して表示する
    } else {
      topButton.classList.remove("active"); // そうでなければボタンを非表示にする
    }
  });

  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
