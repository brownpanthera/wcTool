#!/usr/bin/env node
"use strict";

const { showHelp, showVersion } = require("./commands/help");
const {
  countBytes,
  countLines,
  countWords,
  countCharacters,
  countBytesLinesWords,
} = require("./commands/wordcount");
const { touchFile } = require("./commands/touch");
const { removeFile } = require("./commands/rm");
const { validateFileArgument, parseRmOptions } = require("./utils/common");

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    showHelp();
    return;
  }

  // Global flags
  if (args[0] === "-help" || args[0] === "--help" || args[0] === "help") {
    showHelp();
    return;
  }
  if (args[0] === "-version" || args[0] === "--version" || args[0] === "version") {
    showVersion();
    return;
  }

  // Touch command: `tit touch <file(s)>` - Linux style
  if (args[0] === "touch") {
    if (args.length < 2) {
      console.error("Usage: tit touch <file(s)>");
      process.exit(1);
    }
    // Support multiple files like Linux touch
    for (let i = 1; i < args.length; i++) {
      touchFile(args[i]);
    }
    return;
  }

  // Remove command: `tit rm [options] <file(s)>`
  if (args[0] === "rm") {
    const { options, fileArgs } = parseRmOptions(args);
    removeFile(fileArgs, options);
    return;
  }

  // Word count style flags
  switch (args[0]) {
    case "-c":
    case "--bytes": {
      validateFileArgument(args, 2, "-c <file>");
      countBytes(args[1]);
      return;
    }
    case "-l":
    case "--lines": {
      validateFileArgument(args, 2, "-l <file>");
      await countLines(args[1]);
      return;
    }
    case "-w":
    case "--words": {
      validateFileArgument(args, 2, "-w <file>");
      countWords(args[1]);
      return;
    }
    case "-m":
    case "--chars": {
      validateFileArgument(args, 2, "-m <file>");
      countCharacters(args[1]);
      return;
    }
    default: {
      // If a single file is passed with no flags, do full analysis
      if (!args[0].startsWith("-") && args.length === 1) {
        await countBytesLinesWords(args[0]);
        return;
      }

      // Unrecognized input; show help
      showHelp();
      return;
    }
  }
}

main().catch((error) => {
  console.error(error?.message || error);
  process.exit(1);
});