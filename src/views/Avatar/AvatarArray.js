import UserIconComplete from "../UserInformation/UserIconComplete.svg"
import maleCoder from "./coder-man-with-circle.svg";
import femaleCoder from "./coder-woman-with-circle.svg";
import maleScientist from "./scientist-man-with-circle.svg";
import femaleScientist from "./scientist-woman-with-circle.svg";
import femaleYogi from "./yogi-woman-with-circle.svg";
import maleYogi from "./yogi-man-with-circle.svg";
import maleCoderColor from "./coder-man-color-with-circle.svg";
import femaleCoderColor from "./coder-woman-color-with-circle.svg";
import maleScientistColor from "./scientist-man-color-with-circle.svg";
import femaleScientistColor from "./scientist-woman-color-with-circle.svg";
import maleYogiColor from "./yogi-man-color-with-circle.svg";
import femaleYogiColor from "./yogi-woman-color-with-circle.svg";
import {withRouter} from 'react-router-dom';

const avatarArray = [UserIconComplete, femaleCoder, femaleCoderColor, maleCoder, maleCoderColor, femaleScientist, femaleScientistColor, maleScientist, maleScientistColor, femaleYogi, femaleYogiColor, maleYogi, maleYogiColor]
export default withRouter(avatarArray)