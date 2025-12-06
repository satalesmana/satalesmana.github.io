---
sidebar_position: 42
---

# Getting Up and Running

You can download a release manually from the site, but for this tutorial we will use the recommended way and install the AppStarter package through Composer. From your command line type the following:

### Running Development Server
With that out of the way it’s time to view your application in a browser. You can serve it through any server of your choice, Apache, nginx, etc, but CodeIgniter comes with a simple command that takes advantage of PHP’s built-in server to get you up and running fast on your development machines. Type the following on the command line from the root of your project:

```cmd
php spark serve
```

Now point your browser to the correct URL you will be greeted by a welcome screen. Try it now by heading to the following URL: `http://localhost:8080`

The local development server can be customized with three command line options:

1. You can use the `--host` CLI option to specify a different host to run the application at:
```cmd
php spark serve --host example.dev
```
2. By default, the server runs on port 8080 but you might have more than one site running, or already have another application using that port. You can use the `--port` CLI option to specify a different one:
```cmd
php spark serve --port 8081
```
3. You can also specify a specific version of PHP to use, with the `--php` CLI option, with its value set to the path of the PHP executable you want to use:
```cmd
php spark serve --php /usr/bin/php7.6.5.4
```
