import { siteConfig } from '../data/config.js';
import { t } from '../core/i18n.js';

export function initChatWidget() {
    // 1. Inject HTML into the body
    const chatHTML = `
        <div id="ai-chat-widget" class="chat-widget">
            <button id="chat-toggle-btn" class="chat-toggle-btn" title="Chat with AI">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </button>
            
            <div id="chat-window" class="chat-window hidden">
                <div class="chat-header">
                    <h4>Yuval's AI Assistant</h4>
                    <button id="chat-close-btn" class="icon-btn">&times;</button>
                </div>
                <div id="chat-messages" class="chat-messages">
                    <div class="message ai-message">
                        Hi! I'm Yuval's AI assistant. Ask me anything about his skills, experience, or projects!
                    </div>
                </div>
                <div class="chat-input-area">
                    <input type="text" id="chat-input" placeholder="Type a message..." autocomplete="off">
                    <button id="chat-send-btn" class="btn btn-primary btn-sm">Send</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // 2. Attach Event Listeners
    const toggleBtn = document.getElementById('chat-toggle-btn');
    const closeBtn = document.getElementById('chat-close-btn');
    const chatWindow = document.getElementById('chat-window');
    const sendBtn = document.getElementById('chat-send-btn');
    const chatInput = document.getElementById('chat-input');
    const messagesContainer = document.getElementById('chat-messages');

    const toggleChat = () => chatWindow.classList.toggle('hidden');

    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // 3. Handle Messaging Logic
    const sendMessage = async () => {
        const text = chatInput.value.trim();
        if (!text) return;

        // Add User Message
        appendMessage(text, 'user-message');
        chatInput.value = '';

        // Show Loading state
        const loadingId = appendMessage('...', 'ai-message loading');

        try {
            // TODO: Replace with your Vercel Serverless Function URL
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });
            const data = await response.json();

            // Remove loading and append real response
            document.getElementById(loadingId).remove();
            appendMessage(data.reply, 'ai-message');

        } catch (error) {
            document.getElementById(loadingId).remove();
            appendMessage("Sorry, I'm having trouble connecting right now.", 'ai-message error');
        }
    };

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Helper: Append message to UI
    function appendMessage(text, className) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${className}`;
        msgDiv.textContent = text;
        msgDiv.id = 'msg-' + Date.now();
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return msgDiv.id;
    }
}