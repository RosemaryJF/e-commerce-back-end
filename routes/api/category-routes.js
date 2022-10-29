const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all categories from the category table, 
// and associated products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one category
// including associated products
router.get('/:id', async (req, res) => {
  try {
    const singleCategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    });

    if (!singleCategoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(singleCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategoryData = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json({ message: `${newCategoryData} has been created` });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    })

    if (!categoryUpdate) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    
    res.status(200).json({ message: `${categoryUpdate} has been updated` });
  } catch (err) {
    res.status(500).json(err);
  }
  //   .then((category => Category.findByPk(req.params.id)))
  //   res.status(200).json({ message: `${categoryUpdate} has been updated` });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const singleCategoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!singleCategoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json({ message: `${singleCategoryData} was removed from the database` });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
