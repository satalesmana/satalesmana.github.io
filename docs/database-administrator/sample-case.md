---
sidebar_position: 33
---

# Example database sales
Here are some examples of SQL query practice questions that you can use for practice, complete with table structures:

### Create a database

Create a database called sales and use that database
```js
// Step 1: Create the Sales database
CREATE DATABASE sales;

// Step 2: Use the Sales database
USE sales;
```

### Create a Table
Create two tables:
- ``Customer`` – stores customer info
- ``Order`` – stores order info and references the customer via a foreign key

#### Table Customer
```js
CREATE TABLE customer (
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(100),
    LastName VARCHAR(100),
    Age INT,
    Email VARCHAR(150),
    Phone VARCHAR(20),
    City VARCHAR(100),
    CreatedAt DATETIME DEFAULT GETDATE()
);
```

#### Table Orders
```js
CREATE TABLE orders (
    OrderID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT,
    OrderDate DATETIME DEFAULT GETDATE(),
    Total INT,
    Status VARCHAR(50),
    FOREIGN KEY (CustomerID) REFERENCES customer(CustomerID)
);
```
The database schema consists of two main tables: ``Customer`` and ``Orders``. The ``Customer`` table is designed to store personal information about each customer. 

This schema establishes a one-to-many relationship, where one customer can have many orders. It's a foundational structure for a basic sales or e-commerce system and can be expanded with additional features such as product tables, shipping details, or payment logs.


### Insert Data
#### Insert Data to customer table
```js
// insert to customer table
INSERT INTO Customer (FirstName, LastName, Age, Email, City, Phone) 
VALUES 
    ('Alice', 'Johnson', 25, 'alice.johnson@example.com', 'Jakarta', '555-1234'),
    ('Bob', 'Smith', 35, 'bob.smith@example.com', 'Bandung', '555-5678'),
    ('Carol', 'Davis', 42, 'carol.davis@example.com', 'Surabaya', '555-8765'),
    ('David', 'Lee', 31, 'david.lee@example.com', 'Jakarta', '555-4321'),
    ('Eve', 'Martinez', 24, 'eve.martinez@example.com', 'Bandung', '555-2468');
```

#### Insert Data to orders table
```js
// insert to orders table
INSERT INTO Orders (CustomerID, OrderDate, Total, Status)
VALUES
(1, '2025-04-10 10:30:00', 120, 'Completed'),
(2, '2025-04-11 14:45:00', 89, 'Pending'),
(3, '2025-04-12 09:15:00', 150, 'Shipped'),
(1, '2025-04-13 16:20:00', 210, 'Completed'),
(5, '2025-04-14 11:05:00', 45, 'Cancelled');
```

### Select
1. Showing all customers living in Bandung
    ```js
    SELECT * FROM customers WHERE city = 'Bandung';
    ```
2. Displays the total order for each customer.
    ```js
    SELECT CustomerID, SUM(TotalAmount) AS total_order
    FROM orders
    GROUP BY CustomerID;
    ```
3. Displays customer names and their order totals
    ```js
    SELECT CONCAT(c.FirstName, ' ', c.LastName) AS EmployeName, SUM(o.total) AS total_order
    FROM customers c
    JOIN orders o ON c.CustomerID = o.CustomerID
    GROUP BY CONCAT(c.FirstName, ' ', c.LastName);
    ```
4. Showing customers who have never placed an order
    ```js
    SELECT *
    FROM customer
    WHERE CustomerID NOT IN (
        SELECT DISTINCT CustomerID FROM orders
    );
    ```
5. Showing orders placed in April 2025
    ```js
    SELECT * FROM orders
    WHERE OrderDate BETWEEN '2025-04-01' AND '2025-04-30';
    ```
6. Displaying customers with total orders above 100
    ```js
    SELECT c.FirstName, SUM(o.total) AS total_order
    FROM customer c
    JOIN orders o ON c.CustomerID = o.CustomerID
    GROUP BY c.FirstName
    HAVING SUM(o.total) > 100;
    ```