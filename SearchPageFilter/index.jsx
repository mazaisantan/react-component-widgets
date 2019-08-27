import React from 'react';
import './index.scss';
import 'react-dates/initialize';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import omit from 'lodash/omit';
import _ from 'lodash';
import moment from 'moment';
const newBasicInfo = {
    handle: '',
    firstName: '',
    lastName: '',
    gender: '',
    ethnicBackground: null,
    shortBio: '',
    tshirtSize: '',
    country: '',
    primaryInterestInTopcoder: '',
    currentLocation: '',
    birthDate: null,
    userId: '',
    description: '',
    otherLangName: null,
    status: '',
    email: '',
    addresses: [{
      streetAddr1: '',
      streetAddr2: '',
      city: '',
      stateCode: '',
      zip: '',
      type: 'Home',
    }],
    homeCountryCode: null,
    competitionCountryCode: null,
    tracks: [],
  }
class SearchPageFilter extends React.Component {
    constructor(props){
        super(props);    
        this.onUpdateDate = this.onUpdateDate.bind(this);  
        this.state = {
            authorDropdown: 'disable',
            tags: ['branding'],
            authorValue: '',
            newBasicInfo: {
                handle: '',
                firstName: '',
                lastName: '',
                gender: '',
                ethnicBackground: null,
                shortBio: '',
                tshirtSize: '',
                country: '',
                primaryInterestInTopcoder: '',
                currentLocation: '',
                birthDate: null,
                userId: '',
                description: '',
                otherLangName: null,
                status: '',
                email: '',
                addresses: [{
                  streetAddr1: '',
                  streetAddr2: '',
                  city: '',
                  stateCode: '',
                  zip: '',
                  type: 'Home',
                }],
                homeCountryCode: null,
                competitionCountryCode: null,
                tracks: [],
            }
        }
    }

    toggleAuthorDropDown(){
        const {authorDropdown} = this.state
        if(authorDropdown == 'disable'){
            this.setState({authorDropdown: 'able'})
        }else{
            this.setState({authorDropdown: 'disable'})
        }
    }
    setAuthorDropDown(str){
        this.setState({authorDropdown: str})
    }
    onUpdateDate(date) {
        if (date) {
          const { newBasicInfo: oldBasicInfo } = this.state;
          const newBasicInfo = { ...oldBasicInfo };
          newBasicInfo.birthDate = date;
          this.setState({ newBasicInfo, inputChanged: true });
        }
      }

    delTag(i){
        this.state.tags.splice(i,1)
        this.setState({})
    }

    inputChangeHandle(e) {
        this.setState({
            authorValue: e.target.value
        })
    }

    clientClickButton(e) {
        switch (e.key) {
            case 'Enter': {
                if(e.target.value == '')return
                this.state.tags.push(e.target.value)
                this.setState({authorValue: ''})
            }
            case 'Escape': {
              console.log(e)
            }
            default: console.log('undefined keyDown');
        }
    }
    render() {
        console.log(this.state)
        let {authorDropdown,tags,newBasicInfo} = this.state
        tags = tags == undefined ? [] : tags
        return (
            <div className="search-filter-container">
                <div className="tags-group">
                    <div className="wrapper">
                        <label>Tags</label>
                    </div> 
                    {
                        tags.map((item,i)=>{
                            if(item == null)return null
                            return(
                            <div className="tag-item">
                                <span className="title">{item}</span>
                                <span className="close" onClick={this.delTag.bind(this,i)}>X</span>
                            </div>
                            )
                        })
                    }
                    <input 
                        type="text"
                        onChange={this.inputChangeHandle.bind(this)} 
                        value={this.state.authorValue}
                        onKeyDown={this.clientClickButton.bind(this)}
                    />
                </div>
                <div className="wrapper">
                    <div className="author-group">
                        <div className="wrapper">
                            <label>Author</label>
                        </div>
                        <span>All authors</span>
                        <img src={require('./images/TCEDU-01s1-D_05.jpg')} alt="Avatar" onClick={this.toggleAuthorDropDown.bind(this)} onBlur={this.setAuthorDropDown.bind(this,'disable')} tabindex="1"/>
                        <div className={"dropdown-content "+authorDropdown}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className="date-group">
                        <div className="wrapper">
                            <label>Date</label>
                        </div>
                        <img src={require('./images/TCEDU-01s1-D_03.jpg')}/>
                        <div className="date-picker">
                            <DatePicker
                                readOnly
                                numberOfMonths={1}
                                isOutsideRange={moment()}
                                date={newBasicInfo.birthDate}
                                id="date-range-picker1"
                                onDateChange={this.onUpdateDate}
                            />
                        </div>
                    </div>
                </div>
                
                <br/>
                <div className="button-group">
                    <button type="button" className="reset">RESET</button>
                    <button type="button" className="apply-filter">APPLY FILTER</button>
                </div>
            </div>
        )
    }
}


const defaultProps = {
    autoFocus: false,
  };
  
class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        focused: props.autoFocus,
        };
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onFocusChange({ focused }) {
        this.setState({ focused });
    }

    createOptions(){
        const options = [];
        for (let i = -100; i <= 0; i += 1) {
        options.push(<option value={moment().year() + i}>{moment().year() + i}</option>);
        }
        return options;
    };

    render() {
        const { focused } = this.state;
        const {
        id, date, onDateChange, isOutsideRange,
        } = this.props;

        const props = omit(this.props, [
        'id',
        'autoFocus',
        'initialDate',
        ]);

        return (
        <SingleDatePicker
            {...props}
            hideKeyboardShortcutsPanel
            id={id}
            isOutsideRange={!_.isEmpty(isOutsideRange)
            ? day => !isInclusivelyBeforeDay(day, isOutsideRange)
            : () => false}
            date={_.isEmpty(date) ? undefined : moment.utc(date)}
            focused={focused}
            onDateChange={onDateChange}
            onFocusChange={this.onFocusChange}
            renderMonthElement={({ month, onMonthSelect, onYearSelect }) => (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                <select
                    className="CalendarDay"
                    value={month.month()}
                    onChange={(e) => {
                    onMonthSelect(month, e.target.value);
                    }}
                >
                    {moment.months().map((label, value) => (
                    <option value={value}>{label}</option>
                    ))}
                </select>
                </div>
                <div>
                <select
                    className="CalendarDay"
                    value={month.year()}
                    onChange={(e) => {
                    onYearSelect(month, e.target.value);
                    }}
                >
                    {this.createOptions()}
                </select>
                </div>
            </div>
            )}
        />
        );
    }
}

DatePicker.defaultProps = defaultProps;

export default SearchPageFilter