const inputEl = document.querySelector('#validation-input');
const dataLength = parseInt(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', handleBlur)

function handleBlur() {
    const inputValue = inputEl.value.trim();
    const isValid = inputValue.length === dataLength;

    if (isValid) {
        inputEl.classList.remove("invalid")
        inputEl.classList.add("valid")
    } else {
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid")
    };
}