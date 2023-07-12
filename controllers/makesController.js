import fs from 'fs'

const repeatCheck = (req, res, next) => {
  // parse the data from makes.json
  let data = JSON.parse(
    fs.readFileSync('./data/makes.json', 'utf-8', (err, data) => {
      if (err) {
        console.log(err.message)
      }
    })
  )

  // log the parsed data
  console.log(data)

  // check posted make exists already
  const exists = data.filter((obj) => obj.make === req.body.make)

  // if it does, send fail response but also return
  if (exists) {
    return res.json({
      status: 'fail',
      data: {
        make: req.body.make,
      },
    })
  }

  // otherwise, continue to post cb function
  next()
}

const getMakes = (req, res) => {
  // parse the data from makes.json
  let data = JSON.parse(
    fs.readFileSync('./data/makes.json', 'utf-8', (err, data) => {
      if (err) {
        console.log(err.message)
      }
    })
  )
  res.json({
    status: 'success',
    data,
  })
}

const newMake = (req, res) => {
  // parse the data from makes.json
  let data = JSON.parse(
    fs.readFileSync('./data/makes.json', 'utf-8', (err, data) => {
      if (err) {
        console.log(err.message)
      }
    })
  )

  // log the data in console
  console.log(data)

  // append the req.body.make data to data
  data.push({ make: req.body.make })
  // stringify the data back into JSON
  data = JSON.stringify(data)

  // write the JSON back into the file
  fs.writeFile('./data/makes.json', data, (err, data) => {
    if (err) {
      console.log(err.message)
    }
  })

  // return success response and include the data that was sent initially
  res.json({
    status: 'success',
    data: {
      make: req.body.make,
    },
  })
}

export { getMakes, newMake, repeatCheck }
