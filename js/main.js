(() => {
    
    // VARIABLES

    const infoIcons = document.querySelectorAll('.info-icon'),
          sustainabilityIcons = document.querySelectorAll('#sustainability-banner img'),
          closeButton = document.querySelector('.close-button'),
          sendButton = document.getElementById('send-button'),
          modal = document.getElementById('modal'),
          modalHeader = document.querySelector('.modal-header'),
          modalBody = document.querySelector('.modal-text');

    const productInfo = [
        "This things got so much zest, it's like your taste buds won a vacation but forgot to tell you",
        "Orange you glad to meet this soda? It's got so much flavour, some would even call it - crush worthy",
        "Every time you take a sip you'll swear your drink just winked at you, like it's in on some juicy secret",
        "This ones like a rebellious teenager at dinner, bursting with flavor and determined to steal the spotlight"
    ];

    const sustainabilityInfo = [
        { header: "Recycled Packaging", 
        text: "Enjoy our soda in 100% recycled packaging, as we embrace sustainability with every sip. Join us in our commitment to a cleaner planet by choosing our products and supporting environmental responsibility." },

        { header: "Organic Ingredients", 
        text: "Our sodas are crafted with only the finest organic ingredients. Free from synthetic pesticides and fertilizers, these ingredients support sustainable agriculture and enhance the natural purity and flavor of our beverages." },

        { header: "Zero Waste Production", 
        text: "Pride in our zero waste production means utilizing every component and minimizing environmental impact. Enjoy our responsibly produced sodas, knowing that every sip respects both nature and your taste buds." },

        { header: "Natural Flavours", 
        text: "Taste nature with our sodas, flavored exclusively with all-natural extracts. Every sip offers a pure, delicious experience, free from artificial flavors or additives, ensuring your refreshment is naturally wholesome." }
    ];

    // FUNCTIONS

    //Product Info Stuff

    function toggleProductInfo(icon, index) {
        const card = icon.closest('.card-backgrounds-index');
        const image = card.querySelector('img');
        const info = card.querySelector('.product-info');

        if (info.style.display === 'block') {
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
    }

    //Sustainability Modal Stuff

    function displayModal(icon, index) {
        modalHeader.textContent = sustainabilityInfo[index].header;
        modalBody.textContent = sustainabilityInfo[index].text;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    //Logo Animation

    function triggerAnimation() {
        const animateLogo = document.querySelector('#moving-logo animateMotion');
        animateLogo.beginElement();
    }

    // EVENT LISTENERS

    infoIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => toggleProductInfo(icon, index));
    });

    sustainabilityIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => displayModal(icon, index));
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    if (sendButton) {
        sendButton.addEventListener('click', triggerAnimation);
    }
})();