#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Setting up Headless WordPress + Vue.js monorepo...\n');

// Function to execute commands
function exec(command, cwd = process.cwd()) {
  console.log(`Running: ${command}`);
  try {
    execSync(command, { cwd, stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing: ${command}`);
    throw error;
  }
}

// Function to check if PHP is installed
function checkPHP() {
  try {
    execSync('php -v', { stdio: 'pipe' });
    console.log('✓ PHP is installed\n');
    return true;
  } catch (error) {
    console.error('✗ PHP is not installed. Please install PHP to continue.');
    return false;
  }
}

// Main setup
async function setup() {
  // Check prerequisites
  if (!checkPHP()) {
    process.exit(1);
  }

  const wordpressDir = path.join(__dirname, 'wordpress');
  const frontendDir = path.join(__dirname, 'frontend');

  // Download WordPress if not exists
  if (!fs.existsSync(path.join(wordpressDir, 'wp-load.php'))) {
    console.log('Downloading WordPress...');
    if (!fs.existsSync(wordpressDir)) {
      fs.mkdirSync(wordpressDir, { recursive: true });
    }
    
    // Download WordPress
    exec('curl -O https://wordpress.org/latest.tar.gz', wordpressDir);
    exec('tar -xzf latest.tar.gz --strip-components=1', wordpressDir);
    exec('rm latest.tar.gz', wordpressDir);
    console.log('✓ WordPress downloaded\n');
  } else {
    console.log('✓ WordPress already exists\n');
  }

  // Install frontend dependencies
  if (fs.existsSync(frontendDir)) {
    console.log('Installing frontend dependencies...');
    exec('npm install', frontendDir);
    console.log('✓ Frontend dependencies installed\n');
  }

  console.log('\n=================================');
  console.log('Setup completed successfully!');
  console.log('=================================\n');
  console.log('Next steps:');
  console.log('1. Run "npm run dev" to start both servers');
  console.log('2. Visit http://localhost:8080 to complete WordPress installation');
  console.log('3. Visit http://localhost:5173 to view the Vue frontend\n');
}

setup().catch(error => {
  console.error('Setup failed:', error);
  process.exit(1);
});
