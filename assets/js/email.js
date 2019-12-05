//emailJS service linking predetermined template to contact.html form

function sendMail(contactForm) {
 emailjs.send("gmail", "developer_weather_app", {
   "from_name": contactForm.name.value,
   "from_email": contactForm.email.value,
   "project_enquiry": contactForm.projectsummary.value
  })
  .then(function(response) {
   console.log("SUCCESS!", response.status, response.text); //development test
  }, function(error) {
   console.log("FAILED...", error); //development test
  });
 document.getElementById("emailform").reset(); //clear form once email has been sent for better UX
 return false; // To block from loading a new page
}

//modal from bootstrap 4
$("#emailform").on('submit', function(e) {
 $('#myModal').modal('show');
 e.preventDefault();
});