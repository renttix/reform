#!/usr/bin/env node

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n=== Mailchimp Configuration Helper ===\n');
console.log('This script will help you get the necessary Mailchimp information for your .env file.\n');
console.log('1. Go to https://admin.mailchimp.com/');
console.log('2. Click on your profile icon and select "Account & billing"');
console.log('3. Navigate to "Extras" -> "API keys"');
console.log('4. Create a new API key if you haven\'t already\n');

readline.question('Enter your Mailchimp API Key: ', (apiKey) => {
  console.log('\nNow, let\'s get your List ID (Audience ID):');
  console.log('1. Go to https://admin.mailchimp.com/lists/');
  console.log('2. Click on your desired audience');
  console.log('3. Click "Settings" -> "Audience name and defaults"');
  console.log('4. Find "Audience ID" in the right column\n');

  readline.question('Enter your List ID: ', (listId) => {
    console.log('\nFinally, let\'s get your API Server prefix:');
    console.log('Your API key should end with a server location (e.g., us1, us2, etc.)\n');

    const serverPrefix = apiKey.split('-').pop();

    console.log('\n=== Your Mailchimp Configuration ===\n');
    console.log('Add these to your .env.local file:\n');
    console.log(`MAILCHIMP_API_KEY=${apiKey}`);
    console.log(`MAILCHIMP_LIST_ID=${listId}`);
    console.log(`MAILCHIMP_API_SERVER=${serverPrefix}`);

    console.log('\nMake sure to keep these values secret and never commit them to version control.\n');
    readline.close();
  });
});
