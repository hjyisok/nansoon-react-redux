import React from 'react';
import Header from './Header';
import Content from './Content';
import DevTools from './DevTools';
export default class Index extends React.Component {
    render() {
        return (
                <div>
                    <Header/>
                    <Content/>
                    <DevTools />
                </div>
        )
    }
}
