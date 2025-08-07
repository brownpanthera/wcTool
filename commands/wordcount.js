const fs = require("fs");
const readline = require("readline");

// Function to count the number of bytes in a file
function countBytes(filePath) {
  try {
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      const byteCount = stats.size;
      console.log(`${byteCount} ${filePath}`);
      return byteCount;
    } else {
      console.error(`${filePath} is a directory`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`No such file or directory`);
    process.exit(1);
  }
}

// Function to count the number of lines in a file
function countLines(filePath) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      output: process.stdout,
      terminal: false,
    });

    let lineCount = 0;

    rl.on("line", (line) => {
      if(line.trim()!== ''){
        lineCount++;
      }
    });

    rl.on("close", () => {
      console.log(`${lineCount} ${filePath}`); // Log the line count
      resolve(lineCount); // Resolve the promise with the line count
    });

    rl.on("error", (error) => {
      console.error(`No such file or directory`);
      reject(error); // Reject the promise in case of an error
    });
  });
}

//Function to count the words in a file
function countWords(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const words = data.split(/\s+/).filter((word) => word.trim() !== "");
    words.forEach((word, index) => {
      // console.log(`${index + 1} ${word}`);
    });
    console.log(`${words.length} ${filePath}`);
    return words.length;
  } catch (error) {
    console.error(`Error reading ${filePath}: ${error}`);
    process.exit(1);
  }
}

// Function to count characters in a file
function countCharacters(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const characterCount = content.length;
    console.log(`${characterCount} characters in ${filePath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with an error code
  }
}

// Function to count bytes, lines and words with no args
async function countBytesLinesWords(filePath) {
  const byteCount = countBytes(filePath);
  const wordCount = countWords(filePath);
  const lineCount = await countLines(filePath);
  console.log(`${byteCount} ${wordCount} ${lineCount} ${filePath}`);
}

module.exports = {
  countBytes,
  countLines,
  countWords,
  countCharacters,
  countBytesLinesWords
};