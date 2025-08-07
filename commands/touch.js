const fs = require("fs");

//Function to touch file (create if doesn't exist or update timestamp)
function touchFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      // File exists, update its access and modification times
      const now = new Date();
      fs.utimesSync(filePath, now, now);
      console.log(`Updated timestamps for: ${filePath}`);
    } else {
      // File doesn't exist, create it
      fs.writeFileSync(filePath, '');
      console.log(`Created file: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error touching file ${filePath}: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  touchFile
};