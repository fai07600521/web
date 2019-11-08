import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from './Typography';


const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
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
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
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
          Services
        </Typography>
        <div>
          <Grid container spacing={5} style = {{marginBottom: "70px"}}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src={require("./img/chatbot.png")} 
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                Line Chat Bot Q&A
                </Typography>
                <p className = "center-p">Line Chat Botถาม-ตอบและให้ข้อมูลทางเกษตรกรรมแก่เกษตรกร</p>
              </div>
            </Grid>
            
            <Grid item xs={12} md={4} >
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src={require("./img/teamwork.png")} 
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                 Community
                </Typography>
                <p className = "center-p">ระบบการล็อกอินเพื่อเข้าสู่เว็บบอร์ด เพื่อสร้างพื้นที่ให้เกษตรกรแลกเปลี่ยนความรู้</p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} >
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src={require("./img/marketplace.png")} 
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {'GuruFarm Marketplace'}
                </Typography>
                <p className = "center-p">เว็บไซต์สื่อกลางการติดต่อซื้อ – ขาย  ที่รวบรวมสินค้าและร้านค้าหรือบริษัท </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div >
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>4.</div>
                <img
                  src={require("./img/information.png")} 
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                Guru-Consult
                </Typography>
                <p className = "center-p">ทีมที่ปรึกษาพัฒนาคุณภาพสินค้าเกษตรสู่มาตรฐาน</p>
              </div>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>5.</div>
                <img
                  src={require("./img/workshop.png")} 
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                Workshops & Events
                </Typography>
                <p className =  "center-p">การจัดงานอบรมและการเรียนรู้เชิงปฏิบัติเกี่ยวกับการเกษตร เพื่อนำความรู้ไปต่อยอดการประกอบอาชีพ</p>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>6.</div>
                <img
                  src={require("./img/analysis.png")} 
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {'Big Data & Data Analysis'}
                </Typography>
                <p className =  "center-p">ระบบฐานข้อมูลด้านการเกษตรเพื่อช่วยวิเคราะห์ทำให้เกษตรกรรายใหญ่  หรือ เกษตรพาณิชย์ มีตัวช่วยที่แม่นยำในการลงทุน
</p>
              </div>
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