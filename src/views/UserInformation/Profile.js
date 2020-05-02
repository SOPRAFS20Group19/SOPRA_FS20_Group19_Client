import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 6px 0;
  width: 400px;
  height: flex;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: left;
  flex-direction: column;
  background: linear-gradient(rgb(27, 124, 186), rgb(2, 46, 101));
`;

const UserName = styled.div`
  font-weight: bold;
  margin-top: 10px;
  margin-left: 5px;
`;

const Name = styled.div`
  margin-top: 10px;
  font-weight: bold;
  margin-left: 5px;
`;

const Status = styled.div`
  margin-top: 10px;
  font-weight: bold;
  margin-left: 5px;
`;

const CreationDate = styled.div`
  margin-top: 10px;
  font-weight: bold;
  margin-left: 5px;
`;

const BirthDate = styled.div`
  margin-top: 10px;
  font-weight: bold;
  margin-left: 5px;
`;

/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */

// This components displays the given data on the user profile page
const Profile = ({ user }) => {
    return (
        <Container>
            <Name>Name: {user.name}</Name>
            <UserName>Username: {user.username}</UserName>
            <Status>Status: {user.status}</Status>
            <CreationDate>CreationDate: {user.creationDate}</CreationDate>
            <BirthDate>Birth Date: {user.birthDate}</BirthDate>
        </Container>
    );
};

export default Profile;
