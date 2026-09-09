#!/bin/bash

# Create a setup directory and sample files
mkdir -p ~/demo_logs
touch ~/demo_logs/app.log ~/demo_logs/db.log ~/demo_logs/system.log

BACKUP_DIR="~/demo_logs/backup"
mkdir -p $BACKUP_DIR

# Loop through all .log files
for LOG_FILE in ~/demo_logs/*.log; do
    # Get just the filename (without full directory path)
    FILENAME=$(basename "$LOG_FILE")
    
    echo "Backing up $FILENAME to $BACKUP_DIR/${FILENAME}.bak ..."
    cp "$LOG_FILE" "$BACKUP_DIR/${FILENAME}.bak"
done

echo "Done! Backup contents:"
ls -l $BACKUP_DIR
