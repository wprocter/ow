document.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight) {
        header.classList.add("minimized");
    } else {
        header.classList.remove("minimized");
    }
});
