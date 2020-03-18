// 模板引擎
const template = require("art-template");
const path = require("path");
const dateFormat = require("dateformat");

// 设置模板根目录
template.defaults.root = path.join(__dirname, "views");

// 导入模板变量
template.defaults.imports.dateFormat = dateFormat;

// 配置模板的默认后缀
template.defaults.extname = ".art";

const html = template("index", {
    msg: "首页模板"
});

console.log(html);
