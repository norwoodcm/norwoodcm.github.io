//Function Declarations (can be used anywhere in the scope they are defined)

let words = "I am talking"

function speak (words) {
    console.log(words);
}

speak(words);

//Function Expressions (must be declared prior - in same scope)

const speak = function (words) {
    console.log(words);
}

//Look up why we would use Expressions over Declarations