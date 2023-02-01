
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box'



export default function Footer() {
  return (
      
      <Box
        component="footer"
        sx={{
          pt: 3,
          mt: 2,
        }}
      >
        
        <footer>
            <div className='py-5 d-flex justify-content-center gap-3 gap-sm-5' style={{backgroundColor: '#FFE3E1'}}>
            <FacebookOutlinedIcon/> 
            <InstagramIcon/> 
            <GoogleIcon/>
            <GitHubIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
            </div>
            <div style={{backgroundColor: '#FF9494'}}>
                <p className='text-muted text-center py-3 mb-0'>©2023 GitHub/jtca94 - Creado usando React + MaterialUI + Bootstrap</p>
            </div>
        </footer>

      </Box>
  );
}

