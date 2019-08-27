import React from 'react';
import Fuse from 'fuse.js';
import './index.scss';

var books = [{
  'title': "Old Man's War",
  'author': 'John Scalzi',
  'tags': ['fiction']
}, {
  'title': 'The Lock Artist',
  'author': 'Steve',
  'tags': ['thriller']
}]

var options = {
  keys: ['author', 'tags']
};


class SearchBar extends React.Component {
    constructor(props){
				super(props)
				this.state = {
					dropDownMenuShow: 'disable',
					dropDownFilterShow: 'disable'
				}
				var fuse = new Fuse(books, options)
				let result = fuse.search('tion')   
				console.log(result)
		}
		toggleDropDownMenu(){
			let {dropDownMenuShow} = this.state
			if(dropDownMenuShow == 'able'){
				this.setState({dropDownMenuShow: 'disable'})
			}else{
				this.setState({dropDownMenuShow: 'able'})
			}
		}

		setDropDownMenu(str){
			this.setState({dropDownMenuShow: 'disable'})
		}
		toggleDropDownFilter(){
			let {dropDownFilterShow} = this.state
			if(dropDownFilterShow == 'able'){
				this.setState({dropDownFilterShow: 'disable'})
			}else{
				this.setState({dropDownFilterShow: 'able'})
			}
		}
		setDropDownFilter(str){
			this.setState({dropDownFilterShow: 'disable'})
		}
		
    render() {
			let {dropDownFilterShow,dropDownMenuShow} = this.state
        return (
            <div className="search-bar-container">
                <img className="search-button" src={require('./images/TCEDU-012-D_06.jpg')} alt="Avatar"/>
                <input type="text" placeholder="Search..." onClick={this.toggleDropDownMenu.bind(this)} onBlur={this.setDropDownMenu.bind(this,'disable')}/>
								<div className="filter-group" onClick={this.toggleDropDownFilter.bind(this)} onBlur={this.setDropDownFilter.bind(this,'disable')} tabindex="1">
									<img src={require('./images/TCEDU-012-D_10.jpg')} alt="Avatar"/>
									<span>All</span>
									<img src={require('./images/TCEDU-012-D_09.jpg')} alt="Avatar"/>
								</div>
								<div className={"drop-down-menu "+dropDownMenuShow}>
									<div className="search-result-wrapper">
										<div className="articles-group">
											<span className="article-title">ARTICLES</span>
											<div className="article-item">
												<img src={require('./images/img.png')} alt="Avatar"/>
												<span>A CAREER AT TOPCODER:A SERIOR DESIGNER'S REFLECTION</span>
											</div>
										</div>
										<div className="forum-posts-group">
											<span className="forum-posts-title">FORUM POSTS</span>
											<span className="forum-post-item">Design Tutorials</span>
											<span className="forum-post-item">Question About Sketch</span>
										</div>
										<a>View more results</a>
									</div>
								</div>
								<div className={"drop-down-filter "+dropDownFilterShow}>
									<div className="drop-down-item-wrapper">
										<div className="filter-item">
											<img src={require('./images/TCEDU-012-D_10.jpg')} alt="Avatar"/>
											<span>All</span>
										</div>
										<div className="filter-item">
											<img src={require('./images/TCEDU-012-D_10-03.jpg')} alt="Avatar"/>
											<span>Author</span>
										</div>
										<div className="filter-item">
											<img src={require('./images/TCEDU-012-D_15.jpg')} alt="Avatar"/>
											<span>Tags</span>
										</div>
									</div>
								</div>
            </div>
        )
    }
}

export default SearchBar