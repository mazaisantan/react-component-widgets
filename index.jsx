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



// var root = document.getElementById("example");

// ReactDOM.render(
//     <Star rate={4.7}/>,
//     root.appendChild(document.createElement("div"))
// );

/* ReactDOM.render(
    <ProfileCard/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <Card/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <Dropdown/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <Taps/>,
    root.appendChild(document.createElement("div"))
);
 */
/*  ReactDOM.render(
    <ImageText/>,
    root.appendChild(document.createElement("div"))
);  */

/* ReactDOM.render(
    <Category/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <MenuContext style={{position:relative}}/>,
    root.appendChild(document.createElement("div"))
);  */

/* ReactDOM.render(
    <ModalDialog/>,
    root.appendChild(document.createElement("div"))
);
 */

/* ReactDOM.render(
    <NavBar/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <React_Swipe>
        <div title="1">11xx1</div>
        <div title="2">22222</div>
        <div title="3">333333</div>
    </React_Swipe>, 
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <MenuAutocomplete/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <SignUp/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <Login/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <SlideShow>
        <img src={require("./img_nature_wide.jpg")} alt='Caption Text' style={{width:'100%'}}/>
        <img src={require("./img_fjords_wide.jpg")} alt='Caption Two' style={{width:'100%'}}/>
        <img src={require("./img_mountains_wide.jpg")} alt='Caption Three' style={{width:'100%'}}/>
    </SlideShow>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <SimpleChart/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <SimpleDialog/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <FadeInOverlay/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <SimpleSpin/>,
    root.appendChild(document.createElement("div"))
); */

/* ReactDOM.render(
    <NavNumber/>,
    root.appendChild(document.createElement("div"))
);
 */
/* ReactDOM.render(
    <SimpleItem/>,
    root.appendChild(document.createElement("div"))
);

ReactDOM.render(
    <SimpleList/>,
    root.appendChild(document.createElement("div"))
);

ReactDOM.render(
    <SimplePosition/>,
    root.appendChild(document.createElement("div"))
);

ReactDOM.render(
    <WaitCircle/>,
    root.appendChild(document.createElement("div"))
);

ReactDOM.render(
    <Chart/>,
    root.appendChild(document.createElement("div"))
);

ReactDOM.render(
    <Bounce/>,
    root.appendChild(document.createElement("div"))
);


 ReactDOM.render(
    <ScrollToTop/>,
    root.appendChild(document.createElement("div"))
); 

ReactDOM.render(
    <ScrollLoading/>,
    root.appendChild(document.createElement("div"))
); 

ReactDOM.render(
    <Border1px/>,
    root.appendChild(document.createElement("div"))
);  */

var allComponent = {  
    // React_Swipe,
    
    Border1px,
    Bounce,
    Card,
    Category,
    SimpleDendrogramChart,
    SimpleCurveChart,
    SimpleAreaChart,
    Dropdown,
    OrientationExamples,
    FadeInOverlay,
    ImageText,
    Login,
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
    SimpleChart,
    SimpleDialog,
    SimpleSpin,
    SignUp,
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



