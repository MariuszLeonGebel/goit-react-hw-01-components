import styled from "styled-components";

export const ProfileContainer = styled.div `

.card {
width: 350px;
margin: 50px auto;
box-shadow: 2px 2px 1px lightgrey;
border: 1px solid lightgrey;
border-radius: 5px;
}

.description {
  width: 200 px;
  text-align: center;
  margin: 40px auto;
  background-color: white;

}

.avatar {
  width: 100px;
  height: auto;
  border-radius: 50%;
}

.name {
  font-weight: 700;
  font-size: 24px;
}

.tag, .location {
  color: darkgrey;
}

.stats {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: calc(100% / 3);
  border-color: black; 
  text-align: center; 
  background-color: lightgrey;
  height: 76px;
  font-size: 14px;

  &:nth-child(1), &:nth-child(2) {
    border-right: 1px solid grey;
  }
  }

  .quantity {
    font-weight: bold;
  }

`