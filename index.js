// // Your code goes here
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//    document.getElementById(p);
// p.textContent = "This is really cool!"
//   });
  
//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );
  let text = document.getElementById('text');
  document.addEventListener("DOMContentLoaded", (event) => {
  text.textContent = `This is really cool!`
  })