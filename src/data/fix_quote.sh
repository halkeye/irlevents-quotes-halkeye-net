const fs = require('fs');

const quotes = JSON.parse(fs.readFileSync('quotes.json'));
quotes.forEach(quote => {
  quote.id = quote.id + "";
  quote.tags = (quote.tags || '').split(',');
});
fs.writeFileSync('quotes.json', JSON.stringify(quotes, null, 4));
