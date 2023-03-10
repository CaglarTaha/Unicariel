const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://www.youtube.com/channel/UCubEY9LFnquEZQGZBsg_6eQ">
        <i className="fa-brands fa-youtube" aria-hidden="true" title="Youtube Kanalım"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.tiktok.com/@unicariell">
        <i className="fa-brands fa-tiktok" aria-hidden="true" title="Michael Yeates' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/unicariel/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Michael Yeates' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/unicariel">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Michael Yeates' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
