let React = require('react');
let mui = require('material-ui');
let FlatButton = mui.FlatButton;
let { Table, TextField, Toggle } = require('material-ui');
let Paper = mui.Paper;
let Dialog = mui.Dialog;


let ShortByo = React.createClass({


  render() {
	let self = this;
	let fio = this.props.lang == 'en' ? "Tolkacheva Elena" : "Толкачева Елена Олеговна";
	let edu = this.props.lang == 'en' ? "Education:" : "Образование:";
	let tech = this.props.lang == 'en' ? "Technologies:" : "Технологии:";
	let photoLabel = this.props.lang == 'en' ? "Show Photo" : "Фото";
	let pageTitle = this.props.lang == 'en' ? "Short Bio" : "Основные сведения";
	
	let titlesStyle = {
		fontWeight: 'bold',
		width: 'auto',
		fontSize: 'medium',
		height: 'auto',
		verticalAlign: 'top',
		paddingTop: '15px',
		width: '30%',
		whiteSpace: 'normal'
	};
	let textsStyle = {
		width: 'auto',
		fontSize: 'medium',
		height: 'auto',
		verticalAlign: 'top',
		paddingTop: '15px',
		whiteSpace: 'normal'
	};
  
	let rowData = this.props.lang == 'en' ? [
		{title: {content: '', style: titlesStyle }, texts: {content: '', style: textsStyle}},
		{selected: true, title: {content: 'Name:', style: titlesStyle }, texts: {content: fio, style: textsStyle}},
		{title: {content: 'Date of Birth:', style: titlesStyle }, texts: {content: '22 April 1973', style: textsStyle}},
		{title: {content: 'Place of Birth:', style: titlesStyle }, texts: {content: 'Moscow, USSR', style: textsStyle}},
		{title: {content: 'Location:', style: titlesStyle }, texts: {content: 'Moscow, Russian Federation', style: textsStyle}}
		] : [
		{title: {content: '', style: titlesStyle }, texts: {content: '', style: textsStyle}},
		{selected: true, title: {content: 'ФИО:', style: titlesStyle }, texts: {content: fio, style: textsStyle}},
		{title: {content: 'Дата рождения:', style: titlesStyle }, texts: {content: '22 Апреля 1973', style: textsStyle}},
		{title: {content: 'Место рождения:', style: titlesStyle }, texts: {content: 'Москва, СССР', style: textsStyle}},
		{title: {content: 'Местожительства:', style: titlesStyle }, texts: {content: 'Москва, РФ', style: textsStyle}}
		];
		
	function mepiHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>MEPHI</b> - Moscow Engeneering Phisics Institute (1989-1995)<br /><i>(speciality - Solid State Physics)</i>'};
		case "ru": return {__html: '<b>МИФИ</b> - Московский Инженерно-Физический Институт (1989-1995)<br /><i>(специальность - Физика Твердого Тела)</i>'}; 
		}};
	let mepi = <span dangerouslySetInnerHTML={mepiHtml()} />
	function msalHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>MSAL</b> - Moscow State Academy of Law (2000-2004)<br /><i>(speciality - Civil Law)</i>'}; 
		case "ru": return {__html: '<b>МГЮА</b> - Московская Государственная Юридическая Академия(2000-2004)<br /><i>(специальность - Гражданское право)</i>'}; 
		}};
	let msal = <span dangerouslySetInnerHTML={msalHtml()} />
	
	let rowDataSecond = [
		{title: {content: '', style: titlesStyle }, texts: {content: '', style: textsStyle}},
		{selected: true, title: {content: edu, style: titlesStyle }, texts: {content: mepi, style: textsStyle}},
		{selected: true, title: {content: '', style: titlesStyle }, texts: {content: msal, style: textsStyle}},
		{title: {content: tech, style: titlesStyle }, texts: {content: 'HTML, CSS, Javascript, jQuery, Bootstrap 3, MySql 5, React JS, Python, Django, PHP, Laravel 4, Git', style: textsStyle}}
		];
		
	this.state = {
	  showRowHover: true,
	  selectable: true,
	  multiSelectable: true,
	  canSelectAll: false,
	  deselectOnClickaway: false,
	  height: '320px',
	  rowData: rowData,
	  rowDataSecond: rowDataSecond,
	  displayRowCheckbox: false
	};
	
	let colOrder = ['title', 'texts'];
	
    let containerStyle = {
      paddingTop: '30px',
      fontSize: 'medium',
	  marginTop: '50px'
    };
    
    let paperStyle = {
		width: '40%',
		height: 'auto',
		marginLeft: '5%'
    };
    
    let imgDialogStyle = {
		textAlign: 'right'
    };
    
    let imgStyle = {
		width: '90%',
		height: '80%'
    };
    let customActions = [
		<FlatButton
			label="OK"
			primary={true}
			onTouchTap={this._handleCustomDialogCancel}/>
		];
    

    return (
      
      <div style={containerStyle}>
		<Dialog
		  title={fio}
		  ref="photoDialog"
		  actions={customActions}>
			<Paper style={paperStyle} zDepth={3}>
				<img style={imgStyle} src = "../www/img/elena.jpg" />
			</Paper>
		</Dialog>
		
        <div className="row top-xs top-sm top-md top-lg">
			<div style={imgDialogStyle} className="col-xs-11 col-sm-3 col-md-offset-1 col-md-2 col-lg-offset-1 col-lg-2">
				<FlatButton label={photoLabel} primary={true} onTouchTap={this._handleTouchTap}/>
			</div>
			<div className="col-xs-11 col-sm-offset-1 col-sm-7 col-md-offset-2 col-md-6 col-lg-offset-2 col-lg-6">
				<div className="box">
				<h2>{pageTitle}</h2>
				<Table
				columnOrder={colOrder}
				rowData={this.state.rowData}
				height={this.state.height}
				deselectOnClickaway={this.state.deselectOnClickaway}
				showRowHover={this.state.showRowHover}
				selectable={this.state.selectable}
				multiSelectable={this.state.multiSelectable} 
				displayRowCheckbox={this.state.displayRowCheckbox}/>
				
				<Table
				columnOrder={colOrder}
				rowData={this.state.rowDataSecond}
				height={this.state.height}
				deselectOnClickaway={this.state.deselectOnClickaway}
				showRowHover={this.state.showRowHover}
				selectable={this.state.selectable}
				multiSelectable={this.state.multiSelectable} 
				displayRowCheckbox={this.state.displayRowCheckbox}/>
				</div>
			</div>
			
			
        </div>
      </div>
    );
  },
  
  _handleTouchTap() {
    this.refs.photoDialog.show();
  },
  _handleCustomDialogCancel() {
	this.refs.photoDialog.dismiss();
  }

});

module.exports = ShortByo;
