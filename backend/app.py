from flask import Flask, jsonify, request
from sentiment_analysis import analyze_sentiment
from data_loader import load_and_preprocess_data

app = Flask(__name__)


@app.route("/analyze", methods=["GET"])
def analyze():
    # Load and preprocess the data
    data = load_and_preprocess_data("dataset.csv")

    # Analyze the sentiment
    analyzed_data = analyze_sentiment(data)

    return jsonify(analyzed_data.to_dict(orient="records")), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
