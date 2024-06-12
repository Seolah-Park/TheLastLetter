// script.js
function navigate(page) {
    window.location.href = page;
}

function generateCode() {
    var uppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    var lowercase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    var digits = Math.floor(Math.random() * 900 + 100); // 100 to 999
    return uppercase + lowercase + digits;
}

function checkMessage() {
    var messageInput = document.getElementById('messageInput').value;
    var codeSection = document.getElementById('codeSection');
    var confirmationMessage = document.getElementById('confirmationMessage');
    var codeData = JSON.parse(localStorage.getItem('codeData') || '[]');
    var matchingCode = codeData.find(item => item.message === messageInput);

    if (matchingCode) {
        codeSection.style.display = 'block';
        document.getElementById('codeInput').placeholder = `코드를 입력하세요 (예: ${matchingCode.code.substring(0, 2)}123)`;
        confirmationMessage.textContent = '';
    } else {
        confirmationMessage.textContent = '이메일 주소를 다시 확인해주세요.';
    }
}

function confirmCode() {
    var codeInput = document.getElementById('codeInput').value;
    var confirmationMessage = document.getElementById('confirmationMessage');
    var codeData = JSON.parse(localStorage.getItem('codeData') || '[]');
    
    var isValid = codeData.some(item => item.code === codeInput);
    
    if (isValid) {
        confirmationMessage.textContent = '코드가 확인 되었습니다.';
    } else {
        confirmationMessage.textContent = '코드가 올바르지 않습니다. 다시 시도해 주세요.';
    }
}

// This function should be called when the form on page 3 is submitted
function saveLastMessage(message) {
    localStorage.setItem('lastMessage', message);
}
