package com.ajackus;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.Version;

import java.io.*;
import java.util.*;

public class App {
    public static void main(String[] args) throws Exception {
        // Step 1: Set up Freemarker configuration with the desired version
        Configuration cfg = new Configuration(new Version("2.3.32"));

        // Set the directory where template (.ftl) files are located
        cfg.setDirectoryForTemplateLoading(new File("src/main/resources/templates"));

        // Set the default encoding to UTF-8
        cfg.setDefaultEncoding("UTF-8");

        // Step 2: Create a list of mock employee data
        List<Map<String, Object>> employees = new ArrayList<>();

        // Add first employee entry
        employees.add(Map.of(
                "id", 1,
                "firstName", "Alice",
                "lastName", "Smith",
                "email", "alice@example.com",
                "department", "HR",
                "role", "Manager"
        ));

        // Add second employee entry
        employees.add(Map.of(
                "id", 2,
                "firstName", "Bob",
                "lastName", "Johnson",
                "email", "bob@example.com",
                "department", "IT",
                "role", "Developer"
        ));

        // Step 3: Create a data model map and add the employee list to it
        Map<String, Object> dataModel = new HashMap<>();
        dataModel.put("employees", employees);

        // Step 4: Render the dashboard template (dashboard.ftl) to output.html
        Template dashboardTemplate = cfg.getTemplate("dashboard.ftl");
        try (Writer out = new FileWriter("src/main/resources/output.html")) {
            dashboardTemplate.process(dataModel, out);
        }

        // Step 5: Render the form template (form.ftl) to form.html
        Template formTemplate = cfg.getTemplate("form.ftl");
        try (Writer out = new FileWriter("src/main/resources/form.html")) {
            // No dynamic data is required for the form template
            formTemplate.process(new HashMap<>(), out);
        }

        // Print confirmation that the templates were rendered
        System.out.println("Templates rendered: output.html and form.html");
    }
}
