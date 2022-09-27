import { Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { FC, HTMLAttributes } from "react";

export const ToggleDarkMode: FC<HTMLAttributes<HTMLButtonElement>> = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Switch
      sx={{ cursor: "pointer" }}
      checked={colorScheme === "dark"}
      onChange={() => toggleColorScheme()}
      size="lg"
      onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
      offLabel={
        <IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />
      }
    />
  );
};
export default ToggleDarkMode;
