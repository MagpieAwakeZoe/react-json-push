/**
 * Created by by on 2017/11/2.
 */
import React from 'react'
import  {render} from 'react-dom';
import  {AppContainer} from  'react-hot-loader';
import Root from './root'

// var react = require('react')
// var render = require('react-dom');
// var hello = require('./components/hello')

render(
    <AppContainer>
        <Root/>
    </AppContainer>,
    document.getElementById("root")
);

if (module.hot){
    module.hot.accept('./root',() =>{
        const NewRoot = require('./root').default;
        render(
            <AppContainer>
                <NewRoot/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}