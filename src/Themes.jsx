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

const base_url = 'https://themes.cubetiqs.com/resources';

const data = [
    {
      name: 'Royada Online Shop',
      image: '/resources/royada-online-shop.png',
      desc: 'E-Commerce for Royada Online Shop that built with Laravel & Vuejs Framework.',
      link: `https://royada.dev.cubetiqs.com`
    },
    {
      name: 'Articles & General Website',
      image: '/resources/blog-and-general.png',
      desc: 'Website for blogging and general posts and built with Laravel Framework.',
      link: `https://vimar.dev.cubetiqs.com`
    },
    {
        name: 'Restuarant & Café',
        image: '/resources/restuarant-and-cafe.png',
        desc: 'Suit for luxury Restaurant and Cafe Shop. We desing with components and decoration page.',
        link: `${base_url}/restuarant-and-cafe`
    },
    {
        name: 'Coffee Shop',
        image: '/resources/coffee-shop.png',
        desc: 'Luxury style match for coffee shop. It\'s includes booking, ordering coffee and more.',
        link: `${base_url}/coffee-shop`
    },
    {
        name: 'Coffee Shop Classic',
        image: '/resources/coffee-shop-classic.png',
        desc: 'Classic style for coffee shop and plus with default component for decoration page.',
        link: `${base_url}/coffee-shop-classic`
    },
    {
      name: 'Clear & Clean Seirra',
      image: '/resources/clear-clean-seirra.png',
      desc: 'Modern with clear and clean design for information page.',
      link: `${base_url}/clear-clean-seirra`
    },
    {
        name: 'Trip & Adventure',
        image: '/resources/trip-adventure.png',
        desc: 'Travel & Trip for Hotel, Restuarant, Trip Advisor and more.',
        link: `${base_url}/trip-adventure`
    },
    {
      name: 'Crypto & Trading Market',
      image: '/resources/crypto-trading-market.png',
      desc: 'Financial, Trading, Coin Market, Cryptocurrency and more.',
      link: `${base_url}/crypto-trading-market`
    },
    {
      name: 'Consulting Plus',
      image: '/resources/consulting-plus.png',
      desc: 'Professional Consulting, Co-working, The Space, Business and more.',
      link: `${base_url}/consulting-plus`
    },
    {
      name: 'The Mobi App',
      image: '/resources/the-mobi-app.png',
      desc: 'Mobile application with single page and scroll. And work with list and slide.',
      link: `${base_url}/the-mobi-app`
    },
]