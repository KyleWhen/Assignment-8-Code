// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// save the data
$(".sampleSurvey input[type='submit']").click(function(e){
  e.preventDefault();
});

// update the result in table
var value = parseInt($("#ans3").text()) + 1;
console.log(value);
$("#ans3").text("5");