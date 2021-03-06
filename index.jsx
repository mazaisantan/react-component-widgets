import './style/react-md.css';
import './style/paper.css'
import './icons/react-md-font.css';
import './icons/materialIcons/style.css';
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
import React_Swipe from './swipe/swipe.jsx';
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
import TodosWithRedux from './todosWithRedux/index.jsx'
import OrientationExamples from './datePicker/datePicker.jsx'
import SideBarWrapper from './sideBar/sideBar.jsx'
import LinePath from './chart/linePath/linePath.jsx'
import curveLinePath from './chart/curveLinePath/curveLinePath.jsx'
import SimpleBarChart from './chart/simpleBarChart.jsx'
import InputField from './inputField/inputField.jsx'
import HoverNav from './hoverNav/hoverNav.jsx'
import RippleButton from './rippleButton/rippleButton.jsx'
import Colors from './colors/colors.jsx'
import ColorGradient from './colorGradient/colorGradient.jsx'
import Layouts from './layouts/layouts.jsx'
import IconShowCase from './iconShowCase/iconShowCase.jsx'
import HoverTransition from './hoverTransition/hoverTransition.jsx'
import ToDos from './todos/todos.jsx'
import ShoppingCart from './shoppingCart/index.js'
import TreeView from './treeView/index.js'
import XiaoMiMobile from './xiaoMiMobile/xiaoMiMobile.jsx'
import ShoppingMall from './shoppingMall/app/index.jsx'
import HeightTransition from './heightTransition/heightTransition.jsx'
import BOM_DOM from './BOM_DOM/BOM_DOM.jsx'
import LazyLoadWrapper from './lazyLoad/lazyLoadWrapper.jsx'
import BidirectionalLine from './bidirectionalLine/bidirectionalLine.jsx'
import SvgShapes from './chart/svgShapes.jsx'
import cubicBezier from './cubicBezier/cubicBezier.jsx'
import SearchBar from './SearchBar/index.jsx'
import SearchPageFilter from './SearchPageFilter/index.jsx'
import TracksTree from './TracksTree/index.jsx'

var React_Swipe_Wrapper = ()=>(
    <React_Swipe>
      <div title="1">11xx1(请在手机页面下运行)</div>
      <div title="2">22222(请在手机页面下运行)</div>
      <div title="3">333333(请在手机页面下运行)</div>
      <div title="4">444444(请在手机页面下运行)</div>
    </React_Swipe>
  )


var allComponent = {  
    BidirectionalLine,
    Border1px,
    Bounce,
    BOM_DOM,
    Card,
    Category,
    ColorGradient,
    Colors,
    cubicBezier,
    curveLinePath,
    Dropdown,
    OrientationExamples,
    FadeInOverlay,
    HeightTransition,
    HoverNav,
    HoverTransition,
    ImageText,
    InputField,
    IconShowCase,
    LazyLoadWrapper,
    Layouts,
    Login,
    LinePath,
    MenuAutocomplete,
    MenuContext,
    ModalDialog,
    NavBar,
    NavNumber,
    ProfileCard,
    React_Swipe_Wrapper,
    RippleButton,
    SearchBar,
    SearchPageFilter,
    ScrollToTop,
    ScrollLoading,
    ShoppingCart,
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
    SvgShapes,
    Taps,
    ToDos,
    TodosWithRedux,
    TracksTree,
    TreeView,
    WaitCircle,
    XiaoMiMobile,
    ShoppingMall
}


ReactDOM.render(
    <Billboard components={allComponent}/>,
    document.getElementById("example")
)


