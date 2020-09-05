const cart = require('./cart');
const fs = require('fs');
const moment = require('moment');

const actions = {
  add: cart.add,
  change: cart.change,
  remove: cart.remove
};

let writeStats = (action, product) => {
  fs.readFile('server/db/stats.json', 'utf-8', (err, data) => {
    let newStats = JSON.parse(data);

    let statsObj = {
      time: moment(),
      action: action,
      productId: product.params.id
    };

    newStats.stats.push(statsObj);
    fs.writeFile(
      'server/db/stats.json',
      JSON.stringify(newStats, null, 4),
      (err) => {}
    );
  });
};

//HANDLER отвечает за изменение данных в самом файле
let handler = (req, res, action, file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      let newCart = actions[action](JSON.parse(data), req);
      fs.writeFile(file, newCart, (err) => {
        if (err) {
          res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
          res.send(JSON.stringify({ result: 1 }));
          writeStats(action, req);
        }
      });
    }
  });
};

module.exports = handler;
