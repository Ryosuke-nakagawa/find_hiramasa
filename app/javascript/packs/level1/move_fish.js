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
    leftPos = getRandomInt(-700, -200); // 0〜960の間でleft の座標を取得
      // 取得したランダム座標を設定
    $item.css({
      top: topPos,
      left: leftPos
    });
  });

  // ###### 魚を泳がせる ######
  var fishElements = document.querySelectorAll(".fish");
  fishElements.forEach(fish => {
    anime.speed = 0.6;
    anime({
      targets: fish,
      translateX: 1000,//移動距離
      loop: true,//繰り返し
      duration: getRandomInt(1500,5000),//どのくらいアニメーションを継続するか
      easing: 'easeInQuad',//動き
      delay: getRandomInt(0,300),//遅延
      loopComplete: function(anim) {
        // 取得したランダム座標を設定
        fish.style.top = `${getRandomInt(150,containerHeight)}px`
      }
    });
  })

  // 開始時のmodalWindow操作
  $('#start').on('click', function() {
    $('#startModal').addClass('hidden');
  });

  // 結果時のモーダル
  const resultmodalTitle = document.getElementById("resultModalTitle");
  const resultmodalBody = document.getElementById("resultModalBody");

  // ###### 魚をクリックでアクション ######
  $('#hiramasa').on('click', function() {
    if (angryCount === 0){
      resultmodalTitle.innerText = '目利き釣り人'
      resultmodalBody.innerHTML =
        '<p>お前やるのぅ!</p>\
        <p>次は激流も挑戦じゃ!!!<p/>'
    }else{
      resultmodalTitle.innerText = 'アマチュア釣り人'
      resultmodalBody.innerHTML =
        '<p>まぁまぁじゃのぅ</p>\
        <p>一発で決めて欲しかったのぉ<p/>'
    }
    $('#resultModal').removeClass('hidden');
    $('#share-button').removeClass('hidden');
  });
  var buriElements = document.querySelectorAll(".buri");// NodeListとして取得
  var angryCount = 0;
  buriElements.forEach(elm => {
    elm.addEventListener('click', function(){
      switch (angryCount) {
        case 0:
          $('#man').hide();
          $('#angry').show();
          setTimeout(function(){
            $('#angry').hide();
            $('#man').show();
          },1000);
          angryCount += 1
          break;
        case 1:
          $('#man').hide();
          $('#angry2').show();
          setTimeout(function(){
            $('#angry2').hide();
            $('#man').show();
          },1000);
          angryCount += 1
          break;
        case 2:
          resultmodalTitle.innerText = 'そりゃブリじゃ'
          resultmodalBody.innerHTML =
            '<p>なんべんも言うたろう?</p>\
            <p>もう一回やってみぃ!<p/>'
          $('#resultModal').removeClass('hidden');
      }
    });
  });
})
