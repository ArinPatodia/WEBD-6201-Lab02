/* Authors: Arin Patodia (100814989)
 * Date   : 2022-02-22
 * Program: The main java script file for my webdsite
 */

"use strict";

//#region HOME/INDEX PAGE CONTENT
(function()
{
    function displayHome()
    {
      //Sets the default Background Image and Colour
      document.body.style.backgroundColor = "#49A4B0";
      document.body.style.backgroundImage = "url(https://www.teahub.io/photos/full/178-1784687_game-of-thrones-dragon-wall.jpg)";
    
        // Step 1. document.createElement
        let homeTitle = document.createElement("h1");
        let homeParagraph = document.createElement("p");
        let backgroundButtons = document.createElement("div");
        
        // Step 2. configure the elements
        homeTitle.setAttribute("id","homeHeader");
        homeParagraph.setAttribute("id", "homeParagraph");


        //Home Page Main Content
        homeTitle.textContent = "Welcome To AP Software (WEBD-6201) - By. Arin Patodia";
        homeParagraph.textContent = "This is the Home-page for my site, which I am building for my WEBD-6201 course.";
        

        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];

        // Step 4. Add / Insert the element
        mainContent.appendChild(homeTitle);
        mainContent.appendChild(homeParagraph);
        mainContent.appendChild(backgroundButtons);
        mainContent.style.background = "rgba(46,46,46,.94)";
        mainContent.style.borderRadius = ".7rem";
        mainContent.style.marginTop = "80px";
        mainContent.classList.add("w-75", "p-5");
        mainContent.style.maxWidth = "800px";
        homeTitle.className = "text-light outline";
        homeParagraph.className = "text-light outline";

    }
//#endregion

//#region ABOUT PAGE CONTENT
    function displayAbout()
    {
      // Grab container element
      let container = document.querySelector(".container");

      // Heading element
      let heading = document.createElement("h1");
      heading.innerText = "This is me! Arin";
      heading.style.textDecoration = "underline";
      heading.style.textDecorationColor = "lightblue";

      // Inject page heading into the DOM
      container.appendChild(heading);
      
      // About Arin container and contents
      let aboutArinContainer = document.createElement("div");
      let aboutArinTextContainer = document.createElement("div");
      aboutArinTextContainer.innerHTML = '<h3 class="pb-4">Arin Patodia</h3>';
      let aboutArinText = document.createElement("p");
      aboutArinContainer.classList.add("my-5", "border-bottom", "p-4", "justify-content-center");
      aboutArinTextContainer.classList.add("col-lg-6", "p-4");
      aboutArinText.innerText = "I am a programming student at Durham collge, Oshawa. I enjoy working with python and C#. I love playing games on my PC and mobile. As a hobby I edit videos and image. ";
      
      // Inject Arin's about text into about container
      aboutArinTextContainer.appendChild(aboutArinText);
            
      // Button to view Arin's resume
      let ArinResumeButton = document.createElement("a");
      ArinResumeButton.innerText = "View Resume";
      ArinResumeButton.classList.add("btn", "btn-success");
      ArinResumeButton.setAttribute("href", "./Assets/Arin_resume.pdf");
      ArinResumeButton.setAttribute("target", "_blank");
      aboutArinTextContainer.appendChild(ArinResumeButton);

      // Arin image 
      let aboutArinImage = document.createElement("div");
      aboutArinImage.innerHTML = `<img src="./Assets/Arin_photo.jpg" class="col-lg-6" />`
      aboutArinImage.classList.add("col-lg-4", "about-img");
      aboutArinContainer.classList.add("row");
      
      // Inject elements into about container
      aboutArinContainer.appendChild(aboutArinTextContainer);
      aboutArinContainer.appendChild(aboutArinImage);
      
      // Inject both about containers into the DOM
      container.appendChild(aboutArinContainer);
      
       
    }
//#endregion

//#region PROJECTS/PRODUCTS PAGE CONTENT
    function displayProjects()
    {
      // Store array of projects of Arin
      let arinProjects = [
        {
          name: "Feedback Page, A ready to apply page on any website for customer feedbacks!",
          image: "./Assets/feedback.jpg",
          
        },
        {
          name: "Plants Info. An Informative page with many differnet options!",
          image: "./Assets/plants.jpeg",
           
        },
        {
          name: "Records. A Page to keep your records updated always!",
          image: "./Assets/record.jpeg",
         
        },
      ];


      // Build projects container
      let container = document.querySelector(".container");
      let projectsContainer = document.createElement("div");
      projectsContainer.classList += "container mx-auto row g-lg-3 justify-content-center projects";
      container.after(projectsContainer);

      // String to store HTML for project cards
      let projectsHTML = "";

      /**
       * displayProjectCards - renders an array of project objects into DOM
       * @param {Array} projects
       */
      function displayProjectCards(projects) {
        projects.forEach(project => {
          const { name, image } = project;
           projectsHTML += `
            <div class="card text-center col-md-5 col-lg-3 p-4 my-2 mx-2">
              <h4>${name}</h4>
              <img src="${image}" class="mx-auto" />
              <div class="row p-4 ">
                <target="_blank" class="col-6">Advanced C# Project with html/CSS </a>
              </div>
            </div>
          `;
        });
      }

      // Call displayProjects function to render HTML for all project cards
      displayProjectCards([...arinProjects]);

      document.querySelector('.projects').innerHTML += projectsHTML;
    }
//#endregion

//#region SERVICES PAGE CONTENT
    function displayServices()
    {
      // Store array of services
      let ArinServices = [
        {
          serviceType: "Video Editing",
          name: "Arin Patodia",
          image: "./Assets/editing.jpg",
          content: "Edit any type of videos, with 3D Animations & graphics"
        },
        {
          serviceType: "Game Developmet",
          name: "Arin Patodia",
          image: "./Assets/gamedev.jpg",
          content: "Need a C# game developer? I can make monogames for both iOS & Android.",  
        },
        {
          serviceType: "python Programming",
          name: "Arin Patodia",
          content: "Worried about your python assignment? Let me help you with my advanced pyhton programming skills", 
          image: "./Assets/python.jpeg",
        },
      ];
      
      // Create container to store services cards
      let containerOne = document.querySelector(".container");
      let servicesContainer = document.createElement("div");
      servicesContainer.classList += "container mx-auto row g-lg-3 mb-5 justify-content-center services mb-3";
      containerOne.after(servicesContainer);

      // Empty string to store HTML containing services cards
      let servicesHTML = "";

      /**
       * displayServiceCards - renders an array of project objects into DOM
       * @param {Array} services
       */
      function displayServiceCards(services) {
        services.forEach(service => {
          const { name,serviceType, image, content } = service;
          servicesHTML += `
            <div class="card text-center col-md-5 col-lg-3 p-4 mb-5 mx-2">
              <h4>${serviceType}</h4>
              <h6>${name}</h6>
              <p>${content}</p>
              <img src="${image}" class="mx-auto services-img mb-3" />
            </div>
          `;
        });
      }  
      
      // Call displayServiceCards function to render HTML for all project cards
      displayServiceCards([...ArinServices]);

      document.querySelector('.services').innerHTML += servicesHTML;
    }
//#endregion

//#region CONTACT PAGE CONTENT
    /**
     * A function to display contact.html 
     */
    function displayContact()
    {     
      let heading = document.querySelector("h1");
      let subHeading = document.createElement("p");
      subHeading.className += "lead w-50 mb-4 text-bold mx-auto";
      subHeading.innerText = "Reach out to discuss your next project today!"
      heading.after(subHeading);

      let messageArea = document.getElementById("messageArea");
      messageArea.hidden = true;

      // form validation
      let fullName = document.getElementById("fullName");
      fullName.addEventListener("blur", function() {
        if(fullName.value.length < 2)
        {
          fullName.focus();
          fullName.select();
          messageArea.hidden = false;
          messageArea.className = "alert alert-danger w-50 mx-auto";
          messageArea.textContent = "Please enter an appropriate Name";
        }
        else
        {
          messageArea.removeAttribute("class");
          messageArea.hidden = true;
        }  
      });

      // sendButton - submits form and redirects user to homepage once validated
      let sendButton = document.getElementById("sendButton");
      sendButton.addEventListener("click", function(event){
        event.preventDefault();
        let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
        co-ole.log(contact.serialize);
            
        // Check if the serialized object exists once validations are performed, and so, redirect user to homepage
        if(contact.serialize()) 
        {
          localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
        }       

        location.href = "index.html";
      });
    }
//#endregion

//#region CONTACT LIST DISPLAY PAGE CONTENT
    /**
     * A function to display contact-list.html
     */
    function displayContactList()
    {

      // Check if records exist in local store
      if(localStorage.length > 0)
      {
        let contactList = document.getElementById("contactList");
        let data = "";

        // Loop through each record in localStorage and render 
        for (let index = 0; index < localStorage.length; index++)
        {
          let contactData = localStorage.getItem((index + 1).toString());

          let contact = new Contact();
          contact.deserialize(contactData);

          data += `<tr>
                  <th scope="row">${index + 1}</th>
                  <td>${contact.FullName}</td>
                  <td>${contact.ContactNumber}</td>
                  <td>${contact.EmailAddress}</td>
                  </tr>`;
        }
        contactList.innerHTML = data;
      }
    }
//#endregion

    function displayLogin() {}

    function displayRegister() {}
    /**
     * A function to load all of the pages
     */
    function Start()
    {
        // Dynamically update Products nav link to Projects
        document.querySelectorAll("nav ul li a")[1].innerHTML = '<i class="fa fa-code"></i> Projects';
        
        // Dynamically generate footer navbar
        let mainContent = document.querySelector("main");
        console.log(mainContent);

        // Create footer
        let footer = document.createElement("footer");
        footer.innerHTML = `        
        <nav class="navbar fixed-bottom text-white navbar-dark bg-dark justify-content-center">
          <p class="my-2"><i class="far fa-copyright"></i> Copyright AP Software, 2022.</p>
        </nav>
        `;

        // Inject footer into bottom of each page
        mainContent.after(footer);
        
        // Create new nav link item and inject into navbar after about us
        const navLinkItem = document.createElement("li");
        navLinkItem.classList.add("nav-item");
        const navLink = document.createElement("a");
        navLink.classList.add("nav-link");
        navLink.setAttribute("href", "human-resources.html")
        navLink.innerHTML = '<i class="fa fa-globe"></i> Human Resources';
        navLinkItem.appendChild(navLink);
        
        // Insert HR link into navbar
        document.querySelectorAll("nav ul li")[3].after(navLinkItem)

        //A switch-case that checks for the title of the current .html page and displays a different display funciton depending
        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
          case "Contact-List":
              displayContactList();
            break;
          case "Login":
              displayLogin();
              break;
          case "Register":
              displayRegister();
              break;
        }        
    }
//Contact Class
class Contact {
  //getters and setters
  get FullName() {
    return this.m_fullName;
  }
  get ContactNumber() {
    return this.m_conactNumber;
  }
  get EmailAddress() {
    return this.m_emailAddress;
  }
  set FullName(value) {
    this.m_fullName = value;
  }
  set ContactNumber(value) {
    this.m_conactNumber = value;
  }
  set EmailAddress(value) {
    this.m_emailAddress = value;
  }

  //Constructor
  /**
   * A Constructor for any Contact objects being instantiated
   * @param {string} fullName
   * @param {string} contactNumber
   * @param {string} emailAddress
   */
  constructor(fullName = "", contactNumber = "", emailAddress = "") {
    this.ContactNumber = contactNumber;
    this.EmailAddress = emailAddress;
    this.FullName = fullName;
  }

  //Methods
  /**
   * Overrides the toString method to print the Contact class
   * @returns {string}
   */
  toString() {
    return `Full Name: ${this.m_fullName}\nPhone: ${this.m_contactNumber}\nEmail: ${this.m_emailAddress}`;
  }

  /**
   * This method returns a JSON Object
   * @returns {Object}
   */
  toJSON() {
    return {
      fullName: this.FullName,
      contactNumber: this.ContactNumber,
      emailAddress: this.EmailAddress,
    };
  }

  /**
   * Method converts the Contact into a comma-seperated value string
   * @returns {String}
   */
  serialize() {
    if (
      this.FullName !== "" &&
      this.ContactNumber !== "" &&
      this.EmailAddress !== ""
    ) {
      return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
    } else {
      console.error(
        "Error: One of more of the Contact Properties are empty or null."
      );
      return null;
    }
  }

  /**
   * Method takes a comma-seperated data string and assigns the values to the contact class properties
   * @param {string} data
   * @returns {void}
   */
  deserialize(data) {
    let propertyArray = data.split(",");
    this.FullName = propertyArray[0];
    this.ContactNumber = propertyArray[1];
    this.EmailAddress = propertyArray[2];
  }
}
// Upon login button with username and password, show name in nav between contact and login/logout link
$("#loginForm .btn-success").on("click", function (e) {
  e.preventDefault();
  console.log("Clicked!");

  // Get values for username and password
  let name = $("#userName").val();
  let password = $("#password").val();

  //Welcome the user with a prompt on successful login
  if ($("#welcomeMessage").text().length < 1) {
    $(".login-container button").before(
      '<span id="welcomeMessage" class="text-white px-4 text-nowrap my-auto">Hello ' +
        name +
        "</span>"
    );

    $(".login-container button").text("Logout"); //update the login button to logout, when logged in
  }

  // Clear form fields
  $("#userName").val("");
  $("#password").val("");

  console.log(`Name: ${name}\nPassword: ${password}`);
});

$(".btn-login").on("click", logoutUser); //logs out the user when they click the logout button

/**
 * logoutUser - toggles text of login button and removes welcome message
 *
 * @returns {void}
 */
function logoutUser() {
  $("#welcomeMessage").remove();
  $(".login-container button").text("Login");
  $(".login-container").remove($("#welcomeMessage"));
  name = "";
  password = "";
}

/**
 * Method is used to validate entries for first name
 *
 * @returns {void}
 */
function testFirstName() {
  //sets the flashing message to hidden
  let messageArea = $("#messageArea").hide();
  let firstNamePattern = /([A-Z][a-z]{1,25})/;
  //validates strings based on regex
  $("#firstName").on("blur", function () {
    if (!firstNamePattern.test($(this).val())) {
      $(this).trigger("focus").trigger("select");
      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please enter a valid first name.");
    } else {
      messageArea.removeAttr("class").hide(); //if validation fails, flash message
    }
  });
}

/**
 * Method is used to validate entries for last name
 *
 * @returns {void}
 */
function testLastName() {
  //sets the flashing message to hidden
  let messageArea = $("#messageArea").hide();
  let lastNamePattern = /([A-Z][a-z]{1,25})/;
  //validates strings based on regex
  $("#lastName").on("blur", function () {
    if (!lastNamePattern.test($(this).val())) {
      $(this).trigger("focus").trigger("select");
      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please enter a valid last name.");
    } else {
      messageArea.removeAttr("class").hide(); //if validation fails, flash the message
    }
  });
}
/**
 * Method is used to validate the entries for email address
 *
 * @returns {void}
 */
function testEmailAddress() {
  //sets the flashing message to hidden
  let messageArea = $("#messageArea").hide();
  let emailAddressPattern = /^([a-zA-Z0-9._%-]{4,}@[a-zA-Z0-9.-]{1,}\.[a-zA-Z]{1,6})*$/;

  //validates a string using regex
  $("#emailAddress").on("blur", function () {
    if (!emailAddressPattern.test($(this).val()) || $(this).val().length < 1) {
      $(this).trigger("focus").trigger("select");
      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please enter a valid Email Address.");
    } else {
      messageArea.removeAttr("class").hide(); //if validation fails, flash the message
    }
  });
}

/**
 * Method is used for validating password entries
 *
 * @returns {void}
 */
function testPassword() {
  //sets the flashing message to hidden
  let messageArea = $("#messageArea").hide();
  let passwordPattern = /^.{7,}$/;
  //validates a string using regex
  $("#confirmPassword").on("blur", function () {
    if (!passwordPattern.test($(this).val())) {
      //regex validation
      $("#password").trigger("focus").trigger("select");

      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please make sure password is more than 6 characters in length.");
    } else if ($("#password").val() !== $(this).val()) {
      //confirming that both passwords match
      $("#password").trigger("focus").trigger("select");

      messageArea
        .show()
        .addClass("alert alert-danger")
        .text(
          "Please make sure password and confirm password values match exactly."
        );
    } //if either thing fails, flash an error message
    else {
      messageArea.removeAttr("class").hide();
    }
  });
}

/**
 * Function runs the validation methods created to run on a blur from the respective textboxes
 *
 * @returns {void}
 */
function formValidation() {
  testFirstName();
  testLastName();
  testEmailAddress();
  testPassword();
}

/**
 * displayRegister - Method displays the register form for the user to input their data
 *
 * @returns {void}
 */
function displayRegister() {
  // Inject message area before form
  $("form").before(`<div id="messageArea"></div>`);

  //hides the message
  $("#messageArea").hide();
  //$("#firstName").focus();

  formValidation(); //validates on leaving a textbox

  $("#registerButton").on("click", (e) => {
    e.preventDefault(); //prevents the default action for the register button on form

    let user = new core.User( //creates a new user using the values input
      firstName.value,
      lastName.value,
      firstName.value,
      emailAddress.value,
      password.value
    );

    if (messageArea.style.display === "none") {
      console.log("New user registered");
      console.log("---------------------");
      console.log(user.toString());

      $("form")[0].reset();

      $("#messageArea")
        .show()
        .addClass("alert alert-success")
        .text("Successfully registered."); //Displays a positive flash message of success

      setTimeout(function () {
        $("#messageArea").hide();
      }, 3000);
    } else {
      console.log("Fix your input please.!"); //Something went wrong!
    }
  });
}
//Displays the form
displayRegister();
//namespace core
let core;
((core) => {
  class User {
    // getters and setters
    get FirstName() {
      return this.m_firstName;
    }

    set FirstName(value) {
      this.m_firstName = value;
    }

    get LastName() {
      return this.m_lastName;
    }

    set LastName(value) {
      this.m_lastName = value;
    }

    get Username() {
      return this.m_username;
    }

    set Username(value) {
      this.m_username = value;
    }

    get EmailAddress() {
      return this.m_emailAddress;
    }

    set EmailAddress(value) {
      this.m_emailAddress = value;
    }

    get Password() {
      return this.m_password;
    }

    set Password(value) {
      this.m_password = value;
    }

    // constructor

    /**
     * Creates an instance of User.
     * @param {string} [firstName=""]
     * @param {string} [lastName=""]
     * @param {string} [username=""]
     * @param {string} [emailAddress=""]
     * @param {string} [password=""]
     */
    constructor(
      firstName = "",
      lastName = "",
      username = "",
      emailAddress = "",
      password = ""
    ) {
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Username = username;
      this.EmailAddress = emailAddress;
      this.Password = password;
    }

    // methods

    /**
     * This method overrides the built-in toString method for the User class
     *
     * @returns {string}
     */
    toString() {
      return `First Name     : ${this.FirstName} \nLast Name      : ${this.LastName} \nUsername       : ${this.Username} \nEmail Address  : ${this.EmailAddress} `;
    }

    /**
     * This method returns a JSON object made up of the properties of the User class
     *
     * @returns {Object}
     */
    toJSON() {
      return {
        FirstName: this.FirstName,
        LastName: this.LastName,
        Username: this.Username,
        EmailAddress: this.EmailAddress,
      };
    }

    /**
     * This method takes a JSON data object and assigns the values to the User class properties
     *
     * @param {Object} data
     */
    fromJSON(data) {
      this.FirstName = data.FirstName;
      this.LastName = data.LastName;
      this.Username = data.Username;
      this.EmailAddress = data.EmailAddress;
      this.Password = data.Password;
    }

    /**
     * This method converts the User into a comma-separated value string
     *
     * @returns {string}
     */
    serialize() {
      if (
        this.FirstName !== "" &&
        this.LastName !== "" &&
        this.EmailAddress !== "" &&
        this.Username !== ""
      ) {
        return `${this.FirstName},${this.LastName},${this.EmailAddress},${this.Username}`;
      } else {
        console.error("One or more properties of the User is empty");
        return null;
      }
    }

    /**
     * This method takes a comma-separated data string and assigns the values to the User class properties
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data) {
      let propertyArray = data.split(",");
      this.FirstName = propertyArray[0];
      this.LastName = propertyArray[1];
      this.Username = propertyArray[2];
      this.EmailAddress = propertyArray[3];
    }
  }

  core.User = User;
})(core || (core = {}));

    
window.addEventListener("load", Start);

})();