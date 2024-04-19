import express from 'express';

const app = express();
const PORT = 3456;

app.get('/', (req, res) => {
  res.send('Hello world yahooo');
});

/**
 * To do: For ubuntu its needed to modify iptables rules to allow external access
 */
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express with Typescript yahooo! http://localhost:${PORT}`);
});