
//code by Domanrovil Ovalle 
let valid_input = false;
// num can be reached globally
let N, input, num;
let all_guess = [];

//this function creates a prompt asking for  max number and insures that it is not an invalid input
function myFunction() {
    // resets everything os you can start again
    (N = null), (input = null), (num = null), all_guess = []
    while (!valid_input) {
        input = window.prompt("What max positive number would you like?");
        N = Math.round(input);
        if (!isNaN(N) && N > 0) {
            valid_input = true;
            message.innerHTML = "You have chosen " + N + " as your max number";
            num = Math.floor(Math.random() * N + 1);
            document.getElementById("maxNumber").innerHTML = "Max number: " + N;
        } else {
            alert(
                "I am sorry but you need to input a positive number as your max range."
            );
        }
    }
}

//says the number the person has chosen as their maximum range
function take_a_guess(N) {
    document.getElementById(
        ("yourmax".innerHTML = "You have entered " + N + "as your max")
    );
}
// this function allows person to guess and see if they got the right answer as well  as push a guess to the array
function do_guess() {
    let guess = document.getElementById("guess").value;
    let true_guess = Number(guess);
    let message = document.getElementById("message");

    // if guess was correct along
    if(true_guess == num ) {
        if (!all_guess.includes(true_guess)){
            all_guess.push(true_guess)}
            else{alert("you chose that number already!")}

        message.innerHTML = `You got it!` + ` Your total amount of guesses was ${all_guess.length ++}  </br> All of your guesses were ${all_guess}`

        all_guess=[];
    }
    else if (true_guess > num && true_guess <= N) {
        message.innerHTML = "No, try a lower number.";
        
        if (!all_guess.includes(true_guess)){
        all_guess.push(true_guess) } 
        else{alert("you chose that number already!")}
    } 
    
    else if (true_guess > N || true_guess<= 0){
        alert("That number is not in range, try again.")
    }
    else if (isNaN(true_guess)){
        alert("Not a number")
    }
    else if(true_guess <= N){
        message.innerHTML = "No, try a higher number.";  
        if (!all_guess.includes(true_guess)) {
            all_guess.push(true_guess);

          }
          else{alert("you chose that number already!")}

    }

}

