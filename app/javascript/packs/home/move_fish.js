import anime from "animejs"

$(window).on("load",function(){

  // ####  画面高さ設定  ####
    let vh = window.innerHeight * 0.01;
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', `${vh}px`);

  // 引数で渡した範囲内のランダムな整数を生成するための関数
  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

 // ########  魚の画像要素の高さをランダムに変更  #########
    // 要素の取得
    var $container = $('.container'),
    $fish = $('.fish'),
    containerWidth = $container.width(),
    containerHeight = $container.height();
    
      // 魚をそれぞれをランダムに配置
    $.map($fish, function(item) {
      var $item = $(item), // fishのli要素が1番目から順に入ってきます
      topPos = getRandomInt(130, containerHeight), // 0〜500の間でtopの座標を取得
      leftPos = getRandomInt(-500, -200); // 0〜960の間でleft の座標を取得
        // 取得したランダム座標を設定
      $item.css({
        top: topPos,
        left: leftPos
      });
    });

    // ###### 魚を泳がせる ######

    var rightStartElements = document.querySelectorAll(".right-start");
    rightStartElements.forEach(fish => {
      anime({
        targets: fish,
        translateX: 1000,//移動距離
        direction: 'reverse',
        loop: true,//繰り返し
        duration: getRandomInt(3000,5000),//どのくらいアニメーションを継続するか
        easing: 'easeInQuad',//動き
        delay: getRandomInt(0,300),//遅延
        loopComplete: function(anim) {
          // 取得したランダム座標を設定
          fish.style.top = `${getRandomInt(150,containerHeight)}px`
        }
      });
    })

    var leftStartElements = document.querySelectorAll(".left-start");
    leftStartElements.forEach(fish => {
      anime({
        targets: fish,
        translateX: 1000,//移動距離
        loop: true,//繰り返し
        duration: getRandomInt(1500,3000),//どのくらいアニメーションを継続するか
        easing: 'easeInQuad',//動き
        delay: getRandomInt(0,300),//遅延
        loopComplete: function(anim) {
          // 取得したランダム座標を設定
          fish.style.top = `${getRandomInt(150,containerHeight)}px`
        }
      });
    })

    var squid = document.querySelector("#squid");
    anime({
        targets: squid,
        translateX: 1000,//移動距離
        loop: true,//繰り返し
        duration: getRandomInt(4000,5000),//どのくらいアニメーションを継続するか
        easing: 'cubicBezier(0.585, 1.550, 0.565, -0.535)',//動き
        delay: getRandomInt(0,300),//遅延
        loopComplete: function(anim) {
          // 取得したランダム座標を設定
          squid.style.top = `${getRandomInt(150,containerHeight)}px`
        }
      });
    
    var octopus = document.querySelector("#octopus");
    anime({
        targets: octopus,
        translateX: 1000,//移動距離
        direction: 'reverse',
        loop: true,//繰り返し
        duration: getRandomInt(6000,8000),//どのくらいアニメーションを継続するか
        easing: 'cubicBezier(0.130, 0.825, 0.760, 0.200)',//動き
        delay: getRandomInt(0,300),//遅延
        loopComplete: function(anim) {
          // 取得したランダム座標を設定
          octopus.style.top = `${getRandomInt(containerHeight - 100,containerHeight)}px`
        }
      });
})