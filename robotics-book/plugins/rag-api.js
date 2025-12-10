// plugins/rag-api.js
const path = require('path');

module.exports = function (context) {
  const { siteConfig } = context;

  return {
    name: 'rag-api',

    configureWebpack() {
      return {
        resolve: {
          fallback: {
            fs: false,
            path: false,
            os: false,
          },
        },
      };
    },

    // Add server middleware for API routes
    async contentLoaded({ content, actions }) {
      // This is for content processing, not needed for API routes
    },

    // This is the correct method to add server middleware in Docusaurus v3
    async loadContent() {
      // Load any content if needed
    },

    // Configure the development server with API routes
    configureDevServer(app, server, { hot }) {
      const express = require('express');
      const { createProxyMiddleware } = require('http-proxy-middleware');

      // Create a simple API endpoint for RAG queries
      app.use('/api/rag', express.json(), async (req, res) => {
        if (req.method === 'POST') {
          try {
            const { question } = req.body;

            // Log the incoming request
            console.log(`Received RAG query: ${question}`);

            // Determine if we should use mock response or proxy to real endpoint
            const ragEndpoint = process.env.REACT_APP_RAG_ENDPOINT || process.env.RAG_ENDPOINT;

            if (ragEndpoint) {
              // Proxy to the real RAG endpoint
              const proxy = createProxyMiddleware({
                target: ragEndpoint,
                changeOrigin: true,
                pathRewrite: {
                  '^/api/rag': '', // Remove /api/rag prefix
                },
              });

              return proxy(req, res, () => {
                // Fallback to mock if proxy fails
                createMockResponse(res, question);
              });
            } else {
              // Use mock response for development
              createMockResponse(res, question);
            }
          } catch (error) {
            console.error('Error processing RAG request:', error);
            res.status(500).json({
              success: false,
              error: 'Internal server error',
              answer: 'Sorry, I encountered an error processing your request. Please try again later.',
              timestamp: new Date().toISOString(),
              source: 'error'
            });
          }
        } else {
          res.status(405).json({ error: 'Method not allowed' });
        }
      });

      // Helper function to create mock responses
      function createMockResponse(res, question) {
        // Simple mock responses based on keywords
        let answer = "I'm a RAG chatbot assistant. I can help answer questions about humanoid robotics and Physical AI. ";

        if (question.toLowerCase().includes('robot')) {
          answer += "A robot is a programmable machine that can carry out a series of actions automatically. In humanoid robotics, we focus on robots that have human-like characteristics and can interact with human environments.";
        } else if (question.toLowerCase().includes('ai') || question.toLowerCase().includes('artificial intelligence')) {
          answer += "Artificial Intelligence (AI) in robotics refers to the intelligence exhibited by machines. Physical AI specifically refers to AI systems that operate in the physical world through robotic systems.";
        } else if (question.toLowerCase().includes('humanoid')) {
          answer += "A humanoid robot is a robot with human-like features. These robots often have a torso, head, two arms, and two legs, and may have human-like facial features.";
        } else {
          answer += "Based on the textbook content, I can provide information about robotics, AI, sensors, control systems, and humanoid robot design. Please ask specific questions about these topics.";
        }

        res.json({
          success: true,
          answer: answer,
          timestamp: new Date().toISOString(),
          source: process.env.REACT_APP_RAG_ENDPOINT ? 'rag' : 'mock'
        });
      }
    },
  };
};