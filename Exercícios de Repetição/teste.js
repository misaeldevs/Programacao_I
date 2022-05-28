function largestOfFour(arr) {
    var largestNumber = [0, 0, 0, 0];
    for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        for (var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
            if (arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
                largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
            }
        }
    }
    return largestNumber;
}

console.log(largestOfFour([20, 1, 84, 10]))