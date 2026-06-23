const SocialLink = ({ itemClass, href, Icon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        <Icon className={itemClass} />
      </a>
    </li>
  );
};
export default SocialLink;
