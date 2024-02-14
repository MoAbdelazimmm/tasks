    
    //  Ex(6) // Function that accepts a string and then checks if it is palindrome or not.
    //  (Search for what palindrome string is if you don’t know). 

//________________________________________________________________________________________________________________________________
    
    // Ex(7) Function that accepts a string and remove the extra spaces at the start 
    // and the end of this string

        function  removeSpaces (string){
        return string.trim();
        }
        console.log(removeSpaces("     Azima   "));
        console.log("   Azima   ")  // TEST

//________________________________________________________________________________________________________________________________

    // E(8)   //In specific location all URLs start with (ww.) and ends with (.eraa).
    // Make a function that accepts a URL and check if it’s from this location or not.
    // Example: 1. (ww.moamen.eraa) => true
    // 2. (w3w.sherif.err) => false

        function url(string){
            return string.startsWith("ww.") && string.endsWith(".eraa") ;
        }
        console.log(url("ww.azima.eraa"))
        console.log(url("www.azima.com"))

//________________________________________________________________________________________________________________________________

    // Ex(9) // Function that takes a string and remove the ‘o’ letter from it (Capital and small)
    // Example: 1. “Eraoa” => “Eraa”
    // 2. “oMOamen” => Mamen

        function removeO (string){
            return string.replace(/o/gi,"") //      /o >> the specified character    /g >> golbal in any string     /i >> make case sinsitve ( o = O || a = A)
            }
            console.log(removeO("EraOaa"));
            console.log(removeO("Azioma"));


            // -----------------------------


    // Ex(9) // another way

         function RemoveO (str){
            let result =""
            for (let i =0 ; i<str.length ; i++){
                if (str[i] !=="o" && str[i] !=="O" ){
                    result += str[i]
                }
            }
            return result
         }
         console.log(RemoveO("Eroaoaa"))   
         console.log(RemoveO("OOazimOa"))   



//________________________________________________________________________________________________________________________________

    // Ex(10) // Function that accepts three strings. Check if the second and the third strings are a substring of the first one.
    // (Substring means that the string is a part of another string).
    // Example: 1. “SoWhatYesOhh”, “What”, “Ohh” => true
    // 2. “SoWhatYesOhh”, “So”, “Ah” => false (“Ah” not in the string)


    function AreSubstring( str1,str2,str3){

        return str1.includes(str2) && str1.includes(str3)

    }

    console.log(AreSubstring("SoazimaYesOhh","azima","Ohh")); //true
    console.log(AreSubstring("SoWhatYesOhh","hi","azima")); //false


        // -----------------------------


    // Ex(10) //  other way

    function Substring( str1,str2,str3){

        if(str1.includes(str2) && str1.includes(str3)) {
            return true
        }
        else{
            return  ` false cause "${str3}" or "${str2 }"  not in the string `
        }
    }

    console.log(Substring("SoazimaYesOhh","azima","Ohh")); //true
    console.log(Substring("SoWhatYesOhh","hi","azima")); //false
