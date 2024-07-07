import s from "./FriendList.module.css";
import Friend from "../Friend/Friend.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <Friend
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
