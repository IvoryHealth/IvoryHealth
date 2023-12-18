// rolesController.js
const db = require("../models");
const Role = db.role;

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    console.error('Error fetching roles:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createRole = async (req, res) => {
    try {
      const rolesData = req.body; // Assuming rolesData is an array of role objects [{ name: 'Role1' }, { name: 'Role2' }, ...]
  
      // Use Promise.all to perform a bulk create operation
      const roles = await Promise.all(
        rolesData.map(async (roleData) => {
          const {id, name } = roleData;
          
          // Find or create the role
          const [role, created] = await Role.findOrCreate({
            where: {id, name },
          });
  
          if (!created) {
            // Role already exists, throw an error
            throw new Error(`Role '${name}' already exists`);
          }
  
          return role;
        })
      );
  
      res.status(201).json(roles);
    } catch (error) {
      console.error('Error creating role:', error.message);
      res.status(500).json({ message: error.message });
    }
  };

const getRoleById = async (req, res) => {
  try {
    const roleId = req.params.id;
    const role = await Role.findByPk(roleId);

    if (!role) {
      res.status(404).json({ message: 'Role not found' });
      return;
    }

    res.json(role);
  } catch (error) {
    console.error('Error fetching role:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateRole = async (req, res) => {
  try {
    const roleId = req.params.id;
    const { name } = req.body;

    const role = await Role.findByPk(roleId);

    if (!role) {
      res.status(404).json({ message: 'Role not found' });
      return;
    }

    role.name = name;
    await role.save();

    res.json(role);
  } catch (error) {
    console.error('Error updating role:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteRole = async (req, res) => {
  try {
    const roleId = req.params.id;
    const role = await Role.findByPk(roleId);

    if (!role) {
      res.status(404).json({ message: 'Role not found' });
      return;
    }

    await role.destroy();
    res.json({ message: 'Role deleted successfully' });
  } catch (error) {
    console.error('Error deleting role:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllRoles,
  createRole,
  getRoleById,
  updateRole,
  deleteRole,
};
