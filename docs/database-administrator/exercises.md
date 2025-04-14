---
sidebar_position: 34
---

# Exercises

### Employees

| EmployeeID | Name   | Position   | Department | Salary   | HireDate   |
|------------|--------|------------|------------|----------|------------|
| 1          | Andi   | Developer  | IT         | 8000000  | 2020-02-15 |
| 2          | Budi   | Manager    | HR         | 12000000 | 2019-06-01 |
| 3          | Citra  | Analyst    | Finance    | 9000000  | 2021-01-10 |
| 4          | Dedi   | Developer  | IT         | 8500000  | 2022-03-01 |
| 5          | Elly   | HR Staff   | HR         | 7000000  | 2023-07-01 |
| 6          | Fahmi  | Developer  | IT         | 8000000  | 2021-09-20 |

### Projects

| ProjectID | ProjectName        | StartDate  | EndDate    | Budget      |
|-----------|--------------------|------------|------------|-------------|
| 101       | Website Redesign   | 2023-01-01 | 2023-06-30 | 150000000   |
| 102       | Mobile App Dev     | 2023-02-01 | 2023-09-30 | 200000000   |
| 103       | Data Migration     | 2022-11-01 | 2023-05-01 | 100000000   |
| 104       | HR System Revamp   | 2023-05-15 | 2023-12-01 | 80000000    |

### EmployeeProjects

| EmployeeID | ProjectID | AssignedDate |
|------------|-----------|--------------|
| 1          | 101       | 2023-01-01   |
| 1          | 102       | 2023-03-01   |
| 2          | 104       | 2023-05-20   |
| 3          | 103       | 2022-12-01   |
| 4          | 101       | 2023-02-01   |
| 4          | 102       | 2023-04-01   |
| 5          | 104       | 2023-06-01   |
| 6          | 102       | 2023-05-01   |

### Other questions
1. Show all employees and how many projects they are involved in.
2. Show the names of projects with the highest budgets.
3. Show the names of employees who are not involved in any projects.
4. Show the names of employees and the projects they are involved in, sorted by assignment date.
5. Show the total budget of projects worked on by the IT department.
6. Calculate the average salary per department.