const styles = {
  toolbar: {
    justifyContent: "space-between",
    maxWidth: "1300px",
    width: "100%",
    mx: "auto",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  logoIcon: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ff6b6b",
    fontSize: 18,
  },
  logoText: {
    fontWeight: 700,
    fontSize: 22,
    color: "#fff",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  navText: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 500,
    fontSize: 15,
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      color: "#ffd6d8",
    },
  },
  shopDropdown: {
    display: "inline-flex",
    alignItems: "center",
    gap: "2px",
    cursor: "pointer",
    position: "relative",
    "&:hover::after": { opacity: 1 },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -4,
      left: "50%",
      transform: "translateX(-50%)",
      width: "120%",
      height: 3,
      borderRadius: 2,
      backgroundColor: "#fff",
      opacity: 0,
      transition: "opacity 0.3s",
    },
  },
};

export default styles;
