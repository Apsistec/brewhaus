# Brewhaus

A modern brewery discovery application built with Angular 18 and Ionic 8, featuring a comprehensive brewery database powered by the OpenBreweryDB API.

## Features

- 🍺 Browse breweries with infinite scroll
- 🔍 Advanced search functionality with type filtering
- 📱 Responsive design optimized for mobile and desktop
- 📍 Detailed brewery information with location mapping
- 📱 Native mobile support via Capacitor

## Technologies Used

- Angular 18
- Ionic 8
- Capacitor
- OpenBreweryDB API
- TailwindCSS

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v8 or later)
- Ionic CLI
```bash
npm install -g @ionic/cli
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/brewhaus.git
cd brewhaus
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
ionic serve
```

The application will be available at `http://localhost:8100`

### Building for Production

Build the web application:
```bash
ionic build --prod
```

### Mobile Development

Add iOS platform:
```bash
ionic cap add ios
ionic cap sync
npx cap open ios
```

Add Android platform:
```bash
ionic cap add android
ionic cap sync
npx cap open android
```

## Project Structure

```
brewhaus/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   └── brewery-detail/
│   │   ├── services/
│   │   └── shared/
│   ├── assets/
│   ├── theme/
│   └── environments/
├── capacitor.config.ts
├── ngsw-config.json
└── manifest.webmanifest
```

## Features in Detail

### Home Page
- Infinite scroll list of breweries
- Search functionality with type filtering
- Responsive grid layout
- Quick access to brewery details

### Brewery Detail Page
- Comprehensive brewery information
- Contact details with click-to-call/website
- Location mapping integration
- Responsive image gallery

### Mobile Features
- Native device integration
- Optimized layouts
- Touch gestures
- Platform-specific UI elements

## API Integration

The application uses the OpenBreweryDB API. Key endpoints:

- GET `/breweries` - List breweries
- GET `/breweries/search` - Search breweries
- GET `/breweries/{id}` - Get brewery details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenBreweryDB](https://www.openbrewerydb.org/) for providing the API
- [Ionic Framework](https://ionicframework.com/) for the UI components
- [Angular](https://angular.io/) for the framework
- All contributors who have helped shape this project


Project Link: [https://github.com/apsistec/brewhaus](https://github.com/yourusername/brewhaus)

