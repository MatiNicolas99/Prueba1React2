import * as React from 'react';
import { Grid } from '@mui/material';
import { Cards } from '../components/Cards';


const data = [{
  title: "chocolate coockies",
  src: "https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_960_720.jpg",
  desc: "Exquisita gallate de avena y chocolate"
},
{
  title: "Macarrones de Frambuesa",
  src: "https://cdn.pixabay.com/photo/2017/07/28/14/23/macarons-2548810_960_720.jpg",
  desc: "Sabores únicos"
},
{
  title: "Tarta de Arándanos",
  src: "https://cdn.pixabay.com/photo/2019/01/21/15/06/blueberries-3946230_960_720.jpg",
  desc: "Déjate sorprender por una maravillosa tarta"
},
{
  title: "Panqueques de Avena",
  src: "https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716_960_720.jpg",
  desc: "Los mejores panqueques de tu vida"
},
{
  title: "Torta de Chocolate",
  src: "https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg",
  desc: "100% chocolate"
},
{
  title: "Quequitos con chips",
  src: "https://cdn.pixabay.com/photo/2017/03/27/14/20/cupcakes-2179039_960_720.jpg",
  desc: "Exquisitos quequitos"
},
{
  title: "Cheescake",
  src: "https://cdn.pixabay.com/photo/2016/11/29/11/38/cake-1869227_960_720.jpg",
  desc: "Una mezcla de sabor inigualable"
},
{
  title: "Pastel de Naranja",
  src: "https://cdn.pixabay.com/photo/2014/07/21/23/00/orange-cake-398966_960_720.jpg",
  desc: "Si eres fan de la naranja este es tu postre"
}]


export const Home = () => {
  return (
    <>
    <Grid  sx={{ textAlign: "center" }}>
    <h1>Bienvenidos</h1>
    <p>Elige entre nuestros exquisitos pasteles</p>
    </Grid>
    <Grid container  sx={{ justifyContent: "center"}}>
      {
        data.map((recipe) => {
          return (
            <Cards key={recipe.title} src={recipe.src} title={recipe.title} desc={recipe.desc}/>      
          )
        })
      }
    </Grid>
    </>
  );
}
