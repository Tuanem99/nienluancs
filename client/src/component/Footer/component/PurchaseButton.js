import React from 'react';
import {Button} from '@material-ui/core';

function PurchaseButton() {
    return (
        <Button component="a"
                href="/"
                role="button"
                className="normal-case"
                variant="contained"
                color="secondary">
            {/* <ShopIcon className="text-16 mr-4" /> */}
            <span>beshop</span>
        </Button>
    );
}

export default PurchaseButton;
