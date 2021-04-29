window.onload = function () {
    var button = document.getElementById("enter");
    var input = document.getElementById("userInput");
    var ul = document.querySelector("ul");

    function inputLength() {
        return input.value.length;
    }

    function elementList() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }

    function afterClick() {
        if (inputLength() > 0) {
            elementList();
        }
    }

    function affterEnter(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            elementList();
        }
    }

    button.addEventListener("click", afterClick);

    input.addEventListener("keypress", affterEnter);

}