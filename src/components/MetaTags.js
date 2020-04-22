import React, { Component } from 'react'
import ReactMetaTags from 'react-meta-tags'
import { withRouter, Switch, Route } from 'react-router-dom'
import routes from '../routes'
import metaTags from '../metaTags';

export default withRouter(class MetaTags extends Component {
    render() {
        return (

            <Switch location={this.props.location}>

                {routes.map((route, key) => {
                    const metaTag = metaTags.find(item => item.path === route.path);
                    return <Route key={key} path={route.path} exact={route.exact} component={() => {
                        return renderMetaTags(metaTag)
                    }} />
                })}
            </Switch>
        )
    }
})

const renderMetaTags = (metaTag) => {
    if (!metaTag) {
        metaTag = metaTags[0]
    }
    return <ReactMetaTags>
        <title>{metaTag.title}</title>
        <meta property="og:title" content={metaTag["og:title"] || metaTag.title} />
        <meta name="twitter:title" content={metaTag["twitter:title"] || metaTag.title} />

        <meta name="description" content={metaTag.description} />
        <meta property="og:description" content={metaTag["og:description"] || metaTag.description} />
        <meta name="twitter:description" content={metaTag["twitter:description"] || metaTag.description} />
    </ReactMetaTags >
}