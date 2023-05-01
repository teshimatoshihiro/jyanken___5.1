// 選択肢の配列
const options = ["胸痛", "動悸", "息切れ", "めまい"];
const options2 = ["ST低下", "ST上昇", "変化なし", "Long-pause"];
const options3 = ["特記なし", "発赤", "胃潰瘍", "胃がん"];
const options4 = ["特記なし", "胆嚢炎", "大動脈解離", "膵癌"];


// // スロットの要素を取得
// const slot1 = document.getElementById("slot1");
// const slot2 = document.getElementById("slot2");
// const slot3 = document.getElementById("slot3");
// const slot4 = document.getElementById("slot4");

// スロットに表示するテキストをセットする関数
function setText(slot, text) {
  slot.innerHTML = text;
}

// スロットを回す関数
function spin() {
  // 選択肢の中からランダムに1つを選ぶ
  const randomOption = options[Math.floor(Math.random() * options.length)];
  setText(slot1, randomOption);
  console.log(options[randomOption])

  // 選択肢の中からランダムに1つを選ぶ
  const randomOption2 = options2[Math.floor(Math.random() * options2.length)];
  setText(slot2, randomOption2);
  console.log(options2[randomOption2])

  // 選択肢の中からランダムに1つを選ぶ
  const randomOption3 = options3[Math.floor(Math.random() * options.length)];
  setText(slot3, randomOption3);
  console.log(options3[randomOption3])

  // 選択肢の中からランダムに1つを選ぶ
  const randomOption4 = options4[Math.floor(Math.random() * options.length)];
  setText(slot4, randomOption4);
  console.log(options4[randomOption4])
}

////////////////////////////////////////////////////////////////////////////
f(randomOption === "胸痛" && randomOption2 === "ST低下" && randomOption4 === "特記無し") {

  $("#result").text(" 狭心症の疑いがありますので受診してください");
}
 

// スロットマシンを開始する関数
function startSlotMachine() {
  // スロットを回す
  spin();

  // 0.3秒ごとにスロットを回し、5秒後に停止する
  const interval = setInterval(spin, 300);
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}


/////////////////////診断結果//////////////////////
if (randomOption === 0 && randomOption2 === 2 && randomOption4 === 0) {

  $("#result").text(" 狭心症の疑いがありますので受診してください")
  /////////////////////////////////////////////////////// 
} else if
  (randomOption === 0 && randomOption2 === 1) {

  $("#result").text(" 急性心筋梗塞 です！救急車で病院へ")
  //////////////////////////////////////////////////////
} else if
  (randomOption3 === 3) {

  $("#result2").text("  胃がんの様です。手術日程を決めましょう！")
  //////////////////////////////////////////////////////
} else if
  (randomOption === 0 || randomOption2 === 3 && randomOption3 === 2 && randomOption4 === 0) {

  $("#result").text("  胃潰瘍がありますね。薬で様子を見ますがストレスの原因を認識してください")
  //////////////////////////////////////////////////////
} else if
  (randomOption === 3 && randomOption2) {

  $("#result").text("  心原性失神ですね。ホルター心電図検査をして必要であればペースメーカーを検討しましょう")
  //////////////////////////////////////////////////////
} else if
  (randomOption4 === 1) {

  $("#result2").text("  急性胆嚢炎です！")
  //////////////////////////////////////////////////////
} else if
  (randomOption4 === 3 && randomOption2) {

  $("#result").text("  心原性失神です！")
  //////////////////////////////////////////////////////
} else if
  (randomOption4 === 2) {

  $("#result2").text(" 大動脈解離を認めました。緊急入院です。")
  //////////////////////////////////////////////////////
} else if
  (randomOptionr4 === 3) {

  $("#result2").text("  膵癌の可能性があります。入院して精査しましょう！")
  //////////////////////////////////////////////////////

} else {
  $("#result").text("今のところ憂慮すべき所見はないようです")
}



