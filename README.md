# React Intern Task - Abhishek Kumar

I have completed the responsive profile dashboard assignment for the EyeRexUs internship selection process. The project is built entirely using React.js and Tailwind CSS. The entire application layout is fully responsive—displaying a premium side-by-side dashboard structure on desktop monitors and automatically stacking into structured mobile card layers on smaller screens.


## Architectural Blueprint

This application implements a unique vertical split column strategy on desktop and auto-wraps down to precise hardware device emulation frames on smaller simulated screens. The dynamic squeezer engine utilizes low-latency window event hooks to simulate distinct device states instantly.

## Core Capabilities
Dynamic Squeezer Container: Real-time multi-viewport toggle mechanism allowing clean visualization of the system across Desktop, Tablet, and Mobile simulation models seamlessly without reloading states.

Left-Aligned Corporate Profile Card: Transformed standard centralized avatars into an industry-grade side-profile layout grid featuring verified badges, contextual headers, and micro-padded metadata streams.

Responsive Bottom Contact Strip: Integrated fluid flex architecture that locks communication channels into clear rows on restricted spaces while scaling horizontally on larger viewports.

Behind The Scenes Module: Feature matrix highlighting fine-grained engineering parameters like lazy-loaded components, screen-reader optimizations, and secure 
data routing rules.

## Stack Structure
Frontend Engine: React.js

Styling Framework: Tailwind CSS

Icon Infrastructure: Lucide Icons

Modular Payload System: Dynamic data maps with deep structural asset integration blocks



## Project Directory Layout
src/
├── App.jsx                  # Root Layout Container & Device Context Squeezer Engine
├── mockData.js              # Centralized Profile Payload Model & Assets Matrix
└── components/
    ├── Navbar.jsx           # Global Navigation & Layout Simulation Switcher Triggers
    ├── ProfileCard.jsx      # Left-Sidebar Side-Aligned Profile Banner & Quick Actions
    ├── Services.jsx         # Core Solutions and Dynamic Core Feature Grid Array
    ├── MediaGallery.jsx     # Production Work Showcase & Media Pipeline
    ├── FeedbackSection.jsx  # Client Endorsement Metric Trackers
    ├── MicroDetails.jsx     # Technical Specifications & Micro-Level Highlights
    └── Footer.jsx           # Connected Call To Action Module & Inline Custom Social Matrix

    



## Local Environment Installation Guide

1 Navigate into the project directory:

cd "internship Task"

2.Install all standard node package dependencies:
npm install


## Spin up the local Vite development server:
npm run dev