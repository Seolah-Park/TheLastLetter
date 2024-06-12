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
    var codeData = JSON.parse(localStorage.getItem('codeData') || '[]');
    var matchingCode = codeData.find(item => item.message === messageInput);

    if (matchingCode) {
        var codeInput = prompt(`올바른 코드의 첫 두 글자를 입력하세요. (예: ${matchingCode.code.substring(0, 2)})`);
        if (codeInput === matchingCode.code.substring(0, 2)) {
            document.getElementById('confirmationMessage').textContent = '코드가 확인 되었습니다.';
        } else {
            document.getElementById('confirmationMessage').textContent = '코드가 올바르지 않습니다. 다시 시도해 주세요.';
        }
    } else {
        document.getElementById('confirmationMessage').textContent = '이메일 주소를 다시 확인해주세요.';
    }
}

function saveLastMessage(message) {
    localStorage.setItem('lastMessage', message);
}





$(document).ready(function(){
  var stars=800;
  var $stars=$(".stars");
  var r=800;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*300);
    cur.css({ 
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
       
    })
  })
})