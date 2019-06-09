# JavaScript30

Vanilla JavaScript course by [Wes Bos](https://wesbos.com/). You can take the 30 day challenge yourself over at https://javascript30.com/.

Live version ( [https://js30.kieranpbrown.co.uk/](https://js30.kieranpbrown.co.uk/) ) is hosted with Netlify. This repo uses Gulp which uses the following to get you running quickly:
-   HTML minify (on build)
-   Sass minify
-   JS minify
-   Image minify
-   Nunjucks
-   Live reload

## How to run
Install Gulp globally (if you don't already have it).

    npm install gulp-cli -g
Install necessary packages

    npm install
Run Gulp.

    gulp

The live reload task should then initiate the project on http://localhost:3000. If that port is already taken it will default to another number such as localhost:3001.

## Building assets

To build assets without starting a local server with live reload, use the build command:

    gulp build
