import { gql } from '@apollo/client';

export const GET_ME = gql`
  query GetMe {
    me {
      _id
      username
      email
      savedVehicles {
        vehicleID
        username
        make
        model
        year
        color
        miles
        price
      }
    }
  }

    `;
    export const GET_VEHICLES = gql`
    query SearchVehicles($query: String!) {
      searchVehicles(query: $query) {
        vehicleID
        make
        model
        year
      }
    }
    `;
