import styled from "styled-components";
import React from "react";
import {withRouter} from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 1;
  grid-row: 4;
  margin-top: 20px;
  margin-left: 20px;
  align-content: left;
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 30px;
`;

class SavedLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <Container>
                    <Title>
                        saved locations
                    </Title>
            </Container>
        )
    }

}


export default withRouter(SavedLocations);