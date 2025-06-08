---
sidebar_position: 34
---

# PHP Loops

Loops in PHP are used to execute a block of code repeatedly, as long as a specified condition is true. PHP supports several types of loops:

## Types of Loops in PHP

### 1. `while` Loop
Executes the code block **as long as the condition is true**.

```php
$i = 1;
while ($i <= 5) {
    echo "Number: $i\n";
    $i++;
}
```

### 2. `do...while` Loop
Similar to `while`, but always runs at least once.
```php
$i = 1;
do {
    echo "Count: $i\n";
    $i++;
} while ($i <= 5);
```

### 3. `for` Loop
Most commonly used when you know the number of iterations.

```php
for ($i = 0; $i < 5; $i++) {
    echo "Index: $i\n";
}
```

### 4. `foreach` Loop
Used exclusively for arrays or objects.
```php
$colors = ['red', 'green', 'blue'];
foreach ($colors as $color) {
    echo "Color: $color\n";
}
```