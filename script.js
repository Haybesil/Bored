let button = document.querySelector('button');
let inputField = document.querySelector('p');

let url = 'https://www.boredapi.com/api/activity';
// let url = 'https://catfact.ninja/fact';
async function callThisApi () {
       event.preventDefault()
        

       try {
             const request = await fetch(url);
             let response  = await request.text(); 


              let rest = response.substring(0, response.indexOf(',')).replace(/["{}]/g, '').replace('activity:', 'Activity: ');


             inputField.innerHTML = rest;
       
             return response
       } catch (error) {
              console.log('So sorry we just called the api wrongly, please check', error);   
       }
}


callThisApi();


function goToHomePage() {
       // Change the URL to the desired next page
       window.location.href = "home.html";
     }