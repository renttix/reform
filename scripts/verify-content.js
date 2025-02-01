#!/usr/bin/env node

const fs = require('fs').promises
const path = require('path')

async function verifyContent() {
  try {
    const contentPath = path.join(__dirname, '..', 'src', 'content', 'generated.json')
    const content = JSON.parse(await fs.readFile(contentPath, 'utf8'))

    // Required sections
    const requiredSections = ['home', 'events', 'join', 'news', 'contact']
    const missingSections = requiredSections.filter(section => !content[section])
    
    if (missingSections.length > 0) {
      console.error('❌ Missing required sections:', missingSections.join(', '))
      process.exit(1)
    }

    // Verify home section
    const home = content.home
    if (!home.hero?.text || !home.hero?.image) {
      console.error('❌ Missing hero content in home section')
      process.exit(1)
    }
    if (!home.about?.text || !home.about?.image) {
      console.error('❌ Missing about content in home section')
      process.exit(1)
    }
    if (!home.priorities) {
      console.error('❌ Missing priorities in home section')
      process.exit(1)
    }

    // Verify other sections
    if (!content.events.intro) {
      console.error('❌ Missing intro in events section')
      process.exit(1)
    }
    if (!content.join.intro || !content.join.benefits || !content.join.image) {
      console.error('❌ Missing content in join section')
      process.exit(1)
    }
    if (!content.news.intro || !content.news.featured) {
      console.error('❌ Missing content in news section')
      process.exit(1)
    }
    if (!content.contact.intro || !content.contact.methods) {
      console.error('❌ Missing content in contact section')
      process.exit(1)
    }

    console.log('✅ Content verification successful!')
    console.log('\nContent structure:')
    console.log(JSON.stringify({
      home: {
        hero: { text: '✓', image: '✓' },
        about: { text: '✓', image: '✓' },
        priorities: '✓'
      },
      events: { intro: '✓' },
      join: { intro: '✓', benefits: '✓', image: '✓' },
      news: { intro: '✓', featured: '✓' },
      contact: { intro: '✓', methods: '✓' }
    }, null, 2))
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('❌ Content file not found. Please ensure src/content/generated.json exists.')
    } else {
      console.error('❌ Error verifying content:', error.message)
    }
    process.exit(1)
  }
}

verifyContent().catch(console.error)
