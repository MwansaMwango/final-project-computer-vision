from flask import Flask, render_template, redirect, request, jsonify, send_from_directory, send_file
import pprint
import time
from flask.templating import render_template_string
# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
from flask_pymongo import PyMongo
import random

from simple_mmdetector.demo.detect import detectObj

# Create an instance of our Flask app.
# Static folder has files inside reachable for everyone.
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

# Set route - displays landing page
@app.route("/")
def index():
    return render_template("index.html")

# Set route - displays demo page
@app.route("/demo")
def demo():
    return render_template("demo.html")

# Run detect
@app.route("/api/detect", methods=['GET'])
def api_detect():
    results = detectObj()
    print(results)
    response = jsonify(results)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# Download result files
@app.route("/api/file-downloads", methods=['GET'])
def api_file_downloads():
    try:
        return send_from_directory(directory='.', filename="result_frame_0.jpg", as_attachment=True, cache_timeout=0)
    except Exception as e:
        return str(e)
if __name__ == "__main__":
    app.run(debug=True)
