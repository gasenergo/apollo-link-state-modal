export const defaults = {
    networkStatus: {
        isConnected: false,
        __typename: 'NetworkStatus'
    },
    modal: {
        isOpen: false,
        __typename: 'Modal'
    }
}

export const resolvers = {
    Query: {},
    Mutation: {
        updateNetworkStatus: (_, params, {cache}) => {
            const data = {
                networkStatus: {
                    isConnected: params.isConnected,
                    __typename: 'NetworkStatus'
                }
            };
            cache.writeData({data});
            return null;
        },
        openModal: (_, params, {cache}) => {
            const data={
                modal: {
                    isOpen: params.isOpen,
                    __typename: 'Modal'
                }
            };
            cache.writeData({data});
            return null;
        },
        closeModal: (_, params, {cache}) => {
            const data={
                modal: {
                    isOpen: params.isOpen,
                    __typename: 'Modal'
                }
            };
            cache.writeData({data});
            return null;
        }
    }
}