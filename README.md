# TECH-BLOG


[GitHub license](https://img.shields.io/badge/license-undefined-blue.svg)

# DESCRIPTION 

This is a complex command line application to make a dashboard tech blog site with usage to post blogs and utilize login and logout abilities.  This Full-Stack application was designed and built using the MVC (Model View Controller) paradigm, with a server-side API with user authentication, as well as, a Node server connection.  Sequelize was used to interact with a MYSQL database.  A JAWS database was added in Heroku. The API routes include comment, post, user, home, and dashboard.  THe views contained the layout handlebars including dashboard and main, while the views additionally contained additional handlebars as pages for the website.  

# TABLE OF CONTENTS 

  - [Project Description](#project-description)
  - [Deployed To ](#deployed-to)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Contact](#contact-me)


## DEPLOYED TO

[TECH BLOG Site - GitHub] (https://github.com/efurness/TECH-BLOG.git)

[TECH BLOG Site - HEROKU] (https://peaceful-bayou-08897.herokuapp.com/)

# INSTALLATION 

[express-handlebars](https://www.npmjs.com/package/express-handlebars) The application's folder structure follows the Model-View-Controller paradigm by using the handlebars package.

```
npm install express-handlebars
```

[MySQL2](https://www.npmjs.com/package/mysql2)

```
npm install --save mysql2
```

[Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

```
npm i sequelize
```

[dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables.

```
npm install dotenv --save
```

[bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords.

```
npm install bcrypt
```

[express-session](https://www.npmjs.com/package/express-session) **Note**: The package stores the
session data on the client in a cookie. When you are idle on the site for more than a set time, the
cookie will expire and you will be required to log in again to start a new session. This is the
default behavior and you do not have to do anything to your application other than implement the npm
package.

```
npm install express-session
```

[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

```
npm install connect-session-sequelize
```

NODE JS, Express.JS, mySQL, NPM install to retrieve the packages including DotEnv and Sequelize.  API Routes POST, GET, PUT and DELETE were used. 

[bcrypt 5.0.1](https://www.npmjs.com/package/bcrypt)
[colors 1.4.0](https://www.npmjs.com/package/colors)
[connect-session-sequelize 7.1.3](https://www.npmjs.com/package/connect-session-sequelize)
[dotenv 16.0.1](https://www.npmjs.com/package/dotenv)
[express 4.18.1](https://expressjs.com/)
[express-handlebars 6.0.6](https://www.npmjs.com/package/express-handlebars)
[express-session 1.17.3](https://www.npmjs.com/package/express-session)
[mysql2 2.3.3](https://www.npmjs.com/package/mysql2)
[sequelize 6.19.2](https://sequelize.org/docs/v6/getting-started/)
[sql-template-strings 2.2.2](https://www.npmjs.com/package/sql-template-strings)

# USAGE 

General usage for building an TECH BLOG SITE.

Deploying to Heroku:

[To install the Heroku CLI](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli)

Once Heroku has been installed, verify Heroku was installed on Terminal

```
heroku --version
```

Once Heroku is verified on Terminal, check your git is installed.

```
git --version
```

[Heroku documentation on getting started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

To direct your project to your heroku account

```
heroku login or heroku login i
cd ~/ PROJECT LOCATION
heroku create
```

[To deploy a project on Heroku](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)

Create a variable to locate Port

```
const port = process.env.PORT || 3001
```

```Terminal
git status
git init
heroku create
git remote -v
git add -A
git commit -m "Pushing to Heroku"
git push heroku main
```

To open the application from the terminal

```
heroku open
```

[Heroku documentation on creating a Heroku remote](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote)
To confirm there is a remote name heroku set on your app
 
# LICENSE 

Open source license

# CONTRIBUTING 

Solo Project, Contributors welcome

# TESTS 

Tests were run to establish routes
 
# QUESTIONS 

My challenges included deploying to Heroku, at times Heroku was offline.  I also accidentally deleted the app in Heroku so I had to create a new Heroku app and push it to remote Heroku.  

## DEPLOYED TO

[TECH BLOG Site - GitHub] (https://github.com/efurness/TECH-BLOG.git)

[TECH BLOG Site - HEROKU] (https://peaceful-bayou-08897.herokuapp.com/)

[TECH BLOG Site VIDEO] () 
 

[Project screenshot](tech_blog_screenshot.png) 

## CONTACT ME

* For additional help or questions about collaboration, please reach out to Ellen.Furness@du.edu.

* Follow me on Github at [efurness](http://github.com/efurness)


