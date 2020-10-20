function msg(){
    alert("Thank You.You have succesfully submitted the details!");
}

function saveFile(){
    // Get the data from each element on the form.
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const gender = document.getElementById('gender');
    const country = document.getElementById('country');
    const languages = document.getElementById('languages');
    const favourite = document.getElementById('fc');
    const image = document.getElementById('image');
    const email = document.getElementById('email');
    const time = document.getElementById('st');
    const website = document.getElementById('wa');
    const cgpa = document.getElementById('cgpa');
    // This variable stores all the data.
    let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Age: ' + age.value + ' \r\n ' + 
            'Gender: ' + gender.value + ' \r\n ' + 
            'Country: ' + country.value + ' \r\n ' + 
            'Languages Known: ' + languages.value + ' \r\n ' + 
            'Favourite Color: ' + favourite.value + ' \r\n ' + 
            'Upload Photograph: ' + image.value + ' \r\n ' + 
            'Email: ' + email.value + ' \r\n ' + 
            'Start Time: ' + time.value + ' \r\n ' + 
            'Website Address: ' + website.value + ' \r\n ' + 
            'CGPA: ' + cgpa.value;
        
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'Candidate_List.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }
    newLink.click(); 
}
function msg(){
    alert("Thank You.You have succesfully submitted the details!");
}