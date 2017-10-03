import React from 'react'
import {Grid} from 'semantic-ui-react'

export class DashboardGrid extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <main className="Site-content ui center aligned grid" style={{ minHeight: '100vh' }}>
                <Grid stackable centered columns={16} verticalAlign='top' >
                    <Grid.Row className="page-header-section no-content"></Grid.Row>
                    {this.props.children}
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                </Grid>
            </main>
        )
    }
}
