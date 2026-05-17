#!/bin/bash
# BirdChain Server Starter

PROJECT_DIR="/workspace/birdchain"
PID_FILE="/tmp/birdchain-server.pid"
LOG_FILE="/tmp/birdchain-server.log"

# Stop existing
if [ -f "$PID_FILE" ]; then
    kill -9 $(cat "$PID_FILE") 2>/dev/null
    rm "$PID_FILE" 2>/dev/null
fi

# Start new server
cd "$PROJECT_DIR"
nohup python3 -m http.server 8000 --bind 0.0.0.0 > "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"

sleep 2
echo "BirdChain server started with PID: $(cat $PID_FILE)"
echo "Serving on http://0.0.0.0:8000"
echo "Log file: $LOG_FILE"
