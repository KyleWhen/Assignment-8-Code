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

$("#Login").submit(function(e) {
  e.preventDefault();

  // get the username(email) and password from the form
  var email = document.getElementById("userName").innerHTML(email);
  var password = document.getElementById("passWord").innerHTML(password);
  

  // sign in
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      console.log("Login in successfully");

      //optional
      let user = firebase.auth().currentUser;
      console.log(
        user.displayName + " " + user.email + " " + user.emailVerified
      );
    })
    .catch(error => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
