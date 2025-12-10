import React, { useState, useEffect, useRef } from 'react';
import { sendRagQuery } from '@site/src/api/rag'; // Adjust path as needed
import styles from './styles.module.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Load chat history from localStorage on component mount
  useEffect(() => {
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
  }, []);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    try {
      localStorage.setItem('chatbot_history', JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  }, [messages]);

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

      const botMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: response.answer || "I'm sorry, I couldn't process your request.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      // Add bot response to chat
      setMessages(prev => [...prev, botMessage]);
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
    if (window.confirm('Are you sure you want to clear all chat history?')) {
      setMessages([]);
      localStorage.removeItem('chatbot_history');
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
          <path d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.36 15.01 3.02 16.33L2 22L7.67 20.98C8.99 21.64 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="url(#gradient)" />
          <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white" />
          <path d="M15 11L12 11L12 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 16L12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="var(--accent-cyan)" />
              <stop offset="1" stopColor="var(--accent-purple)" />
            </linearGradient>
          </defs>
        </svg>
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className={styles.chatbotPanel}>
          <div className={styles.chatbotHeader}>
            <div className={styles.headerLeft}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px'}}>
                <path d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.36 15.01 3.02 16.33L2 22L7.67 20.98C8.99 21.64 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="url(#header-gradient)" />
                <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white" />
                <path d="M15 11L12 11L12 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 16L12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
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
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.36 15.01 3.02 16.33L2 22L7.67 20.98C8.99 21.64 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="var(--accent-cyan)" />
                        <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white" />
                        <path d="M15 11L12 11L12 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M12 16L12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
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
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.36 15.01 3.02 16.33L2 22L7.67 20.98C8.99 21.64 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="var(--accent-cyan)" />
                    <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white" />
                    <path d="M15 11L12 11L12 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 16L12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
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