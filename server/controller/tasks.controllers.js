import { pool } from "../db.js "

export const getTasks = async (req, res) => {
  try {
    const [rows, field] = await pool.query('SELECT * FROM tasks ORDER BY createat ASC');
    console.log(rows);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getTask = async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
    if (rows.length === 0)
      return res.status(404).json({ message: 'Task not found' })

    console.log(rows);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [rows, fields] = await pool.query('INSERT INTO tasks(title, description) VALUES (?, ?)',
      [title, description]);
    console.log(rows);
    res.json({
      id: rows.insertId,
      title,
      description
    });
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateTask = async (req, res) => {
  try {
    const [rows, fields] = await pool.query('UPDATE tasks SET ? WHERE id = ?', [
      req.body,
      req.params.id
    ]);

    if (rows.affectedRows === 0)
      return res.status(404).json({ message: 'Task not found' });

    res.json({
      id: req.params.id,
      message: 'Task updated'
    });
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const [rows, fields] = await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    if (rows.affectedRows === 0)
      return res.status(404).json({ message: 'Task not found' });

    res.json({
      id: req.params.id,
      message: 'Task deleted'
    });
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const queryTask = async (req, res) => {
  try {
    const {data} = req.query;
    const [rows, fields] = await pool.query(data);
    console.log(rows);
    console.log(fields);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}