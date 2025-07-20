# PartyBook 🎉

Your ultimate destination for discovering, booking, and hosting the best parties and events. PartyBook is like BookMyShow but specifically designed for party-going people who want to find amazing nightlife experiences, social events, and celebrations.

## Features ✨

- **Event Discovery**: Browse through various party categories including nightclub events, rooftop parties, pool parties, theme parties, and more
- **Advanced Search**: Find parties by location, date, price range, and party type
- **Event Booking**: Seamless ticket booking experience with real-time availability
- **Featured Events**: Highlighted popular and trending parties
- **User Reviews**: See ratings and reviews from other party-goers
- **Host Events**: Platform for event organizers to list their parties
- **Mobile Responsive**: Beautiful, modern UI that works perfectly on all devices

## Party Categories 🎭

- **Nightclub Events**: DJ sets, electronic music events, club nights
- **Private Parties**: Birthday celebrations, corporate events, private gatherings
- **Rooftop Parties**: Open-air events with stunning city views
- **Pool Parties**: Summer vibes, poolside fun, beach parties
- **Live Music**: Concerts, live bands, acoustic performances
- **Theme Parties**: Costume parties, retro nights, themed celebrations

## Tech Stack 🚀

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom gradient designs
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Heroicons for consistent iconography
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with beautiful desktop experience

## Getting Started 🏁

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd partybook
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure 📁

```
partybook/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation and search
│   │   ├── Hero.tsx            # Landing page hero section
│   │   ├── Categories.tsx      # Party category cards
│   │   ├── FeaturedEvents.tsx  # Highlighted events
│   │   ├── UpcomingEvents.tsx  # Event listings
│   │   └── Footer.tsx          # Site footer
│   ├── globals.css             # Global styles and Tailwind
│   ├── layout.tsx              # Root layout component
│   └── page.tsx                # Home page
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies and scripts
```

## Key Features Implementation 🛠️

### Search & Discovery
- Global search bar in the header
- Category-based browsing
- Featured events showcase
- Upcoming events timeline

### Event Display
- Card-based layout for easy browsing
- Event details including venue, date, time, price
- Rating system and attendee count
- High-quality event imagery

### User Experience
- Smooth animations and transitions
- Responsive design for all screen sizes
- Intuitive navigation
- Fast loading times

### Booking Flow
- One-click booking buttons
- Clear pricing display
- Ticket quantity selection
- Secure checkout process

## Customization 🎨

### Colors & Branding
The application uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Purple gradient (`#a855f7` to `#9333ea`)
- **Secondary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Custom gradients**: Party-themed backgrounds

### Adding New Event Categories
1. Update the `categories` array in `Categories.tsx`
2. Add corresponding icons and color schemes
3. Update navigation and filtering logic

### Event Data
Currently using mock data. To integrate with a backend:
1. Replace static arrays with API calls
2. Implement data fetching in components
3. Add loading states and error handling

## Future Enhancements 🚀

- **User Authentication**: Sign up, login, user profiles
- **Payment Integration**: Stripe/PayPal for ticket purchases
- **Event Management**: Dashboard for event organizers
- **Social Features**: Friend connections, party recommendations
- **Location Services**: GPS-based event discovery
- **Notifications**: Push notifications for event reminders
- **Reviews System**: Detailed event reviews and ratings
- **Calendar Integration**: Add events to personal calendars

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Support 💬

For support, email support@partybook.com or join our Discord community.

---

**PartyBook** - Where every night becomes unforgettable! 🎉✨