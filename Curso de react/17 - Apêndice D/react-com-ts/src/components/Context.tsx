import React, { useContext } from 'react'

import { AppContext } from '../App'

type Props = {}

const Context = (props: Props) => {

    const details = useContext(AppContext);

    return (
        <div>
            <h2>{details?.language}</h2>
            <h2>{details?.framework}</h2>
        </div>
    )
}

export default Context