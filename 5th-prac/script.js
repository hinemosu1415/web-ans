//３段階に分けます。

//１，ボタンが押されたら "押されました！" とconsole.logに出力
//２，<ul></ul>に "テキストを作成しました！" を追加しよう
//３，入力したテキストを<ul></ul>にテキストとして追加しよう

/*発展：
１，input.value = ""; の時は要素を追加しないようにできますか？
２，input.value = "　　あいうえお　"; このような入力が来たら前後のスペースは排除したいですね 
３，追加ボタンを押したら入力欄を空にしましょう */


//難しいですが頑張りましょう！

const addButton = document.getElementById("add");
const input = document.getElementById("input");
const ul = document.getElementById("list");

//１，
addButton.addEventListener("click", function() {
    console.log("押されました！");
});

//元２，input.valueはaddEventlistenerの中に入れよう！nullになるよ！
addButton.addEventListener("click", function() {
    console.log(input.value);
});

//２，append = 追加する  Child = 子要素
const newli = document.createElement("li"); // liタグを作成
newli.textContent = "テキストを作成しました！"; // liタグの中身を変更
ul.appendChild(newli); // ulの最後に新しいliタグを追加

//３, 発展
addButton.addEventListener("click", function() {
    const text = memoInput.value.trim();
    if (text === "") return;

    const newli = document.createElement("li"); // liタグを作成
    newli.textContent = input.value; // liタグの中身を変更
    ul.appendChild(newli); // ulの最後に新しいliタグを追加

    input.value = "";
});

