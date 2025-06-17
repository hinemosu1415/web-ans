//getElementsByTagNameを使ってみましょう
//配列の使い方に注意

const textTag = document.getElementsByTagName("p");

//解答１
console.log(textTag[0].textContent);
console.log(textTag[1].textContent);
console.log(textTag[2].textContent);

//解答２
// for文を使ってすべての<p>要素のテキストを出力
for (let i = 0; i < textTag.length; i++) {
    console.log(textTag[i].textContent);
}

const listTag = document.getElementsByTagName("div");

