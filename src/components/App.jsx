import Profile from './Profile/Profile';
import Statistic from './Statistic/Statistic';

import user from '../data/user.json';
import data from '../data/data.json';
// import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
    </div>
  );
};
