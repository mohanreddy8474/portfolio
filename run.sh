#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

COMMAND="${1:-dev}"

usage() {
  cat <<'EOF'
Usage: ./run.sh <command>

Commands:
  dev          Start the local development server
  install      Install dependencies with npm ci
  build        Build a static export for local preview (no base path)
  build:pages  Build a static export for GitHub Pages (/portfolio)
  preview      Build for GitHub Pages and serve ./out locally
  lint         Run ESLint
EOF
}

case "$COMMAND" in
  dev)
    npm run dev
    ;;
  install|setup)
    npm ci
    ;;
  build)
    npm run build
    ;;
  build:pages)
    NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
    ;;
  preview)
    NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
    npx --yes serve out -l 3000
    ;;
  lint)
    npm run lint
    ;;
  help|-h|--help)
    usage
    ;;
  *)
    echo "Unknown command: $COMMAND"
    echo
    usage
    exit 1
    ;;
esac
