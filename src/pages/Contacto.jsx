import { Button, Grid, TextField } from "@mui/material"


export const Contacto = () => {
  return (
    <Grid container  sx={{ flexDirection: 'column', justifyContent: "center", textAlign: "center", alignItems:"center"}}>
          <h1>Contáctanos</h1>
          <p>Estamos para ayudarte</p>
          <TextField id="outlined-basic" label="Nombre completo" variant="outlined" sx={{ paddingBottom: "1%", width: "300px"}}/>
          <TextField id="outlined-basic" label="Correo" variant="outlined" sx={{ paddingBottom: "1%", width: "300px"}}/>
          <TextField id="outlined-basic" label="Descripción" variant="outlined" sx={{ paddingBottom: "1%", width: "300px", height: "150px"}}/>
          <Button sx={{ color: 'black', background:"#b2dfdb", width: "10%"}}>Enviar</Button>
      </Grid>  
  )
}
