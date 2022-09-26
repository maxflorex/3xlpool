import { connect } from "../database.js";

// GET ALL QUESTIONS
export const getQs = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM questions')
    res.json(rows)
}

// GET SINGLE QUESTION
export const getQ = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM questions Where id=?', [req.params.id])
    res.json(rows)
}

//  ADD NEW QUESTION
export const saveQ = async (req, res) => {
    const connection = await connect()
    const [results] = await connection.query("INSERT INTO question(title, reaction) VALUES(?,?)", [
        req.body.title,
        req.body.reaction
    ])
    res.json({
        id: results.insertId,
        ...req.body
    })
}

// DELETE QUESTIONS
export const deleteQ = async (req, res) => {
    const connection = await connect()
    await connection.query("DELETE FROM questions WHERE id =?", [
        req.params.id
    ])
}

// UPDATE QUESTIONS
export const updateQ = async (req, res) => {
    const connection = await connect()
    await connection.query('UPDATE questions SET ? WHERE id = ?', [
        req.body,
        req.params.id
    ])
    res.sendStatus(204)
}