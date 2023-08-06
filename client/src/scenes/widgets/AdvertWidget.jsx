import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWprapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.dark;
  const main = palette.main;
  const medium = palette.medium;

  return (
    <WidgetWprapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight={500}>
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        alt="Advert Img"
      />
      <FlexBetween>
        <Typography color={main}>Kawaai Cosmetics</Typography>
        <Typography color={medium}>KawaaiCosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Introducing Kawaai Cosmetics: Unleash Your Inner Glow! 💫 Discover
        radiant skin with our nourishing skincare line. ✨ Get noticed with
        vibrant makeup shades that exude confidence. 💄 Join the beauty
        revolution and embrace your true self with Kawaai Cosmetics! 🌸
      </Typography>
    </WidgetWprapper>
  );
};

export default AdvertWidget;
