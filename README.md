Workflow based on requirement (Marra's note in Asana task):

STEP 1:
Go to one of landing page link. For example: intemp.io/eod1

STEP 2A:
If that landing page is live then :
    - All logo and text will be displayed
    - "Join" button is enabled
    - User can input their 1.)First Name 2.)Last Name 3.)Email 4.) Program ID. When user click "Join" button, 
    the system will perform verification (Step 3) 

STEP 2B:
If that landing page in not live then all text and logo brand are not displayed and "Join" button is disabled

STEP 3:
Verification:
- System will check the program ID
- If program ID exist then it will check the email. 
  * If the email in google sheet match with email from user, it will return the AC_link (adobeconnect link)
  * If the email does not exist in google sheet (unregistered) but it is biogen email (@biogen.com), it will return the AC_link (adobeconnect link)
  * If the email does not exist in google sheet (unregistered), it will return error message
- If program ID does not exist in google sheet, it will return error message


# landing-pages

> My remarkable Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


