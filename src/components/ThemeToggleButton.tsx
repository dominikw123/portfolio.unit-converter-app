import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="secondary" size="icon-lg" className="ml-2" onClick={toggleTheme}>
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
    </Button>
  );
}