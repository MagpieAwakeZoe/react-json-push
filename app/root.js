/**
 * Created by by on 2017/11/2.
 */
// root文件作为一个包裹器，将所有组件包裹在root下面，作为一个入口

import React from 'react'
import Header from './components/header/header'
import Content from './components/content/content'
import JSONTRY from './components/jsonTry/jsonTry'
let Root = React.createClass({
    render(){
        return (
            <div>
                <Header />
                <Content/>
                <JSONTRY/>
            </div>
        );
    }
});

export default Root;