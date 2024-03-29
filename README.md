# Interactive Frontend Development Milestone Project 

# Do you like Pina Coladas? 

#### Create a single page application that uses custom JavaScript to navigate between ‘pages’ by loading content dynamically. The app will call on the openWeather API to allow users to check the weather in their chosen city in one click as well as contacting the owner/developer via email. 

## UX 

This app has been built mobile-first, to ensure every feature works seamlessly on any device or screen size.  

### Strategy 

This app has been developed to allow users to check the weather in their chosen location in one-click, to ‘not get caught in the rain’. 

### Scope 

Step-by-step guide to using the app: 

* Open app 

* Enter city into search box 

* Hit search which calls API results 

* Display results with temperature and weather details 

* Clear city in search box when user clicks to enter a new location 

* User can navigate to contact us page (dynamically) 

* Complete form with valid email and message 

* Hit send to send with emailJS service to my developer gmail account for future project opportunities. 

#### Key Functions & Features 

*  The openWeather API provides the weather data when the user enters their location 

*  The emailJS service facilitates the contact form for a user to send their project ideas to the site owner 

* Custom JavaScript has been used to create the site’s navigation, loading specific content dynamically. 

#### Features left to implement 

* Integrate icons with the returned API data to show a visual representation of the weather 

* Link the Google Maps & Places APIs with location data to display map of the search location and local attractions 

#### App Requirements 

* The app will load content dynamically; the page will not reload when a nav-link is clicked, but display only the specific content from a partial html file. 

* The app will call on the openWeather API to provide weather data for the user’s chosen city location 

* The contact form will send the owner/developer an email with the user’s completed form entry (including their name and email address). 

### Structure/Skeleton 

#### Site Map 

The Home page is the landing page for the website. It will contain a search box for the user to enter their chosen city location, a button to complete the search function, and then display the results in the space below the input. 

The Contact page will allow users to complete a form with their name, email address and a message or project idea to share with the site owner/developer. 

The navbar will feature at the top of each page, collapsible in all viewports to free up valuable real-estate on the page to allow for the JavaScript slideshow to scroll through some images of the weather. 

The footer on each page will contain the copyright declaration and a link to the developer’s GitHub. 

#### Wireframes  

Initial app ideas  

![Initial wireframes](assets/readme-imgs/initialwireframe.jpg)

Revised app ideas 

![Revised wireframes](assets/readme-imgs/revisedwireframe.png)

#### Interaction Design  

To ensure a consistent design throughout the site, I will use a colour board to create a theme. All links will have the same styling, and when hovered over. All headings will have the same styling. All images will be edited in shape and size to fit the theme.  

#### Information Architecture  

![App structure](/assets/readme-imgs/appstructure.png)

![App structure](/assets/readme-imgs/filestructure.png)

### Surface 

#### Colour board 

| Hex Value | Colour      |
|-----------|-------------|
| #64CAEA   | Sky Blue    |
| #64858F   | Cloudy Grey |    

#### Typography 

The fonts Alegreya Sans SC and Lato from Google Fonts have been chosen as the main fonts throughout the wesbite. Alegreya Sans SC is quite ornate yet readable and thus is used for headings and titles. Lato compliments this with its simplistic style for the more minor text features of the app. 

## Technologies Used 

The overall structure of the site is created using semantic HTML5 alongside the Bootstrap 4 CSS framework used for elements such as the nav bar. I have used CSS3 to create custom styles to enhance the design of each page. Bootstrap 4 has also been used to support elements that use Javascript and JQuery for example the modal when the user clicks the submit button on the email form. All styles can be found in assets directory. 

The navigation for the site has been created using custom JavaScript and the use of Fragment IDs. The slideshow is also running with a custom JavaScript function alongside CSS that manipulates a slide’s z-index in a sequence in order to display slides one after the other. 

The main feature of the app, the weather search, is facilitated by JQuery and JavaScript to create an AJAX/HTTPRequest to the openWeather API and return the results in the JSON format. Video tutorials and the API documentation from openWeather have been used as a guide for this function. 

The HTML contact form is supported by the emailJS service as demomstrated in the Code Institute course.  

## Testing 

Testing has been consistent throughout the development of this site; with every new feature, style or new content being run using the GitPod preview as well as using Chrome Developer Tools to isolate certain elements of my code. Chrome Developer Tools have also been used to view each page on responsive screen sizes as well as the predetermined sizes such as the iPhone 6, a Galaxy S5 and an iPad pro. 

All of the HTML and CSS has been run through online validators to catch any syntactical errors. 

The Javascript has been ‘beautified’ by a free online source to make sure it is readable and indented correctly. 

The developer (myself) and other individuals have completed the following manual tests:

| Manual Test                                                                          | Result     |
|--------------------------------------------------------------------------------------|------------|
| Navbar expands and collapses on click of the burger icon and nav-links               | Successful |
| Nav-links load correct HTML partial content when clicked                             | Successful |
| External links take user to correct target in a new tab                              | Successful |
| Text appears correctly & legibly in input and form elements                          | Successful |
| Text clears in weather input when user clicks to enter another location              | Successful |
| Email is sent to developer email address when user submits form                      | Successful |
| Error warning appears when user does not enter a valid email address                 | Successful |
| All form inputs must be completed to send email                                      | Successful |
| App shows all relevant content on all devices and viewport sizes in Chrome Dev Tools | Successful |
| Weather input element returns correct data for user chosen location                  | Successful |
| JSON data printed to console when openWeather API is called                          | Successful |
| Success code 200 printed to console when email has sent successfully                 | Successful |

###EmailJS Test

![Completed email form](assets/readme-imgs/emailform.png)

![Form submitted](assets/readme-imgs/formsent.png)

![Email received successfully](assets/readme-imgs/emailsuccess.png)
 
## Deployment 

All code for this website is written and edited in the GitPod IDE. A GitHub repository has been created for this project, called IFD-weather-app.  

Each phase of work has been committed to Git and pushed to this repository, using the following commands: 

* $ git add . 

* $ git commit -m "commit description here" 

* $ git status  

    * to check that all the modified files had been added to git 

* $ git push origin master 

* $ Username 

* $ Password 

    * (Username and Password not applicable when using GitPod as the IDE and repository are linked via Github) 

* git status 

    * the final check that the files had been committed to the repository 

 

The final site is being hosted by GitHub pages using this URL:  

https://elliegmawer.github.io/IFD-weather-app/ 
 

## Content 

The following free sources have been used for inspiration and documentation for certain elements and features on the app: 
 
* [Bootstrap 4 for the nav-bar and modal](https://getbootstrap.com/) 

* [openWeather API](https://openweathermap.org/api) 

* [Images for the slideshow](https://unsplash.com/s/photos/weather) 

* [Inspiration for the vanilla JS slideshow](https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/) 

*  [Inspiration for dynamic navigation using JavaScript](https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng) 

 
 

## Acknowledgements 
 

I decided to create an app that I would use each day myself, adding in features to ensure the project criteria were met. My mentor Brian inspired me to create a single page application; the dynamic navigation is something I had not considered before but wanted to explore after noticing how many websites use this kind of technology for example Gmail.com. 
 
 
 

 