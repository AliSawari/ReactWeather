const React = require('react');
const $ = require('./../$');
require('./../gsap/TweenMax.min.js');
var x = 0;
var SlideMenu = React.createClass({
  handle:function(){
    var menu = $('section');
    var items = menu.find('ul').find('li');
    x++;
    TweenLite.to(menu,.3,{
      width:'40%',
      opacity:1
    });
    TweenLite.to(items,.5,{
      display:'block',
      opacity:'1'
    });
    if (x==2) {
      TweenLite.to(menu,.3,{
        width:'0%',
        opacity:0
      });
      TweenLite.to(items,.5,{
        display:'none',
        opacity:'0'
      });
      x = 0;
    }
  },
  componentDidMount:()=>{
    var btn = $('#btn');
    TweenLite.from(btn,1,{
      bottom:'-100%',
    });
    TweenLite.to(btn,1,{
      bottom:'10px'
    });
  },
  render:function(){
    return (
      <div className="slide">
        <section>
          <ul>
            <a onClick={this.handle} href="/#/"><li>Weather</li></a>
            <a onClick={this.handle} href="/#/examples"><li>Examples</li></a>
            <a onClick={this.handle} href="/#/about"><li>About</li></a>
          </ul>
        </section>
      <button id="btn" onClick={this.handle}>
        <img src="menu-circular-button.svg" />
      </button>
      </div>
    );
  }
});

module.exports = SlideMenu;
