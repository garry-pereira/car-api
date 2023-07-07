import fs from 'fs'

const getMakes = (req, res) => {
  res.send('hi mom its cars')
}

const newMake = (req, res) => {
  res.json({
    status: 'success',
    data: {
      make: req.body.make,
    },
  })
}

export { getMakes, newMake }
