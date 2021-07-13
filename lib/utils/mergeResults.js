export default function mergeArrays(arrayOne, arrayTwo){
    const sortedArray = [arrayOne, arrayTwo].sort((a, b) => {
      return b.length - a.length;
    });
    
    const mergedArray = [];
    for (let i = 0; i < sortedArray[0].length; i++){
      for (let j = 0; j < sortedArray.length; j++){
        if (sortedArray[j][i]) mergedArray.push(sortedArray[j][i]);
      }
    }
    console.log(mergedArray);
    return mergedArray;
        
  }