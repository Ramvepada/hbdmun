document.addEventListener('DOMContentLoaded', function () {
    // Start background music
    const bgMusic = document.getElementById('bgMusic');
    const muteBtn = document.getElementById('muteBtn');
    let musicStarted = false;
    
    // Function to start music
    function startMusic() {
        if (!musicStarted && bgMusic) {
            console.log('🎵 Attempting to start music...');
            console.log('Audio src:', bgMusic.src || bgMusic.querySelector('source')?.src);
            
            bgMusic.volume = 0.5;
            bgMusic.muted = false;
            
            const playPromise = bgMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('✅ Music started playing successfully');
                    musicStarted = true;
                }).catch(function(error) {
                    console.log('⚠️ Autoplay prevented:', error.name, error.message);
                    console.log('👆 Click anywhere on the page to start music');
                });
            }
        }
    }
    
    // Try to play immediately
    if (bgMusic) {
        // Wait a bit for the page to be fully interactive
        setTimeout(startMusic, 100);
        
        // Fallback: start music on any user interaction
        const startOnInteraction = function(e) {
            console.log('User interaction detected:', e.type);
            startMusic();
            // Remove listeners after first successful play
            if (musicStarted) {
                document.removeEventListener('click', startOnInteraction);
                document.removeEventListener('touchstart', startOnInteraction);
                document.removeEventListener('keydown', startOnInteraction);
                document.removeEventListener('scroll', startOnInteraction);
            }
        };
        
        document.addEventListener('click', startOnInteraction);
        document.addEventListener('touchstart', startOnInteraction);
        document.addEventListener('keydown', startOnInteraction);
        document.addEventListener('scroll', startOnInteraction);
    } else {
        console.error('❌ Audio element #bgMusic not found!');
    }

    // Mute/Unmute button functionality
    if (muteBtn) {
        console.log('✅ Mute button found:', muteBtn);
        console.log('✅ Audio element:', bgMusic);
        
        muteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const audio = document.getElementById('bgMusic');
            if (!audio) {
                console.error('❌ Audio element not found!');
                return;
            }
            
            console.log('🔘 Mute button clicked! Current muted state:', audio.muted);
            
            if (audio.muted) {
                audio.muted = false;
                muteBtn.querySelector('i').className = 'fa-solid fa-volume-high';
                muteBtn.classList.remove('muted');
                console.log('🔊 Audio UNMUTED');
            } else {
                audio.muted = true;
                muteBtn.querySelector('i').className = 'fa-solid fa-volume-xmark';
                muteBtn.classList.add('muted');
                console.log('🔇 Audio MUTED');
            }
        });
    } else {
        console.error('❌ Mute button NOT found!');
    }

    const datetxt = "13th December";
    const datatxtletter = "My love. You are a very special girl. At first, you were a gentle breeze—passing softly, barely felt. But day by day, you became the flame that warmed my heart. You carry time with such grace, as if each moment bends to your presence.I am grateful for the simple chance of crossing paths with you. . Happy birthday to you.💕";
    const titleLetter = "To you";
    const charArrDate = datetxt.split('');
    const charArrDateLetter = datatxtletter.split('');
    const charArrTitle = titleLetter.split('');
    let currentIndex = 0;
    let currentIndexLetter = 0;
    let currentIndexTitle = 0;
    const date__of__birth = document.querySelector(".date__of__birth span");
    const text__letter = document.querySelector(".text__letter p");

    let timeDatetxt;
    if (date__of__birth) {
        console.log('Date element found, will start typing in 12 seconds...');
        setTimeout(function () {
            console.log('Starting date animation now!');
            timeDatetxt = setInterval(function () {
                if (currentIndex < charArrDate.length) {
                    date__of__birth.textContent += charArrDate[currentIndex];
                    currentIndex++;
                }
                else {
                    const i = document.createElement("i");
                    i.className = "fa-solid fa-star";
                    document.querySelector(".date__of__birth").prepend(i);
                    document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
                    clearInterval(timeDatetxt);
                }
            }, 100);
        }, 12000);
    } else {
        console.log('ERROR: Date element not found!');
    }

    let intervalContent;
    let intervalTitle;

    // When user clicks the letter button
    $("#btn__letter").on("click", function () {
        const boxLetter = document.querySelector('.box__letter');
        const letterBorder = document.querySelector('.letter__border');

        if (boxLetter) $(boxLetter).slideDown();
        if (letterBorder) setTimeout(() => $(letterBorder).slideDown(), 1000);

        setTimeout(function () {
            intervalTitle = setInterval(function () {
                const titleEl = document.querySelector(".title__letter");
                if (currentIndexTitle < charArrTitle.length) {
                    if (titleEl) {
                        titleEl.textContent += charArrTitle[currentIndexTitle];
                        const i = document.createElement("i");
                        i.className = "fa-solid fa-heart";
                        titleEl.appendChild(i);
                    }
                    currentIndexTitle++;
                }
                else {
                    clearInterval(intervalTitle);
                }
            }, 100);
        }, 2000);

        setTimeout(function () {
            const heartLetter = document.querySelector("#heart__letter");
            if (heartLetter) heartLetter.classList.add("animationOp");
            const loveImg = document.querySelector(".love__img");
            if (loveImg) loveImg.classList.add("animationOp");
            const mewmew = document.querySelector("#mewmew");
            if (mewmew) mewmew.classList.add("animationOp");
        }, 2800);

        setTimeout(function () {
            document.querySelectorAll(".heart").forEach((item) => {
                item.classList.add("animation");
            });
        }, 3500);

        setTimeout(function () {
            if (!text__letter) return;
            intervalContent = setInterval(function () {
                if (currentIndexLetter < charArrDateLetter.length) {
                    text__letter.textContent += charArrDateLetter[currentIndexLetter];
                    currentIndexLetter++;
                }
                else {
                    clearInterval(intervalContent);
                }
            }, 50);
        }, 6000);
    });

    // Close handlers (close letter modal and reset states)
    $(".close").on("click", function () {
        if (intervalContent) clearInterval(intervalContent);
        const titleEl = document.querySelector(".title__letter");
        if (titleEl) titleEl.textContent = "";
        if (text__letter) text__letter.textContent = "";
        currentIndexLetter = 0;
        currentIndexTitle = 0;
        const heartLetter = document.querySelector("#heart__letter");
        if (heartLetter) heartLetter.classList.remove("animationOp");
        const loveImg = document.querySelector(".love__img");
        if (loveImg) loveImg.classList.remove("animationOp");
        const mewmew = document.querySelector("#mewmew");
        if (mewmew) mewmew.classList.remove("animationOp");
        document.querySelectorAll(".heart").forEach((item) => {
            item.classList.remove("animation");
        });
        const boxLetter = document.querySelector('.box__letter');
        if (boxLetter) $(boxLetter).slideUp();
        const letterBorder = document.querySelector('.letter__border');
        if (letterBorder) $(letterBorder).slideUp();

        // Show double-photo card as popup after letter closes
        setTimeout(function() {
            const flipCard = document.getElementById('flipCard');
            if (flipCard) {
                flipCard.classList.add('visible');
                flipCard.classList.add('popup-mode');
                
                // Generate confetti
                const confettiContainer = document.getElementById('confettiContainer');
                if (confettiContainer) {
                    for (let i = 0; i < 50; i++) {
                        const confetti = document.createElement('div');
                        confetti.className = 'confetti';
                        confetti.style.left = Math.random() * 100 + '%';
                        confetti.style.animationDelay = Math.random() * 0.5 + 's';
                        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                        confettiContainer.appendChild(confetti);
                    }
                    
                    // Clear confetti after animation
                    setTimeout(() => {
                        confettiContainer.innerHTML = '';
                    }, 4000);
                }
            }
        }, 500);
        
    });



    // Mail box open/close
    const mailBox = document.querySelector('.mail');
    const boxmail = document.querySelector('.boxMail');
    const xClose = document.querySelector('.fa-xmark');
    const floatingGifs = document.querySelectorAll('.floating-gif');
    
    if (mailBox) {
        mailBox.onclick = function () {
            mailBox.classList.toggle('active');
            if (boxmail) boxmail.classList.add('active');
            // Show GIFs when mailbox opens
            floatingGifs.forEach(gif => gif.classList.add('visible'));
        };
    }
    if (xClose && boxmail) {
        xClose.addEventListener('click', function () {
            boxmail.classList.remove('active');
            // Hide GIFs when mailbox closes
            floatingGifs.forEach(gif => gif.classList.remove('visible'));
            
            // Show double-photo card after closing mail
            setTimeout(function() {
                const flipCard = document.getElementById('flipCard');
                if (flipCard) {
                    flipCard.classList.add('visible');
                }
            }, 400);
        });
    }

    // Two-photo flip card toggler
    const flipCard = document.getElementById('flipCard');
    if (flipCard) {
        const photos = flipCard.querySelectorAll('.photo');
        const captions = flipCard.querySelectorAll('.caption');
        let activeIndex = 0;
        flipCard.addEventListener('click', function (e) {
            if (e.target.closest('.card-close')) return;
            if (!photos.length) return;
            photos[activeIndex].classList.remove('active');
            if (captions.length) captions[activeIndex].classList.remove('active');
            activeIndex = (activeIndex + 1) % photos.length;
            photos[activeIndex].classList.add('active');
            if (captions.length) captions[activeIndex].classList.add('active');
        });
        
        // Close popup card
        const cardClose = flipCard.querySelector('.card-close');
        if (cardClose) {
            cardClose.addEventListener('click', function(e) {
                e.stopPropagation();
                flipCard.classList.remove('visible');
                flipCard.classList.remove('popup-mode');
            });
        }
    }

    // CAT ANIMATION - Each cat animates separately with unique behavior
    console.log('Starting cat animation...');
    const cats = document.querySelectorAll('.floating-cat');
    console.log('Found cats:', cats.length);
    
    // Weeknd card appears around 500px from top, constrain cats above it
    const maxCatY = 450;
    
    if (cats.length > 0) {
        // Cat 1 - Horizontal bouncing
        (function(cat) {
            let x = 0;
            let y = 80;
            let speed = 3;
            function animate() {
                x += speed;
                if (x > window.innerWidth) x = -50;
                const newY = y + Math.sin(x / 50) * 30;
                cat.style.left = x + 'px';
                cat.style.top = Math.min(newY, maxCatY) + 'px';
                cat.style.transform = 'scaleX(1)';
                requestAnimationFrame(animate);
            }
            animate();
        })(cats[0]);
        
        // Cat 2 - Diagonal movement
        (function(cat) {
            let x = window.innerWidth;
            let y = 150;
            let speedX = -2.5;
            let speedY = 1;
            function animate() {
                x += speedX;
                y += speedY;
                if (x < -50) x = window.innerWidth;
                // Constrain to stay above Weeknd card
                if (y > maxCatY) {
                    y = maxCatY;
                    speedY = -speedY;
                } else if (y < 50) {
                    y = 50;
                    speedY = -speedY;
                }
                cat.style.left = x + 'px';
                cat.style.top = y + 'px';
                cat.style.transform = 'scaleX(-1)';
                requestAnimationFrame(animate);
            }
            animate();
        })(cats[1]);
        
        // Cat 3 - Circular motion
        (function(cat) {
            let angle = 0;
            let centerX = window.innerWidth / 2;
            let centerY = 200;
            let radius = 150;
            function animate() {
                angle += 0.02;
                let x = centerX + Math.cos(angle) * radius;
                let y = centerY + Math.sin(angle) * radius;
                // Constrain Y to stay above Weeknd card
                y = Math.max(50, Math.min(y, maxCatY));
                cat.style.left = x + 'px';
                cat.style.top = y + 'px';
                cat.style.transform = angle % (Math.PI * 2) > Math.PI ? 'scaleX(-1)' : 'scaleX(1)';
                requestAnimationFrame(animate);
            }
            animate();
        })(cats[2]);
        
        // Cat 4 - Zigzag pattern
        (function(cat) {
            let x = 0;
            let y = 300;
            let speed = 2;
            function animate() {
                x += speed;
                const newY = y + Math.sin(x / 30) * 3;
                if (x > window.innerWidth) x = -50;
                cat.style.left = x + 'px';
                cat.style.top = Math.min(newY, maxCatY) + 'px';
                cat.style.transform = 'scaleX(1)';
                requestAnimationFrame(animate);
            }
            animate();
        })(cats[3]);
        
        // Cat 5 - Random walk
        (function(cat) {
            let x = window.innerWidth / 2;
            let y = window.innerHeight / 2;
            let speedX = (Math.random() - 0.5) * 4;
            let speedY = (Math.random() - 0.5) * 4;
            let changeCounter = 0;
            function animate() {
                x += speedX;
                y += speedY;
                changeCounter++;
                
                // Change direction randomly
                if (changeCounter > 100) {
                    speedX += (Math.random() - 0.5) * 3;
                    speedY += (Math.random() - 0.5) * 3;
                    speedX = Math.max(-3, Math.min(3, speedX));
                    speedY = Math.max(-3, Math.min(3, speedY));
                    changeCounter = 0;
                }
                
                // Bounce off walls and constrain to stay above Weeknd card
                if (x > window.innerWidth - 50 || x < 50) speedX = -speedX;
                if (y > maxCatY - 50 || y < 50) speedY = -speedY;
                
                // Ensure Y stays in bounds
                y = Math.max(50, Math.min(y, maxCatY));
                
                cat.style.left = x + 'px';
                cat.style.top = y + 'px';
                cat.style.transform = speedX > 0 ? 'scaleX(1)' : 'scaleX(-1)';
                requestAnimationFrame(animate);
            }
            animate();
        })(cats[4]);
        
        console.log('All 5 cats initialized with separate animations!');
    } else {
        console.log('No cats found in DOM!');
    }

});
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    //
};
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
    };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
};
