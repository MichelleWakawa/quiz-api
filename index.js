const express = require('express')
const students = require('./data/script')
const questions = require('./data/quizz')
const cors = require('cors')

app = express()


port = process.env.PORT || 1000
app.use(cors())
app.listen(port)

app.get('/',(req,res)=>{
    res.send('Api is running')
})

app.get('/api/students',(req,res)=>{
    res.send(students)
})

app.get('/api/students/:RegNumber',(req,res)=>{

    const student = students.find((q) => String(q.RegNumber).toLocaleUpperCase() === String(req.params.RegNumber).toLocaleUpperCase()) 

    res.send(student)
})

app.get('/api/questions',(req,res)=>{
    res.send(questions)
})




console.log("server is running on port " + port)
