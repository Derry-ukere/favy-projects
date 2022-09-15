import React from "react";
import {
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
} from '@material-ui/core';


export default function Films() {

  return (
    <div className='films'>
      <TableContainer component={Paper} className='tablecontainer1'>
        <h1 className="headerfilm"> Films</h1>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='tableone' >Film Title</TableCell>
              <TableCell className='tableone'>Director</TableCell>
              <TableCell className='tableone'>Producer</TableCell>
              <TableCell className='tableone'>Release Date</TableCell>
              <TableCell className='tableone'align="right">Episode ID</TableCell>
              <TableCell className='tableone' align="center">characters</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar src="/images/video.png" variant="square" />
                  </Grid>
                  <Grid item lg={10}>
                    Star Wars- The Phantom Menace.
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={3}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    George  Lucas
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={4}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    Gary Kurtz
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell> 25-09-1999</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell className="characters" align="right">https:swapi.dev/api/people/1/</TableCell>

            </TableRow>

            <TableRow>
              <TableCell>
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar src="/images/video.png" variant="square" />
                  </Grid>
                  <Grid item lg={10}>
                    Star Wars- The Phantom Menace.
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={3}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    George  Lucas
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={4}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    Gary Kurtz
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell> 25-09-1999</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell className="characters" align="right">https:swapi.dev/api/people/1/</TableCell>

            </TableRow>

            <TableRow>
              <TableCell>
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar src="/images/video.png" variant="square" />
                  </Grid>
                  <Grid item lg={10}>
                    Star Wars- The Phantom Menace.
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={3}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    George  Lucas
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={4}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    Gary Kurtz
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell> 25-09-1999</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell className="characters" align="right">https:swapi.dev/api/people/1/</TableCell>

            </TableRow>

            <TableRow>
              <TableCell>
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar src="/images/video.png" variant="square" />
                  </Grid>
                  <Grid item lg={10}>
                    Star Wars- The Phantom Menace.
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={3}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    George  Lucas
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={4}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    Gary Kurtz
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell> 25-09-1999</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell className="characters" align="right">https:swapi.dev/api/people/1/</TableCell>

            </TableRow>

            <TableRow>
              <TableCell>
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar src="/images/video.png" variant="square" />
                  </Grid>
                  <Grid item lg={10}>
                    Star Wars- The Phantom Menace.
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={3}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    George  Lucas
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={4}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    Gary Kurtz
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell> 25-09-1999</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell className="characters" align="right">https:swapi.dev/api/people/1/</TableCell>

            </TableRow>

            <TableRow>
              <TableCell>
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar src="/images/video.png" variant="square" />
                  </Grid>
                  <Grid item lg={10}>
                    Star Wars- The Phantom Menace.
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={3}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    George  Lucas
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={4}>
                    <Avatar src="/images/female.jpg" alt="female" />
                  </Grid>
                  <Grid item lg={15}>
                    Gary Kurtz
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell> 25-09-1999</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell className="characters" align="right">https:swapi.dev/api/people/1/</TableCell>

            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
