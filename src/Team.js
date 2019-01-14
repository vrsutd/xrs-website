import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  avatar: {
    width: 128,
    height: 128,
    margin: '0 auto',
  },
};

class Team extends Component {  
  render() {
    const { classes } = this.props;

    return(
      <div>
        <h1>Team</h1>
        <p>Our team members are a diverse group of individuals with the common passion of virtual, augmented, and mixed reality. []</p>
        <div style={{display:'flex', flexFlow:'row wrap', justifyContent:'center'}}>
          <div style={{width:252, textAlign:'center', padding:16}}>
            <Avatar alt="Cameron Steele" src="/people/cameron.png" className={classes.avatar} />
            <h3 style={{color:'#043a3a'}}>Cameron Steele</h3>
            <p style={{fontStyle:'italic', color:'#0a9998'}}>President</p>
          </div>
          <div style={{width:252, textAlign:'center', padding:16}}>
            <Avatar alt="Caleb Fung" src="/people/caleb.jpg" className={classes.avatar} />
            <h3 style={{color:'#043a3a'}}>Caleb Fung</h3>
            <p style={{fontStyle:'italic', color:'#0a9998'}}>Vice President</p>
          </div>
          <div style={{width:252, textAlign:'center', padding:16}}>
            <Avatar alt="Calvin Lovoy" src="/people/calvin.jpg" className={classes.avatar} />
            <h3 style={{color:'#043a3a'}}>Calvin Lovoy</h3>
            <p style={{fontStyle:'italic', color:'#0a9998'}}>Director of Marketing</p>
          </div>
          <div style={{width:252, textAlign:'center', padding:16}}>
            <Avatar alt="Corrine Jagneaux" src="/people/corrine.jpg" className={classes.avatar} />
            <h3 style={{color:'#043a3a'}}>Corrine Jagneaux</h3>
            <p style={{fontStyle:'italic', color:'#0a9998'}}>Treasurer</p>
          </div>
          <div style={{width:252, textAlign:'center', padding:16}}>
            <Avatar alt="Corrine Jagneaux" src="/people/milan.jpg" className={classes.avatar} />
            <h3 style={{color:'#043a3a'}}>Milan Harris</h3>
            <p style={{fontStyle:'italic', color:'#0a9998'}}>Director of Technology</p>
          </div>
          <div style={{width:252, textAlign:'center', padding:16}}>
            <Avatar alt="Alyssa Teves" src="/people/alyssa.jpg" className={classes.avatar} />
            <h3 style={{color:'#043a3a'}}>Alyssa Teves</h3>
            <p style={{fontStyle:'italic', color:'#0a9998'}}>Director of PR</p>
          </div>
          <div style={{width:252, textAlign:'center', padding:16}}>
            <Avatar alt="Veronica Liu" src="/people/veronica.jpg" className={classes.avatar} />
            <h3 style={{color:'#043a3a'}}>Veronica Liu</h3>
            <p style={{fontStyle:'italic', color:'#0a9998'}}>Director of Outreach</p>
          </div>
          <div style={{width:252, textAlign:'center', padding:16}}>
            <Avatar alt="Richard Lin" src="/people/richard.png" className={classes.avatar} />
            <h3 style={{color:'#043a3a'}}>Richard Lin</h3>
            <p style={{fontStyle:'italic', color:'#0a9998'}}>Outreach Instructor</p>
          </div>
          <div style={{width:252}}></div>
        </div>
        <h2 style={{fontSize:28, marginLeft:48, marginTop:72}}>Advisors</h2>
        <div style={{display:'flex', flexFlow:'row wrap', justifyContent:'center'}}>
          <div style={{width:252, textAlign:'center', padding:16}}>
            <Avatar alt="Dr. Ryan McMahan" src="/people/dr_mcmahan.jpg" className={classes.avatar} />
            <h3 style={{color:'#043a3a'}}>
              Dr. Ryan McMahan
              <a href="http://www.ryanmcmahan.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                <IconButton style={{marginLeft:4}} size="small">
                  <Icon fontSize="small">link</Icon>
                </IconButton>
              </a>
            </h3>
            <p style={{fontStyle:'italic', color:'#0a9998'}}>Facualty Advisor</p>
          </div>
          <div style={{width:252}}></div>
          <div style={{width:252}}></div>
        </div>
        <div style={{marginBottom:128}}></div>
      </div>
    )
  }
}

Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);