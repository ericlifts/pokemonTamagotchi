$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.reset-button').click(clickedResetButton);
    $('.shiny-button').click(clickedShinyButton);
    $('.pet-image').click(clickedImage);
    $('.berry-button').click(clickedBerryButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Charmander", weight:"18", happiness:"5", flame:"100", comment:""};
    var image = document.getElementById('image');

    function clickedTreatButton() { 
      // Increase pet happiness
      pet_info.happiness++;
      
      // Increase pet weight
      pet_info.weight++;
      
      //message on screen 
      $('#message').finish(); //if there is an animation playing then finish it
      document.getElementById('message').innerHTML = "You gave your pet a treat!";
      $('#message').show().fadeOut(5000); //shows message then fades out
      
      //pet comment
      pet_info.comment = "Yummy!";
      
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness++;
      
      // Decrease pet weight
      pet_info.weight--;
      
      //message on screen 
      $('#message').finish();
      document.getElementById('message').innerHTML = "You play with your pet!";
      $('#message').show().fadeOut(5000);
      
      //pet comment 
      pet_info.comment = "Happy and losing weight!"
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness--;
      
      // Decrease pet weight
      pet_info.weight--;
      
      //message on screen 
      $('#message').finish();
      document.getElementById('message').innerHTML = "You exercise with your pet!";
      $('#message').show().fadeOut(5000);
      
      //pet comment 
      pet_info.comment = "I'm getting sad!"
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
      evolve();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      
      // Add conditional so if weight is lower than zero, set it back to zero
      if(pet_info.weight < 0) {
        pet_info.weight = 0;
      }
      if(pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }
      
    }
    
    function evolve() { //evolves pokemon when certain condition is met
      if(pet_info.happiness >= 10 && image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fcharmander-gif-pokemon.gif?v=1636238810289" && pet_info.flame >= 120){ //charmander to charmeleon
        image.src = "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fpok%C3%A9mon-charmeleongif.gif?v=1636238905881";
        pet_info.name = "Charmeleon";
        pet_info.weight = parseInt(pet_info.weight) + 40;
        $('#message').finish();
        document.getElementById('message').innerHTML = "Your Charmander evolved to a Charmeleon!";
        $('#message').show().fadeOut(10000);
        checkAndUpdatePetInfoInHtml();
      }
      else if(pet_info.happiness >= 10 && image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fshinycharmander.gif?v=1636238535532" && pet_info.flame >= 120){ //shiny charmander to shiny charmeleon
        image.src = "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2F5.gif?v=1636238464824";
        pet_info.name = "Charmeleon";
        pet_info.weight = parseInt(pet_info.weight) + 40;
        $('#message').finish();
        document.getElementById('message').innerHTML = "Your shiny Charmander evolved to a Charmeleon!";
        $('#message').show().fadeOut(10000);
        checkAndUpdatePetInfoInHtml();
      }
      else if(pet_info.happiness >= 20 && image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fpok%C3%A9mon-charmeleongif.gif?v=1636238905881" && pet_info.flame >= 150){ //charmeleon to charizard
        image.src = "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fcharizard12.gif?v=1636239224499";
        pet_info.name = "Charizard";
        pet_info.weight = parseInt(pet_info.weight) + 40;
        $('#message').finish();
        document.getElementById('message').innerHTML = "Your Charmeleon evolved to a Charizard!";
        $('#message').show().fadeOut(10000);
        checkAndUpdatePetInfoInHtml();
      }
      else if(pet_info.happiness >= 20 && image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2F5.gif?v=1636238464824" && pet_info.flame >= 150){ //shiny charmeleon to shiny charizard
        image.src = "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fshinycharizard.gif?v=1636238535938";
        pet_info.name = "Charizard";
        pet_info.weight = parseInt(pet_info.weight) + 40;
        $('#message').finish();
        document.getElementById('message').innerHTML = "Your shiny Charmeleon evolved to a Charizard!";
        $('#message').show().fadeOut(10000);
        checkAndUpdatePetInfoInHtml();
      }
    }

    function clickedResetButton() {
      //function to reset to original values
      pet_info.name = "Charmander";
      pet_info.happiness = 5;
      pet_info.weight = 18;
      pet_info.flame = 100;
      pet_info.comment = "";
      image.src = "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fcharmander-gif-pokemon.gif?v=1636238810289";
      $('#message').finish();
      document.getElementById('message').innerHTML = "Your pet reset!";
      $('#message').show().fadeOut(5000);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedShinyButton() {
      if(image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fcharmander-gif-pokemon.gif?v=1636238810289"){ //if regular charmander then switch to shiny charmander
        image.src = "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fshinycharmander.gif?v=1636238535532";
        //message on screen 
        $('#message').finish();
        document.getElementById('message').innerHTML = "You Charmander is now shiny!";
        $('#message').show().fadeOut(5000);
      }
      else if(image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fpok%C3%A9mon-charmeleongif.gif?v=1636238905881") { //if regular charmeleon then switch to shiny charmeleon
        image.src = "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2F5.gif?v=1636238464824";
        //message on screen 
        $('#message').finish();
        document.getElementById('message').innerHTML = "You Charmeleon is now shiny!";
        $('#message').show().fadeOut(5000);
      }
      else if(image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fcharizard12.gif?v=1636239224499") { //if regular charizard then switch to shiny charizard 
        image.src = "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fshinycharizard.gif?v=1636238535938";
        //message on screen 
        $('#message').finish();
        document.getElementById('message').innerHTML = "You Charizard is now shiny!";
        $('#message').show().fadeOut(5000);
      }
    }
  
  function clickedImage() { 
    //if charmander OR shiny charmander image is clicked play charmander cry
    if(image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fcharmander-gif-pokemon.gif?v=1636238810289" || image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fshinycharmander.gif?v=1636238535532"){
      var audio = new Audio('https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2FCharmanderCry.mp3?v=1636244946733');
      audio.play();
    }
    //charmeleon OR shiny charmeleon image  is clicked play charmeleon cry
    else if(image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fpok%C3%A9mon-charmeleongif.gif?v=1636238905881" || image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2F5.gif?v=1636238464824"){
      var audio = new Audio('https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2FPokemon%20Cries%20-%20%23005%20Charmeleon.mp3?v=1636245605396');
      audio.play();
    }
    //charizard OR shiny charizard image is clicked play charizard cry
    else if(image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fcharizard12.gif?v=1636239224499" || image.src == "https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2Fshinycharizard.gif?v=1636238535938"){
      var audio = new Audio('https://cdn.glitch.me/6477a5ed-860c-451d-a914-83da95555461%2FPok%C3%A9mon%20-%20Charizard%20(Cry).mp3?v=1636245836677');
      audio.play();
    }
  }

  function clickedBerryButton() {
    //when clicked adds +10 flame and 1 weight
    pet_info.flame = parseInt(pet_info.flame) + 10;
    pet_info.weight += 1;
    //message on screen 
    $('#message').finish();
    document.getElementById('message').innerHTML = "You gave your pet a spicy berry!";
    $('#message').show().fadeOut(5000);
    //pet comment 
    pet_info.comment = "My flame is growing!"
    checkAndUpdatePetInfoInHtml();
  }
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.flame').text(pet_info['flame']);
      $('.comment').text(pet_info['comment']);
    }
  