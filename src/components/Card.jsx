import Cakes from "../api/data"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
const Cards = () => {
    
    return (
        Cakes.map((cake) => {
            const { image, name, description } = cake
            return (
                <div key={name} className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
                        <Card  sx={{ maxWidth: 345, height: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={image}
                                    alt={name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>      

            )
        })
    )
}
export default Cards