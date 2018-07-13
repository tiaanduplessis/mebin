import React from 'react'
import { FunctionField } from 'react-admin'


const DateField = (props) => <FunctionField render={record => {

    if (!record[props.source]) {
        return null
    }
    const date = new Date(record[props.source])

    return date.toDateString()
}

} {...props} />

export default DateField