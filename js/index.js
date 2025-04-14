const responses = {
    'hola': '¡Hola!, ¿cómo estás?',
    'adiós': '¡Adiós! que tengas un bonito día',
    'adios': '¡Adiós! que tengas un bonito día',
    'cómo estás': 'Estoy bien, gracias por preguntar',
    'como estas': 'Estoy bien, gracias por preguntar',
    'qué puedes hacer': 'Puedo responder a tus preguntas básicas'
};

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = userInput.value.trim().toLowerCase();
    if (message === '') return;

    addMessage(message, 'user');
    userInput.value = '';

    const botReply = getBotResponse(message);
    setTimeout(() => {
        addMessage(botReply, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    return responses[input] || 'Lo siento, no entiendo esa pregunta';
}