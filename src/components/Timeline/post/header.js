import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Header({ username , userImg }) {
  return (
    <div className="post-header">
      {/* <Link to={`/p/${username}`} className="flex items-center"> */}
      <div className="header-left">
        <img
          className="rounded-full h-8 w-8 flex mr-3"
          src={userImg}
          alt={`${username} profile picture`}
        />
        <p className="font-bold">{username}</p>
      </div>
      <MoreHorizIcon className="MoreHorizIcon" />
      {/* </Link> */}
    </div>
  );
}
