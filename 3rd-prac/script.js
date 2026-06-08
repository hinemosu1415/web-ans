const button = document.getElementsByTagName("button")[0];
const input = document.getElementsByTagName("input")[0];

button.addEventListener("click", function() {
    console.log(input.value);
});