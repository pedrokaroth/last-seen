# Unit Testing Introduction Project

This is a sample project that demonstrates the importance of unit testing and how to write them in a sample application.

## Medium Article Reference

This project is based on the Medium article titled ["A Beginner's Introduction to Unit Testing"](https://medium.com/interleap/intro-to-unit-tests-f2b7750c2d3c). The article provides a comprehensive introduction to unit tests, including their significance, what they are, and how to get started with writing them.


## Why Write Tests?

Unit tests play a critical role in software development. They help ensure that code functions as expected, provide living documentation, enable safer refactoring, and result in cleaner, more robust code. This project explores these benefits in detail.

## Demo

In this project, we use a practical example: a WhatsApp "Last Seen Formatter." We demonstrate how to write unit tests for this component. You can find the source code and tests in the `src` directory.

## How to Run the Tests

To run the unit tests for this project, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/pedrokaroth/last-seen.git & cd last-seen
2. Install Dependencies:
   ```bash
   npm install
3. Run Testes:

   ```bash
   npm t
You shoud see something like this
  ```bash
  > last-seen@1.0.0 test
> npx mocha __test__/ --parallel -w



  Last seen suite test
    ✔ If the person was online less than a second ago, it should return Online
    ✔ If the person was last online 59 seconds ago, it should return “Last seen 59 seconds ago
    ✔ if the person was last online 60–119 seconds ago, it should return “Last seen 1 minute ago
    ✔ If the person was last online 60 * 60 seconds ago, it should return “Last seen 1 hour ago
    ✔ if the person was last online 24 ago, it should return n days ago
    ✔ if the person was last online 30 days ago, it should return n month,s ago
    ✔ if the person was last onliner 12 months ago, it shold return n years ago


  7 passing (178ms)

ℹ [mocha] waiting for changes...