import styled from "styled-components";

export const TransactionsContainer = styled.div `
* {
   box-sizing: border-box;
}

.table {
  width: 500px;
  height: auto;
  border: 1px solid rgb(221, 216, 216);
  box-shadow: 4px 4px 4px hsla(0, 0%, 0%, 0.15);
  margin: 40px auto;
}

.thead {
  color: white;
  text-align: center;
  height: 40px;
  background: #3FB8BF;
}

.tbody {
  text-align: center;
}

.tr {
  height: 40px;
}

tbody td {
  padding: 0;
}

tbody tr:nth-child(odd) {
  background-color: white;
  
}

tbody tr:nth-child(even) {
  background-color: #E4EAEB;
}

`

