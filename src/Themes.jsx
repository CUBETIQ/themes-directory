import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    minWidth: 280
  },
  media: {
    height: 140,
  },
}));

function openView(url) {
    window.open(url, '_blank')
}

export default function Themes() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
            {data.map(item => {
                return (
                    <Grid key={item.name} item>
                    <Card className={classes.card}>
                        <CardActionArea onClick={() => {openView(item.link)}}>
                        <CardMedia
                            className={classes.media}
                            image={item.image}
                            title={item.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.desc}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" onClick={() => {openView(item.link)}}>
                            View
                        </Button>
                        <Button size="small" color="primary" disabled>
                            Download
                        </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
}

const base_url = 'https://themes.cubetiqs.com';

const data = [
    {
        name: 'Theme 1',
        image: 'https://material-ui.com//static/images/cards/contemplative-reptile.jpg',
        desc: 'This is a theme 1',
        link: `${base_url}/theme_1`
    },
    {
        name: 'Theme 2',
        image: 'https://material-ui.com//static/images/cards/contemplative-reptile.jpg',
        desc: 'This is a theme 2',
        link: `${base_url}/theme_2`
    },
    {
        name: 'Theme 3',
        image: 'https://material-ui.com//static/images/cards/contemplative-reptile.jpg',
        desc: 'This is a theme 3',
        link: `${base_url}/theme_3`
    },
    
]