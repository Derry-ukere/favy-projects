import { Grid, Card, } from '@mui/material'
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';



const Cards = () => {


  return (

    <Grid container spacing={2} justifyContent='right'>
      <Grid item>
        <Card className='card'>
          <Grid container>
            <Grid item lg={10}>
              <nav>
                <Link to='/films' className='card-link'>
                  <Typography variant="h4" noWrap>
                    Films</Typography>
                </Link>
              </nav>
            </Grid>
            <Grid item lg={2}>
              <Avatar src="/images/video.png" variant="square"
                className='film-avatar'
              />
            </Grid>
          </Grid>
          <h3 className='h3'>200</h3>
          <h6 className='h6'>20% increase everyday</h6>
        </Card>
      </Grid>
      <Grid item >
        <Card className='card'>
          <Grid container>
            <Grid item lg={10}>
              <nav>
                <Link to='/starships' className='card-link'>
                  <Typography variant="h4" noWrap>
                    Starships</Typography>
                </Link>

              </nav>
            </Grid>
            <Grid item lg={2}>
              <Avatar src="/images/starshipicon.jpg" variant="square" className='starship-avatar' />
            </Grid>
          </Grid>
          <h3 className='h3'>200</h3>
          <h6 className='h6'>20% increase everyday</h6>

        </Card>
      </Grid>
      <Grid item>
        <Card className='card'>
          <Grid container>
            <Grid item lg={10}>
              <nav>
                <Link to='/people' className='card-link'>
                  <Typography variant="h4" noWrap>
                    People</Typography>
                </Link>
              </nav>
            </Grid>
            <Grid item lg={2}>
              <Avatar src="/images/people.png" variant="square" className='people-avatar' />
            </Grid>
          </Grid>
          <h3 className='h3'>200</h3>
          <h6 className='h6'>20% increase everyday</h6>
        </Card>
      </Grid>
      <Grid item>
        <Card className='card'>
          <Grid container>
            <Grid item lg={10}>
              <nav>
                <Link to='/vehicles' className='card-link'>
                  <Typography variant="h4" noWrap>
                    Vehicles  </Typography>
                </Link>
              </nav>
            </Grid>
            <Grid item lg={2}>
              <Avatar src="/images/vehicle.jpg" variant="square" className='vehicle-avatar' />
            </Grid>
          </Grid>
          <h3 className='h3'>200</h3>
          <h6 className='h6'>20% increase everyday</h6>
        </Card>
      </Grid>
      <Grid item>
        <Card className='card5'>
          <Grid container>
            <Grid item lg={10}>
              <nav>
                <Link to='/species' className='card-link'>
                  <Typography variant="h4" noWrap>
                    Species </Typography>
                </Link>
              </nav>
            </Grid>
            <Grid item lg={2}>
              <Avatar src="/images/species.png" variant="square" className='specie-avatar' />
            </Grid>
          </Grid>
          <h3 className='h3'>200</h3>
          <h6 className='h6'>20% increase everyday</h6>
        </Card>
      </Grid>
    </Grid>

  )
}
export default Cards;



