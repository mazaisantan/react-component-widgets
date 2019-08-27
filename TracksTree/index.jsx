import React from 'react';
import './index.scss';

class TracksTree extends React.Component {
    constructor(props){
        super(props);  
        this.state = {
            curPage: 0
        }   
    }

    setCurPage(i){
        this.setState({curPage: i})
    }

    selectedIfEqual(i,j){
        if(i == j){
            return 'selected'
        }else{
            return 'unselected'
        }
    }
    render() {
        let {selectedIfEqual} = this
        let {curPage} = this.state
        return (
            <div className="tracks-tree-container">
                <div className="category">
                    <div className={"articles-category "+selectedIfEqual(curPage,0)} onClick={this.setCurPage.bind(this,0)}>
                        <span className="title">Articles</span>
                        <span className="result-count">100</span>
                    </div>
                    <div className={"videos-category "+selectedIfEqual(curPage,1)} onClick={this.setCurPage.bind(this,1)}>
                        <span className="title">Vedios</span>
                        <span className="result-count">100</span>
                    </div>
                    <div className={"forum-posts-category "+selectedIfEqual(curPage,2)} onClick={this.setCurPage.bind(this,2)}>
                        <span className="title">Forum Posts</span>
                        <span className="result-count">100</span>
                    </div>
                </div>
                <div className={"articles-content "+selectedIfEqual(curPage,0)}>
                     <div className="article-item">
                         <div className="info">
                             <div className="header">
                                 <span className="tag">TCO</span>
                                 <span className="tag">Topcoder Family</span>
                             </div>
                             <div className="body">
                                 <span className="title">A CAREER AT TOPCODER:A SENIOR DESIGNER'S REFLECTION</span>
                                 <span className="content">in the beginning,the reason I joined Topcoder design was money because challengs offer good prize money</span>
                             </div>
                             <div className="footer">
                                 <div className="mark">
                                     <img src={require('./images/TCEDU-01s1-D_03.jpg')} alt="Avatar"/>
                                     <span>35K</span>
                                 </div>
                                 <div className="comment">
                                     <img src={require('./images/TCEDU-01s1-D_06.jpg')} alt="Avatar"/>
                                     <span>150</span>
                                 </div>
                                 <div className="date">
                                     <img src={require('./images/TCEDU-01s1-D_09.jpg')} alt="Avatar"/>
                                     <span>150</span>
                                 </div>
                             </div>
                         </div>
                         <img src={require('./img.png')} alt="Avatar"/>
                     </div>
                     <svg height="0" width="0">
                         <defs>
                             <clipPath id="article-item-clip-path">
                                 <path d='M 8.6 0 C 55 90,-15 108, 8.6 206 L236,206 L236,0'></path>
                             </clipPath>
                         </defs>
                     </svg>
                 </div>
                 <div className={"videos-content "+selectedIfEqual(curPage,1)}>
                     <div className="video-item">
                         <img src={require('./img.png')} alt="Avatar"/>
                         <div className="info">
                             <div className="title">
                                 <span>HACK THE SKY</span>
                             </div>
                             <div className="footer">
                                 <div className="mark">
                                     <img src={require('./images/TCEDU-01s1-D_03.jpg')} alt="Avatar"/>
                                     <span>35K</span>
                                 </div>
                                 <div className="comment">
                                     <img src={require('./images/TCEDU-01s1-D_06.jpg')} alt="Avatar"/>
                                     <span>150</span>
                                 </div>
                             </div>
                         </div>
                     </div> 
                     <div className="video-item">
                         <img src={require('./img.png')} alt="Avatar"/>
                         <div className="info">
                             <div className="title">
                                 <span>HACK THE SKY</span>
                             </div>
                             <div className="footer">
                                 <div className="mark">
                                     <img src={require('./images/TCEDU-01s1-D_03.jpg')} alt="Avatar"/>
                                     <span>35K</span>
                                 </div>
                                 <div className="comment">
                                     <img src={require('./images/TCEDU-01s1-D_06.jpg')} alt="Avatar"/>
                                     <span>150</span>
                                 </div>
                             </div>
                         </div>
                     </div> 
                 </div>
                 <div className={"forum-posts-content "+selectedIfEqual(curPage,2)}>
                    <div className="forum-post-item">
                        <div className="title">
                            <span>A CAREER AT TOPCODER:A SENIOR DESIGNER'S REFLECTION</span>
                        </div>
                        <div className="footer">
                            <div className="group1">
                                <div className="author">
                                    <img src={require('./images/TCEDU-012-D_10-03.jpg')} alt="Avatar"/>
                                    <span>150</span>
                                </div>
                                <div className="date">
                                    <img src={require('./images/TCEDU-01s1-D_09.jpg')} alt="Avatar"/>
                                    <span>150</span>
                                </div>
                            </div>
                            <div className="group2">
                                <div className="mark">
                                    <img src={require('./images/TCEDU-01s1-D_03.jpg')} alt="Avatar"/>
                                    <span>35K</span>
                                </div>
                                <div className="comment">
                                    <img src={require('./images/TCEDU-01s1-D_06.jpg')} alt="Avatar"/>
                                    <span>150</span>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TracksTree