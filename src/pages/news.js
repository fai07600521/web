import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from './img/1.png';

  const tileData = [
   {
     img: image,
     title: 'Image',
     author: 'author',
   }, {
    img: image,
    title: 'Image',
    author: 'author',
  },{
    img: image,
    title: 'Image',
    author: 'author',
  },{
    img: image,
    title: 'Image',
    author: 'author',
  },{
    img: image,
    title: 'Image',
    author: 'author',
  },{
    img: image,
    title: 'Image',
    author: 'author',
  }
 ];

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "white",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

export default class News extends Component {
  render() {
    const classes = useStyles();
    return (
      <GridList cellHeight={180} className={classes.gridList}>
  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
    <ListSubheader style = {{paddingTop:60}}component="div">December</ListSubheader>
  </GridListTile>
  {tileData.map(tile => (
    <GridListTile key={tile.img}>
      <img src={tile.img}  />
      <GridListTileBar
        title={tile.title}
        subtitle={<span>by: {tile.author}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  ))}
</GridList>

    );
  }
}
