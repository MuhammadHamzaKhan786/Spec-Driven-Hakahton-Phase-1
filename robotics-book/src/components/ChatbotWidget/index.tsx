import React, { useState, useEffect, useRef } from 'react';
import { sendRagQuery } from '@site/src/api/rag';
import styles from './styles.module.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSelectionButton, setShowSelectionButton] = useState(false);
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const messagesEndRef = useRef(null);

  // Load chat history from localStorage on component mount (only in browser)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedMessages = localStorage.getItem('chatbot_history');
      if (savedMessages) {
        try {
          const parsedMessages = JSON.parse(savedMessages);
          setMessages(parsedMessages);
        } catch (error) {
          console.error('Error loading chat history:', error);
          setMessages([]);
        }
      }
    }
  }, []);

  // Save chat history to localStorage whenever messages change (only in browser)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('chatbot_history', JSON.stringify(messages));
      } catch (error) {
        console.error('Error saving chat history:', error);
      }
    }
  }, [messages]);

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle text selection on the page (only in browser)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return; // Skip if not in browser
    }

    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim() !== '') {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Show the selection button near the selected text
        setSelectionPosition({
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY - 40 // Position above the selection
        });
        setSelectedText(selection.toString().trim());
        setShowSelectionButton(true);
      } else {
        setShowSelectionButton(false);
      }
    };

    const handleClick = () => {
      // Hide the button when clicking elsewhere
      setTimeout(() => {
        if (window.getSelection()?.toString().trim() === '') {
          setShowSelectionButton(false);
        }
      }, 100);
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call the RAG API
      const response = await sendRagQuery(inputValue.trim());

      // Handle the response based on its structure
      let botResponse;
      if (typeof response === 'string') {
        // If response is just a string (backward compatibility)
        botResponse = {
          success: true,
          answer: response,
          timestamp: new Date().toISOString(),
          source: 'direct'
        };
      } else {
        // If response is an object (new format)
        botResponse = response;
      }

      // Check if the API call was successful
      if (botResponse.success === false) {
        // Handle API errors (like connection errors)
        const errorMessage = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: botResponse.answer || "Connection error. Please ensure the backend server is running on http://localhost:8000",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages(prev => [...prev, errorMessage]);
      } else {
        // Handle successful responses
        const botMessage = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: botResponse.answer || "I'm sorry, I couldn't process your request.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        // Add bot response to chat
        setMessages(prev => [...prev, botMessage]);
      }
    } catch (error) {
      console.error('Error getting response:', error);

      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: "I'm sorry, I encountered an error. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearHistory = () => {
    if (typeof window !== 'undefined' && window.confirm && window.localStorage) {
      if (window.confirm('Are you sure you want to clear all chat history?')) {
        setMessages([]);
        localStorage.removeItem('chatbot_history');
      }
    }
  };

  const handleAskAboutSelection = () => {
    if (selectedText) {
      const question = `Explain: ${selectedText}`;
      setInputValue(question);
      setShowSelectionButton(false);

      // Auto-send if desired, or let user review and send
      // Uncomment the next line if you want to auto-send
      // handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        className={styles.chatbotButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chatbot"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9V11H4C2.9 11 2 11.9 2 13V15C2 16.1 2.9 17 4 17H5V18C5 19.66 6.34 21 8 21H16C17.66 21 19 19.66 19 18V17H20C21.1 17 22 16.1 22 15V13C22 11.9 21.1 11 20 11H19V9C19 5.13 15.87 2 12 2ZM12 4C14.76 4 17 6.24 17 9V11H7V9C7 6.24 9.24 4 12 4Z" fill="url(#gradient)" />
          <circle cx="8" cy="9" r="1" fill="white" />
          <circle cx="16" cy="9" r="1" fill="white" />
          <path d="M10 15H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="var(--accent-cyan)" />
              <stop offset="1" stopColor="var(--accent-purple)" />
            </linearGradient>
          </defs>
        </svg>
      </button>

      {/* Text selection button */}
      {showSelectionButton && (
        <button
          className={styles.selectionButton}
          style={{
            position: 'fixed',
            left: selectionPosition.x,
            top: selectionPosition.y,
            zIndex: 10000,
            backgroundColor: 'var(--accent-cyan)',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 12px',
            fontSize: '14px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
          onClick={handleAskAboutSelection}
          title="Ask about selection"
        >
          💬 Ask
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className={styles.chatbotPanel}>
          <div className={styles.chatbotHeader}>
            <div className={styles.headerLeft}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px'}}>
                <path d="M12 2C8.13 2 5 5.13 5 9V11H4C2.9 11 2 11.9 2 13V15C2 16.1 2.9 17 4 17H5V18C5 19.66 6.34 21 8 21H16C17.66 21 19 19.66 19 18V17H20C21.1 17 22 16.1 22 15V13C22 11.9 21.1 11 20 11H19V9C19 5.13 15.87 2 12 2ZM12 4C14.76 4 17 6.24 17 9V11H7V9C7 6.24 9.24 4 12 4Z" fill="url(#header-gradient)" />
                <circle cx="8" cy="9" r="1" fill="white" />
                <circle cx="16" cy="9" r="1" fill="white" />
                <path d="M10 15H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="header-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="var(--accent-cyan)" />
                    <stop offset="1" stopColor="var(--accent-purple)" />
                  </linearGradient>
                </defs>
              </svg>
              <h3>Robotics Assistant</h3>
            </div>
            <div className={styles.headerRight}>
              <button
                className={styles.clearButton}
                onClick={clearHistory}
                title="Clear chat history"
              >
                🗑️
              </button>
              <button
                className={styles.minimizeButton}
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
              >
                −
              </button>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                title="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          <div className={styles.chatbotMessages}>
            {messages.length === 0 ? (
              <div className={styles.welcomeMessage}>
                <p>Hello! I'm your Robotics Assistant.</p>
                <p>Ask me anything about humanoid robotics, AI, sensors, control systems, or Physical AI.</p>

                {/* Suggested questions */}
                <div className={styles.suggestedQuestions}>
                  <button
                    className={styles.questionChip}
                    onClick={() => setInputValue('What is inverse kinematics?')}
                  >
                    What is inverse kinematics?
                  </button>
                  <button
                    className={styles.questionChip}
                    onClick={() => setInputValue('Explain PID control')}
                  >
                    Explain PID control
                  </button>
                  <button
                    className={styles.questionChip}
                    onClick={() => setInputValue('Sensor fusion techniques')}
                  >
                    Sensor fusion techniques
                  </button>
                  <button
                    className={styles.questionChip}
                    onClick={() => setInputValue('Humanoid robot applications')}
                  >
                    Humanoid robot applications
                  </button>
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.message} ${styles[message.role]}`}
                >
                  <div className={styles.messageAvatar}>
                    {message.role === 'bot' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9V11H4C2.9 11 2 11.9 2 13V15C2 16.1 2.9 17 4 17H5V18C5 19.66 6.34 21 8 21H16C17.66 21 19 19.66 19 18V17H20C21.1 17 22 16.1 22 15V13C22 11.9 21.1 11 20 11H19V9C19 5.13 15.87 2 12 2ZM12 4C14.76 4 17 6.24 17 9V11H7V9C7 6.24 9.24 4 12 4Z" fill="var(--accent-cyan)" />
                        <circle cx="8" cy="9" r="1" fill="white" />
                        <circle cx="16" cy="9" r="1" fill="white" />
                        <path d="M10 15H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <div className={styles.userAvatar}>👤</div>
                    )}
                  </div>
                  <div className={styles.messageContent}>
                    <div className={styles.messageText}>{message.text}</div>
                    <div className={styles.messageTimestamp}>{message.timestamp}</div>
                  </div>
                </div>
              ))
            )}

            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.messageAvatar}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9V11H4C2.9 11 2 11.9 2 13V15C2 16.1 2.9 17 4 17H5V18C5 19.66 6.34 21 8 21H16C17.66 21 19 19.66 19 18V17H20C21.1 17 22 16.1 22 15V13C22 11.9 21.1 11 20 11H19V9C19 5.13 15.87 2 12 2ZM12 4C14.76 4 17 6.24 17 9V11H7V9C7 6.24 9.24 4 12 4Z" fill="var(--accent-cyan)" />
                    <circle cx="8" cy="9" r="1" fill="white" />
                    <circle cx="16" cy="9" r="1" fill="white" />
                    <path d="M10 15H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.chatbotInput}>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about robotics..."
              rows="1"
              className={styles.inputText}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className={styles.sendButton}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
