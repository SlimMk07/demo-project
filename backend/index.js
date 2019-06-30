express = require('express')
const assert = require('assert')
const bodyParser = require('body-parser')
const { MongoClient, ObjectID } = require('mongodb')

const app = express();
app.use(bodyParser.json())
const mongourl = 'mongodb://localhost:27017'
const database = 'education'

MongoClient.connect(mongourl, { useNewUrlParser: true }, (err, client) => {
  assert.equal(null, err, 'database connection failed')
  const db = client.db(database)

  /** professors managing */
  app.delete('/delete_professor/:id', (req, res) => {
    let ID = ObjectID(req.params.id)
    db.collection('prof').findOneAndDelete({ _id: ID }, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.post('/add_professor', (req, res) => {
    console.log(req.body)
    let new_product = req.body
    db.collection('prof').insertOne(new_product, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.get('/professors', (req, res) => {
    db.collection('prof').find().toArray((err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  app.get('/professors/:id', (req, res) => {
    let ID = ObjectID(req.params.id)
    db.collection('prof').findOne({ _id: ID }, (err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  app.put('/update_professor/:id', bodyParser.json(), (req, res) => {
    let ID = ObjectID(req.params.id)
    let modifiedContact = req.body
    db.collection('prof').findOneAndUpdate({ _id: ID }, { $set: { ...modifiedContact } }, (err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  /** students managing */
  app.delete('/delete_student/:id', (req, res) => {
    let ID = ObjectID(req.params.id)
    db.collection('student').findOneAndDelete({ _id: ID }, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.post('/add_student', (req, res) => {
    console.log(req.body)
    let new_product = req.body
    db.collection('student').insertOne(new_product, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.get('/student/', (req, res) => {
    db.collection('student').find().toArray((err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  app.get('/students/:id', (req, res) => {
    let ID = ObjectID(req.params.id)
    db.collection('student').findOne({ _id: ID }, (err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  app.put('/update_student/:id', bodyParser.json(), (req, res) => {
    let ID = ObjectID(req.params.id)
    let modifiedContact = req.body
    db.collection('prof').findOneAndUpdate({ _id: ID }, { $set: { ...modifiedContact } }, (err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  /** corses managing */
  app.delete('/delete_corse/:id', (req, res) => {
    let ID = ObjectID(req.params.id)
    db.collection('corses').findOneAndDelete({ _id: ID }, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.post('/add_corse', (req, res) => {
    console.log(req.body)
    let new_product = req.body
    db.collection('corses').insertOne(new_product, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.get('/corse', (req, res) => {
    db.collection('corses').find().toArray((err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  app.get('/corse/:id', (req, res) => {
    let ID = ObjectID(req.params.id)
    db.collection('corses').findOne({ _id: ID }, (err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  app.put('/update_corse/:id', bodyParser.json(), (req, res) => {
    let ID = ObjectID(req.params.id)
    let modifiedContact = req.body
    db.collection('corses').findOneAndUpdate({ _id: ID }, { $set: { ...modifiedContact } }, (err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  /** Classes */
  app.delete('/delete_classes/:id', (req, res) => {
    let ID = ObjectID(req.params.id)
    db.collection('classes').findOneAndDelete({ _id: ID }, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.post('/add_classes', (req, res) => {
    console.log(req.body)
    let new_product = req.body
    db.collection('classes').insertOne(new_product, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.get('/classes', (req, res) => {
    db.collection('classes').find().toArray((err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  app.get('/classes/:id', (req, res) => {
    let ID = ObjectID(req.params.id)
    db.collection('classes').findOne({ _id: ID }, (err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

  app.put('/update_classes/:id', bodyParser.json(), (req, res) => {
    let ID = ObjectID(req.params.id)
    let modifiedContact = req.body
    db.collection('classes').findOneAndUpdate({ _id: ID }, { $set: { ...modifiedContact } }, (err, data) => {
      if (err) res.send("error")
      else res.send(data)
    })
  })

})

// routes go here
app.listen(3100, () => {
  console.log(`http://localhost:3100`)
}) 