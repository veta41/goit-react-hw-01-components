import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionsHistory from './HistoryTransactions/HistoryTransactions';
import transactions from './HistoryTransactions/HistoryTransactions.json'
export const App = () => {
  return (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />;
    <Statistics stats={data} />
    <FriendList friends={friends} />;
    <TransactionsHistory items={transactions} />;

  </div>
  );
};
