import React from "react";

import user from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"

import { Profile} from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./Friends/Friends";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Title } from "utils/Title/Title";


export const App = () => {
  return (<>
    <Title titleText="1st task Profile"/>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
    <Title titleText="2nd task Statistics"/>
    <Statistics title="Stats" stats={data} />
    <Title titleText="3rd task Friendslist"/>
    <FriendsList friends={friends} />
    <Title titleText="4th task Transactions"/>
    <TransactionHistory items = {transactions}/>
  </>);
};
