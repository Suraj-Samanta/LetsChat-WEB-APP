
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBsEX2JuJuY4E9_LulX9vqJaxENMVQkwGo",
    authDomain: "kwitter-61f45.firebaseapp.com",
    databaseURL: "https://kwitter-61f45-default-rtdb.firebaseio.com",
    projectId: "kwitter-61f45",
    storageBucket: "kwitter-61f45.appspot.com",
    messagingSenderId: "214227412560",
    appId: "1:214227412560:web:6c1109e1b55dd5cebfd355"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getElementById("room_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addroom(){
  room_name = document.getElementById("room_name").value ;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class= 'room_name' id="+Room_names+" onclick = 'redirectToRoom Name(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoom(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
