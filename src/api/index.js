import axios from "axios"

const getAlislamData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/apps/sample/api.json')
      .then((res) => {
        return resolve(res.data)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

export { getAlislamData }
