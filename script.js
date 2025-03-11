// Пример интерактивного элемента: кнопка с анимацией
document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.textContent = "Нажми меня!";
    document.querySelector("main").appendChild(button);

    button.addEventListener("click", function () {
        alert("Спасибо за интерес к истории Counter-Strike!");
    });
});