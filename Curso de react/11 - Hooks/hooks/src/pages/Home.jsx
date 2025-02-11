import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';
import HookUseRef from '../components/HookUseRef';

const Home = () => {

    const { contextValue } = useContext(SomeContext);

    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <p>{contextValue}</p>
            <HookUseRef />
        </div>
    )
}

export default Home