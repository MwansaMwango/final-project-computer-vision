/* Global Plotly */
var url = "api/detect";

function buildPlot() {
  d3.json(url).then(function (data) {
    console.log("Data", data);
    // Create your Bar plot trace.
    var trace1 = {
      x: data.map((doc) => doc.time),
      y: data.map((doc) => doc.count),
      type: "bar",
      //   orientation: "h",
      marker: {
        color: "rgba(25, 184, 22,0.6)",
        line: { width: 2 },
      },
    };
    //Create the data array for our plot
    var dataTrace = [trace1];
    //Define our plot layout
    // var layout = {

    // width: 1200,
    // height: 800,
    // plot_bgcolor:"#fefcf7",
    // paper_bgcolor:"#dce1e2"
    // };

    var layout = {
      title: {
        text: "People Count Over Time",
        font: {
          family: "Courier New, monospace",
          size: 24,
          color: "black",
          fontWeight: "bold",
        },
      },
      xaxis: {
        title: {
          text: "Time(sec)",
          font: {
            family: "Courier New, monospace",
            size: 18,
            color: "black",
            fontWeight: "bold",
          },
        },
      },

      yaxis: {
        title: {
          text: "People Count",
          font: {
            family: "Courier New, monospace",
            size: 18,
            color: "black",
            fontWeight: "bold",
          },
        },
      },
    //   width: 1200,
      height: 400,
      plot_bgcolor: "#fefcf7",
      paper_bgcolor: "#dce1e2",
    };
    //Plot the chart to a div tag with id "bar"
    Plotly.newPlot("bar", dataTrace, layout);
  });
}

buildPlot();
