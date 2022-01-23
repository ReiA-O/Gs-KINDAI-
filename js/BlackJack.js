// 20211120
console.log('ブラックジャック作っちゃったぞ');

let total_num;
let maisu;
let aite_total_num;

// スタートボタン押したとき
$('.start_1').on('click' , function(){

    $('#push')[0].play();

    // 初回処理(２枚引くカードの選択)

    myresult_1 = Math.ceil(Math.random()*(11 - 1) + 1 );
    myresult_2 = Math.ceil(Math.random()*(10 - 1) + 1 );

    // 敵の手札(13-26ランダム)
    teki_tefuda = Math.ceil(Math.random()*(21 - 15) + 15 );


    // 相手の手札隠し
    $('.aite_gazou').attr('src' , '../img/nazo.png');

    aite_total_num = teki_tefuda

    // 相手の手札反映
//    $('.aite').text(teki_tefuda)



    // 自分の初期数値を足し算,して自分の合計点をHTMLに反映
    my_tefuda = 0
    my_tefuda = myresult_1 + myresult_2
//    $('.my_all_num').text(my_tefuda)
    
    // 手札のカードの数値をHTMLに反映
//    $('.card_1').text(myresult_1)
//    $('.card_2').text(myresult_2)
    
    $('.jibun_gazou_01').attr('src' , '../img/'+myresult_1+'.png');
    $('.jibun_gazou_02').attr('src' , '../img/'+myresult_2+'.png');
    maisu = 2
    total_num = my_tefuda

    $('.jibun_gazou').attr('src' , '../img/'+total_num+'.png');

});



// ヒットボタン押したとき
$('.my_hit').on('click' , function(){

    $('#push')[0].play();


    // 今回引いたカード
    maisu += 1

    // 3枚目の時
    if(maisu === 3 ){
        myresult_3 = Math.ceil(Math.random()*(10 - 1) + 1 );
        $('.card_3').text(myresult_3)
        total_num += myresult_3
        $('.jibun_gazou_03').attr('src' , '../img/'+myresult_3+'.png');
    }

    // 4枚目の時
    if(maisu === 4 ){
        myresult_4 = Math.ceil(Math.random()*(7 - 1) + 1 );
        $('.card_4').text(myresult_4)
        total_num += myresult_4
        $('.jibun_gazou_04').attr('src' , '../img/'+myresult_4+'.png');
    }

    // 5枚目の時
    if(maisu === 5 ){
        myresult_5 = Math.ceil(Math.random()*(4 - 1) + 1 );
        $('.card_5').text(myresult_5)
        total_num += myresult_5
        $('.jibun_gazou_5').attr('src' , '../img/'+myresult_5+'.png');
    }

    if(maisu === 6 ){
        myresult_5 = Math.ceil(Math.random()*(3 - 1) + 1 );
        $('.card_6').text(myresult_5)
        total_num += myresult_5
        $('.jibun_gazou_6').attr('src' , '../img/'+myresult_5+'.png');
    }

    // バーストしてたら負けさせる
    if(total_num > 21){
        // リザ出すときのために画面を消す
    // $('.card_1').hide();
    // $('.card_2').hide();
    // $('.card_3').hide();
    // $('.card_4').hide();
    // $('.card_5').hide();



    // $('.jibun_gazou').hide();
    // $('.aite_gazou').hide();

    $('.jibun_gazou_01').hide();
    $('.jibun_gazou_02').hide();
    $('.jibun_gazou_03').hide();
    $('.jibun_gazou_04').hide();
    $('.jibun_gazou_05').hide();
    $('.jibun_gazou_06').hide();

// 自分と相手の表示点数も消す。ここか？
    // $('.my_all_num').hide();
    // $('.aite').hide();

    // ボタンも消す
    $('.hit_stand').hide();
    $('.start_1').hide();

    // 線も消す
    // $('.first_line').hide();
    $('.center_line').hide();


    // h要素を消す,何もかも消えた
    // $('.title_1').hide();
    // $('.Dealer_name').hide();
    // $('.Player_name').hide();
    

    $('.aite_gazou').attr('src' , '../img/'+teki_tefuda+'.png');


        // 腹切りコピー
        $('.gazou').attr('src' , '../img/lose.png');
        $('#lose')[0].play();
        
    }

    // トータル数表示反映
    $('.my_all_num').text(total_num)
    $('.jibun_gazou').attr('src' , '../img/'+total_num+'.png');

});


// スタンド押したとき
$('.my_stand').on('click' , function(){

    $('#push')[0].play();

    $('.aite_gazou').attr('src' , '../img/'+teki_tefuda+'.png');


    // 後でリザ出すときのために画面を消す
    // $('.card_1').hide();
    // $('.card_2').hide();
    // $('.card_3').hide();
    // $('.card_4').hide();
    // $('.card_5').hide();

    $('.jibun_gazou_01').hide();
    $('.jibun_gazou_02').hide();
    $('.jibun_gazou_03').hide();
    $('.jibun_gazou_04').hide();
    $('.jibun_gazou_05').hide();
    $('.jibun_gazou_06').hide();
    


    // $('.jibun_gazou').hide();
    // $('.aite_gazou').hide();

// 自分と相手の表示点数も消す。ここか？
    // $('.my_all_num').hide();
    // $('.aite').hide();

    // ボタンも消す
    $('.hit_stand').hide();
    $('.start_1').hide();

    // 線も消す
    // $('.first_line').hide();
    $('.center_line').hide();
    // $('.end_line').hide();

    // h要素を消す,何もかも消えた
    // $('.title_1').hide();
    // $('.Dealer_name').hide();
    // $('.Player_name').hide();


    if(total_num > aite_total_num){
        // これは勝つる時
        $('.gazou').attr('src' , '..//img/win.png');
        // 音入れる
        $('#win_1')[0].play();
        $('#win_2')[0].play();
        

    }else if(total_num < aite_total_num){
        // これは腹切り
        $('.gazou').attr('src' , '../img/lose.png');
        // 音入れる
        $('#lose')[0].play();


    }else{
        // 痛み分け
        $('.gazou').attr('src' , '../img/draw.png');
        //無音
        $('#dorow')[0].play();
    }

});


// 更新ボタン
$('.kousin').on('click' , function(){
    location.reload();
});