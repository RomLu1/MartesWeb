const textarea = document.getElementById('myTextarea');
const charCount = document.getElementById('charCount');
const maxChars = textarea.getAttribute('maxlength');

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    charCount.textContent = `${currentLength}/${maxChars} caracteres`;
});