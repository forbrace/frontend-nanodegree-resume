var bio = {
  "name": "Dmitriy Paputsa",
  "role": "Front-End developer",
  "contacts": {
    "email": "<a href=\"mailto:higher@higher.com.ua\">higher@higher.com.ua</a>",
    "mobile": "<a href=\"tel:+380505851390\">+380505851390</a>",
    "github": "<a href=\"http://github.com/forbrace\">forbrace</a>",
    "twitter": "<a href=\"http://twitter.com/forbrace\">forbrace</a>",
    "location": "Yalta"
  },
  "bioPic": "images/fry.jpg",
  "welcomeMessage": "Hi! Here's my resume.",
  "skills": ["html", "css", "design", "programming"]
};

var work = {
  "jobs": [{
    "employee": "Yarillay.ru",
    "title": "Front-End developer",
    "dates": "2012 - 2014",
    "location": "Moscow",
    "description": "Web development company. PSD to HTML convertion, front-end development, email development."
  }, {
    "employee": "prostopleer.com",
    "title": "Front-End developer",
    "dates": "2010 - 2012",
    "location": "Moscow",
    "description": "Startup, online music player. UI/UX desing, Front-end development."
  }, {
    "employee": "nnm.me",
    "title": "Front-End developer",
    "dates": "2008-2009",
    "location": "Moscow",
    "description": "Highload web project. Front-end developer."
  }]
};

var projects = {
  "projects": [{
    "title": "Prostopleer.com",
    "dates": "2010 - 2012",
    "description": "Online music player",
    "images": ["images/197x148.gif"]
  }, {
    "title": "Chatvdvoem.ru",
    "dates": "2008-2009",
    "description": "Funny chat with random user",
    "images": ["images/197x148.gif", "images/197x148.gif"]
  }]
};

var education = {
  "schools": [{
    "name": "Maritime State University",
    "location": "Novorossiysk",
    "degree": "Masters",
    "majors": ["Engineer"],
    "dates": "1991 - 1997",
    "url": "http://eng.aumsu.ru/"
  }],
  "onlineCourses": [{
    "name": "Front-End Developer Nanodegree",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/nanodegrees"
  }, {
    "name": "Javascript, DOM Interfaces",
    "school": "Javascript.ru",
    "dates": "2014",
    "url": "http://learn.javascript.ru"
  }]
};

// bio display
function bioDisplay() {
  
  // name & role
  if (this.name) {
    $("#header .inside").append(HTMLheaderName.replace('%data%', this.name));
  }
  if (this.role) {
    $("#header .inside").append(HTMLheaderRole.replace('%data%', this.role));
  }

  // contacts
  if (this.contacts && !emptyObject(this.contacts)) {
    $('#topContacts').appendTo('#header .inside');

    if (this.contacts.generic) {
      $('#topContacts, #footerContacts').append(HTMLcontactGeneric.replace('%data%', this.contacts.generic));
    }
    if (this.contacts.mobile) {
      $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', this.contacts.mobile));
    }
    if (this.contacts.email) {
      $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', this.contacts.email));
    }
    if (this.contacts.github) {
      $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
    }
    if (this.contacts.twitter) {
      $('#topContacts, #footerContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
    }
    if (this.contacts.location) {
      $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', this.contacts.location));
    }
    if (this.contacts.blog) {
      $('#topContacts, #footerContacts').append(HTMLblog.replace('%data%', this.contacts.blog));
    }
  }

  // Picture
  if (this.bioPic) {
    $('#header .inside').append(HTMLbioPic.replace('%data%', this.bioPic));
  }

  // Welcome Message
  if (this.welcomeMessage) {
    $('#header .inside').append(HTMLWelcomeMsg.replace('%data%', this.welcomeMessage));
  }

  // Skills
  if (this.skills && this.skills.length) {
    $("#header .inside").append(HTMLskillsStart);
    var skills = '';

    for (var i = 0, l = this.skills.length; i < l; i++) {
      skills += HTMLskills.replace('%data%', this.skills[i]);
    }

    $("#skills").append(skills);
  }
};

// work
function workDisplay() {
  if (this.jobs && this.jobs.length) {
    for (var i = 0, l = this.jobs.length; i < l; i++) {

      $("#workExperience .inside").append(HTMLworkStart);

      var formattedEmployee = HTMLworkEmployer.replace('%data%', this.jobs[i]['employee']);
      var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[i]['title']);
      var formattedEmployeeTitle = formattedEmployee + formattedTitle;
      var formattedDates = HTMLworkDates.replace('%data%', this.jobs[i]['dates']);
      var formattedLocation = HTMLworkLocation.replace('%data%', this.jobs[i]['location']);
      var formattedDescription = HTMLworkDescription.replace('%data%', this.jobs[i]['description']);
      
      if (this.jobs[i]['employee'] && this.jobs[i]['title']) {
        $('.work-entry:last').append('<div class="employee-title">' + formattedEmployeeTitle + '</div>');
      } else if (this.jobs[i]['employee']) {
        $('.work-entry:last').append('<div class="employee-title">' + formattedEmployee + '</div>');
      }
      if (this.jobs[i]['dates']) {
        $('.work-entry:last').append(formattedDates);
      }
      if (this.jobs[i]['location']) {
        $('.work-entry:last').append(formattedLocation);
      }
      if (this.jobs[i]['description']) {
        $('.work-entry:last').append(formattedDescription);
      }

    }
  }
};

// projects
function projectsDisplay() {
  if (this.projects && this.projects.length) {
    for (var i = 0, l = this.projects.length; i < l; i++) {
      
      $('#projects .inside').append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace('%data%', this.projects[i]['title']);
      var formattedDates = HTMLprojectDates.replace('%data%', this.projects[i]['dates']);
      var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects[i]['description']);

      if (this.projects[i]['title']) {
        $('.project-entry:last').append('<div class="project-title">'+formattedTitle+'</div>');
      }
      if (this.projects[i]['dates']) {
        $('.project-entry:last').append(formattedDates);
      }
      if (this.projects[i]['description']) {
        $('.project-entry:last').append(formattedDescription);
      }

      if (this.projects[i]['images'] && this.projects[i]['images'].length) {
        for (var ii = 0, ll = this.projects[i]['images'].length; ii < ll; ii++) {
          $('.project-entry:last').append(HTMLprojectImage.replace('%data%', this.projects[i]['images'][ii]));
        }
      }
      
    }
  }
};

// education
function educationDisplay() {

  if (this.schools && this.schools.length) {
    for (var i = 0, l = this.schools.length; i < l; i++) {
      $('#education .inside').append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace('%data%', this.schools[i]['name']);
      var formattedDegree = HTMLschoolDegree.replace('%data%', this.schools[i]['degree']);
      var formattedDates = HTMLschoolDates.replace('%data%', this.schools[i]['dates']);
      var formattedLocation = HTMLschoolLocation.replace('%data%', this.schools[i]['location']);
      var formattedMajors = HTMLschoolMajor.replace('%data%', this.schools[i]['majors']);

      if (this.schools[i]['name'] && this.schools[i]['degree']) {
        $('.education-entry:last').append('<div class="education-name">' + formattedName + formattedDegree + '</div>');
      } else if (education.schools[i]['name']) {
        $('.education-entry:last').append('<div class="education-name">' + formattedName + '</div>');
      }
      if (this.schools[i]['dates']) {
        $('.education-entry:last').append(formattedDates);
      }
      if (this.schools[i]['location']) {
        $('.education-entry:last').append(formattedLocation);
      }
      if (this.schools[i]['majors']) {
        $('.education-entry:last').append(formattedMajors);
      }
    }
  }

  if (this.onlineCourses && this.onlineCourses.length) {
    $('#education .inside').append(HTMLonlineClasses);

    for (var j = 0, l = this.onlineCourses.length; j < l; j++) {

      $('#education .inside').append(HTMLschoolStart);

      var formattedCourseTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[j]['name']);
      var formattedCourseSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[j]['school']);
      var formattedCourseDates = HTMLonlineDates.replace('%data%', this.onlineCourses[j]['dates']);
      var formattedCourseURL = HTMLonlineURL.replace('%data%', this.onlineCourses[j]['url']);

      if (this.onlineCourses[j]['name'] && this.onlineCourses[j]['school']) {
        $('.education-entry:last').append('<div class="education-name">' + formattedCourseTitle + formattedCourseSchool + '</div>');
      } else if (education.onlineCourses[j]['name']) {
        $('.education-entry:last').append('<div class="education-name">' + formattedCourseTitle + '</div>');
      }
      if (this.onlineCourses[j]['dates']) {
        $('.education-entry:last').append(formattedCourseDates);
      }
      if (this.onlineCourses[j]['url']) {
        $('.education-entry:last').append(formattedCourseURL);
      }

    }
  }
}

// check if obj is empty iterating through obj props
function emptyObject(obj) {
  for (var prop in obj) {
    return false;
  }
  return true;
}

// assign functions to obj methods
education.display = educationDisplay;
bio.display = bioDisplay;
work.display = workDisplay;
projects.display = projectsDisplay;

// invoke methods
bio.display();
work.display();
education.display();
projects.display();

// and map
$('#mapDiv .inside').append(googleMap);