# React Intern Task - Abhishek Kumar

I have completed the responsive profile dashboard assignment for the EyeRexUs internship selection process. The project is built entirely using React.js and Tailwind CSS. The entire application layout is fully responsive—displaying a premium side-by-side dashboard structure on desktop monitors and automatically stacking into structured mobile card layers on smaller screens.

## Implemented Features:
- **Services Grid:** Integrated built-in React component states to manage "View All" and "Show Less" toggle controls so hidden service modules expand smoothly.
- **Media Gallery:** Interactive filter categories are fully operational, and clicking on any thumbnail asset triggers a high-resolution, full-screen blur backdrop modal preview.
- **Circular Profile Avatar:** Adjusted the profile image layout parameters from a rounded square to a perfectly symmetrical circular frame with crisp borders.
- **Clean Navbar:** Stripped out all artificial placeholder system tags to keep the top bar minimal, leaving only a sleek dashboard active indicator.
- **Centralized Data Engine:** All application details are rendered dynamically from `src/mockData.js` to ensure the core UI components remain clean and decouple hardcoded structures.

## Project Directory Layout
```text
src/
├── assets/                    # Static profile imagery assets
├── components/                # Modular interface splits
│   ├── Navbar.jsx             # Clean navigation header with status view
│   ├── ProfileCard.jsx        # Identity metrics, quick parameters, and social hooks
│   ├── Services.jsx           # Interactive dynamic modular grid track
│   ├── MediaGallery.jsx       # Image grid matrix with integrated inspection modal
│   ├── FeedbackSection.jsx    # Scoring distribution charts and contract reviews
│   └── Footer.jsx          # High-contrast action email banner
├── mockData.js                # Master state data layout profile configuration
├── App.jsx                    # Global page shell assembler
└── main.jsx                   # Project React DOM mounting entry point




## Local Environment Installation Guide

1 Navigate into the project directory:

cd "internship Task"

2.Install all standard node package dependencies:
npm install


## Spin up the local Vite development server:
npm run dev