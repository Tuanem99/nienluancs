import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    makeStyles,
    Typography,
    useTheme
} from "@material-ui/core"
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import EmojiNatureIcon from '@material-ui/icons/EmojiNature';

Product.propTypes = {
    product: PropTypes.object
}
const useStyles = makeStyles((theme) =>
    ({
        media: {
            height: 300,
            width: '100%'
        },
    }))
export default function Product({product}) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className="w-full pb-24 sm:w-1/2 lg:w-1/5 sm:p-16">
            <Card elevation={1} className="flex flex-col h-300">
                <CardActionArea>
                    <div className="flex flex-shrink-0 items-center justify-between px-12 h-64"
                         style={{
                             background: '#607d8b',
                             color: theme.palette.getContrastText('#607d8b')
                         }}>
                        <Typography className="font-medium " color="inherit">{product.tensp}</Typography>
                    </div>
                    <CardMedia
                        component="a"
                        href={'product/' + product.idsp}
                        className={classes.media}
                        image={product.img}
                    />
                    <CardContent className="flex flex-col flex-auto">
                        <Typography className="text-16 font-400 text-left">${product.gia}</Typography>
                    </CardContent>

                    <Divider/>
                </CardActionArea>

                <CardActions className="justify-center">
                    <Button
                        to={'product/' + product.idsp}
                        component={Link}
                        className="justify-start px-32"
                        color="default"
                        startIcon={<EmojiNatureIcon/>}
                    >
                        Chi tiết
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}