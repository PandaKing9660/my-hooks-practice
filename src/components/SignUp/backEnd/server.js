const express = require ('express');
const app = express ();
const cors = require ('cors');
const body__Parser = require ('body-parser');
const bcrypt = require ('bcrypt');

app.use (cors ());
app.use (body__Parser.json ());
app.use (express.urlencoded ({extended: false}));

let users = [];

app.post ('/register', async (req, res) => {
  try {
    const cryptPassword = await bcrypt.hash (req.body.password, 10);

    users.push ({
      id: Date.now ().toString (),
      name: req.body.name,
      email: req.body.email,
      password: cryptPassword,
    });

    console.log (users);
  } catch (err) {
    console.log (err);
  }

  res.send ('hello');
});

app.post ('/login', async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = users.find (user => user.email === email);

    if (user === undefined || user === null) {
      res.send ({
        name: null,
        found: false,
        msg: 'Username not found ',
      });
    } else {
      let isCorrect = await bcrypt.compare (password, user.password);

      if (isCorrect) {
        res.send ({
          name: user.name,
          found: true,
          msg: 'Hello ',
        });
      } else {
        res.send ({
          name: null,
          found: false,
          msg: 'Password Incorrect',
        });
      }
    }
  } catch (err) {
    console.log (err);
  }
});

app.listen (3001, () => console.log ('listening on port 3001'));
