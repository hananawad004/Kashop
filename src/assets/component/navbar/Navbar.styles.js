const styles = {
  appBar: {
    background:
      "linear-gradient(90deg, #ff9a9e 0%, #ff6b6b 50%, #c74a4a 100%)",
    boxShadow: "none",
  },

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
    "&:hover": {
      color: "#ffd6d8",
    },
  },

  logoutBtn: {
    color: "#fff",
    fontWeight: 600,
    textTransform: "none",
  },
};

export default styles;
