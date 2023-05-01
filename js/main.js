///////////症状音///////////////////
function audio() {
  document.getElementById('symp_btn_audio,ecg_btn_audio,scope_btn_audio,ct_btn_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('symp_btn_audio,ecg_btn_audio,scope_btn_audio,ct_btn_audio').play(); //クリックしたら音を再生
}




let randomNumber;
let randomNumber2;
let randomNumber3;
let randomNumber4;
console.log(randomNumber);
/////////////////////////症状///////////////////////
$("#symp_btn").on('click', function () {

  const min = 0;
  const max = 3;
  const sympton = ['胸痛', '動悸', '息切れ', 'めまい']
  randomNumber = Math.floor(Math.random() * (max - min + 1));
  console.log(sympton[randomNumber])


  // 0  胸痛
  // 1  同期
  // 2  息切れ
  // 3  めまい

  if (randomNumber === 0) {
    // alert("胸痛");
    $("#symp_hand").text("胸痛")
    // $("#result").text("         です！")

  } else if (randomNumber === 1) {
    // alert("動悸")
    $("#symp_hand").text("動悸")
    // $("#result").text("         です！")
  } else if (randomNumber === 2) {
    // alert("パーです")
    $("#symp_hand").text("息切れ")
    // $("#result").text("         です！")
  } else if (randomNumber === 3) {
    // alert("パーです")
    $("#symp_hand").text("めまい")
    // $("#result").text("         です！")
  }
})
/////////////////////////心電図///////////////////////
$("#ecg_btn").on('click', function () {

  const min = 0;
  const max = 3;
  const sympton = ['ST低下', 'ST上昇', '変化なし', 'Long-pause']
  randomNumber2 = Math.floor(Math.random() * (max - min + 1));
  console.log(sympton[randomNumber2])


  // 0  ST低下
  // 1  ST上昇
  // 2  変化なし
  // 3  Long-pause

  if (randomNumber2 === 0) {
    // alert("ST低下");
    $("#ecg_hand").text("ST低下")
    // $("#result").text("         です！")

  } else if (randomNumber2 === 1) {
    // alert("ST上昇")
    $("#ecg_hand").text("ST上昇")
    // $("#result").text("         です！")
  } else if (randomNumber2 === 2) {
    // alert("変化なし")
    $("#ecg_hand").text("変化なし")
    // $("#result").text("         です！")
  } else if (randomNumber2 === 3) {
    // alert("Long-pause")
    $("#ecg_hand").text("Long-pause")
    // $("#result").text("         です！")
  }
})


/////////////////////////内視鏡///////////////////////
$("#scope_btn").on('click', function () {

  const min = 0;
  const max = 3;
  const sympton = ['特記無し', 'びまん性発赤', '胃潰瘍', '胃がん']
  randomNumber3 = Math.floor(Math.random() * (max - min + 1));
  console.log(sympton[randomNumber3])


  // 0  特記無し
  // 1  びまん性発赤
  // 2  胃潰瘍
  // 3  胃がん

  if (randomNumber3 === 0) {
    // alert("特記無し");
    $("#scope_hand").text("特記無し")
    // $("#result").text("         です！")

  } else if (randomNumber3 === 1) {
    // alert("びまん性発赤")
    $("#scope_hand").text("びまん性発赤")
    // $("#result").text("         です！")
  } else if (randomNumber3 === 2) {
    // alert("胃潰瘍")
    $("#scope_hand").text("胃潰瘍")
    // $("#result").text("         です！")
  } else if (randomNumber3 === 3) {
    // alert("胃がん")
    $("#scope_hand").text("胃がん")
    // $("#result").text("         です！")
  }
})
/////////////////////////CT///////////////////////
$("#ct_btn").on('click', function () {

  const min = 0;
  const max = 3;
  const sympton = ['特記無し', '胆嚢炎', '大動脈解離', '膵がん']
  randomNumber4 = Math.floor(Math.random() * (max - min + 1));
  console.log(sympton[randomNumber4])


  // 0  特記無し
  // 1  胆嚢炎
  // 2  大動脈解離
  // 3  膵がん

  if (randomNumber4 === 0) {
    // alert("特記無し");
    $("#ct_hand").text("特記無し")

  } else if (randomNumber4 === 1) {
    // alert("胆嚢炎")
    $("#ct_hand").text("胆嚢炎")

  } else if (randomNumber4 === 2) {
    // alert("大動脈解離")
    $("#ct_hand").text("大動脈解離")

  } else if (randomNumber4 === 3) {
    // alert("膵がん")
    $("#ct_hand").text("膵がん")

  }

  /////////////////////診断結果//////////////////////
  if (randomNumber2 === 0& randomNumber4 === 0) {

    $("#result").text(" 狭心症の疑いがありますので受診してください")
    /////////////////////////////////////////////////////// 
  } else if
    (randomNumber === 0 && randomNumber2 === 1) {

    $("#result").text(" 急性心筋梗塞 です！救急車で病院へ")
    //////////////////////////////////////////////////////
  } else if
    (randomNumber3 === 3) {

    $("#result2").text("  胃がんの様です。手術日程を決めましょう！")
    //////////////////////////////////////////////////////
  } else if
    (randomNumber === 0 || randomNumber === 3 && randomNumber3 === 2 && randomNumber4 === 0) {

    $("#result").text("  胃潰瘍がありますね。薬で様子を見ますがストレスの原因を認識してください")
    //////////////////////////////////////////////////////
  } else if
    (randomNumber === 3 && randomNumber2) {

    $("#result").text("  心原性失神ですね。ホルター心電図検査をして必要であればペースメーカーを検討しましょう")
    //////////////////////////////////////////////////////
  } else if
    (randomNumber4 === 1) {

    $("#result2").text("  急性胆嚢炎です！")
    //////////////////////////////////////////////////////
  } else if
    (randomNumber4 === 3 && randomNumber2) {

    $("#result").text("  心原性失神です！")
    //////////////////////////////////////////////////////
  } else if
    (randomNumber4 === 2) {

    $("#result2").text(" 大動脈解離を認めました。緊急入院です。")
    //////////////////////////////////////////////////////
  } else if
    (randomNumber4 === 3) {

    $("#result2").text("  膵癌の可能性があります。入院して精査しましょう！")
    //////////////////////////////////////////////////////

  } else {
    $("#result").text("今のところ憂慮すべき所見はないようです")
  }
})


