import UserIconComplete from "../views/UserIconComplete.svg"
import maleCoder from "../views/Avatar/coder-man-with-circle.svg";
import femaleCoder from "../views/Avatar/coder-woman-with-circle.svg";
import maleScientist from "../views/Avatar/scientist-man-with-circle.svg";
import femaleScientist from "../views/Avatar/scientist-woman-with-circle.svg";
import femaleYogi from "../views/Avatar/yogi-woman-with-circle.svg";
import maleYogi from "../views/Avatar/yogi-man-with-circle.svg";
import maleCoderColor from "../views/Avatar/coder-man-color-with-circle.svg";
import femaleCoderColor from "../views/Avatar/coder-woman-color-with-circle.svg";
import maleScientistColor from "../views/Avatar/scientist-man-color-with-circle.svg";
import femaleScientistColor from "../views/Avatar/scientist-woman-color-with-circle.svg";
import maleYogiColor from "../views/Avatar/yogi-man-color-with-circle.svg";
import femaleYogiColor from "../views/Avatar/yogi-woman-color-with-circle.svg";
import { withRouter } from 'react-router-dom';

const avatarArray = [UserIconComplete, femaleCoder, femaleCoderColor, maleCoder, maleCoderColor, femaleScientist,femaleScientistColor, maleScientist, maleScientistColor, femaleYogi, femaleYogiColor, maleYogi, maleYogiColor]
export default withRouter(avatarArray)