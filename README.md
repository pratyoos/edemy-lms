
# Edemy Login Management System

A modern login management system built with React to handle user authentication, account creation, and educator dashboard functionality. This project leverages the Clerk authentication system for managing user sessions and providing an easy-to-use interface for learners and educators.

## Features

- **User Authentication**: Implemented with Clerk to handle user sign-ins and registrations.
- **Responsive Layout**: Built using Tailwind CSS for a fully responsive design across all device sizes.
- **Dashboard Management**: Differentiated views for learners and educators with access to relevant dashboards.
- **Course Management**: Displays courses and allows users to view or enroll.
- **Testimonials Section**: Showcases feedback from users, demonstrating how the platform has impacted their learning journey.
- **Dynamic Navigation**: Changes depending on whether the user is an educator or a learner, with dynamic links to the Educator Dashboard and My Enrollments.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation between different routes and pages.
- **Tailwind CSS**: For responsive design and utility-first styling.
- **Clerk**: For user authentication, including sign-in, sign-up, and user management.
- **JavaScript**: Core language for handling application logic.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/pratyoos/edemy-lms.git
    ```

2. Navigate to the project directory:
    ```bash
    cd edemy-lms
    cd client
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up your environment variables:
    - Create a `.env` file in the root of the project.
    - Add the required environment variables (e.g., Clerk API keys):
      ```
      VITE_CLERK_FRONTEND_API=your-clerk-frontend-api-key
      VITE_CLERK_API_KEY=your-clerk-api-key
      ```

5. Run the development server:
    ```bash
    npm run dev
    ```

6. Visit `http://localhost:3000` in your browser to see the app in action.

## Usage

- **Sign Up**: Users can create an account by providing basic details like email and password.
- **Login**: Registered users can log in using their credentials.
- **Become an Educator**: After logging in, learners can choose to become an educator by clicking the "Become Educator" button.
- **Educator Dashboard**: Educators can access a dashboard for managing their courses and tracking progress.
- **My Enrollments**: Learners can view the courses they have enrolled in from their personal dashboard.

## Folder Structure

```
src/
├── assets/               # Static assets like images and mock data
├── components/           # Reusable React components (Navbar, CourseCard, etc.)
├── context/              # Context providers for managing global state (AppContext)
├── pages/                # React pages (Home, CourseList, EducatorDashboard, etc.)
└── App.js                # Main application entry point
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## Author:

Made with ❤️ by [Pratyoos](https://github.com/pratyoos).
