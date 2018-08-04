import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import { defaults, resolvers } from './state.js'


export const client = new ApolloClient({
    uri: "https://37lpw55nvv.lp.gql.zone/graphql",
    clientState: {
        defaults,
        resolvers
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
