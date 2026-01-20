const users = {
    employees: [
        {
            name: "Ali Raza",
            id: 1,
            email: "employee1@company.com",
            password: "123",
            taskNumbers: {
            active: 1,
            completed: 1,
            failed: 0,
            new: 1,
            accepted: 0
            },
            tasks: [
            {
                active: true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Design Login Page",
                "taskDescription": "Create responsive login UI using Tailwind.",
                "taskDate": "2026-01-10",
                "taskCategory": "Design"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Fix Button Styles",
                "taskDescription": "Correct hover and active button states.",
                "taskDate": "2026-01-08",
                "taskCategory": "UI"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true,
                "taskTitle": "Deploy Preview",
                "taskDescription": "Deploy preview build on test server.",
                "taskDate": "2026-01-05",
                "taskCategory": "Deployment"
            }
            ]
        },

        {
            name: "Ahmed Khan",
            id: 2,
            email: "employee2@company.com",
            password: "123",
            taskNumbers: {
            active: 2,
            completed: 1,
            failed: 1,
            new: 1,
            accepted: 0
            },
            tasks: [
            {
                active: true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Build Task Card",
                "taskDescription": "Create reusable task card component.",
                "taskDate": "2026-01-11",
                "taskCategory": "Frontend"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Refactor CSS",
                "taskDescription": "Clean up unused Tailwind classes.",
                "taskDate": "2026-01-07",
                "taskCategory": "Refactor"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true,
                "taskTitle": "API Error Handling",
                "taskDescription": "Handle failed API responses properly.",
                "taskDate": "2026-01-04",
                "taskCategory": "Backend"
            },
            {
                active: true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Pagination Logic",
                "taskDescription": "Implement pagination for task list.",
                "taskDate": "2026-01-12",
                "taskCategory": "Logic"
            }
            ]
        },

        {
            name: "Usman Ali",
            id: 3,
            email: "employee3@company.com",
            password: "123",
            taskNumbers: {
            active: 2,
            completed: 2,
            failed: 0,
            new: 1,
            accepted: 0
            },
            tasks: [
            {
                active: true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Write User Guide",
                "taskDescription": "Prepare documentation for employees.",
                "taskDate": "2026-01-12",
                "taskCategory": "Documentation"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Unit Testing",
                "taskDescription": "Test core components.",
                "taskDate": "2026-01-09",
                "taskCategory": "Testing"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true,
                "taskTitle": "Server Config",
                "taskDescription": "Fix environment variables.",
                "taskDate": "2026-01-03",
                "taskCategory": "DevOps"
            },
            {
                active: true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Error Messages",
                "taskDescription": "Improve validation error messages.",
                "taskDate": "2026-01-13",
                "taskCategory": "UX"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review teammate pull requests.",
                "taskDate": "2026-01-06",
                "taskCategory": "Review"
            }
            ]
        },

        {
            name: "Bilal Hussain",
            id: 4,
            email: "employee4@company.com",
            password: "123",
            taskNumbers: {
            active: 2,
            completed: 1,
            failed: 0,
            new: 1,
            accepted: 0
            },
            tasks: [
            {
                active: true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Analytics Charts",
                "taskDescription": "Add dashboard charts.",
                "taskDate": "2026-01-14",
                "taskCategory": "Analytics"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Optimize Queries",
                "taskDescription": "Improve database query performance.",
                "taskDate": "2026-01-08",
                "taskCategory": "Database"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true,
                "taskTitle": "Migration Script",
                "taskDescription": "Fix migration errors on staging.",
                "taskDate": "2026-01-02",
                "taskCategory": "Migration"
            },
            {
                active: true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Logs System",
                "taskDescription": "Implement logging mechanism for actions.",
                "taskDate": "2026-01-15",
                "taskCategory": "System"
            }
            ]
        },

        {
            name: "Hamza Sheikh",
            id: 5,
            email: "employee5@company.com",
            password: "123",
            taskNumbers: {
            active: 3,
            completed: 2,
            failed: 0,
            new: 1,
            accepted: 0
            },
            tasks: [
            {
                active: true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Admin Dashboard",
                "taskDescription": "Create admin dashboard layout.",
                "taskDate": "2026-01-16",
                "taskCategory": "Admin"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Navbar Fix",
                "taskDescription": "Fix responsive navbar issues.",
                "taskDate": "2026-01-09",
                "taskCategory": "UI Fix"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true,
                "taskTitle": "Performance Audit",
                "taskDescription": "Analyze slow components and optimize.",
                "taskDate": "2026-01-03",
                "taskCategory": "Performance"
            },
            {
                active: true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Role Permissions",
                "taskDescription": "Define role-based access for employees.",
                "taskDate": "2026-01-17",
                "taskCategory": "Security"
            },
            {
                active: false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "UI Review",
                "taskDescription": "Review overall UI consistency.",
                "taskDate": "2026-01-06",
                "taskCategory": "Review"
            },
            {
                active: true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Notifications",
                "taskDescription": "Add email notifications feature.",
                "taskDate": "2026-01-18",
                "taskCategory": "Feature"
            }
            ]
        }
        ],

  admin: {
    id: 1,
    email: "admin@company.com",
    password: 123
  }
};


export const setLocalStorage = () => {
  const existing = localStorage.getItem("users");

  if (!existing) {
    localStorage.setItem("users", JSON.stringify(users));
  }
};

export const getLocalStorage = () => {
  try {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : null;
  } catch (error) {
    console.error("Invalid users data in localStorage", error);
    return null;
  }
};