class ImageTextWrapper extends HTMLElement {
    constructor() {
        super();
        
        const section = this.querySelector('.image-text');
        const textSection = section.querySelector('.image-text__text');

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Toggle Text';
        textSection.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', () => {
            textSection.classList.toggle('open');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });
        }, { threshold: 0.5 });

        observer.observe(section);
    }
}

customElements.define('image-text-wrapper', ImageTextWrapper);
