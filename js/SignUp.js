var firebaseConfig = {
  apiKey: "AIzaSyAQ3-DuFMINqU412qUeua5WMZZPU1l1EuU",
  authDomain: "grocerylist-bde77.firebaseapp.com",
  databaseURL: "https://grocerylist-bde77.firebaseio.com",
  projectId: "grocerylist-bde77",
  storageBucket: "grocerylist-bde77.appspot.com",
  messagingSenderId: "139163594125",
  appId: "1:139163594125:web:36edde353ef2c80e4861c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("start...");

$('#signup-form').submit(function(e){
  e.preventDefault();
  console.log("click the submit...");
  var email = "testemail@gmail.com";
  var password = "testtest";
  firebase.auth().createUserWithEmailAndPassword(email,password).then(user =>{
    console.log("success!");
  }).catch(error =>{
    console.log(error.code);
    console.log(error.message);
  });
});