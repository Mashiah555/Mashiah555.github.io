import { t } from '../core/i18n.js';
import { Agent } from '../ai/agent.js';
import { welcomeMessages, suggestionsConfig, trainingData } from '../data/ai_data.js';

export function initChatWidget() {
    // Declare Zing without initializing it, to enable lazy loading of the agent
    let zing = null;

    // Inject HTML into the body
    const typePlaceholder = t('type_message');
    const chatHTML = `
        <div id="ai-chat-widget" class="chat-widget">
            <button id="chat-toggle-btn" class="chat-toggle-btn" title="Chat with AI">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </button>
            
            <div id="chat-window" class="chat-window hidden">
                <div class="chat-header">
                    <h4 data-i18n="chat_header">Yuval's AI Assistant</h4>
                    <button id="chat-close-btn" class="icon-btn">&times;</button>
                </div>
                
                <div id="chat-messages" class="chat-messages"></div>
                
                <!-- Empty container for dynamic suggestion chips -->
                <div id="chat-suggestions" class="chat-suggestions"></div>

                <div class="chat-input-area">
                    <input type="text" id="chat-input" placeholder="${typePlaceholder}" autocomplete="on">
                    <button id="chat-send-btn" class="btn btn-primary btn-sm" data-i18n="send_button">Send</button>
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
    const suggestionsContainer = document.getElementById('chat-suggestions');

    let hasGreeted = false;

    // Helper: Render localized suggestion chips
    const renderSuggestions = () => {
        suggestionsContainer.innerHTML = ''; // Clear any existing chips
        const currentLang = t('lang');
        const chips = suggestionsConfig[currentLang];

        chips.forEach(chipText => {
            const btn = document.createElement('button');
            btn.className = 'suggestion-chip';
            btn.textContent = chipText;

            btn.addEventListener('click', () => {
                chatInput.value = chipText;
                sendMessage();
            });

            suggestionsContainer.appendChild(btn);
        });
    };

    // Helper: Append message to UI
    function appendMessage(text, className, navigateToTarget = null) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${className}`;
        msgDiv.textContent = text;
        msgDiv.id = 'msg-' + Date.now() + '-' + Math.floor(Math.random() * 10000);

        // If a target is provided, generate a DOM navigation button inside the message
        if (navigateToTarget) {
            const navBtn = document.createElement('button');
            navBtn.className = 'btn btn-outline btn-sm action-btn';
            navBtn.textContent = t('view_on_page');
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

                    // Close the chat widget upon successful navigation
                    document.getElementById('chat-window').classList.add('hidden');
                }
            });
            msgDiv.appendChild(navBtn);
        }

        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return msgDiv.id;
    }

    const injectWelcomeMessage = () => {
        // Detect current language (Defaults to English)
        const currentLang = t('lang');
        const messages = welcomeMessages[currentLang];

        // Pick a random message from the localized array
        const randomGreeting = messages[Math.floor(Math.random() * messages.length)];
        appendMessage(randomGreeting, 'ai-message');
    };

    const toggleChat = () => {
        chatWindow.classList.toggle('hidden');

        // Lazy Load: Only instantiate and train the bot if the window is open
        if (!chatWindow.classList.contains('hidden')) {
            if (!zing) {
                // This heavy processing only happens once, exactly when the user requests it
                zing = new Agent("Zing");
                zing.learn(trainingData);
            }

            // Inject a welcome message only the first time the chat is opened
            if (!hasGreeted) {
                injectWelcomeMessage();
                hasGreeted = true;
            }
        }
    };

    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Handle Messaging Logic
    const sendMessage = () => {
        const text = chatInput.value.trim();

        // Validation check utilizing the requested positive naming convention
        const isValid = text.length > 0;
        if (!isValid) return;

        // Safety check to ensure Zing is ready
        if (!zing) return;

        // Add User Message
        appendMessage(text, 'user-message');
        chatInput.value = '';

        // Show Loading state
        const loadingId = appendMessage('...', 'ai-message loading');

        // Local Engine Response (Simulating a slight delay for UI feel)
        setTimeout(() => {
            document.getElementById(loadingId).remove();

            // Call the Zing-agent engine
            const responseData = zing.respond(text, t('lang'));
            appendMessage(responseData.text, 'ai-message', responseData.navigateTo);
        }, 400);
    };

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Render suggestions when the widget initializes
    renderSuggestions();
}