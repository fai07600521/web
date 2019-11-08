import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from './Button';
import Typography from './Typography';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#424242',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    color: "white",
  },
  title: {
    marginBottom: theme.spacing(14),
    color: "white",
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: "white",
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} >
            <Box border={1}  className = "box-border">
              <div className={classes.item}>
                <img
                  src={require("./img/problem.png")} 
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h7" align="center">
                มีที่ปรึกษาตลอด 24 ชั่วโมง ประหยัดเวลาในการค้นหาข้อมูล
                </Typography>
              </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} >
            <Box border={1}  className = "box-border">
              <div className={classes.item}>
                <img
                  src={require("./img/bank.png")} 
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h7" align="center">
                ประหยัดต้นทุนไม่ต้องลองผิดลองถูก เพิ่มช่องทางการตลาด
                </Typography>
              </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} >
            <Box border={1}  className = "box-border">
              <div className={classes.item}>
                <img
                  src={require("./img/crown.png")} 
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h7" align="center">
                  {'ยกระดับศักยภาพเป็นผู้ประกอบธุรกิจการเกษตรสู่ระดับสากล'}
                </Typography>
              </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);