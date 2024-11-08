const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config()
const app = express();
// const accountRouter = require("./routes/accountRouter")


// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 100,
//     message: "You have made too many requests. Please try again later."
// });

// CONFİGURE SERVER
const port = process.env.PROXY_PORT
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser());
app.use(express.static("public"))
app.use(fileUpload());
// app.use((req, res, next) => {
//     res.setHeader('Content-Security-Policy', "default-src 'self'");
//     res.header('X-Frame-Options', 'DENY');
//     next();
// });
// app.use(limiter);


// ROUTES
// app.use("/account", accountRouter)
// app.use("/admin", adminRouter)
// app.use("/product", productRouter)
// app.use("/order", ordersRouter)
// app.use("/mails", mailsRouter)
// app.use("/finance", financeRouter)



app.listen(port, () => {
    console.log("Server Started On This Port: " + port);
})

