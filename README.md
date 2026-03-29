# VS Code Inspired Portfolio

A modern, interactive portfolio website built with Next.js that replicates the Visual Studio Code interface. This project showcases my skills as a React Developer and Full Stack Engineer through a unique, developer-friendly design.

## 🚀 Features

- **VS Code-like Interface**: Complete replica of VS Code with sidebar, explorer, tabs, and terminal
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Components**: Functional terminal, command palette, and file explorer
- **Multiple Themes**: Support for different VS Code themes
- **Project Showcase**: Dedicated section for displaying development projects
- **GitHub Integration**: GitHub calendar and repository cards
- **Contact Integration**: Interactive contact form with code-style layout
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Frontend**: React 19
- **Styling**: CSS Modules
- **Icons**: React Icons (VS Code icon set)
- **Deployment**: Vercel
- **Linting**: ESLint
- **Version Control**: Git

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher (recommended: 20.x LTS)
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For cloning the repository

You can check your versions by running:
```bash
node --version
npm --version
git --version
```

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Kunall7890/vscode-portfolio.git
cd vscode-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies listed in `package.json`.

### 3. Environment Setup (Optional)

If you plan to deploy or add environment-specific configurations, create a `.env.local` file:

```bash
# Example environment variables (add as needed)
NEXT_PUBLIC_GITHUB_USERNAME=Kunall7890
NEXT_PUBLIC_EMAIL=your-email@example.com
```

## 🏃‍♂️ Running the Application

### Development Mode

To start the development server with hot reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`. The development server includes:
- Hot module replacement
- Automatic TypeScript compilation
- ESLint integration
- Error overlay

### Production Build

To build the application for production:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start Production Server

After building, start the production server:

```bash
npm start
```

The production server will run on `http://localhost:3000`.

### Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
vscode-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── articles/          # Articles page
│   ├── contact/           # Contact page
│   ├── github/            # GitHub page
│   ├── projects/          # Projects page
│   └── settings/          # Settings page
├── components/            # Reusable React components
│   ├── ArticleCard.tsx    # Article preview card
│   ├── Bottombar.tsx      # VS Code bottom bar
│   ├── CommandPalette.tsx # Command palette modal
│   ├── ContactCode.tsx    # Contact form with code styling
│   ├── Explorer.tsx       # File explorer sidebar
│   ├── Illustration.tsx   # Hero illustration
│   ├── Layout.tsx         # Main layout wrapper
│   ├── ProjectCard.tsx    # Project showcase card
│   ├── RepoCard.tsx       # GitHub repository card
│   ├── Sidebar.tsx        # VS Code sidebar
│   ├── Tab.tsx            # Tab component
│   ├── Tabsbar.tsx        # Tabs bar
│   ├── Terminal.tsx       # Interactive terminal
│   ├── ThemeInfo.tsx      # Theme information display
│   └── Titlebar.tsx       # VS Code title bar
├── data/                  # Static data files
│   └── projects.ts        # Projects data
├── lib/                   # Utility libraries
│   └── themes.ts          # Theme configurations
├── public/                # Static assets
│   ├── logos/            # Logo images
│   └── themes/           # Theme assets
├── styles/               # CSS Modules
│   ├── globals.css       # Global styles
│   ├── themes.css        # Theme styles
│   └── [Component].module.css # Component-specific styles
└── types/                # TypeScript type definitions
    └── index.ts          # Global type definitions
```

## 🎨 Customization

### Adding New Projects

Edit `data/projects.ts` to add new projects:

```typescript
export const projects = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Project description',
    image: '/path/to/image.jpg',
    tags: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://yourproject.com'
  }
  // Add more projects...
];
```

### Modifying Themes

Themes are defined in `lib/themes.ts`. Add new themes or modify existing ones:

```typescript
export const themes = {
  'your-theme': {
    '--background': '#your-color',
    '--foreground': '#your-color',
    // ... more CSS variables
  }
};
```

### Updating Personal Information

Update the home page content in `app/page.tsx` and other relevant pages.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📝 Scripts Overview

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   # Or use a different port
   npm run dev -- -p 3001
   ```

2. **Build fails**
   - Ensure all dependencies are installed: `npm install`
   - Clear Next.js cache: `rm -rf .next`

3. **TypeScript errors**
   - Run `npm run lint` to check for issues
   - Ensure TypeScript types are properly installed

### Performance Tips

- Use `npm run build` to create optimized production builds
- Enable gzip compression on your hosting platform
- Use a CDN for static assets

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kunal Jaiswal**
- GitHub: [@Kunall7890](https://github.com/Kunall7890)
- LinkedIn: [Your LinkedIn Profile]
- Email: [your-email@example.com]

---

Built with ❤️ using Next.js and TypeScript. Inspired by Visual Studio Code.
