import issues from "./components/issues.js";
import { userProfile } from "./components/user-profile.js"
import { usersLet, users } from "./components/users.js";
import { dashboard } from "./dashboard/dashboard.js"
import { header, headerLog} from "./sidebar/header.js"

// if it's default then I won't need { variable }
// if it's default then I need { }

// if it's more than one variable then I'll need {variable, anotherVariable}

document.addEventListener('DOMContentLoaded', inIt, false);

function inIt() {

    let output = document.querySelector('#output')

    output.innerHTML = `
    <h1>${issues} Using a default import</h1>
    <h1>${userProfile}</h1>
    <h1>${dashboard}</h1>
    <h1>${header}</h1> 
    <hr>
    <h3>Importing two variables from the same file:</h3>
    <h2>${users()}</h2>  
    <h2>${usersLet}</h2>
    `

    headerLog();
    // se é uma função então preciso de colocar o () quando faço innerhtml depois da função
}

