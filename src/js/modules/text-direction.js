//////////////////////////////////////////////
// Text Direction
//////////////////////////////////////////////

class TextDirection {

    constructor() {

        const rtlTarget = document.querySelector("html");

        const rtlObserver = new MutationObserver((mutations) => {

            mutations.forEach(() => {

                let single_class = "translated-rtl";

                if (rtlTarget.classList.contains(single_class)) {
                    rtlTarget.setAttribute("dir", "rtl");
                } else {
                    rtlTarget.setAttribute("dir", "ltr");
                }

            });
        });

        var rtlConfig = {
            attributes: true,
            attributeFilter: ["class"]
        }

        rtlObserver.observe(rtlTarget, rtlConfig);
    }
}

export default TextDirection;