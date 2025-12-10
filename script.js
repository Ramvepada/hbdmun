document.addEventListener('DOMContentLoaded', function () {
    // ===== RESPONSIVE DESIGN BASED ON DEVICE =====
    function detectDeviceAndResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isTablet = /iPad|Android/i.test(navigator.userAgent) && width >= 768 && width <= 1024;
        const isPhone = isMobile && width < 768;
        const isSmallPhone = isPhone && width <= 480;
        
        console.log('📱 Device Detection:', {
            width,
            height,
            isMobile,
            isTablet,
            isPhone,
            isSmallPhone,
            userAgent: navigator.userAgent
        });
        
        // Get key elements
        const title = document.querySelector('.title');
        const happy = document.querySelector('.happy');
        const birthday = document.querySelector('.birthday');
        const hatImg = document.querySelector('.hat img');
        const hat = document.querySelector('.title .hat');
        const flagImgs = document.querySelectorAll('.flag__birthday img');
        const dateBtn = document.querySelector('.date__of__birth');
        const letterBtn = document.getElementById('btn__letter');
        const vinylCard = document.querySelector('.vinyl-card');
        const vinylWrapper = document.querySelector('.vinyl-wrapper');
        const vinylRecord = document.querySelector('.vinyl-record');
        const albumCover = document.querySelector('.album-cover-container');
        const weekndCard = document.querySelector('.weeknd__card');
        const photoCard = document.querySelector('.double-photo-card');
        const mailBox = document.querySelector('.boxMail');
        const gifs = document.querySelectorAll('.floating-gif');
        
        // Apply responsive styles based on device
        if (isSmallPhone) {
            // Small phones (< 480px)
            console.log('🤳 Applying Small Phone styles');
            if (title) title.style.fontSize = '1.5rem';
            if (happy) happy.style.fontSize = '1.5rem';
            if (birthday) birthday.style.fontSize = '1.5rem';
            if (hatImg) hatImg.style.width = '50px';
            if (hat) {
                hat.style.right = '5px';
                hat.style.top = '-200px';
            }
            flagImgs.forEach(img => img.style.width = '100px');
            if (dateBtn) {
                dateBtn.style.fontSize = '0.85rem';
                dateBtn.style.padding = '6px 10px';
            }
            if (letterBtn) {
                letterBtn.style.fontSize = '0.85rem';
                letterBtn.style.padding = '8px 15px';
            }
            if (vinylCard) {
                vinylCard.style.maxWidth = '90vw';
                vinylCard.style.padding = '12px';
            }
            if (vinylWrapper) {
                vinylWrapper.style.width = '140px';
                vinylWrapper.style.height = '140px';
            }
            if (vinylRecord) {
                vinylRecord.style.width = '130px';
                vinylRecord.style.height = '130px';
            }
            if (albumCover) {
                albumCover.style.width = '85px';
                albumCover.style.height = '85px';
            }
            if (weekndCard) {
                weekndCard.style.maxWidth = '90vw';
                weekndCard.style.minHeight = '300px';
                weekndCard.style.height = 'auto';
            }
            if (photoCard) photoCard.style.maxWidth = '90vw';
            if (mailBox) mailBox.style.width = '90vw';
            gifs.forEach(gif => {
                gif.style.width = '60px';
                gif.style.height = '60px';
            });
            
        } else if (isPhone) {
            // Regular phones (480px - 768px)
            console.log('📱 Applying Phone styles');
            if (title) title.style.fontSize = '1.8rem';
            if (happy) happy.style.fontSize = '1.8rem';
            if (birthday) birthday.style.fontSize = '1.8rem';
            if (hatImg) hatImg.style.width = '60px';
            if (hat) {
                hat.style.right = '10px';
                hat.style.top = '-250px';
            }
            flagImgs.forEach(img => img.style.width = '120px');
            if (dateBtn) {
                dateBtn.style.fontSize = '0.95rem';
                dateBtn.style.padding = '8px 12px';
            }
            if (letterBtn) {
                letterBtn.style.fontSize = '0.95rem';
                letterBtn.style.padding = '10px 20px';
            }
            if (vinylCard) {
                vinylCard.style.maxWidth = '85vw';
                vinylCard.style.padding = '18px';
            }
            if (vinylWrapper) {
                vinylWrapper.style.width = '160px';
                vinylWrapper.style.height = '160px';
            }
            if (vinylRecord) {
                vinylRecord.style.width = '150px';
                vinylRecord.style.height = '150px';
            }
            if (albumCover) {
                albumCover.style.width = '100px';
                albumCover.style.height = '100px';
            }
            if (weekndCard) {
                weekndCard.style.maxWidth = '85vw';
                weekndCard.style.minHeight = '350px';
                weekndCard.style.height = 'auto';
            }
            if (photoCard) photoCard.style.maxWidth = '85vw';
            if (mailBox) mailBox.style.width = '90vw';
            gifs.forEach(gif => {
                gif.style.width = '80px';
                gif.style.height = '80px';
            });
            
        } else if (isTablet) {
            // Tablets (768px - 1024px)
            console.log('📱 Applying Tablet styles');
            if (title) title.style.fontSize = '2.5rem';
            if (hatImg) hatImg.style.width = '70px';
            if (hat) {
                hat.style.right = '30px';
                hat.style.top = '-300px';
            }
            flagImgs.forEach(img => img.style.width = '200px');
            if (vinylCard) vinylCard.style.maxWidth = '380px';
            if (weekndCard) weekndCard.style.maxWidth = '500px';
            if (photoCard) photoCard.style.maxWidth = '500px';
            
        } else {
            // Desktop (> 1024px)
            console.log('💻 Applying Desktop styles');
            // Keep default CSS styles
        }
    }
    
    // Run on load
    detectDeviceAndResize();
    
    // Run on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            console.log('🔄 Window resized, re-detecting device...');
            detectDeviceAndResize();
        }, 250);
    });
    
    // Run on orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            console.log('🔄 Orientation changed, re-detecting device...');
            detectDeviceAndResize();
        }, 100);
    });
    
    // ===== MUSIC PLAYER =====
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
