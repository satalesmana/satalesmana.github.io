---
sidebar_position: 32
---

# Structured Query Language
T-SQL stands for Transact-SQL, and it's the Microsoft-specific extension of SQL (Structured Query Language) used in SQL Server.

T-SQL is a proprietary procedural language developed by Microsoft that adds programming constructs to standard SQL. These additions make it easier to write complex business logic, control flow, and interact with SQL Server objects.

## SQL Command Summary Table

| SQL Command | Description                                                              | Example |
|-------------|---------------------------------------------------------------------------|---------|
| `CREATE`    | Creates a new table, view, index, or other database object.              | `CREATE TABLE Employees (ID INT, Name VARCHAR(100));` |
| `SELECT`    | Retrieves data from one or more tables.                                  | `SELECT Name, Salary FROM Employees WHERE Department = 'HR';` |
| `INSERT`    | Adds new rows of data into a table.                                      | `INSERT INTO Employees (Name, Salary) VALUES ('Alice', 5000);` |
| `UPDATE`    | Modifies existing records in a table.                                    | `UPDATE Employees SET Salary = 5500 WHERE Name = 'Alice';` |
| `DELETE`    | Removes records from a table.                                            | `DELETE FROM Employees WHERE Salary < 3000;` |
| `JOIN`      | Combines rows from multiple tables based on related columns.             | `SELECT e.Name, d.DepartmentName FROM Employees e JOIN Departments d ON e.DeptID = d.ID;` |
| `WHERE`     | Filters records that meet specific conditions.                           | `SELECT * FROM Orders WHERE Status = 'Shipped';` |
| `GROUP BY`  | Groups rows that share a property and allows aggregate functions.        | `SELECT Department, COUNT(*) FROM Employees GROUP BY Department;` |
| `ORDER BY`  | Sorts the result set by one or more columns.                             | `SELECT Name FROM Employees ORDER BY Salary DESC;` |
| `HAVING`    | Filters groups created by `GROUP BY`.                                    | `SELECT Department, AVG(Salary) FROM Employees GROUP BY Department HAVING AVG(Salary) > 4000;` |

## SQL Data Types Overview

| Data Type     | Description                                                                 | Example Value            |
|---------------|-----------------------------------------------------------------------------|--------------------------|
| `INT`         | Integer number, typically 4 bytes. Used for IDs, counters, etc.             | `42`, `1001`             |
| `BIGINT`      | Larger integer, 8 bytes. For very large numbers (e.g., large IDs).          | `9223372036854775807`   |
| `SMALLINT`    | Small integer, 2 bytes.                                                      | `255`, `-32768`          |
| `TINYINT`     | Very small integer, 1 byte. Range: 0–255                                     | `0`, `255`               |
| `VARCHAR(n)`  | Variable-length text string (up to `n` characters).                         | `'Alice'`, `'Hello123'` |
| `CHAR(n)`     | Fixed-length text string (always `n` characters, padded if shorter).        | `'A   '`, `'Test '`      |
| `TEXT`        | Large string (deprecated in some DBMS in favor of `VARCHAR(MAX)`).          | Long articles, logs      |
| `DATE`        | Stores a date only (YYYY-MM-DD).                                             | `2025-04-14`             |
| `TIME`        | Stores time only (HH:MM:SS).                                                 | `14:30:00`               |
| `DATETIME`    | Stores both date and time.                                                   | `2025-04-14 14:30:00`    |
| `DECIMAL(p,s)`| Fixed-point number with precision `p` and scale `s` (e.g., money).          | `DECIMAL(10,2)` → `199.99` |
| `FLOAT`       | Approximate floating-point number.                                           | `3.14`, `1.618033988`    |
| `BIT`         | Boolean-like value: 0 (false) or 1 (true).                                   | `1`, `0`                 |
| `BOOLEAN`     | True/False values (not supported in SQL Server—use `BIT` instead).          | `TRUE`, `FALSE`          |
| `UNIQUEIDENTIFIER` | Globally unique identifier (GUID/UUID).                              | `6F9619FF-8B86-D011-B42D-00C04FC964FF` |
| `BINARY` / `VARBINARY` | Stores binary data, such as files or images.                  | Hex values: `0xDEADBEEF` |

