import { pgTable, serial, text, timestamp, date } from 'drizzle-orm/pg-core';

export const items = pgTable('items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  quantity: text('quantity'),
  expiryDate: date('expiry_date'),
  createdAt: timestamp('created_at').defaultNow(),
});
