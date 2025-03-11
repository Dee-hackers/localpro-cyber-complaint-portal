
# HackAlert Setup Instructions

This guide will help you set up and run the HackAlert application in Visual Studio Code.

## Prerequisites

Make sure you have the following installed on your computer:

1. **Node.js** (v14 or newer)
   - Download from: https://nodejs.org/

2. **Visual Studio Code**
   - Download from: https://code.visualstudio.com/

## Step-by-Step Setup Instructions

### 1. Download the Project

- Download the HackAlert project files to your computer
- Extract the zip file if necessary

### 2. Open the Project in Visual Studio Code

- Open Visual Studio Code
- Go to File > Open Folder
- Navigate to the HackAlert project folder and click "Open"

### 3. Install Dependencies

- Open the Terminal in VS Code (View > Terminal)
- Run the following command:
  ```
  npm install
  ```
  This will install all required packages listed in package.json

### 4. Start the Development Server

- In the terminal, run:
  ```
  npm run dev
  ```
  This will start the development server

- Open your web browser and navigate to:
  ```
  http://localhost:5173
  ```

### 5. Making Changes

- Edit files in the `src` folder
- The browser will automatically reload when you save changes

## Project Structure Overview

- `src/components/` - Reusable UI components
- `src/pages/` - Main application pages
- `src/services/` - API and data services

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed:
   ```
   npm install
   ```

2. Clear your browser cache or try in incognito mode

3. Check the terminal for error messages

For backend functionality, refer to the server setup in INSTALL.md.
