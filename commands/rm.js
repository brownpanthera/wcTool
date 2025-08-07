const fs = require("fs");

// Function to remove files and directories
function removeFile(filePaths, options = { recursive: false, force: false }) {
  for (const filePath of filePaths) {
    try {
      if (!fs.existsSync(filePath)) {
        if (!options.force) {
          console.error(`rm: cannot remove '${filePath}': No such file or directory`);
          if (!options.force) process.exit(1);
        }
        continue;
      }

      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        if (!options.recursive) {
          console.error(`rm: cannot remove '${filePath}': Is a directory`);
          if (!options.force) process.exit(1);
          continue;
        }
        
        // Remove directory recursively
        fs.rmSync(filePath, { recursive: true, force: options.force });
        console.log(`Removed directory: ${filePath}`);
      } else {
        // Remove file
        fs.unlinkSync(filePath);
        console.log(`Removed file: ${filePath}`);
      }
    } catch (error) {
      if (!options.force) {
        console.error(`rm: cannot remove '${filePath}': ${error.message}`);
        process.exit(1);
      }
    }
  }
}

module.exports = {
  removeFile
};