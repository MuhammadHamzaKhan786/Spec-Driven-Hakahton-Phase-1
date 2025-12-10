// Test script to verify the RAG API endpoint
const testRagApi = async () => {
  try {
    console.log('Testing RAG API endpoint...');

    const response = await fetch('http://localhost:3002/api/rag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: 'What is a robot?'
      }),
    });

    console.log('Response status:', response.status);

    const data = await response.json();
    console.log('Response data:', data);

    if (data.success) {
      console.log('✅ RAG API is working correctly!');
      console.log('Answer:', data.answer);
    } else {
      console.log('❌ RAG API returned an error:', data.error);
    }
  } catch (error) {
    console.log('❌ Error testing RAG API:', error.message);
  }
};

testRagApi();