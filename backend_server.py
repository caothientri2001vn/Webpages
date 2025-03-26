from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Ghi dữ liệu submit vào file
def log_submission(data):
    with open("submissions.txt", "a") as f:
        f.write(f"{data['timestamp']} - {data['name']} - {data['email']}\n")

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.get_json()
    if not data or 'name' not in data or 'email' not in data:
        return jsonify({"error": "Invalid data"}), 400

    # Log submission
    log_submission(data)
    print(f"Received submission: {data}")
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)

