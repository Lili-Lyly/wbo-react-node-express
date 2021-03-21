import './body.css'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Body = () => {

    return (

        <div className={'principal-home-body'}>

            <div className={'small-nav-bar'}>

                <div className={'small-nav-bar-container'}>

                    <span className={'je-suis'}>je suis un → </span>
                    <span className={'patient'}>Patient/Public</span>
                    <span className={'professionnel'}>Professionnel de la Santé</span>
                </div>
            </div>

            <div className={'img-doctors'}>

                <div className={'inside'}>
                    <div className={'title'}>
                        <span>L'AP-HA est organisé afin de vous accompagner durant votre visite</span>
                        <h1>Trouvez une spécialité et prenez rendez-vous</h1>
                    </div>

                    <div className={'content'}>

                        <div>

                            <FormControl variant="outlined" className={'form'}>
                                <InputLabel id="">Trouvez une Specialité</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Spécialité"
                                >
                                    <MenuItem value="">
                                        <em>veuillez choisir</em>
                                    </MenuItem>
                                    <MenuItem>Allergologue</MenuItem>
                                    <MenuItem>Cancerologue</MenuItem>
                                    <MenuItem>Cardiologue</MenuItem>
                                    <MenuItem>Chirurgien cardiologue</MenuItem>
                                    <MenuItem>Chirurgien infantile</MenuItem>
                                    <MenuItem>Diabetologue</MenuItem>
                                    <MenuItem>Hepatologue</MenuItem>
                                    <MenuItem>Radiologue</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl variant="outlined" className={'form'}>
                                <InputLabel id="">Trouvez un medecin</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Spécialité"
                                >
                                    <MenuItem value="">
                                        <em>Veuillez choisir</em>
                                    </MenuItem>
                                    <MenuItem>Dr Amine sofiane</MenuItem>
                                    <MenuItem>Dr Assil mohamed-lamine</MenuItem>
                                    <MenuItem>Dr BabaAhmed salah</MenuItem>
                                    <MenuItem>Dr Borsali lamia</MenuItem>
                                    <MenuItem>Dr Chikhi souhila</MenuItem>
                                    <MenuItem>Dr Chalabi mohamed</MenuItem>
                                    <MenuItem>Dr Hocine reda</MenuItem>
                                    <MenuItem>Dr Mandouri djamel</MenuItem>
                                    <MenuItem>Dr Mahieddine omar</MenuItem>
                                    <MenuItem>Dr Nazli fatiha</MenuItem>
                                    <MenuItem>Dr Sahli nouredine</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>
                </div>
            </div>


            <Card className={'card-principal'}>
                <CardActionArea>
                    <CardMedia
                        className={'card-container'}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Actualité"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Actualité
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            suivez toute notre actualité
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>


        </div>
    )
}

export default Body;
