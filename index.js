var sass = require("node-sass");
var result = sass.renderSync({
  data: "$tmp: ( in an alert: alert, within a toolbar: toolbar );"
});
