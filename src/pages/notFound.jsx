import { Typography } from "@mui/material"
import image from '/public/imgs/404.avif'
const NotFound = () => {
    return (
        <div style={{backgroundImage: `url(${image})`, height: '100vh' }} >
            <Typography className='text-light align-middle' variant="h2">
                Oops! The page you're looking for is lost in space.
            </Typography>
        </div>
    )
}
export default NotFound