
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Cards = ({ src, title, desc }) => {
  return (
    <>
    <Card sx={{ maxWidth: 345, marginBottom: "20px" }} pl={6}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="230"
        image={src}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </>
  )
}
