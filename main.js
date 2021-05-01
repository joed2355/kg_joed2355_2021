var numbers = process.argv.slice(2);//get the integers from command line
var words = new Array(numbers.length);
var output_string = "";

//initialize words array
for (var i = 0; i < words.length; i++) {
     words[i] = "";
}

changeToWords(numbers, words);

//if there is no error detected, add each element into a new string to be printed without array brackets
if (words[0] != "ERROR") {
    for (var i = 0; i < words.length; i++) {
              output_string += words[i];
	 //if the end of the array has not been reached, add a comma and whitespace before the next element
         if (i < words.length - 1) {
              output_string += ", ";
         }
     }
    //print the newly-formed output string
    console.log(output_string);
} else {
     //If the first element is equal to "ERROR", then an invalid character was detected. Print error message instead.
     console.log("ERROR: Invalid character detected. Operation aborted.");
}

//function to convert integer values into phonetic equivalent
//parameters: 
//	(1)num_arr: the array that holds the integer values
//	(2)word_arr: the array that will hold the phonetic strings and an error message (should an error occur)
function changeToWords(num_arr, word_arr) {
    //for each element in num_arr...
    for (var i = 0; i < num_arr.length; i++) {
	//...change it to a string...
        var dummy = num_arr[i].toString();
	//...and store its phonetic equivalent in word_arr
        for (var j = 0; j < dummy.length; j++) {
            switch (dummy.charAt(j)) {
                case '0':
                    word_arr[i] += ("Zero");
                    break;
                case '1':
                    word_arr[i] += ("One");
                    break;
                case '2':
                    word_arr[i] += ("Two");
                    break;
                case '3':
                    word_arr[i] += ("Three");
                    break;
                case '4':
                    word_arr[i] += ("Four");
                    break;
                case '5':
                    word_arr[i] +=("Five");
                    break;
                case '6':
                    word_arr[i] += ("Six");
                    break;
                case '7':
                    word_arr[i] += ("Seven");
                    break;
                case '8':
                    word_arr[i] += ("Eight");
                    break;
                case '9':
                    word_arr[i] += ("Nine");
                    break;
		//if ANY character that is not between 0 and 9 (both inclusive) is detected,
		//make the first element of word_arr into an error message and immediately break from the function
		default:
		    word_arr[0] = ("ERROR");
		    return;
            }
        }
    }
}
