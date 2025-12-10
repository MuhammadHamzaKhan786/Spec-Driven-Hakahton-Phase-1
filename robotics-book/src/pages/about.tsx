import React from 'react';
import Layout from '@theme/Layout';

export default function AboutPage(): JSX.Element {
  return (
    <Layout title="About" description="About the Physical AI & Humanoid Robotics textbook">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">

            <h1 className="text--center">About This Textbook</h1>
            <p className="text--center">
              The Physical AI & Humanoid Robotics textbook is a complete learning roadmap
              for students, developers, and robotics enthusiasts who want to understand
              how intelligent machines perceive, move, and make decisions in the real world.
            </p>

            <hr />

            {/* Module 1 */}
            <h2>📦 Module 1: Physical AI Fundamentals</h2>
            <p>This module introduces the foundations of Physical AI and robotic systems.</p>
            <ul>
              <li>Chapter 1: What is Physical AI?</li>
              <li>Chapter 2: Intro to Humanoid Robots</li>
              <li>Chapter 3: Sensors Explained</li>
              <li>Chapter 4: Actuators & Motors</li>
              <li>Chapter 5: Basic Control Loops</li>
            </ul>

            {/* Module 2 */}
            <h2>📦 Module 2: Sensors & Perception</h2>
            <p>This module covers how robots sense, interpret, and process information.</p>
            <ul>
              <li>Chapter 6: IMU Sensors & Orientation</li>
              <li>Chapter 7: Vision & Cameras</li>
              <li>Chapter 8: Sensor Fusion & State Estimation</li>
              <li>Chapter 9: Perception in Real-Time</li>
            </ul>

            {/* Module 3 */}
            <h2>📦 Module 3: Locomotion & Motion</h2>
            <p>This module explains how robots walk, balance, and interact with different terrains.</p>
            <ul>
              <li>Chapter 10: Walking Basics & Gaits</li>
              <li>Chapter 11: Balance & Stability Control</li>
              <li>Chapter 12: Climbing, Jumping & Terrain Adaptation</li>
              <li>Chapter 13: Energy Efficiency & Motion Optimization</li>
            </ul>

            {/* Module 4 */}
            <h2>📦 Module 4: Planning & Control</h2>
            <p>This module introduces intelligent planning, navigation, and decision-making systems.</p>
            <ul>
              <li>Chapter 14: Path Planning & Navigation</li>
              <li>Chapter 15: AI Agent Architectures</li>
              <li>Chapter 16: Real-Time Decision Making</li>
            </ul>

            {/* Module 5 */}
            <h2>📦 Module 5: Integration & Advanced Topics</h2>
            <p>This module connects everything together and looks at real-world humanoid robots.</p>
            <ul>
              <li>Chapter 17: Tesla Bot Case Study</li>
              <li>Chapter 18: Integration Challenges & Future Horizons</li>
            </ul>

            <h2>📘 Glossary: Robotics Terminology</h2>
            <p>
              A complete reference glossary defining important robotics and AI concepts
              used throughout the book.
            </p>

          </div>
        </div>
      </div>
    </Layout>
  );
}
