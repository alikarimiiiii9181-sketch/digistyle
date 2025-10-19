window.addEventListener("load", () => {
    let actions = document.querySelectorAll(".actions");
    actions.forEach(action => {
        action.addEventListener("click", e => {
            e.preventDefault();
            let bind = action.dataset.bind;
            console.log(bind);
            let khas = document.querySelectorAll(".khas");
            khas.forEach(item => {
                item.classList.remove("active");
            })
            let theDiv = document.getElementById(bind);
            console.log(theDiv);
            theDiv.classList.add("active");
        })
    })
});
window.addEventListener("load", () => {
    const paragraph2 = document.getElementById('paragraph2');
    const showMore = document.getElementById('show-more');
    const showLess = document.getElementById('show-less');

    showMore.addEventListener('click', () => {
        paragraph2.style.display = 'block'; // پاراگراف دوم نمایش داده شود
        showMore.style.display = 'none';
        showLess.style.display = 'inline';
    });

    showLess.addEventListener('click', () => {
        paragraph2.style.display = 'none'; // دوباره مخفی شود
        showMore.style.display = 'inline';
        showLess.style.display = 'none';
    });
});
window.addEventListener("load", () => {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
window.addEventListener("load", () => {
    var swiper = new Swiper(".myaSwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
window.addEventListener("load", () => {
    let buy = document.querySelector(".buy");
    let ali = document.querySelector(".ali");
    let close = document.querySelector(".close");
    buy.addEventListener("click", (e) => {
        e.preventDefault();
        ali.classList.add("active");
    })
    close.addEventListener("click", (e) => {
        e.preventDefault();
        ali.classList.remove("active")
    })
});