import cv2
# import numpy as np
# import matplotlib.pyplot as plt
import cvlib as cv
from cvlib.object_detection import draw_bbox

def easyDetect (imagePath):

    image = cv2.imread("static/image/frames/frame_0.jpg")
    box, label, count = cv.detect_common_objects(image, confidence=0.3, nms_thresh=0.35,model='yolov4', enable_gpu='false')
    output = draw_bbox(image, box, label, count)
    print (label)
    cv2.imwrite('result_frame_0.jpg',output)
    print("Number of people in this image: " +str(label.count('person')))
    # plt.imshow(output)
    # plt.show()
    return output, label 

if __name__ == "__main__":
    easyDetect()