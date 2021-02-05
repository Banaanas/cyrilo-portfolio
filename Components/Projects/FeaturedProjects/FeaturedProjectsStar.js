import appTheme from "../../../styles/appTheme";

const FeaturedProjectsStar = () => {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M128 62.6L89.7 69.2C79.8 70.9 72.1 78.8 70.8 88.8L65.4 128L58.8 89.7C57.1 79.8 49.2 72.1 39.2 70.8L0 65.4L38.3 58.8C48.2 57.1 55.9 49.2 57.2 39.2L62.6 0L69.2 38.3C70.9 48.2 78.8 55.9 88.8 57.2L128 62.6Z"
        fill={appTheme.colors.primary.main}
      />
    </svg>
  );
};

export default FeaturedProjectsStar;
