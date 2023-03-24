const readline = require('readline');
const generator = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  generator.question('Enter a text: ', (text) => {
    const uniqueWords = wordFrequency(text);
    console.log(uniqueWords);
      
    generator.close();
  });
  
function wordFrequency(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const frequency = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });

    const wordFrequency = Object.entries(frequency); 
    wordFrequency.sort((a, b) => b[1] - a[1]);
    return wordFrequency;
  }
 
