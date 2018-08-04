import React from "react";
import { Query } from "react-apollo";
import {colorQuery} from "./queries/apiQueries"

const Colors = () => (
  <Query query={colorQuery}>
    {({ loading, data }) =>
      !loading ? (
        <React.Fragment>
          <ul>{data.colors.map((x, i) => <li key={i}>{x.name}</li>)}</ul>
        </React.Fragment>
      ) : null
    }
  </Query>
);

export default Colors;