### Introduction
Visualise is a small [Nuxt.js](https://nuxtjs.org/) application built with typescript that can be used to visualise commit statistics of repositores.
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

Then clone the Github repository. In ***~/src*** create a folder called resources. In ***~/src/resources*** you create a file called ***.env.***

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

### Further development

The application structure looks like a typical Nuxt.js structure with some exceptions.

* ~/src/app - Contains all Vue/Typescript related code.
* ~/src/app/pages - Contains the application structure and it's pages.
* ~/src/app/components - Contains the page components
* ~/src/app/services - Contains the service layer used for communicating with the Github API.
* ~/src/app/types - Contains any extra Typescript classes used in the project.

The project also contains an auth.js hidden under ~/src/middleware. This is due to the fact that there is an issue with communicating with the Github authorization layer while running it client side. We thus need to run this API call on the server side in order to authorize properly. You can read more about what is causing it [here](https://github.com/isaacs/github/issues/330) and [here](https://andreybleme.com/2018-02-24/oauth-github-web-flow-cors-problem/).


