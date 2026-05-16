#!/bin/bash
# BirdChain 服务器管理脚本

PROJECT_DIR="/workspace/birdchain"
LOG_FILE="/tmp/birdchain-server.log"
PID_FILE="/tmp/birdchain-server.pid"

cd "$PROJECT_DIR"

case "$1" in
  start)
    echo "启动 BirdChain 服务器..."
    if [ -f "$PID_FILE" ]; then
        if kill -0 $(cat "$PID_FILE") 2>/dev/null; then
            echo "服务器已在运行 (PID: $(cat $PID_FILE))"
            exit 1
        fi
        rm "$PID_FILE" 2>/dev/null
    fi
    node server.js > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    sleep 2
    if kill -0 $(cat "$PID_FILE") 2>/dev/null; then
        echo "✅ BirdChain 服务器启动成功!"
        echo "   PID: $(cat $PID_FILE)"
        echo "   访问地址: http://lv.birdchain.cn:8000"
        echo "   日志文件: $LOG_FILE"
    else
        echo "❌ 服务器启动失败"
        cat "$LOG_FILE"
        exit 1
    fi
    ;;

  stop)
    echo "停止 BirdChain 服务器..."
    if [ -f "$PID_FILE" ]; then
        kill $(cat "$PID_FILE") 2>/dev/null
        sleep 1
        if kill -0 $(cat "$PID_FILE") 2>/dev/null; then
            kill -9 $(cat "$PID_FILE") 2>/dev/null
        fi
        rm "$PID_FILE"
        echo "✅ 服务器已停止"
    else
        echo "未找到运行中的服务器 PID"
    fi
    ;;

  restart)
    $0 stop
    sleep 2
    $0 start
    ;;

  status)
    if [ -f "$PID_FILE" ]; then
        if kill -0 $(cat "$PID_FILE") 2>/dev/null; then
            echo "🟢 BirdChain 服务器运行中 (PID: $(cat $PID_FILE))"
            echo "   访问地址: http://lv.birdchain.cn:8000"
            echo ""
            echo "最近日志:"
            tail -10 "$LOG_FILE"
        else
            echo "🔴 PID 文件存在但进程已死亡"
        fi
    else
        echo "🔴 BirdChain 服务器未运行"
    fi
    ;;

  log)
    if [ -f "$LOG_FILE" ]; then
        tail -100 "$LOG_FILE"
    else
        echo "日志文件不存在"
    fi
    ;;

  *)
    echo "用法: $0 {start|stop|restart|status|log}"
    exit 1
esac

exit 0