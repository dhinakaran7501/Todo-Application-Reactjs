<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README - To-Do Application</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #007acc;
    }
    h1 {
      text-align: center;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-left: 4px solid #ccc;
      overflow-x: auto;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 5px;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 20px 0;
    }
    table, th, td {
      border: 1px solid #ddd;
    }
    th, td {
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #007acc;
      color: white;
    }
    .highlight {
      background-color: #007acc;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <h1>To-Do Application</h1>
  <h3 style="text-align: center;">
    <span class="highlight">Feature-Packed Task Management App</span>
  </h3>

  <p>
    Welcome to the <strong>To-Do Application</strong>! This application is designed for efficient task management with advanced features such as user authentication, task editing, filtering, and a dashboard to track progress. Built using <strong>React.js</strong> and <strong>Vite.js</strong>, this application follows a clean and scalable folder structure for easy maintainability.
  </p>

  <h2>📁 Folder Structure</h2>
  <pre>
src/
├── @types/        # TypeScript types and interfaces
├── assets/        # Static assets like images and icons
├── components/    # Reusable React components
├── config/        # Configuration files (e.g., environment variables)
├── layouts/       # Layout components for consistent page structure
├── routes/        # Route definitions for navigation
├── services/      # API calls and backend integrations
├── store/         # Global state management (e.g., Redux, Zustand)
├── utils/         # Utility functions (e.g., helper methods)
├── validation/    # Form validation logic
├── views/         # Pages of the application (e.g., Dashboard, Tasks)
├── App.tsx        # Main application component
├── index.css      # Global styles
├── main.tsx       # Entry point for the Vite application
├── vite-env.d.ts  # TypeScript declarations for Vite
  </pre>

  <h2>🔧 Features</h2>
  <ul>
    <li><strong>Authentication:</strong> Signup, Login, Logout, and protected routes with cookies.</li>
    <li><strong>Dashboard:</strong>
      <ul>
        <li>Displays total user count.</li>
        <li>Task statuses: Yet to Start, In Progress, Completed.</li>
      </ul>
    </li>
    <li><strong>Task Management:</strong>
      <ul>
        <li>Create, Edit, and Delete tasks.</li>
        <li>Filter tasks by status (e.g., Yet to Start, In Progress, Completed).</li>
        <li>Filter tasks by priority (High, Medium, Low).</li>
      </ul>
    </li>
    <li><strong>Theme Support:</strong> Light and Dark mode toggles.</li>
  </ul>

  <h2>⚙️ Setup and Installation</h2>
  <ol>
    <li><strong>Clone the Repository:</strong>
      <pre>git clone https://github.com/yourusername/todo-application.git</pre>
    </li>
    <li><strong>Navigate to the Project Directory:</strong>
      <pre>cd todo-application</pre>
    </li>
    <li><strong>Install Dependencies:</strong>
      <pre>npm install</pre>
    </li>
    <li><strong>Start the Development Server:</strong>
      <pre>npm run dev</pre>
    </li>
    <li><strong>Open the Application:</strong>
      <p>Visit <code>http://localhost:3000</code> in your browser.</p>
    </li>
  </ol>

  <h2>📊 Dashboard Overview</h2>
  <p>The dashboard provides a high-level view of tasks and user metrics:</p>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>User Count</td>
        <td>Displays the total number of registered users.</td>
      </tr>
      <tr>
        <td>Task Status</td>
        <td>Shows tasks categorized as "Yet to Start", "In Progress", and "Completed".</td>
      </tr>
    </tbody>
  </table>

  <h2>🎨 Themes</h2>
  <p>The application supports Light and Dark themes. Users can toggle between them to customize their experience.</p>

  <h2>👨‍💻 Author</h2>
  <p><strong>Your Name</strong></p>
  <p>
    LinkedIn: <a href="https://linkedin.com/in/yourprofile" style="color: #007acc;">Your LinkedIn</a><br>
    GitHub: <a href="https://github.com/yourusername" style="color: #007acc;">@yourusername</a>
  </p>

</body>
</html>
