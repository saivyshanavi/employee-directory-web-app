<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Add Employee</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Link to the external CSS stylesheet -->
  <link rel="stylesheet" href="static/css/style.css" />
</head>

<!-- Apply background style specific to the form page -->
<body class="form-bg">

  <!-- Container that wraps the entire form card -->
  <div class="form-container">
    <!-- Dynamic form title (changes to "Edit Employee" if editing) -->
    <h2 id="formTitle">Add Employee</h2>

    <!-- Employee Form -->
    <form id="employeeForm">

      <!-- First Name input field -->
      <label>First Name:
        <input type="text" id="firstName" required />
      </label>

      <!-- Last Name input field -->
      <label>Last Name:
        <input type="text" id="lastName" required />
      </label>

      <!-- Email input field -->
      <label>Email:
        <input type="email" id="email" required />
      </label>

      <!-- Department dropdown selector -->
      <label>Department:
        <select id="department" required>
          <option value="">Select Department</option>
          <option>HR</option>
          <option>IT</option>
          <option>Finance</option>
          <option>Engineering</option>
        </select>
      </label>

      <!-- Role dropdown selector -->
      <label>Role:
        <select id="role" required>
          <option value="">Select Role</option>
          <option>Manager</option>
          <option>Developer</option>
          <option>Analyst</option>
        </select>
      </label>

      <!-- Form buttons: Cancel and Add/Update -->
      <div class="form-buttons">
        <!-- Cancel button clears and redirects back to dashboard -->
        <button type="button" onclick="cancelForm()">Cancel</button>
        
        <!-- Submit button dynamically changes label (Add or Update) -->
        <button type="submit" id="submitBtn">Add</button>
      </div>
    </form>
  </div>

  <!-- JavaScript files for form functionality and data storage -->
  <script src="static/js/data.js"></script>
  <script src="static/js/form.js"></script>
</body>
</html>
