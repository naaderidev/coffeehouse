require('dotenv').config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 4000;
const app = express();
// app.use(express.static("public"));
app.use(
  cors({
    // origin: "https://coffeehouse.liara.run",
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "Okay" });
});

mongoose
  .connect(process.env.MONGO_URL, {
    authSource: "admin",
  })
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

mongoose.connection.on("open", function () {
  console.log("database connected!");
});
// mongoose.Promise = global.Promise;

const usersRouter = require("./routes/usersRouter");
const cafeRouter = require("./routes/cafeRouter");
const journalCategoryRouter = require("./routes/journalCategoryRouter");
const menuCategoryRouter = require("./routes/menuCategoryRouter");
const productCategoryRouter = require("./routes/productCategoryRouter");
const brandRouter = require("./routes/brandRouter");
const reserveRouter = require("./routes/reserveRouter");
const productRouter = require("./routes/productRouter");
const newsletterRouter = require("./routes/newsletterRouter");
const menuRouter = require("./routes/menuRouter");
const contactRouter = require("./routes/contactRouter");
const journalRouter = require("./routes/journalRouter");
const commentRouter = require("./routes/commentRouter");
const orderRouter = require("./routes/orderRouter");
const authRouter = require("./routes/authRouter");

app.use("/api/users", usersRouter);
app.use("/api/cafe", cafeRouter);
app.use("/api/journal-category", journalCategoryRouter);
app.use("/api/menu-category", menuCategoryRouter);
app.use("/api/product-category", productCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/reserve", reserveRouter);
app.use("/api/product", productRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/menu", menuRouter);
app.use("/api/contact", contactRouter);
app.use("/api/journal", journalRouter);
app.use("/api/comment", commentRouter);
app.use("/api/order", orderRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => console.log(`Server is ready on port ${port}`));
