/*
(1)~(3)のいずれか1つを書けば良いです。
*/

//(1)getElementsByTagName
const textTag = document.getElementsByTagName("p")[0];
console.log(textTag.textContent);

//(2)getElementsByClassName
const textClass = document.getElementsByClassName("main-text")[0];
console.log(textClass.textContent);

//(3)getElementById
const textId = document.getElementById("message");
console.log(textId.textContent);