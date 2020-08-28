
// socket init
$(document).ready(function() {
    //socket is global
    socket = io.connect();
    if(socket.connected){
      alert("connected");
    }
});



var getStrMonth = function(month){
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return monthNames[month];
}

// if "set" button clicked
$('#set').click(function(){
  var waitingCalls = parseInt($("#waitingCalls").val());
  if(!Number.isInteger(waitingCalls)) {
    alert("Not Submmited :\n'Waiting Calls' Field Needs to be an Integer Value");
    return;
  }
  else{
    socket.emit("waitingCalls", { waitingCalls: waitingCalls });
  }
});

// if "answerCall" button was clicked
$("#answerCall").click(function(){
  console.log("Call Started");
  // construct new row
  var newRow = '';
  // add opening tag
  newRow += '<tr>';

  // add start time
  var now = new Date();
  newRow += '<td class="stratTime">' +
            now.getDate() +
            '-' + getStrMonth(now.getMonth()) +
            '-' + now.getFullYear() +
            ' ,' + now.getHours() +
            ':' + now.getMinutes() +
            ':' + now.getSeconds()
            + '</td>';

  // add city select
  newRow += `<td>
    <select class="city">
      <option value="jerusalem">ירושלים</option>
      <option value="telaviv">תל אביב</option>
      <option value="haifa">חיפה</option>
      <option value="eilat">אילת</option>
      <option value="beersheva">באר שבע</option>
      <option value="petahtiqva">פתח תקווה</option>
      <option value="ariel">אריאל</option>
      <option value="holon">חולון</option>
      <option value="batyam">בת ים</option>
    </select>
  </td>`;

  // add topic select
  newRow += `<td>
    <select class="topic">
      <option value="medicine">תרופות</option>
      <option value="food">מזון</option>
      <option value="water">מים</option>
      <option value="shelter">מיגון</option>
      <option value="info">מידע</option>
      <option value="evacuation">פינוי</option>
      <option value="medicalAttention">טיפול רפואי</option>
    </select>
  </td>`;

  // add language select
  newRow += `<td>
    <select class="language">
      <option value="hebrew">עברית</option>
      <option value="english">אנגלית</option>
      <option value="amhari">אמהרית</option>
      <option value="russian">רוסית</option>
      <option value="thai">תאילנדית</option>
    </select>
  </td>`;

  // add gender select
  newRow += `<td>
    <select class="gender">
      <option value="male">ז</option>
      <option value="female">נ</option>
    </select>
  </td>`;

  // add age input
  newRow += '<td><input type="text" class="age"></td>';
  // add end button
  newRow += '<td><button type="button" class="endButton">End</button></td>';

  // add closing tag
  newRow += '</tr>';
  // append to table
  $(".callTable tbody").append(newRow);
});

// if "endButton" button was clicked
// (needs to be selected from document because dinamically added to table[doesn't exist at first])
$(document).on("click", "button.endButton",function(){
  console.log("Call Ended");
  var currentRow = $(this).closest("tr");
  var st = currentRow.find("td:eq(0)").html();
  var ag = parseInt(currentRow.find("td:eq(5) input").val())
  if(!Number.isInteger(ag)){
    alert("Record Not Submmited :\nAge Field Needs to be an Integer Value");
    return;
  }

  // TODO check if age input is integer(and not Null)
  socket.emit("callDetails",
  {
    situation: $("#situation").val(),
    startTime: st,
    duration: (new Date() - new Date(st)) / 1000,
    city: currentRow.find("td:eq(1) option:selected").val(),
    topic: currentRow.find("td:eq(2) option:selected").val(),
    language: currentRow.find("td:eq(3) option:selected").val(),
    gender: currentRow.find("td:eq(4) option:selected").val(),
    age: ag
  });

  for (var i = 1; i < 5 ; i++) {
    var cr = currentRow.find("td:eq(" + i + ")");
    cr.html(cr.find("option:selected").text());
  }
  // set ag input box as constant html value
  currentRow.find("td:eq(5)").html(ag)
  // disable "end" button
  currentRow.find("td:eq(6) button").attr("disabled", "disabled");
});
