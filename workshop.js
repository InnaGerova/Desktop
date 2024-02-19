function greet (name) {console.log ("Hello " + name);
}

function UserisAdult (name, age) {
    if (age >= 18) {greet (name);
    }
else {
    console.log ("You are not an adult yet");
}
}
UserisAdult("Inna", 33)
