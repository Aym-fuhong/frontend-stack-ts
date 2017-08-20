import * as React from 'react'
import { AppBar } from 'material-ui'
import * as CSSModules from 'react-css-modules'

const style = require('./index.scss')

interface Popes {

}
@CSSModules(style)
class Title extends React.Component<Popes, {}> {
    render() {
        return (
            <div styleName="title">
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </div>
        )
    }
}

export default Title
