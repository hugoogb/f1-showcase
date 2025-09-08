# F1 Showcase - Modern Vue.js Formula 1 Teams & Drivers App

A modern, fully refactored Vue.js application showcasing Formula 1 teams and drivers using the latest OpenF1 API. This project has been completely upgraded and optimized for 2024.

## 🚀 Recent Updates & Improvements

### ✅ Major Upgrades Completed
- **Vue.js 3.5.13** - Latest stable version with Composition API
- **TypeScript Support** - Full TypeScript integration for better type safety
- **Modern Build Tools** - Vite 6.0.7 with optimized build configuration
- **Security Fixes** - Resolved all critical vulnerabilities
- **New F1 API Integration** - Switched to OpenF1 API for real-time data

### 🔧 Technical Improvements

#### API & Data Management
- **OpenF1 API Integration**: Real-time Formula 1 data from `https://api.openf1.org/v1`
- **Modern Composables**: Vue 3 composables for state management and API calls
- **Caching System**: Intelligent API response caching (5-minute duration)
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **TypeScript Interfaces**: Strongly typed data structures for F1 entities

#### Performance Optimizations
- **Code Splitting**: Vendor chunks separated for better loading
- **Lazy Loading**: Components load on demand
- **Image Optimization**: Modern image formats (AVIF) with fallbacks
- **Build Optimization**: Enhanced Vite configuration for production builds
- **Memory Management**: Efficient state management with reactive composables

#### Modern Development Practices
- **Composition API**: All components use Vue 3 Composition API
- **TypeScript**: Full TypeScript support throughout the codebase
- **Modern ES Modules**: ESNext target for optimal performance
- **Reactive State**: Centralized state management with composables
- **Local Storage**: Persistent team selection across sessions

## 🏁 Features

### Current Features
- **Team Selection**: Interactive team selector with visual feedback
- **Driver Information**: Detailed driver cards with official F1 data
- **Real-time Data**: Live F1 data from the 2024 season
- **Responsive Design**: Optimized for all device sizes
- **Team Branding**: Dynamic theming based on team colors
- **Loading States**: Smooth loading animations and skeleton screens

### Data Sources
- **Drivers**: Real-time driver information including names, numbers, and team affiliations
- **Teams**: Current F1 teams with official branding colors
- **Sessions**: Access to current season race sessions and timing data

## 🛠️ Technology Stack

### Frontend
- **Vue.js 3.5.13** - Progressive JavaScript framework
- **TypeScript 5.7.2** - Static type checking
- **Vite 6.0.7** - Next-generation frontend tooling
- **Vue Router 4.5.0** - Official router for Vue.js

### Development Tools
- **ESLint 9.17.0** - Code linting and formatting
- **Prettier 3.4.2** - Code formatting
- **Vue TSC 2.1.10** - TypeScript checking for Vue files

### API
- **OpenF1 API** - Official Formula 1 data provider
- **RESTful Architecture** - Modern API integration patterns

## 📁 Project Structure

```
src/
├── components/           # Vue components
│   ├── skeletons/       # Loading skeleton components
│   ├── TeamCard.vue     # Individual team display
│   ├── TeamContainer.vue # Main container component
│   ├── TeamDrivers.vue  # Driver listings
│   ├── DriverCard.vue   # Individual driver cards
│   └── ...
├── composables/         # Vue 3 composables
│   ├── useF1Api.ts     # API integration composable
│   └── useActiveTeam.ts # Team state management
├── types/              # TypeScript type definitions
│   └── f1.ts          # F1-specific interfaces
├── assets/            # Static assets
│   ├── imgs/          # Images and media
│   └── *.css          # Stylesheets
└── main.js            # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd f1-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .example.env .env
   ```
   The `.env` file is pre-configured with the OpenF1 API endpoint.

4. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Lint code with ESLint
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

## 🔧 Configuration

### Environment Variables
- `VITE_API_BASE_URL`: OpenF1 API base URL (pre-configured)

### Build Configuration
The application uses Vite with optimized settings:
- **Target**: ESNext for modern browsers
- **Code Splitting**: Vendor libraries separated
- **Tree Shaking**: Unused code elimination
- **Minification**: Production builds are minified

## 🏎️ API Integration

### OpenF1 API Endpoints Used
- `/drivers?session_key=latest` - Current driver lineup
- `/sessions?year=2024` - Current season sessions

### Data Caching
- **Cache Duration**: 5 minutes per endpoint
- **Cache Strategy**: In-memory caching with timestamp validation
- **Cache Management**: Automatic cache clearing functionality

## 🎨 Styling & Theming

- **Dynamic Theming**: Team colors applied throughout the interface
- **Modern CSS**: Flexbox layouts with smooth transitions
- **Responsive Design**: Mobile-first approach
- **Loading States**: Skeleton screens and animations

## 🔒 Security & Performance

### Security Improvements
- All critical npm vulnerabilities resolved
- Modern dependency versions
- Secure API integration patterns

### Performance Features
- Component lazy loading
- Image optimization with modern formats
- Efficient bundle splitting
- Memory-efficient state management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **OpenF1.org** for providing the real-time Formula 1 data API
- **Vue.js Team** for the excellent framework and ecosystem
- **Formula 1** for the exciting sport that inspired this project

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](../../issues) page
2. Review the API documentation at [OpenF1.org](https://openf1.org)
3. Ensure all dependencies are up to date

---

**Version**: 2.0.0  
**Last Updated**: December 2024  
**Author**: Hugo García Benjumea