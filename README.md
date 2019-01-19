# Project 2 - Visiting Capital Cities in Europe
This project is built for [Code Institute](https://codeinstitute.net/) as a part of _Full Stack Software Development Diploma course_. Project was focused on using semantic HTML5, SASS along with Bootstrap 4, JavaScript (jQuery) as well as working with Foursquer API with using map (leaflet library).

## UX
This is aiming at people who are heading to one of the capital cities in Europe and looking for accommodation, restaurants or nice sights. This website helps them with planning their journey.

### User Stories

* As a user I want to discover a new and interesting capital cities in Europe

  * As a user I want to be recommended accommodation, restaurants or interesting sights

      * As a user I want to know the address of the recommended venues

### Wireframes:  
The following wireframes were created in order to provide a starting point for the website skeleton:

* [mobile device](wireframes/desktop.PNG)
* [desktop device](wireframes/mobile.PNG)

# Features
The features were used as follow:
* Scrolldown arrows in callout container
* Advanced button for choosing limit for recommended venues as well as radius
* Button "submit" which executes recommended venues on the map

## Technologies Used
I used following technologies for this particular project:
* HTML5
* CSS3
  * [Bootstrap 4](https://getbootstrap.com/)
  * [Font awesome](https://fontawesome.com/) - icons
  * [Google fonts](https://fonts.google.com/) - Roboto & Lobster
  * [BEM](http://getbem.com/) - used for cleaner style sheet
  * Javascript ([jQuery](https://jquery.com/))
  * [leaflet](https://leafletjs.com/) JS library
* [Foursquer API](https://developer.foursquare.com/)
* [Adobe Xd](https://www.adobe.com/cz/products/xd.html)
* [VS Studio Code](https://visualstudio.microsoft.com/cs/?rr=https%3A%2F%2Fwww.google.ie%2F)
* [GIMP](https://www.gimp.org/)

## Testing

I tested my website manually and I also executed automated testing.

### Manual Testing

The manual testing was accomplished mainly by using following technologies/tools:

* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) - Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools can help you edit pages on-the-fly and diagnose problems quickly, which ultimately helps you build better websites, faster.

* Web browers such as:
  * Chrome
  * Opera
  * Mozilla
  * Microsoft Edge
  * Safari

* Devices
  * Desktop
  * Mobile Phone

#### Manual Testing Bugs


* Microsoft Edge:
  * Advanced button lost the darker gray color and looks the same as background
    * fixing: added background color #dddddd
  * `<option value="Prague">The Czech Republic</option>` does not show Prague, but only The Czech Republic.

* Mozilla:
  * Advanced button lost the darker gray color and looks the same as background
    * fixing: added background color #dddddd
  * `<option value="Prague">The Czech Republic</option>` does not show The Czech Republic, but only Prague. 


## Automated Testing
The automate testing was executed by the following tools:

* Chrome Lighthouse

The Lighthouse is an open-source automated tool that audits website for performance, progresssive Web app, accessibility, best practices & SEO. The website current score as follows:

```
> Performance at 82
> Progresssive Web app at 58
> Accessibility at 83
> Best practices at 87
> SEO at 100

the highest score is 100
```

* HTML & CSS validator
  * [HTML validator result](https://validator.w3.org) found one error from line 20 as the pipe key is illegal character in query.
  * [CSS validator result](https://codebeautify.org/cssvalidate) did not find any major error.

## Deployment
The website was deployed on github.
Live version of the website can be found [here](https://tomas-kaiser.github.io/Code-Institute-Milestone-2-Interactive-Frontend-Development/)

## Credits
* Background image was collected from [unsplash](https://unsplash.com/photos/aDxmYZtYj7g)
* Smooth scrolldown effect JS [w3schools](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1)
* Magnifying glass icon [flaticon](www.flaticon.com)

## Contributing
This repository is a part of project for Code Institute of a Full Stack Software Development course. Therefore, I will most likely not accept pull requests.