"use strict";

var accountSid = "AC9d02a8606f9040afa9c784907d99e716";
var authToken = "96eb3aadc533c63b16601ad5b5f0a27c";

var client = require("twilio")(accountSid, authToken);

client.messages.create({
  to: '+14156101712',
  from: '+14157291956',
  body: 'Your request has recieved enough votes for approval! The manager will finalize your request soon!'
}).then(function (message) {
  return console.log(message.sid);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtc21zLmpzIl0sIm5hbWVzIjpbImFjY291bnRTaWQiLCJhdXRoVG9rZW4iLCJjbGllbnQiLCJyZXF1aXJlIiwibWVzc2FnZXMiLCJjcmVhdGUiLCJ0byIsImZyb20iLCJib2R5IiwidGhlbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2lkIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sYUFBTixBQUFtQjtBQUNuQixJQUFNLFlBQU4sQUFBa0I7O0FBRWxCLElBQU0sU0FBUyxrQkFBQSxBQUFrQixZQUFqQyxBQUFlLEFBQThCOztBQUU3QyxPQUFBLEFBQU8sU0FBUCxBQUFnQjtNQUFPLEFBQ2pCLEFBQ0o7UUFGcUIsQUFFZixBQUNOO1FBSEYsQUFBdUIsQUFHZjtBQUhlLEFBQ3JCLEdBREYsQUFLQyxLQUFLLFVBQUEsQUFBQyxTQUFEO1NBQWEsUUFBQSxBQUFRLElBQUksUUFBekIsQUFBYSxBQUFvQjtBQUx2QyIsImZpbGUiOiJzZW5kLXNtcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHBvcmNoZTg3L0xlYXJuZXJzR3VpbGQvY3J5cHRvLWNvaW4tbWUifQ==