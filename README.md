# Dark Web Terminal Profile

A mysterious and engaging personal profile website that simulates a dark web terminal interface. This project creates an interactive experience for visitors to explore your "hacker" persona through a command-line interface.

## Features

- Realistic terminal interface with a dark theme
- Interactive command system
- Glitch text effect for headers
- Typewriter animation for the hacking simulation
- Responsive design
- Command history navigation

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/saikothasan/darkweb-terminal-profile.git
   ```

2. Navigate to the project directory:
   ```
   cd darkweb-terminal-profile
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application.

## Usage

Visitors can interact with the terminal by typing commands and pressing Enter. Available commands include:

- `help`: Show available commands
- `about`: Display information about you
- `skills`: List your skills
- `experience`: Show your work experience
- `education`: Display your educational background
- `contact`: Show your contact information
- `projects`: Display information about your projects
- `clear`: Clear the terminal screen
- `date`: Show the current date and time
- `whoami`: Display the current user
- `hack`: Initiate a fake hacking sequence

Users can also use the up and down arrow keys to navigate through command history.

## Customization

To customize the content for your own profile:

1. Open \`components/Terminal.tsx\`
2. Locate the \`commands\` array
3. Modify the content of each command's \`action\` function to reflect your personal information
4. Update the \`HackingSimulation\` component if you want to change the hacking animation
5. Adjust the styling in the components to match your preferred color scheme

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/saikothasan/darkweb-terminal-profile/issues) if you want to contribute.

## Author

Your Name - [Your Website](https://yourwebsite.com)

Project Link: [https://github.com/saikothasan/darkweb-terminal-profile](https://github.com/saikothasan/darkweb-terminal-profile)

