#!/usr/bin/env node
const fs = require("fs");
const readline = require("readline");

// Function to count the number of bytes in a file
function countBytes(filePath) {
  try {
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      const byteCount = stats.size;
      console.log(`${byteCount} ${filePath}`);
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
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
  });

  let lineCount = 0;

  rl.on("line", () => {
    lineCount++;
  });

  rl.on("close", () => {
    console.log(`${lineCount} ${filePath}`);
  });
}

// Extracting command-line arguments, excluding the first two elements (node and script name)
const [, , ...args] = process.argv;

// switch case to handle different command-line options
switch (args[0]) {
  case "-c":
    if (args.length !== 2 || args[0] !== "-c") {
      console.error("Usage: ccwc -c <file>");
      process.exit(1);
    }
    countBytes(args[1]);
    break;
  case "-l":
    if (args.length !== 2 || args[0] !== "-l") {
      console.error("Usage: ccwc -l <file>");
      process.exit(1);
    }
    countLines(args[1]);
    break;
  case "-help":
    console.log(`Usage: ccwc [options] <file>

      Options:
        -c, --bytes    Print the byte counts
        -m, --chars    Print the character counts
        -l, --lines    Print the newline counts
      `);
    break;
  default:
    console.error("check command by using -help");
    process.exit(1);
}
