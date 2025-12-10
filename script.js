document.addEventListener('DOMContentLoaded', function () {
    const datetxt = "13th December";
    const datatxtletter = "My love. You are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best, lots of health, and lots of joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕";
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
        setTimeout(function () {
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
    });

    // Mail box open/close
    const mailBox = document.querySelector('.mail');
    const boxmail = document.querySelector('.boxMail');
    const xClose = document.querySelector('.fa-xmark');
    if (mailBox) {
        mailBox.onclick = function () {
            mailBox.classList.toggle('active');
            if (boxmail) boxmail.classList.add('active');
        };
    }
    if (xClose && boxmail) {
        xClose.addEventListener('click', function () {
            boxmail.classList.remove('active');
        });
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

    