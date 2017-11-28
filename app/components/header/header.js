/**
 * Created by by on 2017/11/2.
 */
// row表示栅格，-col-auto表示只占用一格
import React from 'react'
import './header.less'

let Header = React.createClass({
    render(){
        return (
            <div className="components-header row">
                <img src="/static/images/logo.png" width="40" alt="" className="-col-auto"/>
                <h1 className="caption">React Music Player</h1>
            </div>
        );
    }
})

export default Header;