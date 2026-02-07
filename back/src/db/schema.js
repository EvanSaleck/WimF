const { pgTable, serial, text, timestamp, date } = require('drizzle-orm/pg-core');

const items = pgTable('items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  quantity: text('quantity'),
  expiryDate: date('expiry_date'),
  createdAt: timestamp('created_at').defaultNow(),
});

module.exports = { items };
