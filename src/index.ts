import app from "./server/app";
const port = 9800;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
