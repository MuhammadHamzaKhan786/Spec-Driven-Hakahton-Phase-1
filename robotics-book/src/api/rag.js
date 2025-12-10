// src/api/rag.js

/**
 * RAG API utilities and mock handler
 */

// Main function to send a question to the RAG API
export async function sendRagQuery(question) {
  try {
    const response = await fetch('/api/rag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error calling RAG API:', error);

    // Return a mock response if API call fails
    return {
      success: true,
      answer: "I'm sorry, I encountered an issue processing your request. Based on the robotics textbook, I can help with questions about humanoid robots, AI, sensors, control systems, and physical AI. Could you please try rephrasing your question?",
      timestamp: new Date().toISOString(),
      source: 'fallback'
    };
  }
}

// Mock handler for development/testing
export function getMockResponse(question) {
  // Simple mock responses based on keywords
  let answer = "I'm a RAG chatbot assistant. I can help answer questions about humanoid robotics and Physical AI. ";

  if (question.toLowerCase().includes('robot')) {
    answer += "A robot is a programmable machine that can carry out a series of actions automatically. In humanoid robotics, we focus on robots that have human-like characteristics and can interact with human environments.";
  } else if (question.toLowerCase().includes('ai') || question.toLowerCase().includes('artificial intelligence')) {
    answer += "Artificial Intelligence (AI) in robotics refers to the intelligence exhibited by machines. Physical AI specifically refers to AI systems that operate in the physical world through robotic systems.";
  } else if (question.toLowerCase().includes('humanoid')) {
    answer += "A humanoid robot is a robot with human-like features. These robots often have a torso, head, two arms, and two legs, and may have human-like facial features.";
  } else if (question.toLowerCase().includes('sensor')) {
    answer += "Sensors in robotics are devices that detect events or changes in the environment and send information to the robot's control system. Common sensors include cameras, lidar, ultrasonic sensors, and IMUs.";
  } else if (question.toLowerCase().includes('control')) {
    answer += "Robot control refers to the algorithms and systems that determine how a robot moves and behaves. This includes feedback control, motion planning, and trajectory generation.";
  } else {
    answer += "Based on the textbook content, I can provide information about robotics, AI, sensors, control systems, and humanoid robot design. Please ask specific questions about these topics.";
  }

  return {
    success: true,
    answer: answer,
    timestamp: new Date().toISOString(),
    source: 'mock'
  };
}