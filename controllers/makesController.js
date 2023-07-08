import fs from 'fs'

const getMakes = (req, res) => {
  res.send('hi mom its cars')
}

const newMake = (req, res) => {
  let data = JSON.parse(
    fs.readFileSync('./data/makes.json', 'utf-8', (err, data) => {
      if (err) {
        console.log(err.message)
      }
    })
  )

  console.log(data)

  data.push({ make: req.body.make })
  data = JSON.stringify(data)

  fs.writeFile('./data/makes.json', data, (err, data) => {
    if (err) {
      console.log(err.message)
    }
  })

  res.json({
    status: 'success',
    data: {
      make: req.body.make,
    },
  })
}

export { getMakes, newMake }
