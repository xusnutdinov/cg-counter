import { validate } from "./heplers/validate_form.js";

class Counter {
    $counter = null;
    $counterInput = null;
    currentCount = 0;

    constructor(selector) {
        this.$selector = document.querySelector(selector);

        this.#init();
        this.#clickHandler();
    }

    #init() {
        this.#createCounter();

        this.$selector.parentNode.insertBefore(this.$counter, this.$selector);
        this.$selector.style.display = "none";
    }

    #createCounter() {
        this.$counter = document.createElement("div");
        this.$counter.classList.add("cg-counter");
        this.$counter.innerHTML = this.#getTempalate();
        this.$counterInput = this.$counter.querySelector(".cg-counter-input");
    }

    #getTempalate() {
        return `
            <div class="cg-counter">
                <button class="cg-counter-minus"><span>-</span></button>
                <input class="cg-counter-input" type="text" maxlength="1" value="0">
                <button class="cg-counter-plus"><span>+</span></button>
            </div>
        `;
    }

    #clickHandler() {
        this.$counter.querySelector(".cg-counter-plus").addEventListener("click", (event) => {
            this.plus();
            this.$counterInput.value = this.currentCount.toString();
        });

        this.$counter.querySelector(".cg-counter-minus").addEventListener("click", (event) => {
            this.minus();
            this.$counterInput.value = this.currentCount.toString();
        });

        this.$counterInput.addEventListener("input", (event) => {
            validate(event.currentTarget);
        });
    }

    plus() {
        if (this.currentCount <= 8) {
            this.currentCount += 1;
        }
    }

    minus() {
        if (this.currentCount >= 1) {
            this.currentCount -= 1;
        }
    }
}

export { Counter };
