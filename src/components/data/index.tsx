import * as React from 'react'
import { connect } from 'react-redux'
import { TextField } from 'material-ui'
import { SignInFrom, StoreState } from '../../reducers/types'
import * as CSSModules from 'react-css-modules'
const style = require('./index.scss')

interface Poprs {
    signInFrom: SignInFrom
}
@CSSModules(style)
class Data extends React.Component<Poprs, {}> {
    render() {
        return (
            <div>
                <p>Data</p>
                <TextField
                    hintText="Hint Text"
                    defaultValue={this.props.signInFrom.username}
                    floatingLabelText="user name"
                /><br />
                <TextField
                    defaultValue={this.props.signInFrom.password}
                    floatingLabelText="password"
                />
            </div>
        )
    }

}

const mapStateToProps = (state: StoreState) => ({
    signInFrom: state.signInFrom,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Data)
