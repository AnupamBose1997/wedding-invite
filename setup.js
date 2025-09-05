#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎉 Welcome to Wedding Invitation Setup!');
console.log('=====================================\n');

// Check if Node.js is installed
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' });
  console.log(`✅ Node.js is installed: ${nodeVersion.trim()}`);
} catch (error) {
  console.log('❌ Node.js is not installed. Please install it from https://nodejs.org');
  process.exit(1);
}

// Check if npm is available
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf8' });
  console.log(`✅ npm is available: ${npmVersion.trim()}`);
} catch (error) {
  console.log('❌ npm is not available. Please install Node.js from https://nodejs.org');
  process.exit(1);
}

console.log('\n📦 Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully!');
} catch (error) {
  console.log('❌ Failed to install dependencies. Please run "npm install" manually.');
  process.exit(1);
}

// Create .env.local file
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  const envContent = `# Sanity Configuration
# Replace these with your actual Sanity project details after setting up Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
`;
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file');
}

console.log('\n🎨 Your wedding invitation is ready!');
console.log('=====================================');
console.log('');
console.log('Next steps:');
console.log('1. Run "npm run dev" to start the development server');
console.log('2. Open http://localhost:3000 in your browser');
console.log('3. Follow the SETUP-GUIDE.md for full configuration');
console.log('');
console.log('For Sanity CMS setup:');
console.log('1. Run "npm install -g @sanity/cli"');
console.log('2. Run "sanity login"');
console.log('3. Follow the SETUP-GUIDE.md');
console.log('');
console.log('🎊 Happy wedding planning! 💕');
