import { gql } from 'apollo-boost'

//Network status queries

export const getNetworkStatus = gql`
  query {
    networkStatus @client {
      isConnected
    }
  }
`;

export const changeConnectionMutation = gql`
  mutation($isConnected: Boolean) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`;
//Modal queries

export const getModalStatus = gql`
  query {
    modal @client {
      isOpen
    }
  }
`;
export const closeModalMutation = gql`
  mutation {
    closeModal(isOpen: false) @client
  }
`;
export const openModalMutation = gql`
  mutation{
   closeModal(isOpen: true) @client
  }
`;