import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { getAlislamData } from '../api'
import logo from '../logo.svg'

const AppList = () => {
  const [ready, setReady] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    getAlislamData()
      .then((res) => {
        setData(res)
        setReady(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const listItems = (apps) => {
    return apps.map((app) => {
      return (
        <ListItem key={app.name}>
          <ListItemText
            primary={app.name}
            secondary={app.desc}
          />
        </ListItem>
      )
    })
  }

  if (!ready) {
    return <img src={logo} className="App-logo" alt="logo" />
  }
  
  return (
    <div>
      <Typography>
        {data.title}
      </Typography>
      <List>
        {listItems(data.apps)}
      </List>
    </div>
  )
}

export default AppList
