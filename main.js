// javascript

//check to see whether the input from the user is a valid
//hex color

//1. #000000 or 000000
//2. check the length - should be either 3 or 6 characters

var hexInput = document.getElementById("hexInput");
var inputColor = document.getElementById("inputColor");

hexInput.addEventListener("keyup", () => {
    const hex = hexInput.value;
    if(!isValid(hex)) return;

    const remove_hashtag = hex.replace("#", "");
    inputColor.style.backgroundColor = ("#") + remove_hashtag;
})

const isValid = (hex) => {
    if(!hex) return false;

    const remove_hashtag = hex.replace("#", "");
    return remove_hashtag.length === 3 || remove_hashtag.length === 6;
}

console.log(vaidation_hex("#333"));
console.log(vaidation_hex("#333333"));
console.log(vaidation_hex("#3333"));
console.log(vaidation_hex("#0000000"));
