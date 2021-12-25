import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, Typography} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
    length: 6
}

function ProductSkeletonList({length}) {
    return (
        <>
            {Array.from(new Array(length)).map((x, index) => (
                <div key={index} className="w-full pb-24 sm:w-1/2 lg:w-1/5 sm:p-16">
                    <Card elevation={1} className="flex flex-col h-300">
                        <Typography component="div" variant='h1'>
                            <Skeleton/>
                        </Typography>
                        <Skeleton variant="rect" width={300} height={300}/>

                        <CardContent className="flex flex-col flex-auto">
                            <Skeleton width="60%"/>
                        </CardContent>

                        <CardActions className="justify-center">
                            <Skeleton/>

                        </CardActions>
                    </Card>
                </div>
            ))}
        </>

    );
}

export default ProductSkeletonList;