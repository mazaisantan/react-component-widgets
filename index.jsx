// import './react-md.indigo-pink.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Star from './star/star.jsx'
import ProfileCard from './profileCard/profileCard.jsx'
import Card from './card/card.jsx'
import Dropdown from './dropdown/dropdown.jsx'
import Taps from './taps/taps.jsx'
import Category from './category/category.jsx'
import MenuContext from './menuContext/menuContext.jsx'
import ModalDialog from './modalDialog/modalDialog.jsx'
import NavBar from './navBar/navBar.jsx'
import ImageText from './imageText/imageText.jsx'
import React_Swipe_Wrapper from './swipe/swipe.jsx';
import MenuAutocomplete from './autoComplete/autoComplete.jsx'
import SignUp from './signUp/signUp.jsx'
import Login from './login/login.jsx';
import SlideShowWrapper from './slideShow/slideShow.jsx';
import SimpleChart from './simpleChart/simpleChart.jsx'
import SimpleDialog from './SimpleDialog/SimpleDialog.jsx'
import FadeInOverlay from './fadeInOverlay/fadeInOverlay.jsx'
import SimpleSpin from './simpleSpin/simpleSpin.jsx'
import NavNumber from './navNumber/navNumber.jsx'
import SimpleItem from './simpleItem/simpleItem.jsx'
import SimpleList from './simpleList/simpleList.jsx'
import SimplePosition from './simplePosition/simplePosition.jsx'
import WaitCircle from './waitCircle/waitCircle.jsx'
import SimpleDendrogramChart from './chart/simpleDendrogramChart.jsx'
import SimpleAreaChart from './chart/simpleAreaChart.jsx'
import SimpleCurveChart from './chart/simpleCurveChart.jsx'
import Bounce from './bounce/bounce.jsx'
import ScrollToTop from './scrollToTop/scrollToTop.jsx'
import ScrollLoading from './scrollLoading/scrollLoading.jsx'
import Border1px from './border1px/border1px.jsx'
import Billboard from './billboard/billboard.jsx'
import Todos from './todos/index.jsx'
import OrientationExamples from './datePicker/datePicker.jsx'
import SideBarWrapper from './sideBar/sideBar.jsx'
import LinePath from './chart/linePath/linePath.jsx'
import curveLinePath from './chart/curveLinePath/curveLinePath.jsx'
import SimpleBarChart from './chart/simpleBarChart.jsx'
import InputField from './inputField/inputField.jsx'
import HoverNav from './hoverNav/hoverNav.jsx'


var allComponent = {  
    // React_Swipe,
    Border1px,
    Bounce,
    Card,
    Category,
    curveLinePath,
    HoverNav,
    Dropdown,
    OrientationExamples,
    FadeInOverlay,
    ImageText,
    InputField,
    Login,
    LinePath,
    MenuAutocomplete,
    MenuContext,
    ModalDialog,
    NavBar,
    NavNumber,
    ProfileCard,
    React_Swipe_Wrapper,
    ScrollToTop,
    SimpleItem,
    SimpleList,
    SimplePosition,
    SimpleBarChart,
    SimpleChart,
    SimpleDialog,
    SimpleSpin,
    SimpleDendrogramChart,
    SimpleCurveChart,
    SimpleAreaChart,
    SignUp,
    SideBarWrapper,
    SlideShowWrapper,
    Star,
    ScrollLoading,
    Taps,
    Todos,
    WaitCircle,
}


ReactDOM.render(
    <Billboard components={allComponent}/>,
    document.getElementById("example")
);



