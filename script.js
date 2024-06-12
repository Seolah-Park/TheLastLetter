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

function generateCode() {
    var uppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    var lowercase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    var digits = Math.floor(Math.random() * 900 + 100); // 100 to 999
    return uppercase + lowercase + digits;
}

function confirmCode() {
    var input = document.getElementById('codeInput').value;
    var generatedCode = localStorage.getItem('generatedCode');
    var confirmationMessage = document.getElementById('confirmationMessage');
    var lastMessage = localStorage.getItem('lastMessage');
    
    if (input === generatedCode) {
        confirmationMessage.textContent = '코드가 확인 되었습니다. 마지막 메시지: ' + lastMessage;
    } else {
        confirmationMessage.textContent = '코드가 올바르지 않습니다. 다시 시도해 주세요.';
    }
}
