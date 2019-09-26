# ajax
This is an assignment for the ajax unit of the U of U coding bootcamp. It is an app that utilizes the giphy API.

This web app generates 5 buttons on screen load. 

When the button is pressed, a new data attribute, based on the buttons name is created.

This attribute is then inserted into a URI that is used to make a request to the GIPHY API.

The GIPHY API returns images based on the data attribute, which corresponds with the button name.

I created objects out of each button, so that the offset for each individual API query--for each individual button (or topic depending on how you look at it) can be stored. 

This allows for a new set of 10 images to be called everytime a button is clicked, as opposed to recalling the same 10 images for each topic.

Thus, when a new button is created by the user, a new object is created for the new button.

I also added buttons so that the user can clear both the space where the GIFS are stored on the viewable page, as well as the new button space--AND the offset data being stored for each button.


I've got templates setup so I can change the type of data that is being pulled from the API and displayed pretty easily.

Added links to full sized images.

Added LOCAL STORAGE functionality, locally created buttons will store until cleared by user. should have met all bonus requirements now.