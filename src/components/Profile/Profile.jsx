import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profilePage}>
      <div className={s.profile}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>
          <b>{name}</b>
        </p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.listItem}>
          <span>Followers</span>
          <span>
            <b>{stats.followers}</b>
          </span>
        </li>
        <li className={s.listItem}>
          <span>Views</span>
          <span>
            <b>{stats.views}</b>
          </span>
        </li>
        <li className={s.listItem}>
          <span>Likes</span>
          <span>
            <b>{stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
