var numbers = process.argv.slice(2);
var words = new Array(numbers.length);
var output_string = "";

for (var i = 0; i < words.length; i++) {
     words[i] = "";
}

changeToWords(numbers, words);

if (words[0] != "ERROR") {
    for (var i = 0; i < words.length; i++) {
              output_string += words[i];
         if (i < words.length - 1) {
              output_string += ", ";
         }
     }
    console.log(output_string);
} else {
     console.log("ERROR: Invalid character detected. Operation aborted.");
}

function changeToWords(num_arr, word_arr) {
    for (var i = 0; i < num_arr.length; i++) {
        var dummy = num_arr[i].toString();
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
		default:
		    word_arr[0] = ("ERROR");
		    return;
            }
        }
    }
}
