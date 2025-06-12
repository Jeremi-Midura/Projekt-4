document.addEventListener("keydown", (event) => {
    const focusableElements = document.querySelectorAll(".cta");
    const focusableArray = Array.from(focusableElements);
    const currentIndex = focusableArray.indexOf(document.activeElement);

    if (focusableArray.length > 0 && document.activeElement && focusableArray.includes(document.activeElement)) {
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            const nextIndex = (currentIndex + 1) % focusableArray.length;
            focusableArray[nextIndex].focus();
            event.preventDefault();
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            const prevIndex = (currentIndex - 1 + focusableArray.length) % focusableArray.length;
            focusableArray[prevIndex].focus();
            event.preventDefault();
        }
    }
});