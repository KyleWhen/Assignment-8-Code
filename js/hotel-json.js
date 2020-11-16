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

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  //var night = parseInt(inputJson["num"]);
  // var cost = parseInt(inputJson["room"].slice(-3));
  // console.log("The cost for this reservation is " + night * cost);

  /* save the data to database */
  firebase
    .firestore()
    .collection("hotelreservation")
    .add(inputJson);


  /* clear the entry */
  $("form")[0].reset();
});
