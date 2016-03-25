@color_1: #4F1313;
@color_2: #666666;
@color_3: #999999;
@color_4: #FF9900;
@font-family_1: Georgia;
@font-family_2: Verdana;

body {
	margin: 25px 0px 0px 0px;
	background-color: #FFFFFF;
	background-image: url(images/bg.gif);
	background-position: center;
	background-repeat: repeat-y;
	text-align: center;
}
#main {
	width: 720px;
	margin-left: auto;
	margin-right: auto;
	text-align: left;
	background-color: #FFFFFF;
}
#top-nav {
	width: 715px;
	margin-left: auto;
	margin-right: auto;
	font-family: @font-family_1;
	font-size: 30px;
	color: @color_1;
	text-align: left;
	vertical-align: bottom;
	height: 30px;
	line-height: 18px;
	padding-left: 5px;
	background-color: #FFFFFF;
}
#navigation {
	float: left;
	font-family: @font-family_2;
	font-size: 70%;
	font-weight: bold;
	color: @color_1;
	background-color: #FAFAFA;
	text-decoration: none;
	margin: 0px;
	padding: 5px 5px 15px 5px;
	width: 150px;
	border-color: #CCCCCC;
	border-style: solid;
	border-width: 1px 1px 1px 0px;
	text-align: left;
}
#content {
	margin-left: 170px;
	font-family: @font-family_2;
	font-size: 70%;
	color: @color_2;
	text-decoration: none;
	width: 535px;
	text-align: left;
	padding: 5px 5px 15px 5px;
	background-color: #FFFFFF;
}
#footer {
	font-family: @font-family_2;
	font-size: 70%;
	color: @color_1;
	padding: 40px 0px 10px 0px;
	text-align: center;
	clear: left;
	background-color: #FFFFFF;
}
a {
	color: @color_1;
	text-decoration: underline;
	&:hover {
		color: @color_1;
		text-decoration: none;
	}
}
a.small-navigation {
	color: @color_3;
	text-decoration: none;
	&:hover {
		color: @color_4;
	}
}
a.navigation {
	color: @color_2;
	border-width: 0px 0px 0px 5px;
	border-color: #DEDEDE;
	border-style: solid;
	text-decoration: none;
	display: block;
	padding: 3px 0px 3px 5px;
	text-align: left;
	font-weight: normal;
	&:hover {
		border-color: #4F1313;
		background-color: #EFEFEF;
	}
}
#header {
	padding: 5px 0px 5px 0px;
	background-color: #FFFFFF;
}
h1 {
	color: @color_1;
	font-size: 180%;
	text-decoration: none;
	text-align: right;
	margin: 0px 0px 15px 0px;
	font-weight: normal;
	padding: 2px 50px 0px 0px;
	border-width: 0px 0px 1px 0px;
	border-style: solid;
	border-color: #4F1313;
	background-color: #FFFFFF;
}
p {
	padding: 0px 0px 10px 0px;
	margin-top: 10px;
}