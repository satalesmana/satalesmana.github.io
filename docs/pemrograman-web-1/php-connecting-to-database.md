---
sidebar_position: 36
---

# PHP: Connecting to a Database (MySQL)

PHP commonly connects to databases using **MySQL** with either:

- `mysqli` (MySQL Improved)
- `PDO` (PHP Data Objects)

Both are supported, but **PDO** is more flexible.

---

## Method 1: Using `mysqli`
### Basic `mysqli` Connection

```php
//connnection.php

$host = "localhost";
$username = "root";
$password = "";
$database = "test_db";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}

echo "✅ Connected successfully";
```

Example running a query
```php
include 'connnection.php';

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
```

## Method 2: Using PDO (Recommended)
```php
// connection.php

$dsn = "mysql:host=localhost;dbname=test_db";
$username = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $username, $password);
    // Set error mode
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Connected successfully";
} catch (PDOException $e) {
    echo "❌ Connection failed: " . $e->getMessage();
}
```

Running a Query with PDO

```php
include "connection.php"
$stmt = $pdo->query("SELECT * FROM users");

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "Name: " . $row["name"] . "<br>";
}
```

# Best Practices
1. Use prepared statements to prevent SQL injection.
2. Close connections (`$conn->close()` or `$pdo = null`) when done.
3. Never expose database credentials in public code.

# Summary
| Method   | Pros                             | Usage Example             |
| -------- | -------------------------------- | ------------------------- |
| `mysqli` | Procedural or OOP, easy to use   | `$conn = new mysqli(...)` |
| `PDO`    | More flexible, supports many DBs | `$pdo = new PDO(...)`     |
