const app = require("../src/app");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is up on port " + PORT);
});
