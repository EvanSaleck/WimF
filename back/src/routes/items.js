const express = require('express');
const { db, items } = require('../db');
const { eq } = require('drizzle-orm');

const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
  try {
    const allItems = await db.select().from(items);
    res.json(allItems);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// Get single item
router.get('/:id', async (req, res) => {
  try {
    const [item] = await db.select().from(items).where(eq(items.id, req.params.id));
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ error: 'Failed to fetch item' });
  }
});

// Create item
router.post('/', async (req, res) => {
  try {
    const { name, quantity, expiryDate } = req.body;
    const [newItem] = await db.insert(items).values({
      name,
      quantity,
      expiryDate,
    }).returning();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// Update item
router.put('/:id', async (req, res) => {
  try {
    const { name, quantity, expiryDate } = req.body;
    const [updatedItem] = await db.update(items)
      .set({ name, quantity, expiryDate })
      .where(eq(items.id, req.params.id))
      .returning();
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ error: 'Failed to update item' });
  }
});

// Delete item
router.delete('/:id', async (req, res) => {
  try {
    const [deletedItem] = await db.delete(items)
      .where(eq(items.id, req.params.id))
      .returning();
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

module.exports = router;
