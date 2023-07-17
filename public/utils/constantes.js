//const PATH_HTML = 'C:\\Users\\Marie .LAPTOP-7GKVKGSC\\Documents\\sami\\messagerie\\messagerieApp\\views\\';
const {resolve} = require("path");
const PATH_HTML = resolve(__dirname, `..\\..\\views\\`)

module.exports = {
    PATH_HTML: PATH_HTML
  };