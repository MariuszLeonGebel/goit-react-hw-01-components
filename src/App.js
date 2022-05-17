import './App.css';
import Profile from "./components/Profile/Profile"
import user from './components/Profile/user.json'
import Statistics from "./components/Statistics/Statistics"
import data from './components/Statistics/data.json'
import FriendList from "./components/FriendList/FriendList"
import friends from './components/FriendList/friends.json'
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
import transactions from './components/TransactionHistory/transactions.json'

function App() {
  return (
    <div className="App">
      <Profile user={user} />
      <hr />
      <Statistics title="Upload stats" stats={data} />
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
