# BizzWatch
An app that analyses camera/video footage to audit business revenue and customers behaviour.
![Project Cover](app_screenshot.png)

## Deployment
Demo [Live_link](https://bizzwatch.herokuapp.com/)

## Motivation
CCTV has been the goto solution to prevent employee or internal theft. Business managers can't be present at all times and are too busy to review hours of video footage. Employee theft continues to hinder profit margins for business owners, especially in most eveloping countries with average annual income is under US$ 3,000!

## Solution 
BizzWatch is a solution that leverages computer vision and data analytics to detect, audit and predict revenue/customer demand.

## User Story
BizzWatch allows a user to upload a video with business rules/logic with options such as number of frames to skip and target class (e.g. person, car or bicycle) for object detection.
The video is then split into frames / images that are fed into the pretrained model to perform detection. Thereafter, the detect button runs the inference / object detection. The results are displayed in a carousel of images showing inference bounding boxes and total count of objects. Additionally, sales/revenue vs. people count bar chart visualisation is generated according to the business rules/logic csv file data. 
**Note**: File Upload and online inference has been disabled due to Heroku free-tier limitations. Also dummy data is used for MVP sales / revenue to demonstrate people count can be correlated to sales/revenue over time.

## High Level Design
![High Level Design](hld.jpg)

## Technology Stack

### Front End
* HTML
* CSS
* Javascript
* Bootstrap

### Back End
* Python
* Flask
* REST/API

### Machine Learning
* OpenCV
* Pytorch
* Retinanet_r101_fpn
* ResNet 101 backbone Neural Network
* Pretrained COCO Weights

## Benefits
* Fraud Detection - object detection vs. ground-truth / prediction
* Sales / Customer Predicion - using influencing factors/features
* Resource Optmisation - staff, goods and services
  
## Future Works
* Cloud deployment - paid-tier, to allow upload of video and cloud inference. Current deployment on free-tier Heroku has limited compute and storage.
* Human Pose Estimation to identify activity
* Dwell Time - time object spends in a given user defined zone
* Zone Region of Interest - specify exact areas of detection
* Real Time Video Streaming Inference - RTSP enabled IP camera 

## Development Time
* This project / minimum viable product was developed in an intense **2 Weeks** before deadline of final bootcamp project.

## Author
Mwansa Mwango

## Acknowledgements
* [Simple MMDetector](https://github.com/akarazniewicz/smd)
* [Case Study - Crowdedness at the Campus Gym (Random Forest Regression)](https://www.kaggle.com/nsrose7224/random-forest-regressor-accuracy-0-91)
  * [Crowdedness at the Campus Gym Dataset](https://www.kaggle.com/nsrose7224/crowdedness-at-the-campus-gym)

