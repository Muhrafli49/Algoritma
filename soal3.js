// Terdapat dua buah array yaitu array INPUT dan array QUERY, 
// silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

function countOccurrences(inputArray, queryArray) {
    
    const frequencyMap = {};

    inputArray.forEach(item => {
        if (frequencyMap[item]) {
            frequencyMap[item]++;
        } else {
            frequencyMap[item] = 1;
        }
    });

    const result = queryArray.map(query => {
        return frequencyMap[query] || 0;
    });

    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];


const output = countOccurrences(INPUT, QUERY);
console.log(output); 
