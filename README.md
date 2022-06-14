# **Project Preview**



## ![screen recording](https://github.com/Pabl0Parra/TUTORIAL-APP-REACT/blob/solutions/public/assets/screen-recording.gif)

---

## :wrench: **Tech used in this project**



In this project I´m using React JS to develop a tutorial in which, with two buttons, new users can move forward and backward through the tips, modifying the help text and background image every time either button is clicked.
I will also implement a welcome screen with a button to begin the tutorial.
Since I don´t yet have the proper documentation or an API, I will hardcore some example data to reproduce the desire output.

---

## :mortar_board: **What did I learn from this project**



Through this project I have been able to learn the basics of React, create and implement my first reusable components, make use of props, how to work with styled-components, learn how to implement useState & how to use conditional rendering to display different screens.

---

## :memo: **What would I still need to do**

~~1. Concentrate all styles under one js file through style-components~~

~~2. Get rid of unnecesary files & images~~

3. Make sure welcome screen renders by itself.

---
## :seedling: **Getting Started with this project**



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please, visit the following link for instructions on how to start it: [create-react-app](https://create-react-app.dev/)

---

## :bookmark_tabs: **Instructions**

---

### **_Level 1_** :star2:



#### :paw_prints: **Step 1**

In this first exercise, Iyou will create a component that will render a sentence, and you will import and use it in the main App component.

You must complete the following steps:

    1. Create the components folder

    2. Create the scene folder inside the components folder.

    3. Inside the scene folder we will implement the first component. To do this you need to create the Scena.js file. This first component only needs to return the following string:

    "Our hero was floating in outer space when he spotted a spaceship in the distance"

    4. We already have our first component created, but the phrase will not be displayed yet. For this we will use our brand new component Scene. In the return of the app component you must use the Scene component.

The result must be:

![screenshot](https://github.com/Pabl0Parra/TUTORIAL-APP-REACT/blob/solutions/public/assets/nau-espacial.png)

#### :paw_prints: **Step 2**

n this exercise we will show all the sentences in the story.

To do this, you must perform the following tasks :

    1. We will read the data from a JSON or JS file, with the texts of the story in the App component:

        [
        "Our hero was floating in outer space when he saw a spaceship in the distance."
        "He was curious about the interior of the ship and began to inspect it. He came to a room with two doors."
        "The hero decided to go through the door that took him home,"
        "Meanwhile, other heroes weren't so lucky in their choice ..."
        ]

    2. You must go through each of the texts in the story in the Scene component. (The scene component will render a single line of text).

    3. We will modify the Scene component to display all lines of text obtained from the parent App component using props.

The exercise should look like this:

## ![](https://github.com/Pabl0Parra/TUTORIAL-APP-REACT/blob/solutions/public/assets/history.png)

#### :paw_prints: **Step 3**

It’s time to apply styles to our Scene component. You must model this component using styled-components:

![](../tutorial/public/assets/full-history.png)

---

#### :paw_prints: **Step 4**

We will show all the lines of the application, but we will highlight only one at a time, which will change as we press the forward or backward buttons:

## ![](https://github.com/Pabl0Parra/TUTORIAL-APP-REACT/blob/solutions/public/assets/history2.png)

---
### **Level 2** :star2::star2:

---

#### :paw_prints: **Step 5**

It would be useful to show the user an initial welcome screen , containing the project description and a start button. In this exercise you have to use conditional rendering.
You have to be able to show the welcome screen, and once that variable changes, hide the welcome screen and show the screen with the history.

---

### **Level 3** :star2::star2::star2:

---

#### :paw_prints: **Step 6**

All you have to do is to change the background image as the user changes the phrase .

Modify the JSON file and convert it to a JS file with an array of objects. Each object will have two properties: txt and img :

    - txt will be the property that will store the scene text.

    - img will be the property that will store the background image that will be displayed on the screen.

![full tutorial](https://github.com/Pabl0Parra/TUTORIAL-APP-REACT/blob/solutions/public/assets/history-complete.png)
