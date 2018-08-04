import React, { Component } from 'react';
import { getNetworkStatus, changeConnectionMutation } from "./queries/localQueries"
import { Query, Mutation} from 'react-apollo';
import { Button, Segment } from 'semantic-ui-react'



class Change extends Component {
   
    render(){
        return(
            <Query query={ getNetworkStatus } >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    return (
                    <div>
                        <Segment compact padded>
                            {data.networkStatus.isConnected ? "connected !!!" : "disconnected"}
                        </Segment>
                        <Mutation mutation ={ changeConnectionMutation }>
                        {(updateNetworkStatus)=>(
                            <Button onClick={ ()=>{
                                updateNetworkStatus({
                                    variables: {isConnected: !data.networkStatus.isConnected}
                                });
                            }}>Change it
                        </Button>
                        )} 
                        </Mutation>
                    </div>
                    );
                }}
            </Query>
        );
    }
}

export default Change;