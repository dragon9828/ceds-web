/* ================= 1. 轮播图 ================= */
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const carousel = document.getElementById('carousel');

/* ===== 新增：读取 data-bg，为有图片的轮播项设置背景图 ===== */
slides.forEach(function (slide) {
    const bg = slide.dataset.bg;
    if (bg && bg.trim() !== '') {
        slide.style.backgroundImage = "url('" + bg + "')";
        // 给它加个标记类，CSS 会叠加遮罩
        slide.classList.add('has-image');
    }
});
/* ======================================================== */

let currentIndex = 0;
let slideTimer = null;
const AUTO_DELAY = 5000;

/* 下面保持你原来的代码不变 */
function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

function nextSlide() { goToSlide(currentIndex + 1); }
function prevSlide() { goToSlide(currentIndex - 1); }

function startAutoPlay() {
    stopAutoPlay();
    slideTimer = setInterval(nextSlide, AUTO_DELAY);
}

function stopAutoPlay() {
    if (slideTimer) {
        clearInterval(slideTimer);
        slideTimer = null;
    }
}

indicators.forEach((dot) => {
    dot.addEventListener('click', function () {
        const index = parseInt(this.dataset.index, 10);
        goToSlide(index);
        startAutoPlay();
    });
});

if (prevBtn) {
    prevBtn.addEventListener('click', function () {
        prevSlide();
        startAutoPlay();
    });
}
if (nextBtn) {
    nextBtn.addEventListener('click', function () {
        nextSlide();
        startAutoPlay();
    });
}

if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}

startAutoPlay();

/* ================= 2. 顶部导航下滑带动 ================= */
/* 保持你原来的代码不变 */

/* ================= 3. 公告轮播 ================= */
/* 保持你原来的代码不变 */