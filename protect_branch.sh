#!/bin/bash

# Set variables
GITHUB_TOKEN="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"
OWNER="uditthakur2001"
REPO="rules-repo"
BRANCH="main"

# API URL
API_URL="https://api.github.com/repos/$OWNER/$REPO/branches/$BRANCH/protection"

# Define protection rules
read -r -d '' PROTECTION_RULES << EOF
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["ci/test", "ci/lint"]
  },
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "dismissal_restrictions": {},
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": true,
    "required_approving_review_count": 2
  },
  "restrictions": null
}
EOF

# Send request to GitHub API
curl -X PUT \
-H "Authorization: token $GITHUB_TOKEN" \
-H "Accept: application/vnd.github.v3+json" \
"$API_URL" \
-d "$PROTECTION_RULES"
