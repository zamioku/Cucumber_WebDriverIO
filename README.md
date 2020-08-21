# Pearson SQE test

Hi,
Please read if you have questions about the way I wrote these scripts.

## How to run:
Just open a terminal command line inside of the main folder (where node_modules are) and type `npm test` or `npm run test:dev` to start the automation scripts.
> NOTE: you should perform `npm install` to generate your node_modules first!


## About Babel:

I had to install Babel to compile my scripts into ES6 in order to use module.exports


## About the Support files:

There will come a time where you may want some logic to be handled outside of the Page Object. 

This approach allows you to keep a clean Page Object by making the functions in there do actions that purely interact with the page.

An additional benefit is you can now build test workflows outside of your Page Objects and Step Definitions.

Putting most that complex logic in my Support file helps me to maintain a modular Step Definition and Page Object file.

Based on how we want to code it, our Step Definition can either call our Page Object or Support File.


## About .env file:

I installed the "dotenv" module in order to load passwords and Environment from an external .env file;


> Kind regards,
> Sorin Dragomir
