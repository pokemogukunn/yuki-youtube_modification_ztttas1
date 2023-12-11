$(function() {
  var openImgBtn = $('.js-open-img'); //「画像を見る」
  var openImgTarget = $('.img'); //画像
  var closeImgBtn = $('.js-close-img'); //「CLOSE」ボタン
  openImgBtn.on('click', function() { //「画像を見る」ボタンを押すと
    openImgTarget.fadeIn(); //画像がフワッと（fadeIn）現れて
    openImgBtn.hide(); //「画像を見る」ボタンは消える
  });
  closeImgBtn.on('click', function() { //「CLOSE」ボタンを押すと
    openImgBtn.show(); //「画像を見る」ボタンが現れて
    openImgTarget.hide();　//画像は消える
  });
});
