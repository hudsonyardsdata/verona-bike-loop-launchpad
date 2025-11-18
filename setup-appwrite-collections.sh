#!/bin/bash

# Appwrite Collections Setup Script
# This script creates the required collection and attributes for Verona Bike Loop

set -e  # Exit on error

echo "🚴 Verona Bike Loop - Appwrite Setup Script"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if appwrite CLI is installed
if ! command -v appwrite &> /dev/null; then
    echo -e "${RED}❌ Appwrite CLI is not installed${NC}"
    echo "Install it with: npm install -g appwrite-cli"
    exit 1
fi

echo -e "${GREEN}✅ Appwrite CLI found${NC}"
echo ""

# Prompt for configuration
read -p "Enter your Appwrite Project ID: " PROJECT_ID
read -p "Enter your Database ID (or press Enter to create new): " DATABASE_ID
read -p "Enter your API endpoint [https://nyc.cloud.appwrite.io/v1]: " ENDPOINT
ENDPOINT=${ENDPOINT:-https://nyc.cloud.appwrite.io/v1}

echo ""
echo "Do you have an API key with the following scopes?"
echo "  - databases.read"
echo "  - databases.write"
echo "  - collections.read"
echo "  - collections.write"
echo "  - attributes.read"
echo "  - attributes.write"
read -p "Enter your API Key: " API_KEY

echo ""
echo -e "${YELLOW}Configuration:${NC}"
echo "  Project ID: $PROJECT_ID"
echo "  Database ID: $DATABASE_ID"
echo "  Endpoint: $ENDPOINT"
echo ""

# Set project
echo -e "${YELLOW}Setting up Appwrite project...${NC}"
appwrite client --endpoint "$ENDPOINT" --key "$API_KEY" --project-id "$PROJECT_ID"

# Create database if needed
if [ -z "$DATABASE_ID" ]; then
    echo -e "${YELLOW}Creating new database...${NC}"
    DATABASE_ID="verona_bike_loop_db"
    appwrite databases create \
        --database-id "$DATABASE_ID" \
        --name "Verona Bike Loop DB"
    echo -e "${GREEN}✅ Database created with ID: $DATABASE_ID${NC}"
else
    echo -e "${GREEN}✅ Using existing database: $DATABASE_ID${NC}"
fi

echo ""

# ============================================================
# COLLECTION: supporter_signups
# ============================================================
echo -e "${YELLOW}📋 Creating supporter_signups collection...${NC}"

SUPPORTERS_COLLECTION_ID="supporter_signups"

appwrite databases create-collection \
    --database-id "$DATABASE_ID" \
    --collection-id "$SUPPORTERS_COLLECTION_ID" \
    --name "Supporter Signups" \
    --document-security true \
    --permissions 'create("any")' 'read("users")' 'update("users")' 'delete("users")'

echo -e "${GREEN}✅ supporter_signups collection created${NC}"

# Create attributes for supporter_signups
echo "  Creating attributes..."

appwrite databases create-string-attribute \
    --database-id "$DATABASE_ID" \
    --collection-id "$SUPPORTERS_COLLECTION_ID" \
    --key "name" \
    --size 255 \
    --required true

appwrite databases create-string-attribute \
    --database-id "$DATABASE_ID" \
    --collection-id "$SUPPORTERS_COLLECTION_ID" \
    --key "email" \
    --size 255 \
    --required true

appwrite databases create-string-attribute \
    --database-id "$DATABASE_ID" \
    --collection-id "$SUPPORTERS_COLLECTION_ID" \
    --key "hometown" \
    --size 255 \
    --required true

appwrite databases create-string-attribute \
    --database-id "$DATABASE_ID" \
    --collection-id "$SUPPORTERS_COLLECTION_ID" \
    --key "zipcode" \
    --size 10 \
    --required true

appwrite databases create-string-attribute \
    --database-id "$DATABASE_ID" \
    --collection-id "$SUPPORTERS_COLLECTION_ID" \
    --key "howCanYouHelp" \
    --size 5000 \
    --required false

appwrite databases create-string-attribute \
    --database-id "$DATABASE_ID" \
    --collection-id "$SUPPORTERS_COLLECTION_ID" \
    --key "submittedAt" \
    --size 255 \
    --required true

echo -e "${GREEN}✅ supporter_signups attributes created${NC}"
echo ""

# Wait for attributes to be ready
echo "⏳ Waiting 5 seconds for attributes to process..."
sleep 5

# ============================================================
# Summary
# ============================================================
echo ""
echo -e "${GREEN}=========================================="
echo "🎉 Setup Complete!"
echo "==========================================${NC}"
echo ""
echo "Your collection has been created:"
echo "  - supporter_signups"
echo ""
echo "Next steps:"
echo "  1. Update your .env.local file with these values:"
echo ""
echo "     NEXT_PUBLIC_APPWRITE_ENDPOINT=$ENDPOINT"
echo "     NEXT_PUBLIC_APPWRITE_PROJECT_ID=$PROJECT_ID"
echo "     NEXT_PUBLIC_APPWRITE_DATABASE_ID=$DATABASE_ID"
echo "     NEXT_PUBLIC_APPWRITE_COLLECTION_SUPPORTERS=$SUPPORTERS_COLLECTION_ID"
echo ""
echo "  2. Also add your server-side API key:"
echo "     APPWRITE_API_KEY=your_api_key_here"
echo ""
echo "  3. Run 'npm install' to install dependencies"
echo "  4. Run 'npm run dev' to start the development server"
echo "  5. Test your signup form at http://localhost:3000/join-us"
echo ""
echo -e "${YELLOW}Note: It may take a few moments for all attributes to be fully available.${NC}"
echo ""
