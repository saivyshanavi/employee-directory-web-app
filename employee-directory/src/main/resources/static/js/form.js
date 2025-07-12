// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("employeeForm");
  const editId = localStorage.getItem("editId"); // Get edit ID from localStorage (if any)
  let isEdit = false;

  // If editId exists, pre-fill the form with the corresponding employee's data
  if (editId) {
    const emp = mockEmployees.find(e => e.id == editId);
    if (emp) {
      // Populate form fields with employee data
      document.getElementById("firstName").value = emp.firstName;
      document.getElementById("lastName").value = emp.lastName;
      document.getElementById("email").value = emp.email;
      document.getElementById("department").value = emp.department;
      document.getElementById("role").value = emp.role;

      // Update UI for edit mode
      document.getElementById("formTitle").innerText = "Edit Employee";
      document.getElementById("submitBtn").innerText = "Update";
      isEdit = true;
    }
  }

  // Handle form submission for both Add and Edit modes
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create new employee object from form input values
    const newEmp = {
      id: isEdit ? parseInt(editId) : Date.now(), // Use existing ID if editing, otherwise generate new
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      email: document.getElementById("email").value.trim(),
      department: document.getElementById("department").value,
      role: document.getElementById("role").value
    };

    // Validate form input
    if (!validateForm(newEmp)) return;

    if (isEdit) {
      // If editing, update the existing employee in the array
      const index = mockEmployees.findIndex(e => e.id == editId);
      if (index !== -1) {
        mockEmployees[index] = newEmp;
      }
    } else {
      // If adding new, push to the mockEmployees array
      mockEmployees.push(newEmp);
    }

    // Save changes to localStorage and redirect back to dashboard
    saveToStorage();
    localStorage.removeItem("editId");
    window.location.href = "output.html";
  });
});

// Cancel button handler — clears edit mode and navigates back to dashboard
function cancelForm() {
  localStorage.removeItem("editId");
  window.location.href = "output.html";
}

// Validate employee form input before saving
function validateForm(emp) {
  const emailRegex = /\S+@\S+\.\S+/;

  // Ensure all fields are filled
  if (!emp.firstName || !emp.lastName || !emp.email || !emp.department || !emp.role) {
    alert("All fields are required.");
    return false;
  }

  // Validate email format
  if (!emailRegex.test(emp.email)) {
    alert("Invalid email format.");
    return false;
  }

  return true;
}
