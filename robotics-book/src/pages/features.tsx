import React from 'react';
import Layout from '@theme/Layout';

export default function FeaturesPage(): JSX.Element {
  const features = [
    {
      title: '🎓 Structured From Beginner to Expert',
      description: 'Our textbook is meticulously organized into 5 progressive modules spanning 18 in-depth chapters. Start with the fundamentals of Physical AI and humanoid robots, then advance through sensors, locomotion, planning, and real-world integration.',
      highlights: [
        '5 Progressive Modules',
        '18 Comprehensive Chapters',
        'From Basics to Advanced Topics',
        'Self-Paced Learning Journey'
      ]
    },
    {
      title: '🤖 Master Every Aspect of Humanoid Robotics',
      description: 'Dive deep into the core technologies that power modern humanoid robots. Learn about sensors (IMU, cameras, LiDAR), actuators and motors, control systems, and perception algorithms.',
      modules: [
        {
          name: 'Module 1: Physical AI Fundamentals',
          topics: ['Introduction to Physical AI', 'Humanoid robot architectures', 'Sensor and actuator technologies', 'Basic control loop design']
        },
        {
          name: 'Module 2: Sensors & Perception',
          topics: ['IMU sensors and orientation', 'Computer vision systems', 'Sensor fusion techniques', 'Real-time perception']
        },
        {
          name: 'Module 3: Locomotion & Motion',
          topics: ['Walking mechanics and gaits', 'Balance algorithms', 'Terrain adaptation', 'Energy-efficient motion']
        },
        {
          name: 'Module 4: Planning & Control',
          topics: ['Path planning', 'AI-driven decision making', 'Real-time control', 'Autonomous behavior']
        },
        {
          name: 'Module 5: Integration & Advanced',
          topics: ['Tesla Bot case study', 'Integration challenges', 'Future trends', 'Industry applications']
        }
      ]
    },
    {
      title: '💡 Learn Smarter with AI-Powered Assistance',
      description: 'Experience a revolutionary way to learn robotics with our integrated RAG (Retrieval-Augmented Generation) chatbot. Get instant answers, clarify complex concepts, and receive personalized explanations.',
      features: [
        { icon: '🤖', text: '24/7 AI Chatbot for instant help' },
        { icon: '💬', text: 'Complex concepts in simple terms' },
        { icon: '📝', text: 'Code examples in Python, C++, ROS' },
        { icon: '🔍', text: 'Smart search across all chapters' },
        { icon: '📚', text: 'Context-aware assistance' }
      ]
    },
    {
      title: '📖 Rich Content & Resources',
      description: 'Each chapter is packed with visual diagrams, mathematical equations, pseudocode, and practical examples. Learn from industry case studies including Tesla\'s humanoid robot.',
      resources: [
        { icon: '📊', title: 'Visual Diagrams', desc: 'Clear illustrations of complex systems' },
        { icon: '🧮', title: 'Mathematical Foundations', desc: 'Rigorous equations with explanations' },
        { icon: '💻', title: 'Code Snippets', desc: 'Practical programming examples' },
        { icon: '🎯', title: 'Real-World Examples', desc: 'Actual robotics applications' },
        { icon: '📖', title: 'Complete Glossary', desc: 'Technical terminology reference' },
        { icon: '🏢', title: 'Case Studies', desc: 'Tesla Bot and industry innovations' }
      ]
    },
    {
      title: '🎯 Bridge Theory and Real-World Applications',
      description: 'Every concept is tied to practical applications used in real humanoid robots today. Understand challenges faced by robotics engineers and learn proven solutions.',
      benefits: [
        '🏭 Tesla Bot Deep Dive',
        '⚡ Performance Optimization',
        '🔧 Integration Challenges',
        '🚀 Future Technologies',
        '💼 Career Preparation'
      ]
    },
    {
      title: '🧠 Master Key Technologies',
      description: 'Gain hands-on understanding of technologies that power autonomous humanoid systems.',
      technologies: [
        {
          category: 'Sensors & Perception',
          items: ['IMU for orientation', 'Camera systems & vision', 'Sensor fusion', 'Real-time perception']
        },
        {
          category: 'Control Systems',
          items: ['PID controllers', 'Balance algorithms', 'Motion planning', 'Real-time decisions']
        },
        {
          category: 'AI & Intelligence',
          items: ['AI agent architectures', 'Path planning', 'Machine learning', 'Adaptive control']
        },
        {
          category: 'Locomotion',
          items: ['Bipedal walking', 'Gait optimization', 'Terrain adaptation', 'Dynamic balance']
        }
      ]
    }
  ];

  const advantages = [
    'Progressive Structure: Basics to advanced',
    'AI-Powered Learning: RAG chatbot assistance',
    'Interactive Design: Modern UI',
    'Complete Coverage: All aspects included',
    'Industry Insights: Real case studies',
    'Beginner-Friendly: No prerequisites',
    'Practical Focus: Implementation guidance',
    'Always Accessible: Learn anywhere',
    'Free & Open: Accessible to all'
  ];

  return (
    <Layout title="Features" description="Comprehensive features of Physical AI & Humanoid Robotics textbook">
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
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 242, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
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
            Unlock the World of Physical AI
          </h1>
          <p style={{
            fontSize: '1.3rem',
            textAlign: 'center',
            color: '#e5e7eb',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Everything you need to master robotics from fundamentals to advanced applications - all in one comprehensive, interactive textbook.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{
        background: '#0f172a',
        padding: '40px 20px',
        borderBottom: '1px solid rgba(99, 102, 241, 0.2)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00fff2' }}>5</div>
              <div style={{ color: '#9ca3af' }}>Modules</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a855f7' }}>18</div>
              <div style={{ color: '#9ca3af' }}>Chapters</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ec4899' }}>🤖</div>
              <div style={{ color: '#9ca3af' }}>AI-Powered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>🌍</div>
              <div style={{ color: '#9ca3af' }}>Free Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 1: Structured Learning */}
      <div style={{ background: '#0a0e27', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#fff'
          }}>
            {features[0].title}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 40px',
            lineHeight: '1.8'
          }}>
            {features[0].description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {features[0].highlights.map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 255, 242, 0.3)',
                textAlign: 'center',
                color: '#e5e7eb',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 242, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                ✅ {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature 2: Modules Coverage */}
      <div style={{ background: '#0f172a', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#fff'
          }}>
            {features[1].title}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 50px',
            lineHeight: '1.8'
          }}>
            {features[1].description}
          </p>
          <div style={{
            display: 'grid',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {features[1].modules.map((module, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '30px',
                borderRadius: '16px',
                border: `1px solid ${['rgba(0, 255, 242, 0.3)', 'rgba(168, 85, 247, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(16, 185, 129, 0.3)'][idx]}`,
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '15px',
                  color: '#fff'
                }}>
                  {module.name}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '10px'
                }}>
                  {module.topics.map((topic, i) => (
                    <li key={i} style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
                      • {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature 3: AI-Powered Learning */}
      <div style={{ background: '#0a0e27', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#fff'
          }}>
            {features[2].title}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 40px',
            lineHeight: '1.8'
          }}>
            {features[2].description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {features[2].features.map((feature, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{feature.icon}</div>
                <p style={{ color: '#e5e7eb', margin: 0 }}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature 4: Rich Content */}
      <div style={{ background: '#0f172a', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#fff'
          }}>
            {features[3].title}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 40px',
            lineHeight: '1.8'
          }}>
            {features[3].description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {features[3].resources.map((resource, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{resource.icon}</div>
                <h4 style={{ color: '#fff', marginBottom: '8px' }}>{resource.title}</h4>
                <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.9rem' }}>{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature 5: Practical Applications */}
      <div style={{ background: '#0a0e27', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#fff'
          }}>
            {features[4].title}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 40px',
            lineHeight: '1.8'
          }}>
            {features[4].description}
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {features[4].benefits.map((benefit, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '15px 25px',
                borderRadius: '25px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#e5e7eb',
                fontSize: '0.95rem'
              }}>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature 6: Technologies */}
      <div style={{ background: '#0f172a', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#fff'
          }}>
            {features[5].title}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#d1d5db',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 50px',
            lineHeight: '1.8'
          }}>
            {features[5].description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {features[5].technologies.map((tech, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '30px',
                borderRadius: '16px',
                border: `1px solid ${['rgba(0, 255, 242, 0.3)', 'rgba(168, 85, 247, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(59, 130, 246, 0.3)'][idx]}`
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '15px',
                  color: '#fff',
                  fontWeight: '600'
                }}>
                  {tech.category}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {tech.items.map((item, i) => (
                    <li key={i} style={{
                      color: '#9ca3af',
                      marginBottom: '8px',
                      fontSize: '0.95rem'
                    }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unique Advantages */}
      <div style={{ background: '#0a0e27', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#fff'
          }}>
            ✨ What Makes Us Different
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {advantages.map((advantage, idx) => (
              <div key={idx} style={{
                background: 'rgba(26, 31, 58, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: '#e5e7eb',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ color: '#00fff2', fontSize: '1.2rem' }}>✅</span>
                {advantage}
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
            Ready to Start Your Robotics Journey?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#d1d5db',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Join thousands of learners mastering Physical AI and humanoid robotics. Begin with Chapter 1 today.
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
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 242, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              Start Reading Now →
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
              Explore Chapters
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}