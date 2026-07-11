const fs = require('fs')
const crypto = require('crypto')
const path = require('path')

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

function getResumeVersion() {
  try {
    const resumePath = path.join(__dirname, 'public', 'resume.pdf')
    const file = fs.readFileSync(resumePath)
    return crypto.createHash('md5').update(file).digest('hex').slice(0, 8)
  } catch {
    return '1'
  }
}

process.env.NEXT_PUBLIC_RESUME_VERSION = getResumeVersion()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
