# React Portfolio

## About

This is my personal web developer portfolio built with React and Vite. It showcases my projects, skills, and contact information in a clean, responsive single-page application designed to help me stand out to potential employers and collaborators.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## Demo

Live Site URL: [https://stupendous-tapioca-59c0c8.netlify.app/](https://stupendous-tapioca-59c0c8.netlify.app/)

---

## Features

- Single-page React application with client-side routing (react-router-dom)
- Sections: About Me, Portfolio, Contact, Resume
- Portfolio section featuring 6 projects with clickable GitHub repository links
- Responsive and mobile-first design
- Contact form with validation (name, email, message)
- Downloadable resume link and list of proficiencies
- Consistent header and footer across all sections
- Clean, polished UI with custom color scheme
- Deployed on Netlify for easy access

---

## Technologies Used

- React
- React Router DOM
- Vite (build tool)
- CSS Modules / Custom CSS
- Netlify (hosting and deployment)

---

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/your-repo-name.git

2. Navigate into the project directory:
cd your-repo-name

3. Install dependencies:
npm install

## Usage
- To run the app locally during development:
npm run dev
- This will start the development server. Open your browser and go to http://localhost:3000 (or the port shown in the terminal).
- To create a production build:
npm run build
- This generates the dist/ folder, which can be deployed to your hosting provider (e.g., Netlify).
To preview the production build locally:
npm run preview

## Deployment 
The application is deployed live on Netlify at:

https://stupendous-tapioca-59c0c8.netlify.app/

Deployment is done by building the project (npm run build) and uploading the dist/ folder to Netlify Drop or connecting your GitHub repo to Netlify for automatic builds.

## Project Structure

/src
  /assets          # Images, icons, and static assets
  /components      # React components (Header, Navigation, Project, Footer, AboutMe, Portfolio, Contact, Resume)
  App.jsx          # Main App component with routing
  main.jsx         # Entry point for React
/public            # Static files (favicon, index.html)
dist               # Production build output (generated after build)
package.json       # Project dependencies and scripts
README.md          # This file

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you find bugs or want to suggest improvements.

## Contact
GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

Email: your.email@example.com

## License
This project is licensed under the MIT License.


## Acknowledgements
- Portfolio challenge requirements from UC Irvine
- Code guidance and assistance from ChatGPT
- Color palette inspired by Coolors