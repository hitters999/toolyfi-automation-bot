require('dotenv').config();

module.exports = {
  // Telegram Bot Configuration
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  TELEGRAM_USER_ID: process.env.TELEGRAM_USER_ID,
  
  // Website Configuration
  WEBSITE_URL: process.env.WEBSITE_URL || 'https://toolyfi.com',
  GITHUB_REPO: process.env.GITHUB_REPO || 'hitters999/Toolyfi',
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  
  // Check Intervals (in milliseconds)
  CHECK_INTERVAL: 3600000, // 1 hour
  HEALTH_CHECK_INTERVAL: 300000, // 5 minutes
  
  // SEO Configuration
  SEO_CONFIG: {
    MIN_TITLE_LENGTH: 50,
    MAX_TITLE_LENGTH: 60,
    MIN_META_LENGTH: 150,
    MAX_META_LENGTH: 160,
    MIN_ARTICLE_WORDS: 1000,
    MIN_HEADINGS: 3,
    CHECK_OG_TAGS: true,
    CHECK_CANONICAL: true,
    CHECK_MOBILE_FRIENDLY: true,
  },
  
  // Article Validation
  ARTICLE_CONFIG: {
    MIN_WORD_COUNT: 1000,
    MIN_IMAGES: 1,
    MAX_IMAGES: 10,
    REQUIRED_HEADINGS: ['H1', 'H2', 'H3'],
    REQUIRED_SECTIONS: ['Introduction', 'Conclusion'],
    CHECK_READABILITY: true,
  },
  
  // Deployment Configuration
  DEPLOY_CONFIG: {
    AUTO_DEPLOY: true,
    DEPLOY_BRANCH: 'main',
    GITHUB_PAGES_ENABLED: true,
    SITEMAP_ENABLED: true,
    ROBOTS_TXT_ENABLED: true,
  },
  
  // Error Tracking
  ERROR_CONFIG: {
    LOG_ERRORS: true,
    NOTIFY_ON_ERROR: true,
    ERROR_THRESHOLD: 3, // Notify after 3 errors
    RETENTION_DAYS: 7,
  },
  
  // Notifications
  NOTIFICATIONS: {
    NOTIFY_ON_DEPLOY: true,
    NOTIFY_ON_ERROR: true,
    NOTIFY_ON_SEO_ISSUE: true,
    NOTIFY_ON_ARTICLE_PUBLISH: true,
    DAILY_REPORT: true,
    DAILY_REPORT_TIME: '09:00', // 9 AM
  },
  
  // API Endpoints
  ENDPOINTS: {
    STATUS: '/api/status',
    SEO: '/api/seo',
    ARTICLES: '/api/articles',
    TOOLS: '/api/tools',
    DEPLOY: '/api/deploy',
    ERRORS: '/api/errors',
  },
  
  // Security
  SECURITY: {
    RATE_LIMIT: 10, // requests per minute
    TIMEOUT: 30000, // 30 seconds
    VERIFY_SSL: true,
  },
};
