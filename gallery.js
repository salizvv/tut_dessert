document.addEventListener("DOMContentLoaded", function () {
    // Создаём модальное окно через JS
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "none";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
    document.body.appendChild(modal);

    // Создаём картинку внутри модального окна
    let modalImg = document.createElement("img");
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "90%";
    modalImg.style.borderRadius = "10px";
    modal.appendChild(modalImg);

    // Добавляем обработчик клика на все изображения с классом "zoomable"
    document.querySelectorAll(".zoomable").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Закрытие модального окна при клике
    modal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});
