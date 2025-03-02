# Ted Bundy Final Week Calendar

## Overview
This project is my first adventure into learning React—a web application that visualizes the key events of Ted Bundy's final week of freedom, from February 8 to February 14, 1978, before his arrest in Pensacola, Florida. As a beginner React project built with Vite, it features a titled header and a week-long calendar grid (Wednesday to Tuesday) with hourly slots from 8 am to 5 pm, showcasing significant moments with color-coded events and their locations. It blends historical storytelling with front-end development, using concise event descriptions and a visually escalating color scheme to reflect the growing intensity as Bundy’s capture approached.

## Features
- **Titled Header**: Displays "The Week Before Ted Bundy Got Arrested" with a chilling subtitle.
- **Calendar Grid**: A table showing the week of February 8–14, 1978, with hourly rows from 8 am to 5 pm.
- **Event Component**: Renders each event (e.g., "Bundy at motel") and location (e.g., "Lake City") within table cells.
- **Color Progression**: Events transition from calm (muted-green) to ominous (final-black), mirroring Bundy’s final days.
- **Styling**: Centered layout with a white content area on a brownish background.

## Learning Journey
As my first React project, I’ve learned and applied several core concepts using Vite:
- **Components**: Broke the app into reusable pieces—App for the overall structure, Calendar for the grid, and Event for individual entries. This taught me how to modularize code and manage UI logic.
- **Reusability**: The Event component is reused across the calendar with different props (event, location, color), showing how to create flexible, DRY (Don’t Repeat Yourself) code.
- **Props**: Passed data (e.g., event text, colors) from parent (Calendar) to child (Event), grasping how data flows in React.
- **JSX**: Used JSX to write HTML-like syntax in JavaScript, blending logic and presentation seamlessly.
- **CSS in React**: Managed styles with two CSS files (App.css for layout, index.css for calendar details), learning to scope and apply styles effectively.
- **Table Layout**: Experimented with HTML tables in React, handling dynamic rendering via map() to populate rows.

This project was a hands-on way to dive into React’s basics while exploring a dark historical narrative!

## Project Structure
- **timetabled/**: Root directory
  - **src/**: Source files
    - **main.jsx**: Entry point rendering the App
    - **App.jsx**: Top-level component with title and Calendar
    - **App.css**: Styles for the App component
    - **components/**: Component subdirectory
      - **Calendar.jsx**: Calendar grid component
      - **Event.jsx**: Reusable event component
    - **index.css**: Calendar-specific styles
  - **public/**: Public assets
    - **index.html**: HTML template with <div id="root"></div>
    - **vite.svg**: Vite logo (default)
  - **package.json**: Dependencies and scripts
  - **vite.config.js**: Vite configuration
  - **README.md**: This file

## Installation
1. **Clone the Repository**:
   git clone 
   cd timetabled

2. **Install Dependencies**:
- Ensure Node.js and npm are installed.
- Run:
  ```
  npm install
  ```
- Installs react, react-dom, and Vite dependencies as listed in package.json.

3. **Run the Project**:
npm run dev

- Opens at http://localhost:5173 (Vite’s default port) in your browser.

## Usage
- **View the App**: Open the app to see a titled header followed by a table with days (Wednesday–Tuesday) and hours (8 am–5 pm).
- **Event Details**: Events are placed in approximate time slots (not exact hours, for simplicity):
  - **Wed, 8 am**: "Bundy at motel - Lake City"
  - **Thu, 5 pm**: "Bundy kidnaps Leach - Lake City"
  - **Fri, 10 am**: "Police search - Lake City"
  - **Sat, 12 pm**: "Bundy flees - Tallahassee"
  - **Sun, 4 pm**: "Bundy in crowd - Tallahassee"
  - **Mon, 1 pm**: "Police get tips - Tallahassee"
  - **Tue, 10 am**: "Bundy gets caught - Pensacola"
- **Colors**: Observe the shift from muted green to dark slate gray, reflecting Bundy’s descent.

## Code Details

### `main.jsx`
- **Purpose**: Entry point that renders the App component into the DOM’s #root element.

### `App.jsx`
- **Purpose**: Wraps the Calendar in a titled container with styling from App.css.

### `Calendar.jsx`
- **Purpose**: Renders the week-long table grid with days and hours, placing Event components at key times.

### `Event.jsx`
- **Purpose**: Displays an event and location within a styled table cell, using props for customization.

### `App.css`
- **Purpose**: Styles the root app container (#root) and body, providing a centered white content area on a brownish background.

### `index.css`
- **Purpose**: Styles the calendar table and events with a color progression reflecting Bundy’s final week. Some body rules are overridden by App.css.

## Styling Choices
- **App Layout**: #root is a white, centered box (max 1280px) on a brownish body background (rgb(126, 122, 77)), with a clean sans-serif font.
- **Colors**: 
  - **Muted Green**: Calm start (Feb 8).
  - **Shadow Red**: Ominous crime (Feb 9).
  - **Warming Orange**: Investigation begins (Feb 10).
  - **Burnt Amber**: Risky moves (Feb 11).
  - **Fading Yellow**: False calm (Feb 12).
  - **Urgent Crimson**: Pursuit closes (Feb 13).
  - **Final Black**: Endgame (Feb 14).
- **Table**: bisque headers and time slots contrast the white app background.
- **Text**: <h5> (event) is larger; <h6> (location) is smaller and lighter for hierarchy.

## Notes
- **CSS Precedence**: App.css overrides index.css for body styles (e.g., min-width: 320px vs. 1000px). This is intentional for better responsiveness.
- **Times**: Approximate, not historically precise.
- **Setup**: Built with Vite, using main.jsx as the entry point.

## Future Enhancements
- **Exact Timestamps**: Add precise event times.
- **Tooltips**: Show full details on hover.
- **Responsive Design**: Further refine for smaller screens.
- **Dynamic Data**: Load events from JSON.

## Contributing
Fork, submit PRs, or suggest improvements via issues. As a beginner project, feedback on React best practices is welcome! Focus areas:
- Historical accuracy.
- UI/UX enhancements.
- CSS optimization.

## License
Unlicensed—free to use, modify, and share.

## Acknowledgments
- Inspired by true crime and my journey into React.
- Built with minor guidance from xAI’s Grok3—thanks for the guidance!









