import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
import {Controller} from 'react-hook-form';


Datepicker.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    lable: PropTypes.string,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool
}

export default function Datepicker(props) {
    const {form, name, lable} = props;
    return (
        <Controller
            margin="normal"
            name={name}
            control={form.control}
            as={TextField}
            type="date"
            label={lable}
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}