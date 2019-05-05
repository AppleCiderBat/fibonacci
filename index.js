function fibonacci () {
    firstNum = 0;
    secondNum = 1;
    thirdNum = 1;
    fourthNum = secondNum + thirdNum;
    fifthNum = secondNum + fourthNum;
    //aaaand after the fifthNum, I realized that this probably wasn't the way to do it.

    for (i = 2; i <= 499; i++) {  
            firstNum[i]
            secondNum[i]
            thirdNum[i]
            fourthNum[i]
            fifthNum[i]
        /*these apparently don't do anything...
        I removed them and got the same result.
        Also, I tried putting the console.log within the for loop,
        but the console would tell me 
        Uncaught SyntaxError: missing ) after argument list*/
    }
    console.log(firstNum, secondNum, thirdNum, fourthNum, fifthNum, i)
}
fibonacci()