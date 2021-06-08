from flask import Flask, render_template, redirect, request, jsonify, send_from_directory, send_file
# from simple_mmdetector.demo.detect import detectObj
from cvlib_count import easyDetect
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

# # Run detector 
# @app.route("/api/detect", methods=['GET'])
# def api_detect():
#     results = detectObj()
#     print(results)
#     response = jsonify(results)
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     return response
# Run easy detector 
@app.route("/api/detect/person", methods=['GET'])
def api_detect():
    output, label = easyDetect('static/image/frames/frame_0.jpg')
    print(label)
    response = jsonify(label)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# Download result files
@app.route("/api/file-downloads", methods=['GET'])
def api_file_downloads():
    try:
        return send_from_directory(directory='./', filename="result_frame_0.jpg", as_attachment=True, cache_timeout=0)
    except Exception as e:
        return str(e)
if __name__ == "__main__":
    app.run(debug=True)
