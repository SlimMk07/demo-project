express = require('express')
const assert = require('assert')
const bodyParser = require('body-parser')
const { MongoClient, ObjectID } = require('mongodb')

const app = express();
app.use(bodyParser.json({limit: '50mb'})) 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

const mongourl = 'mongodb://localhost:27017'
const database = 'education'

MongoClient.connect(mongourl, { useNewUrlParser: true }, (err, client) => {
  assert.equal(null, err, 'database connection failed')
  const db = client.db(database)

  /** professors managing */
  app.post('/add_professor', (req, res) => {
    console.log(req.body)
    let new_product = req.body
    db.collection('prof').insertOne(new_product, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.get('/professors', (req, res) => {
    console.log('prof inside backend')
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
  app.post('/add_student', (req, res) => {
    console.log(req.body)
    let new_product = req.body
    db.collection('student').insertOne(new_product, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.get('/students/', (req, res) => {
    console.log('students inside backend')
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
  app.post('/add_corse', (req, res) => {
    console.log(req.body)
    db.collection('corses').insertOne(req.body, (err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  })

  app.get('/corses', (req, res) => {
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

  app.get('/inscription', (req, res) => {
    const date ="2019-07-02"
    db.collection('classes').countDocuments({start:{$regex : "2019-07-28"}}, {}, (err, data1) => {
      if (err) res.send("error")
      else  {
        db.collection('classes').countDocuments({start:{$regex : "2019-06-29"}}, {}, (err, data2) => {
          if (err) res.send("error")
          else  {
            db.collection('classes').countDocuments({start:{$regex : "2019-06-30"}}, {}, (err, data3) => {
              if (err) res.send("error")
              else {
                db.collection('classes').countDocuments({start:{$regex : "2019-07-01"}}, {}, (err, data4) => {
                  if (err) res.send("error")
                  else  {
                    db.collection('classes').countDocuments({start:{$regex : "2019-07-02"}}, {}, (err, data5) => {
                      if (err) res.send("error")
                      else  res.send([["2019-07-02",  "2019-07-01", "2019-06-30","2019-06-29", "2019-06-28"], [data5, data4, data3, data2, data1] ])
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
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
  app.post('/add_classes', bodyParser.urlencoded({ extended: true }), (req, res) => {
    console.log(req.body)
    let new_product = req.body
    db.collection('classes').insertMany(new_product, (err, data) => {
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

  app.put('/update_classes/:id', (req, res) => {
    console.log('body', req.body)
    let modifiedContact = req.body
    db.collection('classes').findOneAndUpdate({ id: modifiedContact.id }, 
      { $set: { start: modifiedContact.start, end: modifiedContact.end } }, (err, data) => {
      if (err) res.send("error")
      else {
        console.log('data', data)
        res.send(data)
      }
    })
  })

})

// routes go here
app.listen(3100, () => {
  console.log(`http://localhost:3100`)
}) 