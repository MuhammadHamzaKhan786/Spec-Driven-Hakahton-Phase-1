import React from 'react';
import Layout from '@theme/Layout';

export default function LearnPage(): JSX.Element {
  const learningPaths = [
    {
      level: 'Beginner',
      icon: '🌱',
      color: 'rgba(16, 185, 129, 0.3)',
      glowColor: 'rgba(16, 185, 129, 0.5)',
      duration: '4-6 weeks',
      modules: ['Module 1: Physical AI Fundamentals'],
      chapters: [
        'Chapter 1: What is Physical AI?',
        'Chapter 2: Intro to Humanoid Robots',
        'Chapter 3: Sensors Explained',
        'Chapter 4: Actuators & Motors',
        'Chapter 5: Basic Control Loops'
      ],
      description: 'Start your robotics journey by understanding the fundamental concepts of Physical AI, humanoid robots, and basic control systems.',
      skills: ['Physical AI concepts', 'Robot components', 'Sensor basics', 'Motor control', 'Simple feedback loops']
    },
    {
      level: 'Intermediate',
      icon: '🚀',
      color: 'rgba(59, 130, 246, 0.3)',
      glowColor: 'rgba(59, 130, 246, 0.5)',
      duration: '6-8 weeks',
      modules: ['Module 2: Sensors & Perception', 'Module 3: Locomotion & Motion'],
      chapters: [
        'Chapter 6: IMU Sensors & Orientation',
        'Chapter 7: Vision & Cameras',
        'Chapter 8: Sensor Fusion & State Estimation',
        'Chapter 9: Perception in Real-Time',
        'Chapter 10: Walking Basics & Gaits',
        'Chapter 11: Balance & Stability Control',
        'Chapter 12: Climbing, Jumping & Terrain Adaptation',
        'Chapter 13: Energy Efficiency & Motion Optimization'
      ],
      description: 'Dive deeper into perception systems and locomotion. Learn how robots see, understand their environment, walk, and maintain balance.',
      skills: ['IMU integration', 'Computer vision', 'Sensor fusion', 'Gait generation', 'Balance algorithms', 'Terrain adaptation']
    },
    {
      level: 'Advanced',
      icon: '🎓',
      color: 'rgba(168, 85, 247, 0.3)',
      glowColor: 'rgba(168, 85, 247, 0.5)',
      duration: '6-8 weeks',
      modules: ['Module 4: Planning & Control', 'Module 5: Integration & Advanced Topics'],
      chapters: [
        'Chapter 14: Path Planning & Navigation',
        'Chapter 15: AI Agent Architectures',
        'Chapter 16: Real-Time Decision Making',
        'Chapter 17: Tesla Bot Case Study',
        'Chapter 18: Integration Challenges & Future Horizons'
      ],
      description: 'Master advanced topics including AI-driven navigation, autonomous decision-making, and real-world integration challenges.',
      skills: ['Path planning algorithms', 'AI architectures', 'Real-time systems', 'System integration', 'Industry applications']
    }
  ];

  const learningResources = [
    {
      category: 'Interactive Tools',
      icon: '🛠️',
      items: [
        {
          title: 'AI Chatbot Assistant',
          description: 'Ask questions about any robotics topic 24/7. Get instant explanations, code examples, and concept clarifications.',
          action: 'Try Now',
          link: '#chatbot'
        },
        {
          title: 'Code Playground',
          description: 'Test robotics algorithms with interactive code snippets. Experiment with control systems and sensor fusion in real-time.',
          action: 'Explore',
          link: '/docs/intro'
        },
        {
          title: 'Visual Simulations',
          description: 'See robot movements, sensor data, and control systems visualized. Understand complex concepts through interactive diagrams.',
          action: 'View Demos',
          link: '/docs/intro'
        }
      ]
    },
    {
      category: 'Study Materials',
      icon: '📚',
      items: [
        {
          title: 'Chapter Summaries',
          description: 'Quick reference guides for each chapter with key concepts, formulas, and important takeaways for efficient review.',
          action: 'Access',
          link: '/docs/intro'
        },
        {
          title: 'Practice Problems',
          description: 'Hands-on exercises and problems to test your understanding. Solutions provided with detailed explanations.',
          action: 'Practice',
          link: '/docs/intro'
        },
        {
          title: 'Glossary',
          description: 'Comprehensive robotics terminology reference. Search and understand technical terms used throughout the textbook.',
          action: 'Browse',
          link: '/docs/glossary'
        }
      ]
    },
    {
      category: 'Real-World Applications',
      icon: '🤖',
      items: [
        {
          title: 'Tesla Bot Case Study',
          description: 'In-depth analysis of Tesla\'s humanoid robot. Learn from real industry implementation and design decisions.',
          action: 'Read Study',
          link: '/docs/module-5/tesla-bot'
        },
        {
          title: 'Project Ideas',
          description: 'Build practical robotics projects from line-following bots to autonomous navigation systems with complete guides.',
          action: 'Get Started',
          link: '/docs/intro'
        },
        {
          title: 'Industry Insights',
          description: 'Understand challenges faced by robotics companies. Learn proven solutions and best practices from the field.',
          action: 'Explore',
          link: '/docs/intro'
        }
      ]
    }
  ];

  const studyTips = [
    {
      icon: '📖',
      title: 'Read Sequentially',
      description: 'Follow the modules in order for best understanding. Each chapter builds on previous concepts.'
    },
    {
      icon: '💻',
      title: 'Practice Coding',
      description: 'Implement algorithms yourself. Try modifying code examples to deepen your understanding.'
    },
    {
      icon: '🤖',
      title: 'Use the AI Assistant',
      description: 'Don\'t hesitate to ask questions. The chatbot can explain concepts in different ways until you understand.'
    },
    {
      icon: '🎯',
      title: 'Build Projects',
      description: 'Apply what you learn by building small projects. Hands-on experience is crucial in robotics.'
    },
    {
      icon: '📝',
      title: 'Take Notes',
      description: 'Document key formulas, algorithms, and insights. Create your own reference materials.'
    },
    {
      icon: '🔄',
      title: 'Review Regularly',
      description: 'Revisit challenging topics. Spaced repetition helps solidify complex robotics concepts.'
    }
  ];

  const skillsYouWillGain = [
    {
      category: 'Programming & Algorithms',
      skills: ['Python for robotics', 'C++ real-time systems', 'ROS (Robot Operating System)', 'Control algorithms (PID, MPC)', 'Path planning algorithms', 'Machine learning integration']
    },
    {
      category: 'Hardware & Electronics',
      skills: ['Sensor integration (IMU, cameras, LiDAR)', 'Motor control & actuators', 'Circuit design basics', 'Hardware-software interface', 'Power management', 'Signal processing']
    },
    {
      category: 'Mathematics & Physics',
      skills: ['Linear algebra for robotics', 'Kinematics & dynamics', 'State estimation', 'Optimization techniques', 'Probability & filtering', 'Control theory fundamentals']
    },
    {
      category: 'AI & Perception',
      skills: ['Computer vision', 'Sensor fusion techniques', 'Object detection & tracking', 'SLAM (Localization & Mapping)', 'Neural networks for robotics', 'Real-time decision making']
    },
    {
      category: 'System Design',
      skills: ['System architecture', 'Real-time constraints', 'Integration & debugging', 'Performance optimization', 'Safety considerations', 'Scalable design patterns']
    }
  ];

  const faq = [
    {
      question: 'How long does it take to complete the textbook?',
      answer: 'The complete textbook can be completed in 16-22 weeks depending on your pace and prior knowledge. Beginners typically spend 4-6 weeks per learning level (Beginner, Intermediate, Advanced).'
    },
    {
      question: 'Do I need prior programming experience?',
      answer: 'Basic programming knowledge is helpful but not required. We explain concepts from the ground up. Familiarity with Python or C++ will help you progress faster, but we provide code examples with detailed explanations.'
    },
    {
      question: 'What hardware do I need?',
      answer: 'You can learn all concepts without any hardware using our simulations and examples. For hands-on projects, basic Arduino or Raspberry Pi kits are sufficient to get started with practical implementations.'
    },
    {
      question: 'Can I skip chapters?',
      answer: 'We recommend following the sequential order, especially in Modules 1-3, as concepts build on each other. Advanced learners with robotics background may skip familiar topics in Module 1.'
    },
    {
      question: 'How does the AI chatbot help?',
      answer: 'The RAG-powered chatbot has access to all textbook content and can answer questions, provide explanations in different ways, give code examples, and help debug concepts. It\'s like having a tutor available 24/7.'
    },
    {
      question: 'Are there certifications available?',
      answer: 'While we don\'t currently offer formal certifications, completing all modules and projects will give you practical skills valued by robotics companies. The knowledge gained is equivalent to university-level robotics courses.'
    }
  ];

  return (
    <Layout title="Learn" description="Comprehensive learning resources for Physical AI & Humanoid Robotics">
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a0a2e 50%, #0a0e27 100%)',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(0, 255, 242, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #00fff2 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}>
            Learn Physical AI & Robotics
          </h1>
          <p style={{
            fontSize: '1.3rem',
            textAlign: 'center',
            color: '#e5e7eb',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            Master humanoid robotics from fundamentals to advanced applications. Follow our structured learning path with interactive tools, AI assistance, and hands-on projects.
          </p>
        </div>
      </div>

      {/* Learning Paths */}
      <div style={{ background: '#0f172a', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#fff'
          }}>
            📚 Your Learning Journey
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 50px'
          }}>
            Follow our structured path from beginner to advanced. Each level builds essential skills for humanoid robotics.
          </p>
          
          <div style={{
            display: 'grid',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {learningPaths.map((path, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '40px',
                borderRadius: '16px',
                border: `2px solid ${path.color}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 10px 40px ${path.glowColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '3rem' }}>{path.icon}</div>
                  <div>
                    <h3 style={{ 
                      fontSize: '2rem', 
                      margin: 0, 
                      color: '#fff',
                      fontWeight: 'bold'
                    }}>
                      {path.level} Level
                    </h3>
                    <p style={{ 
                      margin: 0, 
                      color: '#9ca3af',
                      fontSize: '0.95rem'
                    }}>
                      Duration: {path.duration}
                    </p>
                  </div>
                </div>

                <p style={{
                  color: '#d1d5db',
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  {path.description}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#00fff2', marginBottom: '10px', fontSize: '1.1rem' }}>
                    Modules Covered:
                  </h4>
                  {path.modules.map((module, i) => (
                    <div key={i} style={{
                      background: 'rgba(0, 255, 242, 0.1)',
                      padding: '8px 15px',
                      borderRadius: '8px',
                      marginBottom: '8px',
                      color: '#e5e7eb',
                      fontSize: '0.95rem'
                    }}>
                      {module}
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#a855f7', marginBottom: '10px', fontSize: '1.1rem' }}>
                    Chapters:
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '8px'
                  }}>
                    {path.chapters.map((chapter, i) => (
                      <div key={i} style={{
                        color: '#9ca3af',
                        fontSize: '0.9rem',
                        padding: '5px 0'
                      }}>
                        • {chapter}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ color: '#ec4899', marginBottom: '10px', fontSize: '1.1rem' }}>
                    Skills You'll Gain:
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {path.skills.map((skill, i) => (
                      <span key={i} style={{
                        background: 'rgba(236, 72, 153, 0.15)',
                        color: '#e5e7eb',
                        padding: '6px 12px',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        border: '1px solid rgba(236, 72, 153, 0.3)'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      {/* Skills You Will Gain */}
      <div style={{ background: '#0a0e27', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#fff'
          }}>
            🎓 Skills You Will Master
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 50px'
          }}>
            Build a comprehensive skill set across all aspects of humanoid robotics and Physical AI
          </p>
          
          <div style={{
            display: 'grid',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {skillsYouWillGain.map((skillGroup, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '30px',
                borderRadius: '16px',
                border: `1px solid ${['rgba(0, 255, 242, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(168, 85, 247, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(16, 185, 129, 0.3)'][idx]}`
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#fff',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>
                  {skillGroup.category}
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px'
                }}>
                  {skillGroup.skills.map((skill, i) => (
                    <div key={i} style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      color: '#e5e7eb',
                      fontSize: '0.9rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      ✓ {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ background: '#0f172a', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#fff'
          }}>
            ❓ Frequently Asked Questions
          </h2>
          
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gap: '20px'
          }}>
            {faq.map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '30px',
                borderRadius: '12px',
                border: '1px solid rgba(99, 102, 241, 0.3)'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  color: '#00fff2',
                  marginBottom: '15px',
                  fontWeight: '600'
                }}>
                  {item.question}
                </h4>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a0a2e 100%)',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #00fff2 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ready to Begin Your Journey?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#d1d5db',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Start with Module 1 and progress at your own pace. Your robotics expertise journey starts here.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/docs/intro" style={{
              background: 'linear-gradient(135deg, #00fff2 0%, #a855f7 100%)',
              color: '#000',
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Start Learning Now →
            </a>
            <a href="/docs/category/module-1-physical-ai-fundamentals" style={{
              background: 'rgba(26, 31, 58, 0.8)',
              color: '#fff',
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
              border: '2px solid rgba(168, 85, 247, 0.5)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Browse Chapters
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}