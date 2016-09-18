function initRetention() {
  var containerDiv = document.getElementById("tabGraph1"),
  url = "https://public.tableau.com/views/Walmart_Retention/Sheet1?:embed=y&:display_count=yes"
  var options = {
    hideToolbar: true,
    width: containerDiv.offsetWidth,
    height: containerDiv.offsetHeight,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  var viz = new tableau.Viz(containerDiv, url, options);
}