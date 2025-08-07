// Common utility functions

function validateFileArgument(args, requiredLength, command) {
  if (args.length < requiredLength) {
    console.error(`Usage: tit ${command}`);
    process.exit(1);
  }
}

function parseRmOptions(args) {
  let options = { recursive: false, force: false };
  let fileArgs = [];
  let i = 1;
  
  // Parse options
  while (i < args.length && args[i].startsWith('-')) {
    const option = args[i];
    if (option === '-r' || option === '-R' || option === '--recursive') {
      options.recursive = true;
    } else if (option === '-f' || option === '--force') {
      options.force = true;
    } else if (option === '-rf' || option === '-fr') {
      options.recursive = true;
      options.force = true;
    } else {
      console.error(`rm: invalid option -- '${option}'`);
      process.exit(1);
    }
    i++;
  }
  
  // Remaining arguments are files/directories to remove
  fileArgs = args.slice(i);
  
  if (fileArgs.length === 0) {
    console.error("rm: missing operand");
    process.exit(1);
  }
  
  return { options, fileArgs };
}

module.exports = {
  validateFileArgument,
  parseRmOptions
};