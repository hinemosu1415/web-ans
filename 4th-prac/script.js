// ２段階に分けます
//１，入力内容をconsole.logで出力しよう(Hint)
//２，入力した文字数を数え,<p>に表示するJSを実装しよう
//余裕があったら<p>の表示を "～文字" というような実装をしよう

// Hint : input.addEventListener("input", () => { 実行内容 }); が使えるかも…

const input = document.getElementById("input");
const count = document.getElementById("count")


//１，
input.addEventListener("input", () => {
  console.log(input.value);
});


//２， 入力イベントが発生するたびに文字数を更新
input.addEventListener("input", () => {
  const inputText = input.value;
  count.textContent = inputText.length;
});


