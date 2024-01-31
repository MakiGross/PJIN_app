import React from "react";
import {
  Button,
  Box,
  Image,
  Heading,
  Stack,
  Input,
  Text,
} from "@chakra-ui/react";
import Search from './components/bfs'

function App() {
  const [config, setConfig] = React.useState("")
  const [path, setPath] = React.useState("Zde se zobrazí vaše cesta")
  const getFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target?.result)
      if(typeof(text) != "string"){
        alert("file loading was unsuccessful")
        return
      }
      setConfig(text)
    };
    reader.readAsText(e.target.files[0])
  }
  return ( 
  <Stack
    bg = 'lightblue'
    h = '100%'
  >
    <div>
      Konfigurační soubor:
      <div>
        <input type="file" onChange={(f) => getFile(f)} />
      </div>
    </div>
    <div>
      Kde právě stojím:
      <div>
        <Input placeholder="starting point" id="from" width={"50%"}/>
      </div>
    </div>
    <div>
      Kam se chci dostat:
      <div>
        <Input placeholder="destination" id="to" width={"50%"} />
      </div>
    </div>
    <Button 
      onClick={async ()=>{
        const from = document.getElementById("from")?.value
        const to = document.getElementById("to")?.value
        console.log(from)
        const result =  await Search(config, from,to)
        setPath(result)
      }}
    >
      Najdi cestu!
    </Button>
    <div>
      {path}
    </div>
    </Stack>
    )
}

  export default App;

  