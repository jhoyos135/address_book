

window.onload = () => {

let submit = document.querySelector('.submit');
var form = document.getElementsByName('contact-form')[0];

submit.onclick = function(e) {
    e.preventDefault();
   
    let name = document.querySelector("input.name");

    let url = `/api/customers/${name.value.toLowerCase()}`;

    fetch(url).then( (data) => {

        return data.json()
        
    }).then(( myCustomers) => {

    let obj = myCustomers;

        for(let i = 0; i < obj.length; i++) {

     let customers_found = `
        
    <li>
        <span><strong>Name:</strong> ${obj[i].name}</span>
        <span><strong>Age:</strong> ${obj[i].age}</span>
        <span><strong>Phone:</strong> ${obj[i].phone}</span>
        <span><strong>Email:</strong> ${obj[i].email}</span>
    </li>

        `;
        document.querySelector("#information").innerHTML += customers_found;
        
            }
          
        });
        
    
    form.reset();

    document.querySelector("#information").innerHTML = '';

    };
};

let name = document.querySelector("input.name");

function success() {
    if(name.value.length == 0 || name.value.length === '' ) { 
           document.querySelector('.submit').disabled = true; 
       } else { 
           document.querySelector('.submit').disabled = false;
       }
   }

   





