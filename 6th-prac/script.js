const memoInput = document.getElementById("memoInput");
const addBtn = document.getElementById("addBtn");
const memoList = document.getElementById("memoList");
const searchInput = document.getElementById("searchInput");

addBtn.addEventListener("click", () => {
  const text = memoInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    memoList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  memoList.appendChild(li);
  memoInput.value = "";
});

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const items = memoList.getElementsByTagName("li"); //items・・・memolist(luタグ)の中のli

  for (let item of items) { //item・・・liタグのこと
    const text = item.querySelector("span").textContent.toLowerCase();
    item.style.display = text.includes(keyword) ? "flex" : "none"; 
    // 入力と部分一致  `item.style.display = text.includes(keyword) ? "flex" : "none";` <- 実装コード
    // 入力と完全一致  `item.style.display = text === keyword ? "flex" : "none";`
    // 入力と前方一致　`item.style.display = text.startsWith(keyword) ? "flex" : "none";`
  }
});
