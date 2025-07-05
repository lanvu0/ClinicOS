document.addEventListener('DOMContentLoaded', () => {
    const messageList = document.getElementById('message-list');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    const conversation = [
        { type: 'ai', text: 'Thank you. To start, when did these symptoms first begin?' },
        { type: 'ai', text: 'Okay. Does anything seem to make it better or worse (e.g., food, rest, medication)?' },
        { type: 'ai', text: 'Thank you. Is there anything else you’d like to tell the doctor?' },
        { type: 'ai', text: 'Your information has been saved. Thank you!', end: true }
    ];

    let currentStep = 0;

    function addMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${type}-message`);
        messageDiv.textContent = text;
        messageList.appendChild(messageDiv);
        // Auto-scroll to the bottom
        messageList.scrollTop = messageList.scrollHeight;
    }

    function askNextQuestion() {
        if (currentStep < conversation.length) {
            const step = conversation[currentStep];
            setTimeout(() => {
                addMessage(step.type, step.text);
                if (step.end) {
                    chatInput.disabled = true;
                    sendBtn.disabled = true;
                    // Redirect to confirmation screen after a delay
                    setTimeout(() => {
                        window.location.href = 'confirmation-screen.html';
                    }, 2000);
                } else {
                    chatInput.disabled = false;
                    sendBtn.disabled = false;
                    chatInput.focus();
                }
            }, 1000); // AI "thinks" for 1 second
        }
    }

    function handleUserInput() {
        const userInput = chatInput.value.trim();
        if (userInput) {
            addMessage('user', userInput);
            chatInput.value = '';
            chatInput.disabled = true;
            sendBtn.disabled = true;
            currentStep++;
            askNextQuestion();
        }
    }

    sendBtn.addEventListener('click', handleUserInput);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // Start the conversation
    askNextQuestion();
});