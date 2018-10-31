module.exports.printContent = function (printContent, printCss, title) {
  var width = 800
  var height = 540
  var x = screen.width / 2 - width / 2
  var y = screen.height / 2 - height / 2
  var myWindow = window.open('', '', 'width=' + width + ',height=' + height + ',scrollbars=1,left=' + x + ',top=' + y)
  var doc = myWindow.document
  doc.open()
  doc.write('<html><head>')
  doc.write('<title>')
  if (title) {
    doc.write(title)
  }
  doc.write('</title>')
  doc.write('<link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">')
  if (printCss) {
    doc.write('<style>')
    doc.write(printCss)
    doc.write('</style>')
  }
  doc.write('</head><body style="overflow:scroll;background-color:#f2f2f2;">')
  doc.write(printContent)
  doc.write('</body></html>')
  doc.close()
  myWindow.focus()
  myWindow.onload = function () {
    myWindow.print()
    myWindow.close()
  }
}
