// Initialize current page and default items per page
let currentPage = 1;
let itemsPerPage = 10;

// Handle "Show" dropdown changes to adjust pagination
document.getElementById("itemsPerPage").addEventListener("change", e => {
  itemsPerPage = parseInt(e.target.value);
  currentPage = 1;
  renderEmployees();
});

// Load initial data on page load
document.addEventListener("DOMContentLoaded", () => {
  renderEmployees();
});

// Main function to render employee cards + pagination
function renderEmployees() {
  const container = document.getElementById("employeeList");
  const pagination = document.getElementById("pagination");
  container.innerHTML = "";
  pagination.innerHTML = "";

  let employees = [...mockEmployees];

  // Search filter (by name or email)
  if (activeSearch) {
    employees = employees.filter(e =>
      e.firstName.toLowerCase().includes(activeSearch) ||
      e.lastName.toLowerCase().includes(activeSearch) ||
      e.email.toLowerCase().includes(activeSearch)
    );
  }

  // Filter by first name
  if (activeFilters.firstName) {
    employees = employees.filter(e =>
      e.firstName.toLowerCase().includes(activeFilters.firstName)
    );
  }

  // Filter by department
  if (activeFilters.department) {
    employees = employees.filter(e => e.department === activeFilters.department);
  }

  // Filter by role
  if (activeFilters.role) {
    employees = employees.filter(e => e.role === activeFilters.role);
  }

  // Sorting logic
  if (activeSort === "firstName") {
    employees.sort((a, b) => a.firstName.localeCompare(b.firstName));
  } else if (activeSort === "department") {
    employees.sort((a, b) => a.department.localeCompare(b.department));
  }

  // Calculate pagination range
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const employeesToShow = employees.slice(start, end);

  // Render each employee card
  if (employeesToShow.length === 0) {
    container.innerHTML = "<p>No matching employees found.</p>";
    return;
  }

  employeesToShow.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <p><strong>Employee ID:</strong> ${emp.id}</p>
      <p><strong>First Name:</strong> ${emp.firstName}</p>
      <p><strong>Last Name:</strong> ${emp.lastName}</p>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <div class="card-buttons">
        <button class="edit-btn" onclick="editEmployee(${emp.id})">Edit</button>
        <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });

  // Render pagination buttons
  if (totalPages > 1) {
    // Previous Button
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "Prev";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
      currentPage--;
      renderEmployees();
    };
    pagination.appendChild(prevBtn);

    // Numbered Buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.innerText = i;
      if (i === currentPage) pageBtn.classList.add("active");
      pageBtn.onclick = () => {
        currentPage = i;
        renderEmployees();
      };
      pagination.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
      currentPage++;
      renderEmployees();
    };
    pagination.appendChild(nextBtn);
  }
}

// State variables for search, filters, sort
let activeSearch = "";
let activeFilters = {};
let activeSort = "";

// Search bar functionality
document.querySelector(".search-input").addEventListener("input", e => {
  activeSearch = e.target.value.toLowerCase();
  renderEmployees();
});

// Sort dropdown change handler
document.getElementById("sortBy").addEventListener("change", e => {
  activeSort = e.target.value;
  renderEmployees();
});

// Toggle visibility of filter panel
document.querySelector(".filter-btn").addEventListener("click", () => {
  document.getElementById("filterPanel").classList.toggle("hidden");
});

// Navigate to edit form with employee ID
function editEmployee(id) {
  localStorage.setItem("editId", id);
  window.location.href = "form.html";
}

// Remove employee from mock list
function deleteEmployee(id) {
  const index = mockEmployees.findIndex(e => e.id === id);
  if (index !== -1) {
    mockEmployees.splice(index, 1);
    saveToStorage();     // Persist updated data
    renderEmployees();   // Refresh UI
  } else {
    alert("Employee not found.");
  }
}

// Apply filter values from the filter panel
function applyFilters() {
  activeFilters = {
    firstName: document.getElementById("filterFirstName").value.toLowerCase(),
    department: document.getElementById("filterDepartment").value,
    role: document.getElementById("filterRole").value
  };
  document.getElementById("filterPanel").classList.add("hidden");
  renderEmployees();
}

// Clear all applied filters and refresh list
function clearFilters() {
  activeFilters = {};
  document.getElementById("filterFirstName").value = "";
  document.getElementById("filterDepartment").value = "";
  document.getElementById("filterRole").value = "";
  renderEmployees();
}
