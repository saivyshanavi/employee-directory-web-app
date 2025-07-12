# employee-directory-web-app

🚀 1. Setup & Run Instructions
📦 Prerequisites
Java 17+

Maven 3.6+

A basic Freemarker setup (no backend logic, only file rendering)

▶️ How to Run
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/employee-directory.git
cd employee-directory
Compile and render HTML using Freemarker:

bash
Copy
Edit
mvn compile
mvn exec:java
Open the generated files in browser:

src/main/resources/output.html → Dashboard

src/main/resources/form.html → Add/Edit Employee form

📁 2. Project Structure
bash
Copy
Edit
employee-directory/
├── src/
│   ├── main/
│   │   ├── java/com/ajackus/App.java     # Renders Freemarker templates
│   │   ├── resources/
│   │   │   ├── templates/
│   │   │   │   ├── dashboard.ftl         # Dashboard template
│   │   │   │   ├── form.ftl              # Add/Edit form template
│   │   │   ├── static/
│   │   │   │   ├── css/style.css         # All UI styling
│   │   │   │   ├── js/data.js            # Mock employee data & storage
│   │   │   │   ├── js/app.js             # Dashboard JS (search, filter, sort, pagination)
│   │   │   │   ├── js/form.js            # Form logic (add/edit, validation)
│   │   │   ├── output.html               # Rendered dashboard
│   │   │   ├── form.html                 # Rendered form
🖼 3. Screenshots
Include screenshots of the following:

Desktop Dashboard with search/filter/sort/pagination

Mobile Responsive View

Add Employee Form

Edit Employee Form

Filter Panel

Embed or link them below as needed:

scss
Copy
Edit
![Dashboard View](screenshots/dashboard.png)
![Form View](screenshots/form.png)
![Mobile View](screenshots/mobile.png)
💭 4. Reflection
✅ Challenges Faced
Integrating pagination alongside filter/sort/search dynamically.

Styling a fully responsive layout for mobile/tablet screens.

Dynamically syncing form data with JavaScript without any backend API.

Handling localStorage for CRUD operations.

🛠️ What I'd Improve
Use a module bundler (like Vite or Webpack) for better dev workflow.

Add animations or transitions to cards and form states.

Expand form validation using inline error labels instead of alerts.

Make filtering options collapsible on smaller screens.

Add role-based filtering or export to CSV.

