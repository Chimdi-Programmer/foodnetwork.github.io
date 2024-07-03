const banner = document.querySelectorAll(".banner_disc");

document.addEventListener("scroll", function () {
    banner.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("banner_disc--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}


const about = document.querySelectorAll(".about-disc");

document.addEventListener("scroll", function () {
    about.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("about-disc--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}

const shows = document.querySelectorAll(".wrapall");

document.addEventListener("scroll", function () {
    shows.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("wrapall--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}

const more = document.querySelectorAll(".more-disc");

document.addEventListener("scroll", function () {
    more.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("more-disc--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}


