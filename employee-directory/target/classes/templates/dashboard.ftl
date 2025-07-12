<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Page metadata -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Employee Directory</title>

  <!-- Link to external stylesheet -->
  <link rel="stylesheet" href="static/css/style.css" />
</head>
<body>

  <!-- Navbar section -->
  <!-- Contains logo, search bar, and filter button -->
  <header class="navbar">
    <div class="navbar-logo">Employee Directory</div>
    <input type="text" class="search-input" placeholder="Search by name or email" />
    <button class="filter-btn">Filter</button>
  </header>

  <!-- Control bar section -->
  <!-- Contains sort and show dropdowns, and add employee button -->
  <section class="control-bar">
    <div class="controls-left">
      <label>Sort:
        <select id="sortBy">
          <option value="">--Select--</option>
          <option value="firstName">First Name</option>
          <option value="department">Department</option>
        </select>
      </label>

      <label>Show:
        <select id="itemsPerPage">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
    </div>

    <button class="add-btn" onclick="window.location.href='form.html'">Add Employee</button>
  </section>

  <!-- Employee list area -->
  <!-- Rendered dynamically using JavaScript -->
  <main id="employeeList" class="card-grid"></main>

  <!-- Pagination section -->
  <!-- Contains Prev, Next, and page number buttons -->
  <div id="pagination" class="pagination-bar"></div>

  <!-- Filter panel sidebar -->
  <!-- Hidden by default, used to filter employees -->
  <div id="filterPanel" class="filter-panel hidden">
    <h3>Filter Employees</h3>

    <label>First Name:
      <input type="text" id="filterFirstName" />
    </label>

    <label>Department:
      <select id="filterDepartment">
        <option value="">All</option>
        <option>HR</option>
        <option>IT</option>
        <option>Finance</option>
        <option>Engineering</option>
      </select>
    </label>

    <label>Role:
      <select id="filterRole">
        <option value="">All</option>
        <option>Manager</option>
        <option>Developer</option>
        <option>Analyst</option>
      </select>
    </label>

    <div style="margin-top: 10px;">
      <button onclick="applyFilters()">Apply Filter</button>
      <button onclick="clearFilters()">Clear</button>
    </div>
  </div>

  <!-- Footer section -->
  <footer class="footer">
    © 2025 Employee Directory App. All rights reserved.
  </footer>

  <!-- JavaScript files -->
  <script src="static/js/data.js"></script>
  <script src="static/js/app.js"></script>

</body>
</html>
