### Introduction
Visualise is a small [https://nuxtjs.org/](https://nuxtjs.org/) application built with typescript that can be used to visualise commit statistics of repositores.
Visualise has been built and tested on the following environment.
* Windows 10
* Node.js v14.8.0
* Chrome

Most likely it will work on other environments, but there are no guarantees.

### Installation and configuration
To use the application there are some configuration that needs to happen in Github. Visualise utilises Githubs Oauth flow and thus you need to create an OAuth application under your Github account in order to use the application.

Navigate to Github and login with your account and then follow these [steps](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)

When you get to step 5, please enter the following information in the input fields.

![N|Solid](https://i.ibb.co/5kDDsrq/imagesettings.png)

Then clone the Github repository. In ~/src create a folder called resources. In ~/src/resources you create a file called ".env".

The following contents need to be supplied in .env file.

The client_secret and client_id can be found under your now created OAuth Github application.

```sh
OAUTH_URL=https://github.com/login/oauth/access_token
REQUEST_CODE_URL=https://github.com/login/oauth/authorize
CLIENT_SECRET=*****
CLIENT_ID=*****
```

Once this is done you can run the application in the root of the project.
```sh
$ npm install
$ npm run dev
```

The application will be available at http://localhost:3000

