import { t } from '../core/i18n.js';
import { Agent } from '../ai/agent.js';
import { trainingData } from '../data/ai_data.js';

export function initChatWidget() {
    // Initialize Zing and feed it training data
    const zing = new Agent("Zing");
    zing.learn(trainingData);

    // Inject HTML into the body
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
                        Hi! I'm Yuval's AI assistant. Ask me anything about him and his work!
                    </div>
                </div>
                
                <!-- Added Suggestions Container -->
                <div id="chat-suggestions" class="chat-suggestions">
                    <button class="suggestion-chip">What are your skills?</button>
                    <button class="suggestion-chip">Tell me about Lobby Stream</button>
                    <button class="suggestion-chip">What is your education?</button>
                </div>

                <div class="chat-input-area">
                    <input type="text" id="chat-input" placeholder="Type a message..." autocomplete="off">
                    <button id="chat-send-btn" class="btn btn-primary btn-sm">Send</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // Attach Event Listeners
    const toggleBtn = document.getElementById('chat-toggle-btn');
    const closeBtn = document.getElementById('chat-close-btn');
    const chatWindow = document.getElementById('chat-window');
    const sendBtn = document.getElementById('chat-send-btn');
    const chatInput = document.getElementById('chat-input');
    const messagesContainer = document.getElementById('chat-messages');
    const suggestionChips = document.querySelectorAll('.suggestion-chip');

    const toggleChat = () => chatWindow.classList.toggle('hidden');

    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Handle suggestion chip clicks
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            chatInput.value = chip.textContent;
            sendMessage();
        });
    });

    // Handle Messaging Logic
    const sendMessage = () => {
        const text = chatInput.value.trim();

        // Validation check utilizing the requested positive naming convention
        const isValid = text.length > 0;
        if (!isValid) return;

        // Add User Message
        appendMessage(text, 'user-message');
        chatInput.value = '';

        // Show Loading state
        const loadingId = appendMessage('...', 'ai-message loading');

        // Local Engine Response (Simulating a slight delay for UI feel)
        setTimeout(() => {
            document.getElementById(loadingId).remove();

            // Call the Zing-agent engine
            const responseData = zing.respond(text);
            appendMessage(responseData.text, 'ai-message', responseData.navigateTo);
        }, 400);
    };

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Helper: Append message to UI
    function appendMessage(text, className, navigateToTarget = null) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${className}`;
        msgDiv.textContent = text;
        msgDiv.id = 'msg-' + Date.now();

        // If a target is provided, generate a DOM navigation button inside the message
        if (navigateToTarget) {
            const navBtn = document.createElement('button');
            navBtn.className = 'btn btn-outline btn-sm action-btn';
            navBtn.textContent = 'View on Page';
            navBtn.style.marginTop = '8px';
            navBtn.style.display = 'block';

            navBtn.addEventListener('click', () => {
                const targetElement = document.getElementById(navigateToTarget);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    window.scrollTo({
                        top: elementPosition + window.scrollY - headerOffset,
                        behavior: "smooth"
                    });

                    // If navigating specifically to skills or education, switch the tab via global index.js logic
                    if (navigateToTarget === "resume-section") {
                        document.querySelector('button[data-target="skills"]')?.click();
                    } else if (navigateToTarget === "education") {
                        document.querySelector('button[data-target="education"]')?.click();
                    }
                }
            });
            msgDiv.appendChild(navBtn);
        }

        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return msgDiv.id;
    }
}