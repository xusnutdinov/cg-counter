function validate(el) {
    el.value = el.value.replace(/[^0-9]/g, "");
}

export { validate };
