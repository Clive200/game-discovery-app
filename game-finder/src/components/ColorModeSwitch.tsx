import { HStack, Switch, Text } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const ColorModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <HStack>
      <Switch.Root
        checked={isDark}
        onCheckedChange={(details) =>
          setTheme(details.checked ? "dark" : "light")
        }
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
