import React from 'react'
import { FunctionField } from 'react-admin'

const styles = {
    link: {
        color: '#367fce',
        fontWeight: '600'
    }
}

const LinkField = (props) => <FunctionField render={record => {

    if (!record[props.source]) {
        return null
    }
    const link = record[props.source]

    return <a
        href={link} style={styles.link} target="_blank" rel="noopener noreferrer">{record.title}</a>
}

} {...props} />

export default LinkField