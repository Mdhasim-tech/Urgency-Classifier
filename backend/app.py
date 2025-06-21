


from flask import Flask, request, jsonify
import joblib
from clean import clean_text
from flask_cors import CORS


# Initialize Flask app
app = Flask(__name__)
CORS(app)
# Load model and vectorizer
model = joblib.load("svc_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

@app.route("/")
def home():
    return "Urgency Classifier API is running."

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    text = data.get("text")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Clean and transform
    clean = clean_text(text)
    vec = vectorizer.transform([clean])
    pred = model.predict(vec)[0]

    label = "URGENT 🚨" if pred == 1 else "Not Urgent ✅"
    return jsonify({"prediction": label})

if __name__ == "__main__":
    app.run(debug=True)
