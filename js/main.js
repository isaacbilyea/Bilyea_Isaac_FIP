(() => {
    
    const productInfo = [
        "This things got so much zest, it's like your taste buds won a vacation but forgot to tell you",
        "Orange you glad to meet this soda? It's got so much flavour, some would even call it - crush worthy",
        "Every time you take a sip you'll swear your drink just winked at you, like it's in on some juicy secret",
        "This ones like a rebellious teenager at dinner, bursting with flavor and determined to steal the spotlight"
    ];

    const infoIcons = document.querySelectorAll('.info-icon');

    infoIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            const card = icon.closest('.card-backgrounds-index');
            const image = card.querySelector('img');
            const info = card.querySelector('.product-info');

            if (info.style.display == 'block') {
                info.style.display = 'none';
                image.style.opacity = '1'; 
            } else {
                info.style.display = 'block';
                info.textContent = productInfo[index];
                image.style.opacity = '0.05';
            }

            const iconWrapper = icon.closest('.info-wrapper'); 
            if (iconWrapper) {
                iconWrapper.style.animation = 'none';
            }
            
        });
    });


})();
