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
      name: 'Creative Agency',
      image: '/resources/creative-agency/screenshot.png',
      desc: 'Agency Website for Creative theme and Fronts site.',
      link: `${base_url}/creative-agency`
    },
    {
      name: 'Personal',
      image: '/resources/personal/screenshot.png',
      desc: 'Personal Website for Creative theme and Fronts site.',
      link: `${base_url}/personal`
    },
    {
      name: 'Pexcon',
      image: '/resources/pexcon/screenshot.png',
      desc: 'Construction Website for Creative theme and Fronts site.',
      link: `${base_url}/pexcon`
    },
    {
      name: 'Rental',
      image: '/resources/rental/screenshot.png',
      desc: 'Retal and Real Estate Website for Creative theme and Fronts site.',
      link: `${base_url}/rental`
    },
    {
      name: 'Uptown',
      image: '/resources/uptown/screenshot.png',
      desc: 'Real Estate Website for Creative theme and Fronts site.',
      link: `${base_url}/uptown`
    },
    {
      name: 'Royada Online Shop',
      image: '/resources/royada-online-shop.png',
      desc: 'E-Commerce for Royada Online Shop that built with Laravel & Vuejs Framework.',
      link: `/`
    },
    {
      name: 'Articles & General Website',
      image: '/resources/blog-and-general.png',
      desc: 'Website for blogging and general posts and built with Laravel Framework.',
      link: `/`
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
    {
      name: 'Skin Beauty',
      image: '/resources/skin-beauty.png',
      desc: 'Skin care and beauty for Skin Shop and SPA. Build with Bootstrap 4.',
      link: `${base_url}/skin-beauty`
    },
    {
      name: 'Medcare',
      image: '/resources/medcare/sample.png',
      desc: 'Healthcare and beauty for Mediacal and Health Beauty.',
      link: `${base_url}/medcare`
    },
    {
      name: 'Dr.Pro',
      image: '/resources/drpro/sample.png',
      desc: 'Healthcare and beauty for Mediacal and Health Beauty.',
      link: `${base_url}/drpro`
    },
    {
      name: 'Camille',
      image: '/resources/camille/sample.png',
      desc: 'Healthcare and beauty for Mediacal and Health Beauty.',
      link: `${base_url}/camille`
    },
    {
      name: 'Medica',
      image: '/resources/medica/sample.png',
      desc: 'Healthcare and beauty for Mediacal and Health Beauty.',
      link: `${base_url}/medica`
    },
    {
      name: 'Medino',
      image: '/resources/medino/sample.png',
      desc: 'Healthcare and beauty for Mediacal and Health Beauty.',
      link: `${base_url}/medino`
    },
    {
      name: 'Dr.Care',
      image: '/resources/drcare/sample.png',
      desc: 'Healthcare and beauty for Mediacal and Health Beauty.',
      link: `${base_url}/drcare`
    },
    {
      name: 'Mediplus',
      image: '/resources/mediplus/sample.png',
      desc: 'Healthcare and beauty for Mediacal and Health Beauty.',
      link: `${base_url}/mediplus`
    },
    {
      name: 'Medart',
      image: '/resources/medart/sample.png',
      desc: 'Healthcare and beauty for Mediacal and Health Beauty.',
      link: `${base_url}/medart`
    }
    ,{
      name: 'Medisen',
      image: '/resources/medisen/sample.png',
      desc: 'Healthcare and beauty for Mediacal and Health Beauty.',
      link: `${base_url}/medisen`
    }
]