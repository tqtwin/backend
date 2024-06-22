const app = require('./src/app');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
