function encrypt(text, key) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let charCode = char.charCodeAt(0);
            let base = (charCode >= 65 && charCode <= 90) ? 65 : 97;
            return String.fromCharCode((charCode - base + key) % 26 + base);
        }
        return char;
    }).join('');
}

function decrypt(text, key) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let charCode = char.charCodeAt(0);
            let base = (charCode >= 65 && charCode <= 90) ? 65 : 97;
            return String.fromCharCode((charCode - base - key + 26) % 26 + base);
        }
        return char;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const encryptButtons = document.querySelectorAll('.encryption-btn');
    const decryptButtons = document.querySelectorAll('.decryption-btn');

   
     encryptButtons.forEach(button => {
        button.addEventListener('click', () => {
            const text = button.parentElement.querySelector('.input-1').value;
            const key = parseInt(button.parentElement.querySelector('.input-2').value);
            const result = encrypt(text, key);
            button.parentElement.nextElementSibling.querySelector('.result-text').textContent = result;
        });
    });

    decryptButtons.forEach(button => {
        button.addEventListener('click', () => {
            const text = button.parentElement.querySelector('.input-1').value;
            const key = parseInt(button.parentElement.querySelector('.input-2').value);
            const result = decrypt(text, key);
            button.parentElement.nextElementSibling.querySelector('.result-text').textContent = result;
        });
    });
});