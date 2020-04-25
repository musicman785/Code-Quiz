# Code-Quiz
Code Quiz assignment. 
Construct a quiz webpage that will have a timer for the questions to be answered. Spaces for the user to be able to input answers and finally give a score at the end of the quiz. 

Step one: construct html page and include:
1 An introduction and a button initialte the quiz. 
2. set up divs for content separation and id divs for js targeting.
3. set up css folder to arrange text and font to desired specs. 
4. Set up questions in js.

After setting up initial page layout and some really basic css, I began the js code by first pseudo coding the page to try and understand the logic that I wanted. Started with writing up the questions to ask the user during the quiz and setting them to an array. In the first version the arrays were too long and required several loops to get the desired display. Looking back on a previous class activity, I wrote the questions again only this time in an array that featured the questions as objects I could call much more efficiently. 

Had to change some html code to accomodate the "start quiz" button. My goal is to have a first page that simply shows the "start quiz" button and the introduction. I accomplished this by creating 3 sections. Each section (start quiz, question portion, and final score) will execute after the previous section is completed. This achieved the effect of seeming to have 3 separate pages. 

Biggest issue is trying to attach the click events to the proper answers. Got lost in so many variables made it difficult to connect with what I wanted. Will begin work on the timer and user score next.

Final Method: 

Added an image file and folder for the jpeg used as a background. Css was completely done without bootstrap even though the css code is not very complicated. Js code was the most difficult. Can be cleaned up more for sure, however It finctions properly and runs the code properly and records scores to local storage properly. 