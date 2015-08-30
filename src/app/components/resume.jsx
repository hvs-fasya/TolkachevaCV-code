let React = require('react');
let Router = require('react-router');
let mui = require('material-ui');
let RouteHandler = Router.RouteHandler;
let RaisedButton = mui.RaisedButton;
let FlatButton = mui.FlatButton;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let AppBar = mui.AppBar;
let { LeftNav, MenuItem } = require('material-ui');
	

let Resume = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  
  getInitialState: function() {
    return {lang: 'en'};
  },


  componentWillMount() {
    ThemeManager.setPalette({
      primary1Color: Colors.red300,
      primary2Color: Colors.red900,
      primary3Color: Colors.red900,
      accent1Color: Colors.red900,
      accent2Color: Colors.red900,
      accent3Color: Colors.red900
    });
  },

  render() {
	
    let containerStyle = {
      paddingTop: '10px'
    };
    
	let menuItems = this._getMenuItems();
	let cv = this.state.lang == "en" ? "Tolkacheva Elena (CV)" : "Толкачева Елена (резюме)";

    return (
      
      <div style={containerStyle}>
		<AppBar 
			title={cv}
			zDepth={4} 
			onLeftIconButtonTouchTap = {this._showLeftNavClick} 
			iconElementRight = {<FlatButton label="eng/рус" onTouchTap={this._changeLanguage}/>}
			style={{position: 'fixed', top: 0}}/>
		<LeftNav 
			ref = "leftNav" 
			docked = {false} 
			menuItems = {menuItems} 
			selectedIndex = {this._getSelectedIndex()}
			onChange = {this._onLeftNavChange} />
	    <RouteHandler lang={this.state.lang}/>
      </div>
    );
  },

  _getMenuItems() {
	switch(this.state.lang){
		case "en": return ([
				{ route: 'shortbio', text: 'Short Bio' },
				{ route: 'diplomas', text: 'Diplomas & Certificates' },
				{ route: 'fullbio', text: 'Jobs' },
				{ type: MenuItem.Types.SUBHEADER, text: 'Links' },
					{ type: MenuItem.Types.LINK, payload: 'http://li-ning.msk.ru', text: 'Web-site "Li-Ning"' },
					{ type: MenuItem.Types.LINK, payload: 'https://github.com/hvs-fasya/lining.git', text: '"Li-Ning" (code)' },
					{ type: MenuItem.Types.LINK, payload: 'https://github.com/hvs-fasya/TolkachevaCV-code', text: 'This CV code' }
				]);
		case "ru": return ([
				{ route: 'shortbio', text: 'Основные сведения' },
				{ route: 'diplomas', text: 'Дипломы и сертификаты' },
				{ route: 'fullbio', text: 'Опыт работы' },
				{ type: MenuItem.Types.SUBHEADER, text: 'Ссылки' },
					{ type: MenuItem.Types.LINK, payload: 'http://li-ning.msk.ru', text: 'Сайт "Li-Ning"' },
					{ type: MenuItem.Types.LINK, payload: 'https://github.com/hvs-fasya/lining.git', text: 'Код сайта "Li-Ning"' },
					{ type: MenuItem.Types.LINK, payload: 'https://github.com/hvs-fasya/TolkachevaCV-code', text: 'Код этого сайта' }
				]);
		}
	},
	
  _showLeftNavClick() {
	this.refs.leftNav.toggle();
	},
	
  _changeLanguage() {
	let lang = this.state.lang == 'en' ? 'ru' : 'en';
	this.setState({lang:lang});
  },
  
  _getSelectedIndex() {
	let currentItem;
	let menuItems = this._getMenuItems();
	for (let i = menuItems.length - 1; i >= 0; i--) {
		currentItem = menuItems[i];
		if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
		}
	},
	
  _onLeftNavChange(e, key, payload) {
		this.context.router.transitionTo(payload.route);
	}

});

Resume.contextTypes = {
	router: React.PropTypes.func
};
Resume.childContextTypes = {
	muiTheme: React.PropTypes.object
};


module.exports = Resume;
