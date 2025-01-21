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
        <li>Filter tasks by priority (High, Low).</li>
      </ul>
    </li>
    <li><strong>Theme Support:</strong> Light and Dark mode toggles.</li>
  </ul>

  <h2>⚙️ Setup and Installation</h2>
  <ol>
    <li><strong>Clone the Repository:</strong>
      <pre>git clone https://github.com/dhinakaran7501/Todo-Application-Reactjs.git</pre>
    </li>
    <li><strong>Navigate to the Project Directory:</strong>
      <pre>cd Todo-Application-Reactjs</pre>
    </li>
    <li><strong>Install Dependencies:</strong>
      <pre>npm install</pre>
    </li>
    <li><strong>Start the Development Server:</strong>
      <pre>npm run dev</pre>
    </li>
    <li><strong>Start the JSON Server:</strong>
      <pre>npm start</pre>
    </li>
    <li><strong>Open the Application:</strong>
      <p>Visit <code>http://localhost:5173</code> in your browser.</p>
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
        <td>Task Lists</td>
        <td>Shows task lists with status and priority.</td>
      </tr>
    </tbody>
  </table>

  <h2>🎨 Themes</h2>
  <p>The application supports Light and Dark themes. Users can toggle between them to customize their experience.</p>

  <h2>👨‍💻 Author</h2>
  <p><strong>Your Name</strong></p>
  <p>
    LinkedIn: <a href="https://www.linkedin.com/in/dhinakaran-ramasamy" style="color: #007acc;">Dhinakaran Ramasamy</a><br>
    GitHub: <a href="https://github.com/dhinakaran7501" style="color: #007acc;">@dhinakaran7501</a><br>
    Portfolio: <a href="https://dhinakaran-dev-portfolio.netlify.app/" style="color: #007acc;">Dhinakaran Ramasamy</a>
  </p>
