/*DOM操作が入ってきます。
getElementsByTagName, getElementsByClassName, getElementById,
の三つを使えるようにしておきましょう*/


//getElementsByTagName
const textTag = document.getElementsByTagName("p")[0];
console.log(textTag.textContent);

const textTag2 = document.getElementsByTagName("p");
console.log(textTag2[0].textContent);


//getElementsByClassName
const textClass = document.getElementsByClassName("main-text")[0];
console.log(textClass.textContent);

const textClass2 = document.getElementsByClassName("main-text");
console.log(textClass2[0].textContent);


//getElementById
const textId = document.getElementById("message");
console.log(textId.textContent);

//上が終わったらhtmlの内容を書き換えてみよう
textTag.textContent = "書き換え完了"