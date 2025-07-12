# 💼 Employee Directory Web App

A responsive and interactive employee directory built with **HTML**, **CSS**, **JavaScript**, and **Freemarker** templates.

Users can:
- Add new employees
- Edit existing employees
- Delete employees
- Search by name or email
- Filter by department or role
- Sort by first name or department
- Paginate through employee records

All data is stored in memory using `localStorage` — no backend required.

---

## 🚀 How to Run

### Prerequisites:
- Java 17+
- Maven 3.6+

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/employee-directory.git
   cd employee-directory
   ```

2. Compile and run the project:
   ```bash
   mvn compile
   mvn exec:java
   ```

3. Open the rendered HTML pages in your browser:
   - `src/main/resources/output.html` → Main Dashboard
   - `src/main/resources/form.html` → Add/Edit Form Page

---

## 📁 Project Structure

```
employee-directory/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/ajackus/App.java          # Java code to render Freemarker templates
│       ├── resources/
│       │   ├── templates/
│       │   │   ├── dashboard.ftl             # Freemarker template for dashboard
│       │   │   ├── form.ftl                  # Freemarker template for add/edit form
│       │   ├── static/
│       │   │   ├── css/style.css             # All styling (responsive layout, cards, form)
│       │   │   ├── js/data.js                # Initial employee data and localStorage handling
│       │   │   ├── js/app.js                 # Dashboard logic: render, search, filter, sort, pagination
│       │   │   ├── js/form.js                # Form logic: prefill, add, edit, validation
│       │   ├── output.html                   # Rendered dashboard (by Freemarker)
│       │   ├── form.html                     # Rendered form (by Freemarker)
```

---

## 📸 Screenshots

> *(Add images in a `/screenshots` folder and link them here)*

### ✅ Desktop Dashboard
![Dashboard](screenshots/dashboard.png)

### ✅ Form (Add/Edit Employee)
![Form](screenshots/form.png)

### ✅ Responsive (Mobile View)
![Mobile](screenshots/mobile.png)

---

## 💬 Reflection

### ⚠️ Challenges Faced
- Coordinating multiple filters, sorting, and pagination in memory.
- Managing dynamic DOM rendering from JavaScript efficiently.
- Pre-filling form data during edit and handling validation without backend.

### 💡 Improvements If Given More Time
- Use React or a frontend framework to better handle UI state.
- Add CSV export and file import for employee data.
- Add accessibility support (ARIA labels, keyboard navigation).
- Enhance styling with animation or theme switcher.

---

## 🙌 Acknowledgements

This project was completed as part of a frontend development evaluation for Ajackus. Built using open web standards and Freemarker for templating.

---
