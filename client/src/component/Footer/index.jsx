import React from 'react';
import {AppBar, Toolbar, Typography,} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {useSelector} from 'react-redux';
import PurchaseButton from './component/PurchaseButton';
import PoweredByLinks from './component/PoweredByLinks';

function FooterLayout() {
    const footerTheme = useSelector(({Fuse}) => Fuse.Fuse.settings.footerTheme);

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" style={{bottom: 0, top: 'inherit', background: '#252f3e'}} className="z-10">
                <Toolbar className="px-16 py-0 flex items-center">

                    <div className="flex flex-1">
                        <PurchaseButton/>
                    </div>
                    <div className="flex flex-1">
                        <Typography className='font-arc' component='a' href='/' style={{color: '#fff'}}>Địa chỉ: Cái Răng - Cần Thơ/SĐT: 0981248794 </Typography>
                    </div>
                    <div>
                        <PoweredByLinks/>
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default FooterLayout;
