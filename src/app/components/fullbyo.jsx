let React = require('react');
let mui = require('material-ui');
let FlatButton = mui.FlatButton;
let { Table, TextField, Toggle } = require('material-ui');
let Paper = mui.Paper;
let Dialog = mui.Dialog;


let FullByo = React.createClass({


  render() {
	let self = this;
	let fio = this.props.lang == 'en' ? "Tolkacheva Elena" : "Толкачева Елена Олеговна";
	let edu = this.props.lang == 'en' ? "Education:" : "Образование:";
	let tech = this.props.lang == 'en' ? "Technologies:" : "Технологии:";
	let photoLabel = this.props.lang == 'en' ? "Show Photo" : "Фото";
	let pageTitle = this.props.lang == 'en' ? "Jobs" : "Опыт работы";
	
	let titlesStyle = {
		fontWeight: 'bold',
		width: 'auto',
		fontSize: 'small',
		height: 'auto',
		verticalAlign: 'top',
		paddingTop: '15px',
		whiteSpace: 'normal'
	};
	let textsStyle = {
		width: 'auto',
		fontSize: 'small',
		height: 'auto',
		verticalAlign: 'top',
		paddingTop: '15px',
		whiteSpace: 'normal'
	};
	
	function mepiHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>MEPHI</b> - Moscow Engeneering Phisics Institute (1989-1995)<br /><i>(speciality - Solid State Physics)</i></br>'};
		case "ru": return {__html: '<b>МИФИ</b> - Московский Инженерно-Физический Институт (1989-1995)<br /><i>(специальность - Физика Твердого Тела)</i></br>'}; 
		}};
	function msalHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>MSAL</b> - Moscow State Academy of Law (2000-2004)<br /><i>(speciality - Civil Law)</i>'}; 
		case "ru": return {__html: '<b>МГЮА</b> - Московская Государственная Юридическая Академия(2000-2004)<br /><i>(специальность - Гражданское право)</i>'}; 
		}};
	let mepi = <div><span dangerouslySetInnerHTML={mepiHtml()} /><span dangerouslySetInnerHTML={msalHtml()} /></div>;
	
	let rowData = this.props.lang == 'en' ? [
		{title: {content: '', style: titlesStyle }, texts: {content: '', style: textsStyle}},
		{selected: false, title: {content: edu, style: titlesStyle }, texts: {content: mepi, style: textsStyle}},
		{title: {content: tech, style: titlesStyle }, texts: {content: 'HTML, CSS, Javascript, jQuery, Bootstrap 3, MySql 5, React JS, Python, Django, PHP, Laravel 4, Git', style: textsStyle}}
		] : [
		{title: {content: '', style: titlesStyle }, texts: {content: '', style: textsStyle}},
		{selected: false, title: {content: edu, style: titlesStyle }, texts: {content: mepi, style: textsStyle}},
		{title: {content: tech, style: titlesStyle }, texts: {content: 'HTML, CSS, Javascript, jQuery, Bootstrap 3, MySql 5, React JS, Python, Django, PHP, Laravel 4, Git', style: textsStyle}}
		];
	
	function dinaHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>ZAO "Dina International"</br>manager assistent</b></br>disposal medical products</br>medical laboratory equipment and supplies'}; 
		case "ru": return {__html: '<b>ЗАО "Дина Интернешнл"</br>помощник менеджера</b></br>изделия медицинского назначения</br>медицинское лабораторное оборудование и расходные материалы'}; 
		}};
	let dina = <span dangerouslySetInnerHTML={dinaHtml()} />;
	function dlnHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "LTD Forest" / ZAO "DLN Farmesi"</br>manager/senior manager</b></br>pharmacy chain'}; 
		case "ru": return {__html: '<b>ООО "ЛТД Форест" / ЗАО "ДЛН Фармэси"</br>менеджер/старший менеджер</b></br>аптечная сеть'}; 
		}};
	let dln = <span dangerouslySetInnerHTML={dlnHtml()} />;
	function stHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "Vektor" / ZAO "ST Group" / АО "SP "Perestroyka"</br>legal department chief assistent</b></br>real estate development'}; 
		case "ru": return {__html: '<b>ООО "Вектор" / ЗАО "СТ Групп" / АО "СП "Перестройка"</br>помощник начальника отдела организационно-правового обеспечения</b></br>строительный девелопмент'}; 
		}};
	let st = <span dangerouslySetInnerHTML={stHtml()} />;
	function regHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "Registrum"</br>leading specialist/deputy CEO</b></br>property rights state registration support for residential construction'}; 
		case "ru": return {__html: '<b>ООО "Региструм"</br>ведущий специалист/зам генерального директора</b></br>госрегистрация прав собственности в новостройках'}; 
		}};
	let reg = <span dangerouslySetInnerHTML={regHtml()} />;
	function simbaHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "Sim-ba"</br>chief accountant</b></br>food retail'}; 
		case "ru": return {__html: '<b>ООО "Сим-Ба"</br>главный бухгалтер</b></br>продуктовая розница'}; 
		}};
	let simba = <span dangerouslySetInnerHTML={simbaHtml()} />;
	function amrHtml() { switch(self.props.lang){
		case "en": return {__html: '<b>OOO "AMR"</br>CEO</b></br>furniture components veneering'}; 
		case "ru": return {__html: '<b>ООО "АМР"</br>генеральный директор</b></br>фанерование мебельных деталей'}; 
		}};
	let amr = <span dangerouslySetInnerHTML={amrHtml()} />;
	
	let rowDataSecond = [
		{title: {content: '', style: titlesStyle }, texts: {content: '', style: textsStyle}},
		{title: {content: edu, style: titlesStyle }, texts: {content: mepi, style: textsStyle}},
		{title: {content: '1996-1997', style: titlesStyle }, texts: {content: dina, style: textsStyle}},
		{title: {content: '1997-1998', style: titlesStyle }, texts: {content: dln, style: textsStyle}},
		{title: {content: '1998-2000', style: titlesStyle }, texts: {content: st, style: textsStyle}},
		{title: {content: '2000-2002', style: titlesStyle }, texts: {content: reg, style: textsStyle}},
		{title: {content: '2002-2005', style: titlesStyle }, texts: {content: simba, style: textsStyle}},
		{title: {content: '2005-2015', style: titlesStyle }, texts: {content: amr, style: textsStyle}}
		];
		
	this.state = {
	  showRowHover: true,
	  selectable: true,
	  multiSelectable: true,
	  canSelectAll: false,
	  deselectOnClickaway: false,
	  height: 'auto',
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
    
    let imgStyle = {
		width: '90%',
		height: '80%'
    };
    let imgDialogStyle = {
		textAlign: 'right',
		paddingRight: '10%',
		marginTop: '20px'
    };
    let buttonStyle = {
		textAlign: 'center'
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
			
			<div className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-9 col-lg-offset-1 col-lg-9">
				<div className="box">
					<h2>{pageTitle}</h2>
					<div style={imgDialogStyle}><FlatButton style={buttonStyle} linkButton={true} onTouchTap={this._handleTouchTap} secondary={true}><small>{photoLabel}</small></FlatButton></div>
				</div>
			</div>
			<div className="col-xs-11 col-sm-offset-1  col-sm-10 col-md-offset-1 col-md-9 col-lg-offset-1 col-lg-9">
				
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
    );
  },
  
  _handleTouchTap() {
    this.refs.photoDialog.show();
  },
  _handleCustomDialogCancel() {
	this.refs.photoDialog.dismiss();
  }

});

module.exports = FullByo;

