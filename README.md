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
- Java 20+
- Maven 3.6+

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/saivyshanavi/employee-directory-web-app.git
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

> *Project Screenshots*

### ✅ Desktop Dashboard
![Dashboard](screenshots/d<img width="1915" height="970" alt="Screenshot 2025-07-12 233244" src="https://github.com/user-attachments/assets/56424bf9-ba50-406a-a5d1-0c031613153a" />
ashboard.png)

### ✅ Form (Add/Edit Employee)
![Form](screenshots/fo<img width="1911" height="962" alt="Screenshot 2025-07-12 233353" src="https://github.com/user-attachments/assets/d53336ae-f15e-4e8c-a870-3add52295f6d" />
rm.png)
<img width="1901" height="972" alt="Screenshot 2025-07-12 233424" src="https://github.com/user-attachments/assets/7088a24b-06fb-460c-9da8-d79051037fe5" />


### ✅ Responsive (Mobile View)
![Mobile](screenshots/<img width="1914" height="982" alt="Screenshot 2025-07-12 233542" src="https://github.com/user-attachments/assets/23686530-416c-4b33-95cc-c1a13a1b44e1" />
mobile.png)
<img width="1905" height="975" alt="Screenshot 2025-07-12 233555" src="https://github.com/user-attachments/assets/8d66d4ad-1c52-48a4-ad76-ae9668fc4b2a" />

### ✅ Filter 
[filter]<img width="1904" height="963" alt="Screenshot 2025-07-12 234328" src="https://github.com/user-attachments/assets/ca8fc659-5f92-4c7f-beba-b05aeea2b353" /> 

### ✅ Pagination 
[pagination]<img width="1911" height="973" alt="Screenshot 2025-07-12 234504" src="https://github.com/user-attachments/assets/9c11cc8b-d544-4ff6-ad23-19d01e9b7d0c" /> 

## 📽️ Screen Recording

Here’s a short screen recording of the project in action:

![Project Demo] (https://drive.google.com/file/d/1Sw11oVbCSLuZ-CDu7X2yApprU8NfcEGW/view?usp=sharing)

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
