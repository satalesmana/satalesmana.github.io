---
sidebar_position: 32
---

# How to Run PHP Code

This guide explains how to execute PHP scripts both through a web browser using a local server and directly from the command line interface (CLI).

---

## Method 1: Using XAMPP (or any Local Server)

XAMPP is a free software package that includes the Apache server, PHP, and MySQL. It is one of the easiest ways to run PHP code locally.

### Steps:

1. **Install XAMPP:**
   - Download XAMPP from [https://www.apachefriends.org](https://www.apachefriends.org)
   - Install it on your machine and launch the XAMPP Control Panel

2. **Start Apache:**
   - In the XAMPP Control Panel, click **Start** next to Apache to start the local server

3. **Place Your PHP File:**
   - Save your PHP file in the `htdocs` directory (typically located at `C:\xampp\htdocs\`)
   - Example file path: `C:\xampp\htdocs\test.php`

4. **Run in Browser:**
   - Open your web browser and go to:  
     ```
     http://localhost/test.php
     ```
   - You should see the output of your PHP script displayed

---

## Method 2: Using Command Line (CLI)

If PHP is installed as a standalone application or via XAMPP, you can run PHP files directly from the command line.

### Steps:

1. **Open Terminal or Command Prompt**
2. **Navigate to Your PHP File’s Directory**
   ```bash
   cd path/to/your/file
   ```
3. **Run the PHP Script**
   ```bash
   php filename.php
   ```

### Example:

```bash
cd C:\xampp\htdocs
php test.php
```

This will execute the script and display the output in the terminal.

---

## Notes

- The command line method is useful for automation, scripting, and quick testing.
- The browser method is ideal for web development and seeing how PHP interacts with HTML and servers.

---

> **Tip:** If `php` is not recognized in your terminal, make sure PHP is added to your system’s environment variables.

