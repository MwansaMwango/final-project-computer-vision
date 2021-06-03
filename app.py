from flask import Flask, render_template, redirect, request, jsonify
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

# Use PyMongo to establish Mongo connection
# mongo = PyMongo(app, uri="mongodb://localhost:27017/electric_vehicles")

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
 # Set route - displays demo page
@app.route("/api/detect")
def detect():
    detectObj()

# Get Tesla Sales data from MongoDB database
# @app.route("/api/v1/resources/tesla-sales", methods = ['GET'])
# def api_tesla_sales():
#   # After you first set of iterations over documents the cursor is used up. It's a read-once container.
#   # Convert to list to avoid this.
#     tesla_sales_coll = list(mongo.db.tesla_production_sales.find({}))
#     qtr_tesla_sales_dict_list = []
#     for document in tesla_sales_coll: 
#         qtr_tesla_sales_dict = {}
#         qtr_tesla_sales_dict["Quarter"] = document['Quarter']
#         qtr_tesla_sales_dict["Total_Sales"] = document['Total_Sales']
#         qtr_tesla_sales_dict_list.append(qtr_tesla_sales_dict)
    
#     response = jsonify(qtr_tesla_sales_dict_list) 
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     return response

if __name__ == "__main__":
    app.run(debug=True)
