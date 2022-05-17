import styled from "styled-components";

export const StatisticsContainer = styled.div `
.stats {
   background-color: #fff;
   width: 100%;
   margin: 0 auto;
   max-width: 350px;
   margin: 40px auto;
   box-shadow: 2px 2px 1px lightgrey;
   border: 1px solid grey;
   border-radius: 5px;
}

.title {
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
}

.list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  margin: 0;
  padding: 0;
}

.item {
  list-style-type: none;
  padding: 10px 0 15px 0;
  flex-grow: 1;
}

.label {
  text-align: center;
  display: block;
  color: #fff;
  font-size: 12px;
}

.percentage {
  display: block;
  margin-top: 4px;
  /* font-weight: bold; */
  text-align: center;
  color: #fff;
}

`