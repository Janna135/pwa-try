## Introduction

This is a short project I used to learn about Progressive Web Apps. This is a technology to create a kind of downloadable and offline working version of your website. The user can add a shortcut to his/her desktop and browse your website with the feel of a native app.

## Methods

I used create-react-app to create a project but wrote my own service worker instead of using the provided by React. To create it I used workbox which is also used for the provides service worker and comes with many possiblities and additional plugins.

As package manager I used yarn. The basic styling I managed with styled-components. To test the App outside a developing area (ATTENTION: service workers does not work on local environments so use e.g. a http-server) I deployed the project via ZEIT now. Have a look on it: https://pwa-try.jannalynn.now.sh.

## Findings

To check whether this project works a pwa I used Lighthouse which is provided in the chrome devtools and very handy when doing your first pwa-project and additionally being a junior dev.

## Content

- I started with adding a cache for js-, css- and imagefiles.
- I managed to make the website downloadable for mobile as well as desktop.
- I added very basic push notifications just to them out.

## Topic

The icecream-topic of this little App is a coincedence. I started in summer so it was a cooling topic. And who knows? Maybe one day I will extend the content of this App and get the #1-address for knowledge about icecream.
