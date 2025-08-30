#!/bin/bash

echo "🚀 Building portfolio for GitHub Pages..."

# Build the project
npm run build

echo "✅ Build completed successfully!"

# Check if out directory exists
if [ -d "out" ]; then
    echo "📁 Static files generated in 'out' directory"
    echo "📋 Contents of out directory:"
    ls -la out/
    
    echo ""
    echo "🎯 Next steps:"
    echo "1. Push this code to GitHub"
    echo "2. Go to repository Settings → Pages"
    echo "3. Set Source to 'Deploy from a branch'"
    echo "4. Select your main branch"
    echo "5. Set folder to '/' (root)"
    echo "6. Save and wait for deployment"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://mohanreddy8474.github.io/portfolio"
else
    echo "❌ Error: 'out' directory not found!"
    echo "Build may have failed. Check the build output above."
    exit 1
fi
