
import anime from "animejs"

var elem = document.getElementsByClassName('fish');

window.onload = function() {
  anime({
    targets: elem,
    translateX: 1000,
    loop: true,
    duration: 3000,
    easing: 'easeInQuad'
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
    });
  });

// 引数で渡した範囲内のランダムな整数を生成するための関数
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 要素の取得
var $container = $('.container'),
  $fish = $('.fish'),
  containerWidth = $container.width(),
  containerHeight = $container.height();


  // liそれぞれをランダムに配置
$.map($fish, function(item, index) {
  var $item = $(item), // fishのli要素が1番目から順に入ってきます
    topPos = getRandomInt(0, containerHeight), // 0〜500の間でtopの座標を取得
    leftPos = getRandomInt(-700, -100); // 0〜960の間でleft の座標を取得
  // 取得したランダム座標を設定
  $item.css({
    top: topPos,
    left: leftPos
  });
});

}
