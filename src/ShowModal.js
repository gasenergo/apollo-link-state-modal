import React, { Component } from 'react';
import { getModalStatus, closeModalMutation, openModalMutation } from "./queries/localQueries"
import { Query, Mutation} from 'react-apollo';
import { Button, Segment, Modal, Header, Icon } from 'semantic-ui-react'



class ShowModal extends Component {
   
    render(){
        return(
            <Query query={ getModalStatus } >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    return (
                    <div>
                        <Segment compact padded>
                            {data.modal.isOpen ? "open" : "closed"}
                        </Segment>
                        <Modal
                            trigger={
                                <Mutation mutation ={ openModalMutation }>
                                    {(openModal)=>(<Button onClick={ ()=>{openModal() }}>Open</Button>)} 
                                </Mutation>
                            }
                            open={data.modal.isOpen}
                            basic
                            size='small'
                        >
                            <Header as="h1" content='Gentlemans' />
                            <Modal.Content>
                                <h3>This modal work with Apollo-Link-State</h3>
                            </Modal.Content>
                            <Modal.Actions>
                                <Mutation mutation ={ closeModalMutation }>
                                    {(closeModal)=>(<Button color='green' onClick={ ()=>{closeModal() }} inverted ><Icon name='checkmark' /> Got it</Button>)} 
                                </Mutation>
                            </Modal.Actions>
                        </Modal>
                    </div>
                    );
                }}
            </Query>
        );
    }
}

export default ShowModal;