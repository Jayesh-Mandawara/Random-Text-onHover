let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function randomText(elem) {
    var text = elem.innerText;
    let inter = null;

    elem.addEventListener("mouseenter", () => {
        clearInterval(inter);
        let iteration = 0;
        inter = setInterval(() => {
            const str = text
                .split("")
                .map((char, idx) => {
                    if (idx < iteration) return char;

                    return characters.split("")[
                        Math.floor(Math.random() * characters.length)
                    ];
                })
                .join("");

            elem.innerText = str;

            iteration += 0.4;
        }, 30);

        if (idx > text.length) {
            clearInterval(inter);
        }
    });
}

randomText(h1);
randomText(h3);
