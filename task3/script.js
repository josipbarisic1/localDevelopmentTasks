class SwiperCarousel extends HTMLElement {
    constructor() {
        super();
        this.swiper = null;
    }

    connectedCallback() {
        this.render();
        this.initializeSwiper();
    }

    render() {
        this.innerHTML = `
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        `;
    }

    initializeSwiper() {
        if (!this.swiper) {
            this.swiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                on: {
                    slideChange: () => {
                        if (this.swiper) {
                            console.log(`Active slide index: ${this.swiper.realIndex}`);
                        }
                    },
                },
            });
        }
    }

    destroySwiper() {
        if (this.swiper) {
            this.swiper.destroy(true, true);
            this.swiper = null;
        }
    }
}

customElements.define('swiper-carousel', SwiperCarousel);

const toggleButton = document.getElementById('toggle-swiper');
const swiperElement = document.querySelector('swiper-carousel');

toggleButton.addEventListener('click', () => {
    if (swiperElement.swiper) {
        swiperElement.destroySwiper();
    } else {
        swiperElement.initializeSwiper();
    }
});
