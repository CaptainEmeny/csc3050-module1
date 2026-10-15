### **HTML**:

For the early stages of the application, we are employing a relatively simple design. The body contains a header labeled “Cards,” and a div with the id “card-container” to maintain all of our cards. This div allowed us to adjust how all of our cards were aligned next to each other. This also allowed us to essentially copy and paste our card divs and test out how they fill in when we get more cards, which is good to have for the longevity of the project.

### **FLEXBOX**:

In regard to the CSS, it was hard to decide how we would initially organize the cards. Ultimately, we used Flexbox to create a flow for all the cards we created. The cards flow horizontally, from left to right, and will also wrap around the screen, which allows for many more cards to be added as the screen fills.

### **MEDIA QUERIES**:

Media Queries were used to allow the cards to change size when viewed on smaller devices. On devices with a screen size of up to 480px, the Flexbox will be viewed in a column view, with the Flexbox only containing one item per row. The same was done with screens between 480px and 768px, with the only difference being the size of the text and images. This allows for the one item to be much more visible than if it were kept as many smaller items per row.

### **BRIEF JAVASCRIPT OVERVIEW**:

Our JavaScript currently works by listening for when the user clicks on a more info button and then adds the corresponding information to that card. Clicking the more info button will cause it to close, and opening a new card will cause the previous one to close as well. We upload all the appropriate information for each recipe to the data, and then the information is pulled once the button is clicked and displayed for each card from the data category. Eventually, this will be useful once we connect this to an API so that information for hundreds of recipes will be automatically uploaded depending on the recipe the user wants more information about rather than directly writing on each card. The use of classes also makes it easier to style each info card the same way. Note that as of now, none of the DOM behaviors will work until all the JavaScript information is loaded, which hopefully does not lead to slow functionality as the amount of data increases. 

### **CHALLENGES**:

- Writing the JavaScript was one of the challenges for this project, as the people working on it had little to no experience writing it before. One goal would be to become more proficient in it as the webpage grows. 
- We may potentially look at updating our layout soon as we add more recipe cards to the webpage. If we do, it will be interesting to see how our layout will change given that the code is only set for 3 cards. We may figure out a way to dynamically add cards based on recipes we want for that specific size of the screen.
