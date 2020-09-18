const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: `./config.env` });

const port = process.env.PORT || 3000;
console.log(process.env);
console.log(process.env.USER_NAME);

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
