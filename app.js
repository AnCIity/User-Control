// 引入http模块
const http = require("http");

// 引入path模块
const path = require("path");

// 引入路由管理
const router = require("./router/index");

// 引入模板引擎
const template = require("art-template");

// 引入art引擎日期处理模块
const dateFormat = require("dateformat");

// 导入模板变量
template.defaults.imports.dateFormat = dateFormat;

// 设置模板根目录
template.defaults.root = path.join(__dirname, "views");

// 配置模板的默认后缀
template.defaults.extname = ".art";

// 引入静态资源访问模块
const serveStatic = require("serve-static");

// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname, "public"));

// 连接数据库
require("./model/connect");

// 创建服务器
const app = http.createServer();

// 为服务器对象添加请求事件
app.on("request", async (req, res) => {
    // 挂载路由
    router(req, res, () => {});
    // 启用静态资源访问
    serve(req, res, () => {});
});

// 监听端口
app.listen(3000);
