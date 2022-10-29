const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags from the tag table, 
// and associated products
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one tag
// including associated products
router.get('/:id', async (req, res) => {
  try {
    const singleTagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!singleTagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(singleTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Create a new tag
router.post('/', async (req, res) => {
  try {
    const newTagData = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(200).json({ message: `${newTagData} has been created` });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a tag by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagUpdate = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      } 
    })

    if (!tagUpdate) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    
    res.status(200).json({ message: `${tagUpdate} has been updated` });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete one tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const singleTagData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!singleTagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(singleTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
