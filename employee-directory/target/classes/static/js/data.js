// Check if mockEmployees data already exists in localStorage
// If not, initialize it with default mock employee data
if (!localStorage.getItem("mockEmployees")) {
  const initialEmployees = [
    {
      id: 1752378369256,
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
      department: "HR",
      role: "Manager"
    },
    {
      id: 1752335466582,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      department: "IT",
      role: "Developer"
    },
    {
      id: 1752318663582,
      firstName: "Charlie",
      lastName: "Lee",
      email: "charlie@example.com",
      department: "Finance",
      role: "Analyst"
    }
  ];

  // Save initial employee data into localStorage
  localStorage.setItem("mockEmployees", JSON.stringify(initialEmployees));
}

// Load employee data from localStorage into a global variable
window.mockEmployees = JSON.parse(localStorage.getItem("mockEmployees"));

// Utility function to update localStorage when mockEmployees is changed
function saveToStorage() {
  localStorage.setItem("mockEmployees", JSON.stringify(window.mockEmployees));
}
