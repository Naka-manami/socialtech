$(function(){
  // ボタンアニメーション
  $('.button-more').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,   // 不透明度
      marginLeft: 20, // 左に余白
    },100);           // 速度
  });
  $('.button-more').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,   // 不透明度
      marginLeft: 0,  // 左に余白
    }, 100);          // 速度
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,       // 自動再生
    dots: true,           // ドット表記
    infinite: true,       // ループ再生
    autoplaySpeed: 5000,  // 表示速度
    arrows: false,        // 矢印表記
  });

  //  送信ボタンクリック時の処理
  $('#submit').on('click', function (event){
    // formタグによる送信を拒否
    event.preventDefault();

    // 入力チェックをした結果をresultに格納
    let result = inputCheck();

    // エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;

    if (error == false){
      // フォーム送信は実際に行わず、送信成功メッセージのみ表示する
      alert('お問い合わせを送信しました。')
    }else{
      // エラーメッセージを表示する
      alert(message);
    }
  });

  // フォーカスが外れたとき（blur）にフォームの入力チェックする
  $('#name').blur(function(){       //名前
    inputCheck();
  });
  $('#furigana').blur(function(){   //ふりがな
    inputCheck();
  });
  $('#email').blur(function(){      //メール
    inputCheck();
  });
  $('#tel').blur(function(){        //電話
    inputCheck();
  });
  $('#message').blur(function(){    //メッセージ
    inputCheck();
  });
  $('#agree').blur(function(){      //同意
    inputCheck();
  });

  // お問い合わせフォームの入力チェック
  function inputCheck() {
    // エラーのチェック結果
    let result;

    // エラーメッセージのテキスト
    let message = '';

    // エラーがなければfalse、エラーがあればtrue
    let error = false;

    // お名前のチェック
    if ($('#name').val() =='') {
      // エラーあり
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    }else{
      // エラーなし
      $('#name').css('background-color', '#fafafa');
    }

    // ふりがなのチェック
    if ($('#furigana').val() == ''){
      // エラーあり
      $('#furigana').css('background-color', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    }else{
      // エラーなし
      $('#furigana').css('background-color', '#fafafa');
    }

    // お問い合わせのチェック
    if ($('#message').val() == '') {
      // エラーあり
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      // エラーなし
      $('#message').css('background-color', '#fafafa');
    }

    // メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
      // エラーあり
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
    }

    // 電話番号のチェック（未入力はOK,未入力ではないばあいは-が必要）
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1){
      // エラーあり
      $('#tel').css('background-color', '#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    }else{
      // エラーなし
      $('#tel').css('background-color', '#fafafa');
    }

    // 個人情報のチェックボックスのチェック
    if ($('#agree').prop('checked') == false) {
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }

    // エラーの有無で送信ボタンを切り替え
    if (error == true) {
      $('#submit').attr('src', 'images/button-submit.png');
    } else {
      $('#submit').attr('src', 'images/button-submit-blue.png');
    }

    // オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    // 戻り値としてエラーがあるかどうかを返す
    return result;

  }

});

