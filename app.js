// 搭建网站服务器，实现客户端与服务端的通信
// 连接数据库，创建用户集合，向集合中插入文档
// /list：查询所有用户信息
// /add：添加用户信息
// /modify：修改用户信息
// /delete：删除用户信息

const http = require("http");
const mongoose = require("mongoose");

// 数据库连接
mongoose
    .connect("mongodb://localhost/mongoose", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // 连接成功
    .then(() => console.log("数据库连接成功"))
    // 连接失败
    .catch(err => console.log(err, "数据库连接失败"));

// 创建用户集合规则
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: []
});

// 创建用户集合 返回集合构造函数
const User = mongoose.model("User", UserSchema);

// 创建服务器
const app = http.createServer();

// 为服务器对象添加请求事件
app.on("request", (req, res) => {
    res.end("ok");
});

// 监听端口
app.listen(3000);
