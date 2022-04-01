
import anime from "animejs"

// ####  画面高さ設定  ####
  let vh = window.innerHeight * 0.01;
  // カスタム変数--vhの値をドキュメントのルートに設定
  document.documentElement.style.setProperty('--vh', `${vh}px`);

// 引数で渡した範囲内のランダムな整数を生成するための関数
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.onload = function() {
  var fishElements = document.querySelectorAll(".fish");
  fishElements.forEach(fish => {
    anime.speed = Math.random() * 0.5 + 0.5;
    anime({
      targets: fish,
      translateX: 1000,
      loop: true,
      duration: getRandomInt(1000,5000),
      easing: 'easeInQuad',
      delay: getRandomInt(0,300)
    });
  });
  
  $('#hiramasa').on('click', function() {
    $('#angry').hide();
    $('#man').show();
  }); 
  var elements = document.querySelectorAll(".buri");// NodeListとして取得
  elements.forEach(elm => {
    elm.addEventListener('click', function(){
      $('#man').hide();
      $('#angry').show();
      setTimeout(function(){
        $('#angry').hide();
        $('#man').show();
      },1000);
      
    });
  });

// ########  魚の画像要素の高さをランダムに変更  #########


// 要素の取得
var $container = $('.container'),
  $fish = $('.fish'),
  containerWidth = $container.width(),
  containerHeight = $container.height();


  // fishそれぞれをランダムに配置
$.map($fish, function(item, index) {
  var $item = $(item), // fishのli要素が1番目から順に入ってきます
    topPos = getRandomInt(130, containerHeight), // 0〜500の間でtopの座標を取得
    leftPos = getRandomInt(-700, -200); // 0〜960の間でleft の座標を取得
  // 取得したランダム座標を設定
  $item.css({
    top: topPos,
    left: leftPos
  });
});

}



