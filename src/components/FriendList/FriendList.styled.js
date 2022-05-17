import styled from "styled-components";

export const FriendsContainer = styled.div `
* {
   box-sizing: border-box;
}

.friendList {
  display: flex;
  flex-direction: column;
  padding-left: 0;
}

.item {
  display: flex;
  align-items: center;
  width: 350px;
  height: 100px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 2px hsla(0, 0%, 0%, 0.15);
  padding: 20px;
  margin-bottom: 10px;
  margin: 10px auto;
  font-size: 34px;
  font-weight: 500;
  list-style-type: none;
}

.avatar {
  margin-left: 20px;
  margin-right: 20px;
}

.status {
  display: inline-flex;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: green;
}
.noActive {
  display: inline-flex;
  width: 25px;
  height: 25px;
  border-radius: 50% ;
  background-color: red;
}

`