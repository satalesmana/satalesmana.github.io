---
sidebar_position: 33
---

# PHP Conditionals

Conditionals are used in PHP to make decisions and control the flow of the program based on certain conditions.

## Types of Conditional Statements in PHP

1. **if statement** – Executes a block of code if a condition is true.
2. **if...else statement** – Executes one block if true, another if false.
3. **if...elseif...else** – Checks multiple conditions.
4. **switch statement** – Selects one of many blocks of code to execute.

## if Statement
### Syntax:
```php
if (condition) {
    // code to run if condition is true
}
```
### Example:
```php
<?php
$age = 20;
if ($age >= 18) {
    echo "You are eligible to vote.";
}
?>
```

## if...else Statement
### Syntax:
```php
if (condition) {
    // code if true
} else {
    // code if false
}
```
### Example
```php
<?php
$hour = 10;
if ($hour < 12) {
    echo "Good morning!";
} else {
    echo "Good afternoon!";
}
?>
```

## if...elseif...else Statement
### Syntax:
```php
if (condition1) {
    // code if condition1 is true
} elseif (condition2) {
    // code if condition2 is true
} else {
    // code if none are true
}
```

### Example:
```php
<?php
$score = 75;

if ($score >= 90) {
    echo "Grade: A";
} elseif ($score >= 80) {
    echo "Grade: B";
} elseif ($score >= 70) {
    echo "Grade: C";
} else {
    echo "Grade: F";
}
?>
```

## switch Statement
### Syntax:
```php
switch (variable) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code if none match
}
?>
```

### Example:
```php
<?php
$day = "Monday";

switch ($day) {
    case "Monday":
        echo "Start of the work week.";
        break;
    case "Friday":
        echo "Almost weekend!";
        break;
    default:
        echo "Just another day.";
}
?>
```
