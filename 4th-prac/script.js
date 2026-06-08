const button = document.getElementsByTagName("button")[0];
const ul = document.getElementsByTagName("ul")[0];

button.addEventListener("click", function() {
    const newli = document.createElement("li"); // liタグを作成
    newli.textContent = "テキストを作成しました！"; // liタグのテキストを変更
    ul.appendChild(newli); // ulの最後に新しいliタグを追加
});