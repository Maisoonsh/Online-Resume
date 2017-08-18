var bio = {

	"name" : "Maisoon Homidan",
	"role" : "Computer Engineer",
	"contacts": { //object
		"mobile": "966-546818900",
		"email": "maisoon.salah@gmail.com",
		"github": "Maisoonsh",
		"twitter": "@MaisoonHomaidan",
		"location": "Saudi Arabia"
	},

	"welcomeMessage" : "Welcome, this is Maisoon. I believe in all the possibilities and always looking to give all the best out of me. Helping others is another way of happily living.", 
	"skills": ["Programming", "HTML", "CSS", "Front-end Development", "Matlab", "Horse Riding", "Volunteering", "Photography"],
	"bioPic": "images/maisoon.png" 
};

//display function

bio.display = function (){
	var updatedName = HTMLheaderName.replace("%data%", bio.name);
	var updatedRole = HTMLheaderRole.replace("%data%", bio.role);
	$('#header').prepend(updatedName + updatedRole);

	var updatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	//$("#topContacts").append(updateMobile);
	var updatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	//$("#topContacts").append(updateEmail);
	var updatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	//$("#topContacts").append(updateGithub);
	var updatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	//$("#topContacts").append(updateTwitter);
	var updatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	//$("#topContacts").append(updateLocation);

	$('#topContacts, #footerContacts').append(updatedMobile + updatedEmail +
      updatedGithub + updatedTwitter + updatedLocation);
	var updatedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(updatedPic); 
	var updatedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(updatedWelcome);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart); 

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var updatedSkills = HTMLskills.replace("%data%", bio.skills[i]);

        $("#skills").append(updatedSkills);
    }
  }	
};

bio.display(); //Invoke the function

	
var work = { 
	"jobs": [ //array of objects
	{ 
		"employer": "Saudi Aramco",
		"title": "Information Security Dep.",
		"location": "Saudi Arabia",
		"dates": "Summer, 2016",
		"description": "Cooperative Training Program"
},

{ 
	"employer": "Saudi Aramco",
	"title": "Traffic Safety Signature Program (TSSP)",
	"location": "Saudi Arabia",
	"dates": "Fall, 2017",
	"description": "Volunteering Experience"
},

{
	"employer": "Giving Hands",
	"title": "Different Events",
	"location": "Saudi Arabia",
	"dates": "Spring, 2017",
	"description": "Volunteering Experience"
}
]
};

//display: function

work.display = function () { 

if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var updatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var updatedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var updatedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var updatedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var updatedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var updatedEmployerTitle = updatedEmployer + updatedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(updatedEmployerTitle);
        $('.work-entry:last').append(updatedDates);
        $('.work-entry:last').append(updatedLocation);
        $('.work-entry:last').append(updatedDescription);
    }
}
};

work.display(); //Invoke the function

var projects = {
"projects": [ //array of objects 
{
	"title": "Smart Solar-Tracking System",
	"dates": "May, 2016", //string (works with a hyphen between them)
	"description": "Senior Design Project, the objecive of the project is to design a system that precisely locates the Sun’s position in the sky, move the solar panels to face the Sun with 0° incident angle, capture the maximum solar energy possible and to encourage the use of renewable clean energy.",
	"images": ["images/projectpic1.jpg", "images/projectpic2.jpg"] //array with string urls
},

  {
      "title": "Animal Trading Cards",
      "dates": "July, 2017",
      "description": "Convert a design prototype into a functional webpage!",
      "images": ["images/horse.jpg"]
    }
]
};

projects.display = function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var updatedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var updatedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var updatedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(updatedTitle);
        $(".project-entry:last").append(updatedDates);
        $(".project-entry:last").append(updatedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);

        $(".project-entry:last").append(formattedImage);

        }
      }
  }
}; 

projects.display();


var education = {
	"schools": [
	{ // array of objects
		"name": "Prince Mohammad Bin Fahd University",
		"location": "Khobar",
		"degree": "Master",
		"majors": ["Electrical Engineering"], //array of strings
		"dates": "April, 2017 - Present", //string 
		"url": "http://www.pmu.edu.sa/"
	},
	{
		"name": "Prince Mohammad Bin Fahd University",
		"location": "Khobar",
		"degree": "Bachelor",
		"majors": ["Computer Engineering"], //array of strings
		"dates": "Novemeber, 2016", //string 
		"url": "http://www.pmu.edu.sa/"
	}
	],

	"onlineCourses": [ //array of objects
	{
		"title": "Front End Web Development",
		"school": "Udacity",
		"dates": "July, 2017 - Present", // string works with a hyphen
		"url": "https://classroom.udacity.com"
		}
	]
};

education.display = function() {

 if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var updatedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var updatedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var updatedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var updatedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var updatedNameDegree = updatedName + updatedDegree;


        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(updatedNameDegree);
        $('.education-entry:last').append(updatedSchoolDates);
        $('.education-entry:last').append(updatedLocation);

        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
          var updatedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);

          $('.education-entry:last').append(updatedMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var updatedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var updatedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        var updatedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        var updatedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
        var updatedTitleSchool = updatedTitle + updatedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(updatedTitleSchool);
        $('.education-entry:last').append(updatedOnlineDates);
        $('.education-entry:last').append(updatedUrl);
      }
    }
};

education.display();

$('#mapDiv').append(googleMap);
