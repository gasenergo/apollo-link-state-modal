import React from "react";
import { graphql, compose } from "react-apollo";
import {getNetworkStatus, changeConnectionMutation} from "./queries/localQueries"

const ChangeConnection = ({ mutate, data: { loading, networkStatus } }) =>
  !loading ? (
    <button
      onClick={() =>
        mutate({
          variables: {
            isConnected: !networkStatus.isConnected
          }
        })
      }
    >
      change connection
    </button>
  ) : null;



export default compose(
  graphql(getNetworkStatus),
  graphql(changeConnectionMutation)
)(ChangeConnection);

