// Generate plot after detection btn clicked
// var url = "api/detect";
var detectBtn = d3.select("#detectBtn");
function handleClick() {
  d3.event.preventDefault();
  alert("Detect feature has been disabled to prevent overloading the free-tier Heroku server")
  // Comment code below to prevent Breaking Heroku free tier hosting server
  // d3.json(url).then(function (data) {
  //   console.log("Data", data);
  //   // Create your Bar plot trace.
  //   var trace1 = {
  //     x: data.map((doc) => doc.time),
  //     y: data.map((doc) => doc.count),
  //     type: "bar",
  //     //   orientation: "h",
  //     marker: {
  //       color: "rgba(25, 184, 22,0.6)",
  //       line: { width: 2 },
  //     },
  //   };
  //   //Create the data array for our plot
  //   var traceData = [trace1];

  //   var layout = {
  //     title: {
  //       text: "People Count Over Time",
  //       font: {
  //         // family: "Courier New, monospace",
  //         size: 24,
  //         color: "black",
  //         fontWeight: "bold",
  //       },
  //     },
  //     xaxis: {
  //       title: {
  //         text: "Time(sec)",
  //         font: {
  //           // family: "Courier New, monospace",
  //           size: 18,
  //           color: "black",
  //           fontWeight: "bold",
  //         },
  //       },
  //     },

  //     yaxis: {
  //       title: {
  //         text: "People Count",
  //         font: {
  //           // family: "Courier New, monospace",
  //           size: 18,
  //           color: "black",
  //           fontWeight: "bold",
  //         },
  //       },
  //     },
  //     //   width: 1200,
  //     height: 500,
  //     plot_bgcolor: "#fefcf7",
  //     paper_bgcolor: "#dce1e2",
  //   };
  //   //Plot the chart to a div tag with id "bar"
  //   Plotly.newPlot("bar", traceData, layout);
  // });


  // Dummy Data for Demo MVP

    // Create your Bar plot trace.
    var trace1PeopleVsTime = {
      x: ["Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday", "Sunday"],
      y: [2,4,5,4,9,9,1],
      type: "bar",
      name: "People Count",
      //   orientation: "h",
      marker: {
        color: "#FAC000", // golden
        line: { width: 2 },
      },
    };
    // Create your Bar plot trace.
    var trace2SalesVsTime = {
      x:["Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday", "Sunday"],
      y: [2,3,4,4,2,3,8],
      type: "scatter",
      name: "Revenue",
      //   orientation: "h",
      marker: {
        color: "#801100", //dark brown
        line: { width: 2 },
      },
    };
    //Create the data array for our plot
    var traceData = [trace1PeopleVsTime, trace2SalesVsTime];

    var layout = {
      title: {
        text: "People Count / Sales Per Day",
        font: {
          // family: "Courier New, monospace",
          size: 24,
          color: "black",
          fontWeight: "bold",
        },
      },
      xaxis: {
        title: {
          text: "Day",
          font: {
            // family: "Courier New, monospace",
            size: 18,
            color: "black",
            fontWeight: "bold",
          },
        },
      },

      yaxis: {
        title: {
          text: "People Count / Sales",
          font: {
            // family: "Courier New, monospace",
            size: 18,
            color: "black",
            fontWeight: "bold",
          },
        },
      },
      //   width: 1200,
      height: 500,
      plot_bgcolor: "#fefcf7",
      paper_bgcolor: "#dce1e2",
    };
    //Plot the chart to a div tag with id "bar"
    Plotly.newPlot("bar", traceData, layout);

}
// Listen for random stat button click event
detectBtn.on("click", handleClick);
