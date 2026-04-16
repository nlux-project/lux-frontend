#!/bin/bash
# Container runtime configuration script
# Gets secrets config file from S3 and uses Deco to substitute parameter values, then executes the supplied arguments as a command
# This script expects S3URL env variable with the full S3 path to the encrypted config file

if [ "${USE_LOCAL_CONFIG_JSON}" ]; then
  echo "Using local config.json"
fi

# The $ before the single quoted string makes it work in bash
# to escape the single quotes around (.value).
# Values needs to be quoted because passwords may contain special
# characters.
cat config.json| jq -r $'.[] | "export \(.key)=\'\(.value)\'"' > ./.env

if [ "${USE_LOCAL_CONFIG_JSON}" != "yes" ]; then
  rm -f config.json config.encrypted
fi

echo "/app:"
ls -lrt /app
echo "df:"
df -h
echo "free:"
free

echo "Running the nodejs server..."
node index.js
echo "Task stopped with ${?}"
