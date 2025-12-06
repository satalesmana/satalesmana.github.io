---
sidebar_position: 41
---

## Introduction to CodeIgniter4

CodeIgniter is a PHP full-stack web framework that is light, fast, flexible and secure.

It is an Application Development Framework - a toolkit - for people who build web sites using PHP. Its goal is to enable you to develop projects much faster than you could if you were writing code from scratch, by providing a rich set of libraries for commonly needed tasks, as well as a simple interface and logical structure to access these libraries.

## Installation

CodeIgniter has two supported installation methods: manual download, or using Composer. Which is right for you?
1. We recommend the Composer installation because it keeps CodeIgniter up to date easily.
2. If you would like the simple “download & go” install that CodeIgniter 3 is known for, choose the manual installation.

### Manual download
for download you can go to this url `https://www.codeigniter.com/download`

### Composer
CodeIgniter4 requires Composer 2.0.14 or later. you can install composer by folowing this url `https://getcomposer.org/`
The CodeIgniter 4 app starter repository holds a skeleton application, with a composer dependency on the latest released version of the framework.

This installation technique would suit a developer who wishes to start a new CodeIgniter4 based project.

```cmd 
composer create-project codeigniter4/appstarter project-root
```

### Adding CodeIgniter4 to an Existing Project
The same CodeIgniter 4 framework repository described in “Manual Installation” can also be added to an existing project using Composer.

`composer require codeigniter4/framework`

Whenever there is a new release, then from the command line in your project root:

```cmd 
composer update
```

When you deploy to your production server, don’t forget to run the following command:

```cmd 
composer install --no-dev
```
