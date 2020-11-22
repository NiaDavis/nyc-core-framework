//////////////////////////////////////////////
// Form
//////////////////////////////////////////////

export default class Form {

    constructor() {

        const formList = document.querySelectorAll("form");

        formList.forEach((form) => {

            const formEntryList = form.querySelectorAll(".form-entry");

            formEntryList.forEach((formEntry) => {

                const entryInput = formEntry.querySelector("input, select, textarea");

                // Required

                if(entryInput.hasAttribute("required")) {
                    console.log("This entry is required!");
                    formEntry.classList.add("is-required");
                }

                console.log("Form Entry = ", formEntry);
                console.log("Form Entry Input = ", entryInput);

                entryInput.addEventListener("change", () => {

                    console.log("I have changed, I'm different now", entryInput.value);

                    checkIfEmpty(entryInput);
                });
            });


            // Handle Form Submission

            form.addEventListener("submit", function (event) {

                event.preventDefault();

                let formErrorsList = form.querySelectorAll(":invalid");

                formErrorsList.forEach((formError) => {
                    checkIfEmpty(formError);
                });

                let firstError = form.querySelector("[class*='alert'], [class*='invalid']");

                if (firstError.hasAttribute("data-alert")) {
                    firstError.style.display = "block";
                }

                let myScroll = firstError.offsetTop - 16;

                window.scrollTo({
                    top: myScroll,
                    behavior: "smooth"
                });

            });

            function checkIfEmpty(field) {
                if (isEmpty(field.value.trim())) {
                    setInvalid(field);
                    return true;
                } else {
                    setValid(field);
                    return false;
                }
            }

            function isEmpty(value = null) {
                if (value === "") return true;
                return false;
            }

            const invalidClasses = ["invalid", "not-cool"];

            function setInvalid(field) {
                let myEl = field.closest(".form-entry");
                myEl.classList.add(...invalidClasses);
            }

            function setValid(field) {
                let myEl = field.closest(".form-entry");
                myEl.classList.remove(...invalidClasses);
            }

        });
    
    }
}