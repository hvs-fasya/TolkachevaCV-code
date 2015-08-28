let React = require('react');
let mui = require('material-ui');
let Colors = mui.Styles.Colors;

let {
	Avatar,
	Card,
	CardActions,
	CardExpandable,
	CardHeader,
	CardMedia,
	CardText,
	CardTitle,
	FlatButton,
	Toggle,
	List,
	ListDivider,
	ListItem
	} = mui;


let Diplomas = React.createClass({

  getInitialState() {
	return {cardsMode: true};
  },
  
  _changeMode() {
    var mode = !this.state.cardsMode;
	this.setState({cardsMode: mode});
  },

  render() {
  
	let self = this;
	
    let containerStyle = {
      paddingTop: '30px',
      fontSize: 'medium',
	  marginTop: '50px'
    };

    let cardStyle = this.state.cardsMode == true ? {marginTop: "10px"} : {marginTop: "10px", display: "none"};
    let listStyle = this.state.cardsMode == false ? {marginTop: "10px"} : {marginTop: "10px", display: "none"};
    
    let ds = this.props.lang == "en" ? "Diplomas & Certificates" : "Дипломы и Сертификаты";
    let mepiTitle = this.props.lang == "en" ? "Diplome :: MEPHI - Solid State Phisics" : "Диплом :: МИФИ - Физика твердого тела";
    let mepiSubTitle = this.props.lang == "en" ? "Moscow Engeneering Phisics Institute (1989-1995)" : "Московский Инженерно-физический Институт (1989-1995)";
    let msalTitle = this.props.lang == "en" ? "Diplome :: MSAL - Jurisprudence" : "Диплом :: МГЮА - Юриспруденция";
    let msalSubTitle = this.props.lang == "en" ? "Moscow State Academy of Law (2000-2004)" : "Московская Государственная Юридическая Академия (2000-2004)";
    let specialSubTitle = this.props.lang == "en" ? "Computer Training Center «Specialist» at Bauman MSTU (2014)" : 'Центр компьютерного обучения "Специалист" при МГТУ им.Н.Э.Баумана (2014)';
    let stepicSubTitle = this.props.lang == "en" ? "Stepic MOOC Platform (2015)" : 'МООС платформа Stepic (2015)';
    let basicTitle = this.props.lang == "en" ? "Certificate :: Basic programming and database" : "Сертификат :: Основы программирования и баз данных";
	let python1Title = this.props.lang == "en" ? "Certificate :: Python. Level 1. Programming basics." : "Сертификат :: Python. Уровень 1. Основы программирования.";
	let python2Title = this.props.lang == "en" ? "Certificate :: Python. Level 2. Object-oriented programming." : "Сертификат :: Python. Уровень 2. ООП.";
	let python3Title = this.props.lang == "en" ? "Certificate :: Python. Level 3. Web-application development with Django." : "Сертификат :: Python. Уровень 3. Разработка веб-приложений в Django";
	let cssTitle = this.props.lang == "en" ? "Certificate :: HTML & CSS. Level 1. Web development on HTML5 and CSS3." : "Сертификат :: HTML и CSS. Уровень 1. Веб-разработка на HTML5 и CSS3.";
	let JS1Title = this.props.lang == "en" ? "Certificate :: Javascript. Level 1. Web development basics." : "Сертификат :: Javascript. Уровень 1. Основы веб-программирования.";
	let JS2Title = this.props.lang == "en" ? "Certificate :: Javascript. Level 2. Enhanced capabilities." : "Сертификат :: Javascript. Уровень 2. Расширенные возможности.";
	let MySQLTitle = this.props.lang == "en" ? "Certificate :: MySQL 5. Databases developement for Web." : "Сертификат :: MySQL 5. Проектирование и создание баз данных для web.";
	let PHP1Title = this.props.lang == "en" ? "Certificate :: PHP. Level 1. Websites developement basics." : "Сертификат :: PHP. Уровень 1. Основы создания сайтов.";
	let LinuxTitle = this.props.lang == "en" ? "Certificate :: Linux Intro." : "Сертификат :: Введение в Linux.";
	let StatTitle = this.props.lang == "en" ? "Certificate :: Statistics basics." : "Сертификат :: Основы статистики.";
	let toggleLabel = this.props.lang == "en" ? "list/cards" : "список/карточки";
	
    return (
      
      <div style={containerStyle}>
		
		<div className="row">
			<div className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-1 col-lg-1">
			<Toggle
				name="mode"
				ref="modeToggle"
				value="cards"
				label={toggleLabel}
				labelPosition="right"
				labelStyle={{fontSize: "small"}}
				defaultToggled={true}
				onToggle={self._changeMode}/>
			</div>
			<div className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-6">
			<h3>
				{ds}
			</h3>
			</div>
			
			<List style={listStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8">
				<ListItem primaryText={mepiSubTitle} leftAvatar={<Avatar style={{color:'red',backgroundColor:'white'}}>D</Avatar>}/>
				<ListDivider />
				<ListItem primaryText={msalSubTitle} leftAvatar={<Avatar style={{color:'red',backgroundColor:'white'}}>D</Avatar>} />
				<ListDivider />
				<ListItem primaryText={specialSubTitle} leftAvatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>} open={true}>
				  <ListItem primaryText={basicTitle} />
				  <ListItem primaryText={python1Title} />
				  <ListItem primaryText={python2Title} />
				  <ListItem primaryText={python3Title} />
				  <ListItem primaryText={cssTitle} />
				  <ListItem primaryText={JS1Title} />
				  <ListItem primaryText={JS2Title} />
				  <ListItem primaryText={MySQLTitle} />
				  <ListItem primaryText={PHP1Title} />
				</ListItem>
				<ListDivider />
				<ListItem primaryText={stepicSubTitle} leftAvatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>} open={true}>
					<ListItem primaryText={LinuxTitle} />
					<ListItem primaryText={StatTitle} />
				</ListItem>
				<ListDivider />
			 </List>
			 
			  
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={mepiTitle}
				subtitle={mepiSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>D</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="https://mephi.ru/" secondary={true}>
					<small>https://mephi.ru/</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/mepi.jpg"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={msalTitle}
				subtitle={msalSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>D</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://msal.ru/" secondary={true}>
					<small>http://msal.ru/</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/msal.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={basicTitle}
				subtitle={specialSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://www.specialist.ru/course/oprog-a" secondary={true}>
					<small>http://www.specialist.ru/course/oprog-a</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate.png"/>
			  </CardMedia>
			 </Card>
			  
			  <Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={python1Title}
				subtitle={specialSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://www.specialist.ru/course/python1-a" secondary={true}>
					<small>http://www.specialist.ru/course/python1-a</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_Python_1.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={python2Title}
				subtitle={specialSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://www.specialist.ru/course/python2" secondary={true}>
					<small>http://www.specialist.ru/course/python2</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_Python_2.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={python3Title}
				subtitle={specialSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://www.specialist.ru/course/python3" secondary={true}>
					<small>http://www.specialist.ru/course/python3</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_Python_3.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={cssTitle}
				subtitle={specialSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://www.specialist.ru/course/eichtml-b" secondary={true}>
					 <small>http://www.specialist.ru/course/eichtml-b</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_HTML_1.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={JS1Title}
				subtitle={specialSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://www.specialist.ru/course/oprveb-a" secondary={true}>
					 <small>http://www.specialist.ru/course/oprveb-a</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_JS_1.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={JS2Title}
				subtitle={specialSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://www.specialist.ru/course/dzhsk-b" secondary={true}>
					 <small>http://www.specialist.ru/course/dzhsk-b</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_JS_2.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={MySQLTitle}
				subtitle={specialSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://www.specialist.ru/course/mskvl" secondary={true}>
					 <small>http://www.specialist.ru/course/mskvl</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_MySQL.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={PHP1Title}
				subtitle={specialSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="http://www.specialist.ru/course/rnr1-a" secondary={true}>
					 <small>http://www.specialist.ru/course/rnr1-a</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_PHP_1.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={LinuxTitle}
				subtitle={stepicSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="https://stepic.org/course/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Linux-73/" secondary={true}>
					 <small>https://stepic.org/course/</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_linux.png"/>
			  </CardMedia>
			</Card>
			
			<Card style={cardStyle} className="col-xs-11 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-9 col-lg-offset-3 col-lg-8" initiallyExpanded={false}>
			  <CardHeader
				style={{height: 'auto'}}
				title={StatTitle}
				subtitle={stepicSubTitle}
				avatar={<Avatar style={{color:'red',backgroundColor:'white'}}>C</Avatar>}>
			  </CardHeader>
			  <CardActions showExpandableButton={true} expandable={false} >
				<FlatButton linkButton={true} href="https://stepic.org/course/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B8-76" secondary={true}>
					 <small>https://stepic.org/course/</small>
				</FlatButton>
			  </CardActions>
			  <CardMedia expandable={true} >
				<img src="img/Certificate_statistics.png"/>
			  </CardMedia>
			</Card>
			
        </div>
      </div>
    );
  }

});

module.exports = Diplomas;
