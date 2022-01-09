import { useTheme } from "../../ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

function ToggleTheme () {

    const [theme, toggleTheme] = useTheme();

    return (
        <span className={theme ? 'text-dark' : 'text-light'}>
            <FontAwesomeIcon 
                size="lg"
                onClick={toggleTheme}
                icon={theme ? faToggleOn : faToggleOff}/>
        </span>
    )
}

export default ToggleTheme;