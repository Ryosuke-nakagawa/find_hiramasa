$('.twitter-share-button').on('click', function() {
  //ツイート内容をセット
  var tw_contents = ("ヒラマサを探せ!%0aあなたは「" + $("#resultModalTitle").text() + "」です。%0a%0a[激流]をクリアしました！");
  var url = "https://find-hiramasa-app.herokuapp.com/";
  //#twitter_buttonのhrefにパラメーターを渡す
  window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&count=none&lang=ja");
});