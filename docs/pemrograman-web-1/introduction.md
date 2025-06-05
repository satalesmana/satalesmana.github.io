---
sidebar_position: 31
---

## Introduction to PHP

**PHP** (Hypertext Preprocessor) is a popular open-source server-side scripting language primarily used for web development. It is embedded in HTML and used to manage dynamic content, databases, session tracking, and even build entire e-commerce sites.

### Key Features:
- Free and open-source
- Server-side execution
- Supports a wide range of databases (MySQL, PostgreSQL, etc.)
- Simple syntax for beginners and powerful features for professionals


## How to Install PHP

### Option 1: Install via XAMPP (Recommended for Beginners)

**XAMPP** is a free and easy-to-use Apache distribution containing PHP, MySQL, and more.

**Steps:**
1. Download XAMPP from [https://www.apachefriends.org](https://www.apachefriends.org)
2. Install and launch the XAMPP Control Panel
3. Start the **Apache** module (and **MySQL** if needed)
4. Place your PHP files in the `htdocs` directory (e.g., `C:\xampp\htdocs\`)

### Option 2: Manual PHP Installation

1. Download PHP from [https://www.php.net/downloads.php](https://www.php.net/downloads.php)
2. Extract and configure it via `php.ini`
3. Add the PHP folder path to your system’s environment variables
4. Install a local server like Apache or Nginx to run PHP scripts


## Basic Instructions in PHP and Define Variables

**Variable Rules:**
1. Must start with `` $ ``
2. Case-sensitive
3. Must begin with a letter or underscore ( _ )
4. Can only contain letters, numbers, and underscores

### Example 1: Basic PHP Script

```php
<?php
echo "Hello, world!";
?>
```

### Example 2: Defining Variables
```php
<?php
$name = "Alice";        // String variable
$age = 25;              // Integer variable
$isStudent = true;      // Boolean variable

echo "Name: $name<br>";
echo "Age: $age<br>";
echo "Student: $isStudent";
?>
```

