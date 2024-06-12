// script.js
function navigate(page) {
    window.location.href = page;
}

function showButton() {
    var input = document.getElementById('codeInput').value;
    var button = document.getElementById('confirmButton');
    if (input.trim() !== '') {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

