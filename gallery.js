document.addEventListener("DOMContentLoaded", function () {
    // Создаём модальное окно
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.3s ease-in-out";
    modal.style.visibility = "hidden";
    modal.style.zIndex = "1000";
    document.body.appendChild(modal);

    // Создаём картинку внутри модального окна
    let modalImg = document.createElement("img");
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "90%";
    modalImg.style.borderRadius = "10px";
    modalImg.style.transform = "scale(0.8)";
    modalImg.style.transition = "transform 0.3s ease-in-out";
    modal.appendChild(modalImg);

    // Функция для показа модального окна
    function showModal(imgSrc) {
        modalImg.src = imgSrc;
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
        modalImg.style.transform = "scale(1)";
    }

    // Функция для скрытия модального окна
    function hideModal() {
        modal.style.opacity = "0";
        modalImg.style.transform = "scale(0.8)";
        setTimeout(() => {
            modal.style.visibility = "hidden";
        }, 300);
    }

    // Добавляем обработчик клика на все изображения с классом "zoomable"
    document.querySelectorAll(".zoomable").forEach(img => {
        img.addEventListener("click", function () {
            showModal(this.src);
        });
    });

    // Закрытие модального окна при клике
    modal.addEventListener("click", function () {
        hideModal();
    });
});
