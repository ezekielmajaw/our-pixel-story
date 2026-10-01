

function goToPage(page) {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = page;

    }, 800);

}


// ========================================
// OPENING SCREEN
// index.html
// ========================================

const startButton =
    document.getElementById("startButton");

if (startButton) {

    startButton.addEventListener("click", function () {

        goToPage("chapter1.html");

    });

}


// ========================================
// CHAPTER 1 — THE TEACHER
// chapter1.html
// ========================================

const nextButton =
    document.getElementById("nextButton");

if (nextButton) {

    const storyText =
        document.getElementById("storyText");

    let scene = 0;


    nextButton.addEventListener("click", function () {

        scene++;


        // SCENE 1

        if (scene === 1) {

            storyText.innerHTML =
                "Every morning, she walked into her classroom ready to teach, guide and inspire.";

            nextButton.innerHTML =
                "CONTINUE ▶";

        }


        // SCENE 2

        else if (scene === 2) {

            storyText.innerHTML =
                "She wasn't just teaching lessons... she was helping shape the futures of the students sitting in front of her. ❤️";

        }


        // SCENE 3

        else if (scene === 3) {

            storyText.innerHTML =
                "Day after day, she showed up. She explained. She encouraged. She cared.";

        }


        // SCENE 4

        else if (scene === 4) {

            storyText.innerHTML =
                "And somewhere along the way, she became really good at being a teacher. 👩‍🏫";

        }


        // SCENE 5

        else if (scene === 5) {

            storyText.innerHTML =
                "But every story has a moment when one chapter comes to an end...";

        }


        // SCENE 6

        else if (scene === 6) {

            storyText.innerHTML =
                "And for her... that moment was the beginning of something completely new. ✨";

            nextButton.innerHTML =
                "NEXT CHAPTER ▶";

        }


        // CHAPTER 2

        else if (scene === 7) {

            goToPage("chapter2.html");

        }

    });

}


// ========================================
// CHAPTER 2 — A NEW BEGINNING
// chapter2.html
// ========================================

const beginMasters =
    document.getElementById("beginMasters");

if (beginMasters) {

    beginMasters.addEventListener("click", function () {

        goToPage("chapter3.html");

    });

}


// ========================================
// CHAPTER 3 — FIRST DAY
// chapter3.html
// ========================================

const uniNext =
    document.getElementById("uniNext");

if (uniNext) {

    const uniStory =
        document.getElementById("uniStory");

    const quest1 =
        document.getElementById("quest1");

    const quest2 =
        document.getElementById("quest2");

    const quest3 =
        document.getElementById("quest3");

    const quest4 =
        document.getElementById("quest4");


    let uniScene = 0;


    uniNext.addEventListener("click", function () {

        uniScene++;


        // SCENE 1

        if (uniScene === 1) {

            uniStory.innerHTML =
                "Today isn't just another day... it's DAY 01 of a brand new adventure. 🎓";


            if (quest1) {

                quest1.classList.add("completed");

                quest1.innerHTML =
                    "☑ Attend your first class";

            }

        }


        // SCENE 2

        else if (uniScene === 2) {

            uniStory.innerHTML =
                "New classrooms. New faces. New things to learn. Everything feels a little unfamiliar... and exciting.";


            if (quest2) {

                quest2.classList.add("completed");

                quest2.innerHTML =
                    "☑ Meet new people";

            }

        }


        // SCENE 3

        else if (uniScene === 3) {

            uniStory.innerHTML =
                "And after spending so much time teaching others... she gets to sit on the other side of the classroom again.";


            if (quest3) {

                quest3.classList.add("completed");

                quest3.innerHTML =
                    "☑ Learn something new";

            }

        }


        // SCENE 4

        else if (uniScene === 4) {

            uniStory.innerHTML =
                "But wait... there's one more quest waiting for her.";

        }


        // SCENE 5

        else if (uniScene === 5) {

            uniStory.innerHTML =
                "⚠️ PRESENTATION DETECTED ⚠️";


            if (quest4) {

                quest4.classList.add("completed");

                quest4.innerHTML =
                    "☑ Give your presentation";

            }


            uniNext.innerHTML =
                "FACE THE BOSS ⚔️";

        }


        // GO TO CHAPTER 4

        else if (uniScene === 6) {

            goToPage("chapter4.html");

        }

    });

}


// ========================================
// CHAPTER 4 — PRESENTATION BOSS
// chapter4.html
// ========================================

const optionOne =
    document.getElementById("optionOne");

const bossText =
    document.getElementById("bossText");

const bossOptions =
    document.getElementById("bossOptions");

const confidenceBar =
    document.getElementById("confidenceBar");

const nervesBar =
    document.getElementById("nervesBar");

const presentationBoss =
    document.getElementById("presentationBoss");

const victory =
    document.getElementById("victory");

const continueAfterBoss =
    document.getElementById("continueAfterBoss");


if (optionOne) {

    let bossScene = 0;


    optionOne.addEventListener(
        "click",
        function () {

            bossScene++;


            // ROUND 1

            if (bossScene === 1) {

                bossText.innerHTML =
                    "PRESENTATION BOSS: Are you nervous? 😈";


                bossOptions.innerHTML = `

                    <button id="nervousButton">
                        YES 😭
                    </button>

                    <button id="braveButton">
                        NOT REALLY 😎
                    </button>

                `;


                document
                    .getElementById("nervousButton")
                    .addEventListener(
                        "click",
                        nervousAnswer
                    );


                document
                    .getElementById("braveButton")
                    .addEventListener(
                        "click",
                        braveAnswer
                    );

            }

        }
    );


    // NERVOUS ANSWER

    function nervousAnswer() {

        bossText.innerHTML =
            "That's completely okay. Being nervous just means you care. ❤️";

        confidenceBar.style.width =
            "72%";

        nervesBar.style.width =
            "40%";

        showPrepareButton();

    }


    // BRAVE ANSWER

    function braveAnswer() {

        bossText.innerHTML =
            "OHHH... confident already? The boss is getting worried. 😳";

        confidenceBar.style.width =
            "80%";

        nervesBar.style.width =
            "35%";

        showPrepareButton();

    }


    // PREPARE

    function showPrepareButton() {

        bossOptions.innerHTML = `

            <button id="prepareButton">
                I PREPARED FOR THIS 📚
            </button>

        `;


        document
            .getElementById("prepareButton")
            .addEventListener(
                "click",
                preparedAnswer
            );

    }


    // PREPARED

    function preparedAnswer() {

        bossText.innerHTML =
            "You prepared. You practiced. You know your topic. The boss is starting to panic. 😰";

        confidenceBar.style.width =
            "88%";

        nervesBar.style.width =
            "25%";


        bossOptions.innerHTML = `

            <button id="readyButton">
                I'M READY ❤️
            </button>

        `;


        document
            .getElementById("readyButton")
            .addEventListener(
                "click",
                finalAttack
            );

    }


    // READY

    function finalAttack() {

        bossText.innerHTML =
            "Then go show them what you know. You've got this! ⚔️❤️";

        confidenceBar.style.width =
            "100%";

        nervesBar.style.width =
            "5%";


        bossOptions.innerHTML = `

            <button id="attackButton">
                PRESENT! ⚔️
            </button>

        `;


        document
            .getElementById("attackButton")
            .addEventListener(
                "click",
                defeatBoss
            );

    }


    // DEFEAT BOSS

    function defeatBoss() {

        bossText.innerHTML =
            "CRITICAL HIT! 💥 The Presentation Boss has been defeated!";


        if (presentationBoss) {

            presentationBoss.style.animation =
                "none";

            presentationBoss.style.transform =
                "scale(0.2) rotate(20deg)";

            presentationBoss.style.opacity =
                "0";

        }


        bossOptions.innerHTML = "";


        if (victory) {

            setTimeout(() => {

                victory.classList.add("show");

            }, 700);

        }

    }

}


// ========================================
// AFTER PRESENTATION
// ========================================

if (continueAfterBoss) {

    continueAfterBoss.addEventListener(
        "click",
        function () {

            goToPage("chapter5.html");

        }
    );

}


// ========================================
// CHAPTER 5 — LOVE LETTER
// chapter5.html
// ========================================

const letterNext =
    document.getElementById("letterNext");


if (letterNext) {

    const letterText =
        document.getElementById("letterText");


    let letterScene = 0;


    const messages = [

        "Hey love... ❤️",

        "I know today is a big day for you.",

        "You finished one chapter of your life as a teacher... and today, you started another one as a student. 🎓",

        "And I just want you to know how proud I am of you.",

        "You might feel nervous. You might feel excited. You might even feel a little lost sometimes.",

        "And that's completely okay.",

        "You don't have to have everything figured out on the first day.",

        "Just take it one day at a time.",

        "Learn. Grow. Make mistakes. Laugh a lot. Make beautiful memories.",

        "And whenever things get difficult... remember that someone is always cheering for you. ❤️",

        "I'm proud of the teacher you became.",

        "And I'm even more excited to see the person you're going to become.",

        "So go make this new chapter yours. 🌸",

        "You've got this, love. ❤️"

    ];


    letterNext.addEventListener(
        "click",
        function () {

            letterScene++;


            // SHOW NEXT MESSAGE

            if (
                letterScene <
                messages.length
            ) {

                letterText.style.opacity =
                    "0";


                setTimeout(() => {

                    letterText.innerHTML =
                        messages[letterScene];

                    letterText.style.opacity =
                        "1";

                }, 300);

            }


            // GO TO CHAPTER 6

            else {

                letterNext.innerHTML =
                    "ONE LAST THING... 💗";


                letterNext.onclick =
                    function () {

                        goToPage(
                            "chapter6.html"
                        );

                    };

            }

        }
    );

}


// ========================================
// CHAPTER 6 — FINAL SCENE
// chapter6.html
// ========================================

const finalNext =
    document.getElementById("finalNext");


if (finalNext) {

    const finalText =
        document.getElementById("finalText");

    const ending =
        document.getElementById("ending");


    let finalScene = 0;


    const finalMessages = [

        "You know what my favorite part of your story is? ❤️",

        "It's that this isn't the end.",

        "It's just the beginning of another chapter. 🌸",

        "A chapter where you get to learn, grow, discover new things...",

        "And become even more amazing than you already are.",

        "And whatever comes next...",

        "I'll be right here cheering for you. ❤️"

    ];


    finalNext.addEventListener(
        "click",
        function () {

            finalScene++;


            // SHOW NEXT FINAL MESSAGE

            if (
                finalScene <
                finalMessages.length
            ) {

                finalText.style.opacity =
                    "0";


                setTimeout(() => {

                    finalText.innerHTML =
                        finalMessages[finalScene];

                    finalText.style.opacity =
                        "1";

                }, 300);

            }


            // SHOW FINAL ENDING

            else {

                const dialogue =
                    document.querySelector(
                        ".final-dialogue"
                    );


                if (dialogue) {

                    dialogue.style.opacity =
                        "0";

                    dialogue.style.pointerEvents =
                        "none";

                }


                setTimeout(() => {

                    if (ending) {

                        ending.classList.add(
                            "show"
                        );

                    }

                }, 800);

            }

        }
    );

}



