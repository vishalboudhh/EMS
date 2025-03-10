const employees = [
    {
      "id": 1,
      "firstName": "Aarav",
      "email": "aarav@gmail.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Complete the project report",
          "date": "2025-01-25",
          "category": "Work",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Prepare for client meeting",
          "date": "2025-01-26",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Submit the expense report",
          "date": "2025-01-27",
          "category": "Finance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstName": "Ishaan",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Organize team outing",
          "date": "2025-01-28",
          "category": "Event",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Create a presentation for Q1",
          "date": "2025-01-30",
          "category": "Presentation",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 3,
      "firstName": "Vihaan",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Update software licenses",
          "date": "2025-01-25",
          "category": "IT",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Schedule maintenance",
          "date": "2025-01-29",
          "category": "Maintenance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Perform security audit",
          "date": "2025-02-01",
          "category": "Security",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 4,
      "firstName": "Anika",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Plan a training session",
          "date": "2025-01-31",
          "category": "Training",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": 5,
      "firstName": "Dev",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Update team progress sheet",
          "date": "2025-01-27",
          "category": "Tracking",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Plan marketing strategy",
          "date": "2025-02-03",
          "category": "Marketing",
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Coordinate with vendors",
          "date": "2025-01-28",
          "category": "Operations",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskNumbers": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    }
  ]
  
  const admin = [
    {
      "id": 1,
      "email": "admin@gmail.com",
      "password": "123"
    }
  ]
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { employees, admin }
  }
  