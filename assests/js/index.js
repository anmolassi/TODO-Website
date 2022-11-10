// function myfunction() {
//   const arr = document.getElementsByClassName("checkboxes");
//   console.log(arr[0].value);
//   function myfunction() {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].checked) {
//         console.log("anmol8080");
//         console.log(arr[i].value);
//         document.location.href =
//           "http://localhost:8000/delete-task/?description=" + arr[i].value;
//       }
//     }
//   }
// }
console.log(new Date().toISOString().split('T')[0]);
var today = new Date().toISOString().split('T')[0];
document.getElementsByName("due_date")[0].setAttribute('min', today);