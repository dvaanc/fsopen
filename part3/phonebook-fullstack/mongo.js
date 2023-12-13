const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://admin:${password}@sandbox.sxonqjn.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const contactSchema = new mongoose.Schema({ name: String, number: String })
const Contact = mongoose.model('Contact', contactSchema)

if(name === undefined && number === undefined) {
  Contact.find({}).then(result => { 
    console.log(`phonebook:`)
    result.forEach(contact => { console.log(`${contact.name} ${contact.number}`) })
    mongoose.connection.close()
  })
  return
}

const contact = new Contact({ name, number })

contact.save().then(result => {
  console.log(`Added ${result.name} number ${result.number} to phonebook`)
  mongoose.connection.close()
})