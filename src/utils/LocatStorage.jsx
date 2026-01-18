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
            failed: 1,
            new: 1,
            accepted: 0
            },
            tasks: [
            {
                active: true,
                "new task": true,
                "completed task": false,
                "failed task": false,
                "task title": "Design Login Page",
                "task description": "Create responsive login UI using Tailwind.",
                "task date": "2026-01-10",
                "task category": "Design"
            },
            {
                active: false,
                "new task": false,
                "completed task": true,
                "failed task": false,
                "task title": "Fix Button Styles",
                "task description": "Correct hover and active button states.",
                "task date": "2026-01-08",
                "task category": "UI"
            },
            {
                active: false,
                "new task": false,
                "completed task": false,
                "failed task": true,
                "task title": "Deploy Preview",
                "task description": "Deploy preview build on test server.",
                "task date": "2026-01-05",
                "task category": "Deployment"
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
                "new task": true,
                "completed task": false,
                "failed task": false,
                "task title": "Build Task Card",
                "task description": "Create reusable task card component.",
                "task date": "2026-01-11",
                "task category": "Frontend"
            },
            {
                active: false,
                "new task": false,
                "completed task": true,
                "failed task": false,
                "task title": "Refactor CSS",
                "task description": "Clean up unused Tailwind classes.",
                "task date": "2026-01-07",
                "task category": "Refactor"
            },
            {
                active: false,
                "new task": false,
                "completed task": false,
                "failed task": true,
                "task title": "API Error Handling",
                "task description": "Handle failed API responses properly.",
                "task date": "2026-01-04",
                "task category": "Backend"
            },
            {
                active: true,
                "new task": false,
                "completed task": false,
                "failed task": false,
                "task title": "Pagination Logic",
                "task description": "Implement pagination for task list.",
                "task date": "2026-01-12",
                "task category": "Logic"
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
            failed: 1,
            new: 1,
            accepted: 0
            },
            tasks: [
            {
                active: true,
                "new task": true,
                "completed task": false,
                "failed task": false,
                "task title": "Write User Guide",
                "task description": "Prepare documentation for employees.",
                "task date": "2026-01-12",
                "task category": "Documentation"
            },
            {
                active: false,
                "new task": false,
                "completed task": true,
                "failed task": false,
                "task title": "Unit Testing",
                "task description": "Test core components.",
                "task date": "2026-01-09",
                "task category": "Testing"
            },
            {
                active: false,
                "new task": false,
                "completed task": false,
                "failed task": true,
                "task title": "Server Config",
                "task description": "Fix environment variables.",
                "task date": "2026-01-03",
                "task category": "DevOps"
            },
            {
                active: true,
                "new task": false,
                "completed task": false,
                "failed task": false,
                "task title": "Error Messages",
                "task description": "Improve validation error messages.",
                "task date": "2026-01-13",
                "task category": "UX"
            },
            {
                active: false,
                "new task": false,
                "completed task": true,
                "failed task": false,
                "task title": "Code Review",
                "task description": "Review teammate pull requests.",
                "task date": "2026-01-06",
                "task category": "Review"
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
            failed: 1,
            new: 1,
            accepted: 0
            },
            tasks: [
            {
                active: true,
                "new task": true,
                "completed task": false,
                "failed task": false,
                "task title": "Analytics Charts",
                "task description": "Add dashboard charts.",
                "task date": "2026-01-14",
                "task category": "Analytics"
            },
            {
                active: false,
                "new task": false,
                "completed task": true,
                "failed task": false,
                "task title": "Optimize Queries",
                "task description": "Improve database query performance.",
                "task date": "2026-01-08",
                "task category": "Database"
            },
            {
                active: false,
                "new task": false,
                "completed task": false,
                "failed task": true,
                "task title": "Migration Script",
                "task description": "Fix migration errors on staging.",
                "task date": "2026-01-02",
                "task category": "Migration"
            },
            {
                active: true,
                "new task": false,
                "completed task": false,
                "failed task": false,
                "task title": "Logs System",
                "task description": "Implement logging mechanism for actions.",
                "task date": "2026-01-15",
                "task category": "System"
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
            failed: 1,
            new: 1,
            accepted: 0
            },
            tasks: [
            {
                active: true,
                "new task": true,
                "completed task": false,
                "failed task": false,
                "task title": "Admin Dashboard",
                "task description": "Create admin dashboard layout.",
                "task date": "2026-01-16",
                "task category": "Admin"
            },
            {
                active: false,
                "new task": false,
                "completed task": true,
                "failed task": false,
                "task title": "Navbar Fix",
                "task description": "Fix responsive navbar issues.",
                "task date": "2026-01-09",
                "task category": "UI Fix"
            },
            {
                active: false,
                "new task": false,
                "completed task": false,
                "failed task": true,
                "task title": "Performance Audit",
                "task description": "Analyze slow components and optimize.",
                "task date": "2026-01-03",
                "task category": "Performance"
            },
            {
                active: true,
                "new task": false,
                "completed task": false,
                "failed task": false,
                "task title": "Role Permissions",
                "task description": "Define role-based access for employees.",
                "task date": "2026-01-17",
                "task category": "Security"
            },
            {
                active: false,
                "new task": false,
                "completed task": true,
                "failed task": false,
                "task title": "UI Review",
                "task description": "Review overall UI consistency.",
                "task date": "2026-01-06",
                "task category": "Review"
            },
            {
                active: true,
                "new task": false,
                "completed task": false,
                "failed task": false,
                "task title": "Notifications",
                "task description": "Add email notifications feature.",
                "task date": "2026-01-18",
                "task category": "Feature"
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
    localStorage.setItem('users', JSON.stringify(users))
}
export const getLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    return users
}