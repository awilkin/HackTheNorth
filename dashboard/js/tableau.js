// function initializeViz() {
//   var placeholderDiv = document.getElementById("tableauViz");
//   var url = "https://public.tableau.com/views/DashboardPracticeGettingstarted/Dashboard1?:embed=y&:display_count=yes";
//   var options = {
//     width: placeholderDiv.offsetWidth,
//     height: placeholderDiv.offsetHeight,
//     hideTabs: true,
//     hideToolbar: true,
//     onFirstInteractive: function () {
//       workbook = viz.getWorkbook();
//       activeSheet = workbook.getActiveSheet();
//     }
//   };
//   viz = new tableau.Viz(placeholderDiv, url, options);
// }      

function initViz() {
  var containerDiv = document.getElementById("tableauViz"),
  url = "https://public.tableau.com/shared/JBJDWRM52?:display_count=yes;"
  var viz = new tableau.Viz(containerDiv, url); 
}

