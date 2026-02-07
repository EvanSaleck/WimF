import { Router, Request, Response } from 'express';
import { db, items } from '../db';
import { eq } from 'drizzle-orm';

const router = Router();

// Helper function to parse and validate item ID
const parseItemId = (id: string | string[]): number | null => {
  const idStr = String(id);
  const parsed = parseInt(idStr, 10);
  return isNaN(parsed) ? null : parsed;
};

// Get all items
router.get('/', async (req: Request, res: Response) => {
  try {
    const allItems = await db.select().from(items);
    res.json(allItems);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// Get single item
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseItemId(req.params.id);
    if (id === null) {
      return res.status(400).json({ error: 'Invalid item ID' });
    }
    
    const [item] = await db.select().from(items).where(eq(items.id, id));
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
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, quantity, expiryDate } = req.body;
    
    // Validate input
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Name is required and must be a non-empty string' });
    }
    
    const [newItem] = await db.insert(items).values({
      name: name.trim(),
      quantity: quantity || null,
      expiryDate: expiryDate || null,
    }).returning();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// Update item
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseItemId(req.params.id);
    if (id === null) {
      return res.status(400).json({ error: 'Invalid item ID' });
    }
    
    const { name, quantity, expiryDate } = req.body;
    
    // Validate input - if name is provided, it must be non-empty
    if (name !== undefined && (typeof name !== 'string' || name.trim().length === 0)) {
      return res.status(400).json({ error: 'Name must be a non-empty string' });
    }
    
    // Build update object - only include fields that are provided
    const updateData: any = {};
    if (name !== undefined) {
      updateData.name = name.trim();
    }
    if (quantity !== undefined) {
      updateData.quantity = quantity;
    }
    if (expiryDate !== undefined) {
      updateData.expiryDate = expiryDate;
    }
    
    const [updatedItem] = await db.update(items)
      .set(updateData)
      .where(eq(items.id, id))
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
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseItemId(req.params.id);
    if (id === null) {
      return res.status(400).json({ error: 'Invalid item ID' });
    }
    
    const [deletedItem] = await db.delete(items)
      .where(eq(items.id, id))
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

export default router;
