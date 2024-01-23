/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {

    // Filter out strings with duplicate characters as they can't be part of the solution
    arr = arr.filter(str => new Set(str).size == str.length)
    
    // Helper function to check if characters are unique

    let isUnique = function(str1, str2){
        for(let char of str1){  
            if(str2.includes(char)){
                return false;
            }
        }
        return true;
    }

// Backtracking function to try adding each string to the current combination 

let backtrack = function(index,current){
    let max_length = current.length;

    // for(let i = index;i<arr.length; i++){
    //     if(isUnique(arr[i], current)){
    //         max_length = Math.max(max_length, backtrack(i+1,current+arr[i]))
    //     }

    // }
    let i = index;
    while(i < arr.length){
        if(isUnique(arr[i],current)){
            max_length = Math.max(max_length, backtrack(i+1,current+arr[i])) 
        }
        i++;
    }


    return max_length;
}
return backtrack(0, '');
};
