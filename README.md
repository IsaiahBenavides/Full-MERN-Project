Description:  

I decided to make a simple logging app where users can write a brief description of an event, add a picture, and tags that they would later be able to search for.  As of writing this I have yet to figure out how to create a new post, display it onto the home page, search via tags, and delete posts from the database.

The thing I am struggling with is that for what ever reason submiting the create post form is not being authorized, something is preventing the data from being sent to mongo. Although the data itself is being recorded, if I console.log(postData) inside the PostForm.js it does return the data that is entered. Somewhere between there and where it sends the data to mongo is the problem, I can't seem to find it.

Wireframes:
![Wireframes](images/MERNProj-WebPageWireFrames.jpg)

ERD:

Sign Up / Log In
![ERD](images/MERNProj-SignUp&LogInERD.jpg)

Post Actions
![Posts](images/MERNProj-PostActionsERD.jpg)

Link to Render deploy: 
https://fullmernproject.onrender.com