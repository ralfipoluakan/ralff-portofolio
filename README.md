# My CV - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Profile photo, name, role, bio with animated elements
- **About Section**: Detailed bio with skill badges
- **Experience Timeline**: Vertical timeline showcasing work experience
- **Certificates Gallery**: Responsive grid with modal for certificate viewing
- **Contact Form**: Functional contact form with validation
- **Responsive Design**: Optimized for all device sizes
- **Dark Theme**: Professional dark color scheme
- **Animations**: Smooth Framer Motion animations throughout

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: JSON Server for data management
- **Icons**: Custom SVG icons

## Color Palette

- Primary: #0A192F (Dark Navy)
- Secondary: #1E3A5F (Medium Navy)
- Accent: #2DD4BF (Teal)
- Gold: #F2C98D (Warm Gold)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-cv
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the JSON Server (in one terminal):
   ```bash
   npm run json-server
   ```

4. Start the development server (in another terminal):
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
my-cv/
├── public/
│   ├── 4x6.jpg
│   └── certificate-images/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── ExperienceList.jsx
│   │   ├── ExperienceItem.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── db.json
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Data Structure

The application uses a JSON Server to serve data from `db.json`:

```json
{
  "profile": {
    "name": "Your Name",
    "role": "Your Role",
    "bio": "Your bio...",
    "photo": "/4x6.jpg"
  },
  "experiences": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "date": "Start - End",
      "description": "Job description..."
    }
  ],
  "certificates": [
    {
      "title": "Certificate Name",
      "image": "/certificate-image.jpg"
    }
  ]
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run json-server` - Start JSON Server on port 3000
- `npm run lint` - Run ESLint

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
