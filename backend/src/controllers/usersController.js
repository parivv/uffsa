import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import bcrypt from 'bcrypt';

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await db
      .select({
        id: users.id,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        email: users.email,
        createdAt: users.createdAt
      })
      .from(users);

    res.json(allUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await db
      .select({
        id: users.id,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        email: users.email,
        createdAt: users.createdAt
      })
      .from(users)
      .where(users.id.eq(userId));

    if (user.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user[0]);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Create new user
export const createUser = async (req, res) => {
  try {
    const { username, firstName, lastName, email, password } = req.body;

    // Basic validation
    if (!username || !firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db
      .insert(users)
      .values({
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword
      })
      .returning({
        id: users.id,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        email: users.email,
        createdAt: users.createdAt
      });

    res.status(201).json(newUser[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    if (error.code === '23505') {
      // Unique violation
      return res
        .status(409)
        .json({ error: 'Username or email already exists' });
    }
    res.status(500).json({ error: 'Failed to create user' });
  }
};
