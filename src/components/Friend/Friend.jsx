import s from "./Friend.module.css";
import { clsx } from "clsx";

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendInfo}>
      <img className={s.image} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(s.isOnline, isOnline === true ? s.online : s.offline)}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default Friend;
