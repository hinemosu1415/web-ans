/*
発展：
１，input.value = ""; の時は要素を追加しないようにできますか？
２，input.value = "　　あいうえお　"; このような入力が来たら前後のスペースは排除したいですね 
３，追加ボタンを押したら入力欄を空にしましょう 
*/


//難しいですが頑張りましょう！

const addButton = document.getElementById("add");
const input = document.getElementById("input");
const ul = document.getElementById("list");

addButton.addEventListener("click", function() {
    const text = input.value.trim();
    if (text === "") return;

    const newli = document.createElement("li"); // liタグを作成
    newli.textContent = text; // liタグの中身を変更
    ul.appendChild(newli); // ulの最後に新しいliタグを追加

    input.value = "";// 入力欄を空にする
});

