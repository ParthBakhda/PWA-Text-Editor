const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__Develop + '/client/index.html');
  });
  

  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
