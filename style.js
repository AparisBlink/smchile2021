/* FUENTES */
/* Durotype Aspira - Para texto general y título generales texto */
@font-face {
	font-family: 'Durotype Aspira';
	src: url('fonts/Durotype_AspiraNarRegular.eot');
	src: local('☺'), url('fonts/Durotype_AspiraNarRegular.woff') format('woff'), url('fonts/Durotype_AspiraNarRegular.ttf') format('truetype'), url('fonts/Durotype_AspiraNarRegular.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'Durotype Aspira';
	src: url('fonts/Durotype_AspiraBold.eot');
	src: local('☺'), url('fonts/Durotype_AspiraBold.woff') format('woff'), url('fonts/Durotype_AspiraBold.ttf') format('truetype'), url('fonts/Durotype_AspiraBold.svg') format('svg');
	font-weight: bold;
	font-style: normal;
}
@font-face {
	font-family: 'Durotype Aspira';
	src: url('fonts/Durotype_AspiraNarIt.eot');
	src: local('☺'), url('fonts/Durotype_AspiraNarIt.woff') format('woff'), url('fonts/Durotype_AspiraNarIt.ttf') format('truetype'), url('fonts/Durotype_AspiraNarIt.svg') format('svg');
	font-weight: normal;
	font-style: italic;
}
 /* Segoe Pr - Es la fuente para texto escrito a mano */
@font-face {
	font-family: 'Segoe Pr';
	src: url('fonts/segoepr.eot');
	src: local('☺'), url('fonts/segoepr.woff') format('woff'), url('fonts/segoepr.ttf') format('truetype'), url('fonts/segoepr.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'Segoe Pr';
	src: url('fonts/segoeprb.eot');
	src: local('☺'), url('fonts/segoeprb.woff') format('woff'), url('fonts/segoeprb.ttf') format('truetype'), url('fonts/segoeprb.svg') format('svg');
	font-weight: bold;
	font-style: normal;
}

/* Pixilate JollyGood - Para títulos de algunas cajas. Algo más chula e informal */
@font-face {
	font-family: 'Pixilate JollyGood';
	src: url('fonts/Pixilate_JollyGood_Proper_Condensed_Regular.eot');
	src: local('☺'), url('fonts/Pixilate_JollyGood_Proper_Condensed_Regular.woff') format('woff'), url('fonts/Pixilate_JollyGood_Proper_Condensed_Regular.ttf') format('truetype'), url('fonts/Pixilate_JollyGood_Proper_Condensed_Regular.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'Pixilate JollyGood';
	src: url('fonts/Pixilate_JollyGood_Proper_Condensed_Bold.eot');
	src: local('☺'), url('fonts/Pixilate_JollyGood_Proper_Condensed_Bold.woff') format('woff'), url('fonts/Pixilate_JollyGood_Proper_Condensed_Bold.ttf') format('truetype'), url('fonts/Pixilate_JollyGood_Proper_Condensed_Bold.svg') format('svg');
	font-weight: bold;
	font-style: normal;
}

/**titulo caja 10 **/
@font-face {
	font-family: 'Conv_Hanoded_ButterflyBall';
	src: url('fonts/Hanoded_ButterflyBall.eot');
	src: local('☺'), url('fonts/Hanoded_ButterflyBall.woff') format('woff'), url('fonts/Hanoded_ButterflyBall.ttf') format('truetype'), url('fonts/Hanoded_ButterflyBall.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}

/*título textos lengua*/ç
@font-face {
	font-family: 'Conv_CaeciliaLTStd-Roman';
	src: url('fonts/CaeciliaLTStd-Roman.eot');
	src: local('☺'), url('fonts/CaeciliaLTStd-Roman.woff') format('woff'), url('fonts/CaeciliaLTStd-Roman.ttf') format('truetype'), url('fonts/CaeciliaLTStd-Roman.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}

/*---------------------------*/
/* Colores genericos estilo */
:root {
--colordeg: #E94287;
--colordeg2: #EC6608;
--colorppal: #E94287;
--colortrans:#E942874f;
}
/*-------------------------*/

/* General */

	body.content_type_clase_smchile2021 {
		font-size: 1.7rem;
		font-family: 'Durotype Aspira',sans-serif;
	}

	body.content_type_clase_smchile2021 #actividad .content img {
		padding: 0px;
	}

	.is_app.content_type_clase_smchile2021 {
		padding-top: 0px;
	}

	.content_type_clase_smchile2021 #actividad {
		margin-bottom: 0px;
		-webkit-transform: none;
		-webkit-transform-style: flat;
	}

	#actividad .carousel-inner .item-container {
		background-image: none;
		margin: 20px auto 30px;
		padding: 0px;
		padding-bottom: 90px;
		position: relative;
	}

	.content_type_clase_smchile2021 #actividad .slide-concatenate {
		margin-top: 30px;
	}

/*HEADER*/
	.content_type_clase_smchile2021 #actividad .content .header .title img,
	.content_type_clase_smchile2021 #actividad .content .header .chapter {
		display: none;
	}

	#indice .units ul li a .number,
	#indice .unit-content .header .number
	 {
		visibility: hidden;
	}

	.content_type_clase_smchile2021 #actividad .content .header {
		border: none;
		margin-bottom: 0;
	}

	.content_type_clase_smchile2021 #actividad .content .header .title {
		margin: -40px 0 20px;
		padding: 20px 97px;
		-moz-background: linear-gradient(99deg, var(--colordeg) 0%, var(--colordeg2) 100%);
		-webkit-background: linear-gradient(99deg, var(--colordeg) 0%, var(--colordeg2) 100%);
		background: linear-gradient(99deg, var(--colordeg) 0%, var(--colordeg2) 100%);
   		min-height: 90px;
	}

	.content_type_clase_smchile2021 #actividad .content .slide-concatenate .header .title {
		display: none;
	}

	.content_type_clase_smchile2021 #actividad .content .header .title h3 {
		font-family: 'Durotype Aspira';
		position: relative;
		display: block;
		width: 100%;
		margin: 0;
		margin-top: 10px;
		color: #fff;
		font-weight: bold;
	    font-size: 2.5rem;
	    text-align: left;
	    padding-top: 0;
		}

	.content_type_clase_smchile2021 #actividad .content .header .title h3 span {
		float: left;
		font-size: 1.8rem;
		font-weight: 900;
		line-height: 1.1rem;
	}
	.content_type_clase_smchile2021 #actividad .content .header .title .header1 {
		position: absolute;
	    background: white;
	    color: var(--colorppal);
	    width: 67px;
	    height: 80px;
	    left: -97px;
	    text-align: center;
	    padding: 12px 0px 0px 11px;
	    font-size: 61px;
	    font-family: 'Durotype Aspira', sans-serif;
	    top: -30px;
	}
	.content_type_clase_smchile2021 #actividad .content .header .title .header1:before {
		width: 0;
	    height: 0px;
	    border-top: 40px solid transparent;
	    border-bottom: 40px solid transparent;
	    border-left: 22px solid white;
	    position: absolute;
	    content: "";
	    right: -22px;
	    top: 0px;
	}
/*---*/

	.content_type_clase_smchile2021 #actividad .slide_content_type_1 .pregunta .texto_curso,
	.content_type_clase_smchile2021 #actividad .texto_curso,
	.html-book {
		font-size: 1.7rem;
	}

	.texto_curso p:last-of-type {
		margin-bottom: 15px;
	}

	.content_type_clase_smchile2021 #actividad .texto_curso li,
	.content_type_clase_smchile2021 #actividad .workspace ul li li {
		margin-bottom: 10px;
	}

	#actividad .class_slide {
    	padding: 40px 0 0;
	}

	#actividad .class_slide:last-of-type {
	    padding-bottom: 0px;
	}

	#actividad .slide-concatenate .class_slide {
	    padding-bottom: 20px;
	}

	#actividad .slide-concatenate:last-of-type .class_slide {
	    padding-bottom: 100px;
	}

	.content_type_clase_smchile2021 .slide_main {
		padding: 0 97px;
	}

	@media screen and (max-width: 480px) {
		.content_type_clase_smchile2021 .slide_main {
			padding: 0 35px;
		}
	}

	.content_type_clase_smchile2021 .slide_main input,
	.content_type_clase_smchile2021 .slide_main .img-input-container {
		color: #555;
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		-webkit-border-radius: 4px;
		   -moz-border-radius: 4px;
		        border-radius: 4px;
		-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
		-moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
		     box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
		-webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		-webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
		transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
		-o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		-moz-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -moz-box-shadow ease-in-out .15s;
		transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s, -moz-box-shadow ease-in-out .15s;
	}

	.content_type_clase_smchile2021 .slide_main input:focus,
	.content_type_clase_smchile2021 .slide_main .img-input-container:focus {
		border-top-color: #3AC62A;
		border-right-color: #3AC62A;
		border-bottom-color: #3AC62A;
		border-left-color: #3AC62A;
		outline-width: 0px;
		outline-style: none;
		-webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0.6);
		   -moz-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0.6);
		        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0.6);
	}

	.content_type_clase_smchile2021 .slide_main input[disabled],
	.content_type_clase_smchile2021 .slide_main input[readonly],
	fieldset[disabled] .content_type_clase_smchile2021 .slide_main input,
	.content_type_clase_smchile2021 .slide_main .img-input-container {
		cursor: not-allowed;
		background-color: #eee;
		opacity: 1;
	}

	.content_type_clase_smchile2021 .slide_main .img-input-container input[readonly],
	.content_type_clase_smchile2021 .slide_main .img-input-container input[disabled] {
		opacity: 0;
		filter: alpha(opacity=0);
	}

	.content_type_clase_smchile2021 .slide_main input.respuesta_ok,
	.content_type_clase_smchile2021 .slide_main .img-input-container.respuesta_ok {
		border-color: #57e900;
		background: #D1F3BD;
	}

	.content_type_clase_smchile2021 .slide_main input.respuesta_ko,
	.content_type_clase_smchile2021 .slide_main .img-input-container.respuesta_ko {
		border-color: #FF3626;
		background: #FFA49D;
	}

	.content_type_clase_smchile2021 .slide_main input.solucion,
	.content_type_clase_smchile2021 .slide_main .img-input-container.solucion {
		border-color: #00BDFF;
		background: #B6ECFF;
	}

	.zoom_flag_img {
		top: 15px;
		right: 15px;
	}
/**/

/* Navbar */
	.navbar-bottom {
		background: #d4d4d4;
		padding-left: 100px;
		padding-right: 100px;
		-moz-box-shadow: 0 0 5px #0000004d;
		-webkit-box-shadow: 0 0 5px #0000004d;
		box-shadow: 0 0 5px #0000004d;
	}

	.logo-publisher {
		display: inline-block;
	    position: absolute;
	    top: 4px;
	    left: 1px;
	    width: 100px;
	    height: 36px;
	    background: url(images/logo-SM.png) 0 0 no-repeat;
	    -webkit-background-size: contain;
	    -moz-background-size: contain;
	    -o-background-size: contain;
	    background-size: contain;
	    background-position: center center;
	}

	@media only screen and (max-width: 640px) {
		.navbar-bottom {
			padding-left: 40px;
			padding-right: 40px;
		}

		.logo-publisher {
			width: 40px;
			background-image: url(Pearson-logo-2016-219x286.png);
		}
	}

	.slider-indicators {
	    padding-left: 0px;
	    padding-right: 0px;
	    white-space: nowrap;
	}
	.edit .slider-indicators {
		white-space: normal;
	}
	.slider-indicators li,
	.edit .slider-indicators li {
		background-color: #ffffff;
	    color: #005840;
	}

	.slider-indicators .active,
	.edit .slider-indicators .active,
	.slider-indicators li:hover,
	.edit .slider-indicators .concat.active,
	.slider-indicators .active {
	    background-color: #007FA3;
	    color: #ffffff;
	}

	.edit .slider-indicators .concat.active:before {
 		background-color: #007FA3;
	}

	#bottom-navigator {
		overflow: hidden;
		position: relative;
	}
	#bottom-navigator .slider-indicators {
		margin-left: auto;
		margin-right: auto;
	}
	#bottom-navigator .slider-indicators:after {
		content: '';
		display: table;
		clear: both;
	}
	#bottom-navigator li {
		width: 18px;
		height: 18px;
		margin: 2px 5px;
		background: #fff;
		color: transparent;
		line-height: 2.2rem;
		font-size: 1.8rem;
		font-weight: bold;
		text-indent: initial;
	}
	#bottom-navigator li:hover {
		background: var(--colorppal);
		color: transparent;
		opacity: 0.5;
	}
	#bottom-navigator li.active {
		background: var(--colorppal);
		color: transparent;
	}
	#bottom-navigator.show_left:before {
		content: '\F053';
		font-family: 'FontAwesome';
		position: absolute;
		left: 0;
		z-index: 100;
		color: #ffffff;
		top: 10px;
		height: 35px;
		line-height: 5.4rem;
		width: 20px;
		text-align: left;
		background: -webkit-gradient(linear, left top, right top, from(#132E4C), to(transparent));
		background: -webkit-linear-gradient(left, #132E4C, transparent);
		background: -moz-linear-gradient(left, #132E4C, transparent);
		background: -o-linear-gradient(left, #132E4C, transparent);
		background: linear-gradient(to right, #132E4C, transparent);
	}

	#bottom-navigator.show_right:after {
		content: '\F054';
		font-family: 'FontAwesome';
		position: absolute;
		right: 0;
		color: #ffffff;
		top: 10px;
		height: 35px;
		line-height: 5.4rem;
		width: 20px;
		text-align: right;
		background: -webkit-gradient(linear, right top, left top, from(#132E4C), to(transparent));
		background: -webkit-linear-gradient(right, #132E4C, transparent);
		background: -moz-linear-gradient(right, #132E4C, transparent);
		background: -o-linear-gradient(right, #132E4C, transparent);
		background: linear-gradient(to left, #132E4C, transparent);
	}

/**/

/* TOC */
:root #indice {
--colordeg: #000000;
--colordeg2: #5B676C;
--colorppal: #5C676D;
}

#indice .units ul li {
    background: linear-gradient(99deg, var(--colordeg) 0%, var(--colordeg2) 100%);
    opacity: 0.8;
    -moz-transition: opacity 0.3s ease-in-out;
    -webkit-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -moz-box-shadow: 3px 5px 5px #00000036;
    -webkit-box-shadow: 3px 5px 5px #00000036;
    box-shadow: 3px 5px 5px #00000036;
    margin-bottom: 11px;
}
#indice .units ul li.active:not(.disabled),
 body:not(.isTablet) #indice .units ul li:hover:not(.disabled), #indice .units ul li:focus:not(.disabled) {
    background: linear-gradient(99deg, var(--colordeg) 0%, var(--colordeg2) 100%);
    opacity: 1;
}

#indice .units ul li a:not(.delete) {
    padding: 0;
    border-radius: 7px;
}
#indice .units ul li a .title {
	font-family: 'Durotype Aspira', sans-serif;
    padding: 14px 16px;
    color: white;
    -moz-transition: margin-left 0.2s ease-in-out;
    -webkit-transition: margin-left 0.2s ease-in-out;
    transition: margin-left 0.2s ease-in-out;
}
body:not(.isTablet) #indice .units ul li:not(.disabled) a:hover .title,
 body:not(.isTablet) #indice .units ul li.active:not(.disabled) a .title {
    color: #fff;
	margin-left: 30px;
}
#indice .col-indice {
    font-family: 'Durotype Aspira';
}
#indice .unit-content .header.default {
    background: linear-gradient(99deg, #020303 0%, #5a656a 100%) !important;
}
#indice .js-list-activities a:hover,
 #indice .js-list-activities a:active,
  #indice .js-list-activities a:focus {
    color: #566065;
    margin-left: 12px;
}

/* --- TÍTULOS --- */

/*TITULO 1*/

.bck-title1 {
    position: relative;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -moz-text-shadow: none;
    -webkit-text-shadow: none;
    text-shadow: none;
    letter-spacing: 0;
    font-family: 'Durotype Aspira', sans-serif;
    color: #5C676D;
    font-weight: bold;
    padding: 0;
    background: none;
    display: block;
    margin: 0px 0px 20px 0px;
    font-size: 2.6rem;
    border: 0;
}

/*TITULO 2*/

.bck-title2 {
    position: relative;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -moz-text-shadow: none;
    -webkit-text-shadow: none;
    text-shadow: none;
    letter-spacing: 0;
    font-family: 'Durotype Aspira', sans-serif;
    color: #5C676D;
    font-weight: bold;
    padding: 0;
    background: none;
    display: block;
    margin: 0px 0px 15px 0px;
    font-size: 2.2rem;
    border: 0;
}

/* Titulo 3 */
.bck-title3 {
    background-color: #ADCD57;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    color: white;
    padding: 4px 10px;
    font-size: inherit;
    font-family: 'Durotype Aspira', sans-serif;
    font-weight: bold;
    -webkit-border-radius: 5px 5px 0px 0px;
    -moz-border-radius: 5px 5px 0px 0px;
    border-radius: 5px 5px 0px 0px;
    position: relative;
}
.bck-title3:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ADCD57;
    right: -5px;
    bottom: 0px;
    -moz-transform: skewX(22deg);
    -webkit-transform: skewX(22deg);
    -o-transform: skewX(22deg);
    transform: skewX(22deg);
    z-index: -5;
    -moz-border-top-right-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    border-top-right-radius: 5px;
	border-top-left-radius: 5px;
	border-top-left-radius: 5px;
	border-top-left-radius: 5px;
}

/*Titulo 4*/
.bck-title4 {
    color: #ADCD57;
    font-size: 2.6rem;
    font-weight: 700;
    margin-bottom: 15px;
}

/*Titulo 5*/
.bck-title5 {
	background-color: #0578bd;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    color: white;
    padding: 4px 10px;
    font-size: inherit;
    font-family: 'Durotype Aspira', sans-serif;
    font-weight: bold;
    -webkit-border-radius: 5px 5px 0px 0px;
    -moz-border-radius: 5px 5px 0px 0px;
    border-radius: 5px 5px 0px 0px;
    position: relative;
}

.bck-title5:after {
	content: "";
    position: absolute;
    LEFT: 0px;
    bottom: -9px;
    z-index: -5;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid #0578BD;
    border-bottom: 10px solid transparent;
}

.bck-title6 {
    position: relative;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -moz-text-shadow: none;
    -webkit-text-shadow: none;
    text-shadow: none;
    letter-spacing: 0;
    font-family: 'Durotype Aspira', sans-serif;
    color: #5C676D;
    font-weight: bold;
    padding: 0;
    background: none;
    display: block;
    margin: 0px 0px 15px 0px;
    font-size: 1.8rem;
    border: 0;
}

/*TITULO 7*/
.bck-title7 {
    color: #6D797F;
    padding: 0;
    margin: 0px 0px 15px 0px;
    font-size: 1.3rem;
}

/* Titulo 8 */
.bck-title8 {
    font-size: 1.8rem;
    background: #8AB3D2;
    color: white;
    padding: 4px;
    font-weight: 800;
}

/* ENFASIS */
.bck-enfasis-1 {
    color: #EA555B;
}
.bck-enfasis-2 {
    color: #12589F;
}

.bck-enfasis-3 {
    font-family: 'Conv_Hanoded_ButterflyBall';
}
.bck-enfasis-4 {
    font-family: 'Conv_CaeciliaLTStd-Roman';
}
.bck-enfasis-5 {
    top: -0.5em;
    width: 6px;
    padding: 2px 5px;
    border-radius: 20px;
    height: 12px;
    color: white;
    font-size: 1rem;
    background-color: var(--colorppal);
}

.bck-enfasis-6 {
    color: #37A538;
}
	/*Cambios de color por bloques*/
	.bck-enfasis-7 {
	    color: #e94287;
	}
	.bck-enfasis-8 {
	    color: #00A4B7;
	}
	.bck-enfasis-9 {
	    color: #82368C;
	}
	.bck-enfasis-10 {
	    color: #86BC25;
	}
/* Enfasis 11 Resaltar */
.bck-enfasis-11 {
    background: var(--colorppal);
    color: white;
    padding: 1px 7px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

/* Enfasis 12 - Corchetes */
.bck-enfasis-12 {
    font-family: 'Pixilate JollyGood';
    font-size: 2.0rem;
}

.bck-enfasis-12:before {
    content: "[";
    font-size: 3.0rem;
    vertical-align: middle;
    padding-right: 1px;
    color: #FFCC00;
}
.bck-enfasis-12:after {
    content: "]";
    font-size: 3.0rem;
    vertical-align: middle;
    padding-left: 1px;
    color: #FFCC00;
}
/*--*/

/* Lists */

.texto_curso ul li,
.workspace ul li ul li,
.cke_contents ul li {
	padding-left: 30px;
}

.texto_curso ul li:before,
.workspace ul li ul li:before,
.cke_contents ul li:before {
	width: 4px;
	height: 4px;
	background-color: #414141;
}

.content .bck-ol,
.cke_contents .bck-ol,
.content ol,
.cke_contents ol {
	list-style-type: none;
	padding-left: 0;
	counter-reset: bck-li-counter;
}

.content .bck-ol li,
.cke_contents .bck-ol li,
.content ol li,
.cke_contents ol li {
    list-style-type: none;
    margin-bottom: 16px;
    counter-increment: bck-li-counter;
    line-height: 1.1rem;
    position: relative;
    display: block;
    padding-left: 20px;
}

.content ol li:before,
.cke_contents ol li:before {
    content: counter(bck-li-counter)".";
    position: absolute;
    display: inline-block;
    margin-top: 2px;
    left: -3px;
    width: auto;
    height: auto;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 0;
    background: no-repeat;
    color: #5C676D;
    vertical-align: middle;
    font-weight: bold;
    font-size: 1.8rem;
    margin-right: 3px;
}

/*LISTA 1 - L.123 Fondo Gris */
.content .bck-ol1 li,
 .cke_contents .bck-ol1 li {
    position: relative;
    display: block;
}
.content .bck-ol1 li:before,
.cke_contents .bck-ol1 li:before {
	content: counter(bck-li-counter);
    line-height: 2.7rem;
    top: -2px;
    left: -3px;
    height: 24px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #656f75;
    color: #fff;
    font-weight: bold;
    text-align: center;
    width: auto;
    position: relative;
    display: inline-block;
    padding: 0px 7px;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/*LISTA ORDENADA 2 - L.abc gris */
.content .bck-ol2 li,
 .cke_contents .bck-ol2 li {
    position: relative;
    display: block;
}
.content .bck-ol2 li:before,
.cke_contents .bck-ol2 li:before {
    content: counter(bck-li-counter, lower-alpha)".";
    position: relative;
    color: #5c676d;
    background: none;
    border: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: inline-block;
    width: auto;
    margin-right: 4px;
    line-height: 1.55rem;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/*LISTA ORDENADA 3*/
.content .bck-ol3 li:before,
.cke_contents .bck-ol3 li:before {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 0;
    background: none;
    color: #E94287;
    margin-top: 0px;
}


/*LISTA ORDENADA 4*/
.content .bck-ol4 li:before,
.cke_contents .bck-ol4 li:before {
	content: counter(bck-li-counter);
    line-height: 2.7rem;
    top: -2px;
    left: -3px;
    height: 24px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #E94287;
    color: white;
    font-weight: bold;
    text-align: center;
    width: auto;
    position: relative;
    display: inline-block;
    padding: 0px 7px;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/* Lista ordenada 5 - L.abc auto*/
.content .bck-ol5 li, 
.cke_contents .bck-ol5 li {
   padding-left: 40px;
}

.content .bck-ol5 li:before,
.cke_contents .bck-ol5 li:before {
 content: counter(bck-li-counter, lower-alpha)".";
    position: absolute;
    color: #E94287;
    background: none;
    border: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: inline-block;
    width: auto;
    margin-right: 4px;
    margin-top: 6px;
    margin-left: 20px;
    line-height: 1.55rem;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/*LISTA ORDENADA 6*/
.content .bck-ol6 li:before,
.cke_contents .bck-ol6 li:before {
	-webkit-box-shadow: none;
       -moz-box-shadow: none;
    		box-shadow: none;
    border: 0;
    background: none;
    color: #00a4b7;
}


/*LISTA ORDENADA 7*/
.content .bck-ol7 li:before,
.cke_contents .bck-ol7 li:before {
	content: counter(bck-li-counter);
    line-height: 2.7rem;
    top: -2px;
    left: -3px;
    height: 24px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #00a4b7;
    color: white;
    font-weight: bold;
    text-align: center;
    width: auto;
    position: relative;
    display: inline-block;
    padding: 0px 7px;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/* Lista ordenada 8 - L.abc auto*/
.content .bck-ol8 li:before,
.cke_contents .bck-ol8 li:before {
    content: counter(bck-li-counter, lower-alpha)".";
    position: relative;
    color: #00a4b7;
    background: none;
    border: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: inline-block;
    width: auto;
    margin-right: 4px;
    line-height: 1.55rem;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/*LISTA ORDENADA 9 morada*/
.content .bck-ol9 li:before,
.cke_contents .bck-ol9 li:before {
	-webkit-box-shadow: none;
       -moz-box-shadow: none;
    		box-shadow: none;
    border: 0;
    background: none;
    color: #82338B;
}

/*LISTA ORDENADA 10 morada*/
.content .bck-ol10 li:before,
.cke_contents .bck-ol10 li:before {
	content: counter(bck-li-counter);
    line-height: 2.7rem;
    top: -2px;
    left: -3px;
    height: 24px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #82338B;
    color: white;
    font-weight: bold;
    text-align: center;
    width: auto;
    position: relative;
    display: inline-block;
    padding: 0px 7px;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/* Lista ordenada 11 morada*/
.content .bck-ol11 li:before,
.cke_contents .bck-ol11 li:before {
    content: counter(bck-li-counter, lower-alpha)".";
    position: relative;
    color: #82338B;
    background: none;
    border: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: inline-block;
    width: auto;
    margin-right: 4px;
    line-height: 1.55rem;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/*LISTA ORDENADA 12 verde*/
.content .bck-ol12 li:before,
.cke_contents .bck-ol12 li:before {
	-webkit-box-shadow: none;
       -moz-box-shadow: none;
    		box-shadow: none;
    border: 0;
    background: none;
    color: #86BC25;
}

/*LISTA ORDENADA 13 verde*/
.content .bck-ol13 li:before,
.cke_contents .bck-ol13 li:before {
	content: counter(bck-li-counter);
    line-height: 2.7rem;
    top: -2px;
    left: -3px;
    height: 24px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #86BC25;
    color: white;
    font-weight: bold;
    text-align: center;
    width: auto;
    position: relative;
    display: inline-block;
    padding: 0px 7px;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/* Lista ordenada 14 verde*/
.content .bck-ol14 li:before,
.cke_contents .bck-ol14 li:before {
    content: counter(bck-li-counter, lower-alpha)".";
    position: relative;
    color: #86BC25;
    background: none;
    border: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: inline-block;
    width: auto;
    margin-right: 4px;
    line-height: 1.55rem;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/*LISTA 15 - Lista 123 Fondo naranja*/
.content .bck-ol15 li:before,
.cke_contents .bck-ol15 li:before {
	content: counter(bck-li-counter);
    line-height: 2.7rem;
    top: -2px;
    left: -3px;
    height: 24px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #EC6608;
    color: white;
    font-weight: bold;
    text-align: center;
    width: auto;
    position: relative;
    display: inline-block;
    padding: 0px 7px;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}

/*Lista 16 123 Naranja*/
.content .bck-ol16 li:before,
.cke_contents .bck-ol16 li:before {
	-webkit-box-shadow: none;
       -moz-box-shadow: none;
    		box-shadow: none;
    border: 0;
    background: none;
    color: #EC6608;
}

/* Lista  17 abc Naranja*/
.content .bck-ol17 li:before,
.cke_contents .bck-ol17 li:before {
    content: counter(bck-li-counter, lower-alpha)".";
    position: relative;
    color: #EC6608;
    background: none;
    border: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: inline-block;
    width: auto;
    margin-right: 4px;
    line-height: 1.55rem;
    vertical-align: middle;
    -webkit-vertical-align: middle;
}


/*LISTA DESORDENADA POR DEFECTO*/
.texto_curso ul li:before, 
.workspace ul li ul li:before, 
.cke_contents ul li:before {
    width: 6px;
    height: 6px;
    background-color: #414141;
    margin-top: .55em;
}

/*LISTA DESORDENADA 1 ROSA*/
#actividad .content .texto_curso .bck-ul1 li:before,
#actividad .content .workspace ul li .bck-ul1 li:before,
#actividad .content .cke_contents .bck-ul1 li:before,
#actividad .popover-background.shown .popover-content .bck-ul1 li:before{
    width: 6px;
    height: 6px;
    background: var(--colorppal);
}

/*LISTA DESORDENADA 2 AZUL*/
#actividad .content .texto_curso .bck-ul2 li:before,
#actividad .content .workspace ul li .bck-ul2 li:before,
#actividad .content .cke_contents .bck-ul2 li:before,
#actividad .popover-background.shown .popover-content .bck-ul2 li:before{
    width: 6px;
    height: 6px;
    background-color: #00a4b7;
}

/*LISTA DESORDENADA 3 morada*/
#actividad .content .texto_curso .bck-ul3 li:before,
#actividad .content .workspace ul li .bck-ul3 li:before,
#actividad .content .cke_contents .bck-ul3 li:before,
#actividad .popover-background.shown .popover-content .bck-ul3 li:before{
    width: 6px;
    height: 6px;
    background-color: #82338B;
}

/*LISTA DESORDENADA 4 verde*/
#actividad .content .texto_curso .bck-ul4 li:before,
#actividad .content .workspace ul li .bck-ul4 li:before,
#actividad .content .cke_contents .bck-ul4 li:before,
#actividad .popover-background.shown .popover-content .bck-ul4 li:before{
    width: 6px;
    height: 6px;
    background-color: #86BC25;
}

/*LISTA DESORDENADA 5 CUADRADOS*/
#actividad .content .texto_curso .bck-ul5 li:before,
#actividad .content .workspace ul li .bck-ul5 li:before,
#actividad .content .cke_contents .bck-ul5 li:before,
#actividad .popover-background.shown .popover-content .bck-ul5 li:before{
	height: 12px;
    text-align: center;
    width: 16px;
    position: relative;
    display: inline-block;
    padding: 0px 7px;
    background: url(images/listacuadrados.png);
    content: "";
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    top: 0px;
    left: -3px;
}

/*LISTA DESORDENADA 6 FLECHAS*/
#actividad .content .texto_curso .bck-ul6 li:before,
#actividad .content .workspace ul li .bck-ul6 li:before,
#actividad .content .cke_contents .bck-ul6 li:before,
#actividad .popover-background.shown .popover-content .bck-ul6 li:before{
 	content: '\f101';
    font-family: FontAwesome;
    color: var(--colorppal);
    position: relative;
    top: 0px;
    font-weight: bold;
    background: transparent;
    left: -4px;
}
/*LISTA DESORDENADA 7 Naranja*/
#actividad .content .texto_curso .bck-ul7 li:before,
#actividad .content .workspace ul li .bck-ul7 li:before,
#actividad .content .cke_contents .bck-ul7 li:before,
#actividad .popover-background.shown .popover-content .bck-ul7 li:before{
    width: 6px;
    height: 6px;
    background-color: #EC6608;
}
/*LISTA DESORDENADA 8 Amarilla*/
#actividad .content .texto_curso .bck-ul8 li:before,
#actividad .content .workspace ul li .bck-ul8 li:before,
#actividad .content .cke_contents .bck-ul8 li:before,
#actividad .popover-background.shown .popover-content .bck-ul8 li:before{
    width: 6px;
    height: 6px;
    background-color: #FBBA00;
}

/* --- CAJAS ---*/
.bck-box {
	margin: 10px 0;
    /*border: 2px solid var(--colorppal);*/
	-webkit-border-radius: 0;
	   -moz-border-radius: 0;
	        border-radius: 0;
	background: none;
	padding: 0px;
}
.bck-box .bck-title {
    padding: 10px;
}
.bck-box .bck-title p {
    margin: 0;
}
.bck-box .bck-content {
    padding: 10px;
}

.bck-box .bck-content p:last-child {
	margin-bottom: 0;
}
/* CAJA 1*/
.bck-box.bck-box1 {
	border: 0;
}

.bck-box.bck-box1 > .bck-content {
    background: #F4F0E7;
    border-left: 2px solid var(--colorppal);
    border-top: 2px solid var(--colorppal);
}
.bck-box.bck-box1 > .bck-title {
    background: var(--colorppal);
    color: white;
    font-weight: 600;
    display: inline-block;
    border-radius: 5px 5px 0 0;
    padding: 5px 10px 0 10px;
    position: relative;
    z-index: 2;
}
.bck-box.bck-box1 > .bck-title p {
    margin-bottom: 5px;
}
.bck-box.bck-box1 > .bck-title:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--colorppal);
    top: 0px;
    left: 13px;
    z-index: -1;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    -moz-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    -o-transform: skewX(20deg);
    transform: skewX(20deg);
}

/* Caja 2 */
.bck-box.bck-box2 {
	-webkit-box-shadow: none;
	   -moz-box-shadow: none;
	        box-shadow: none;
	-webkit-border-radius: 0;
	   -moz-border-radius: 0;
	        border-radius: 0;
	padding: 0;
	text-align: center;
    border: 0;
    text-align: left;
    font-family: 'Segoe Pr', cursive;
    color: #009EE3;
    border: 0;
}

/* Caja 3 */
.bck-box.bck-box3 {
	position: relative;
	-webkit-box-shadow: none;
	   -moz-box-shadow: none;
	        box-shadow: none;
	-webkit-transform: none;
	   -moz-transform: none;
	    -ms-transform: none;
	     -o-transform: none;
	        transform: none;
	        border: 0;
	background: #F0F0F0;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

.bck-box.bck-box3 > .bck-title {
	position: relative;
	top: 0;
	left: 0;
	-webkit-transform: none;
	   -moz-transform: none;
	    -ms-transform: none;
	     -o-transform: none;
	        transform: none;
	display: inline-block;
	border: 0;
	-webkit-border-radius: 0;
	   -moz-border-radius: 0;
	        border-radius: 0;
	background: #fff;
	padding: inherit;
	background: #F0F0F0;
}

.bck-box.bck-box3 > .bck-title p {
	display: inline;
}

.bck-box.bck-box3 > .bck-content {
	margin-top: inherit;
}

/* CAJA 4 */
.bck-box.bck-box4 {
    -moz-border-image: url(images/bordecaja4.png) stretch;
    -webkit-border-image: url(images/bordecaja4.png) stretch;
    border-image: url(images/bordecaja4.png) stretch;
    position: relative;
    font-family: 'Pixilate JollyGood', sans-serif;
    font-weight: normal;
    border-image-slice: 120;
    border-image-width: 60px;
    border-image-outset: 12 7;
    padding: 1px 36px;
    margin-top: 36px;
    margin-bottom: 36px;
	font-size: 1.8rem;
}

/* CAJA 5 */
.bck-box.bck-box5 {
	border: 0;
}
.bck-box.bck-box5 > .bck-content {
    background: #F4F0E7;
    border-left: 2px solid var(--colorppal);
}
.bck-box.bck-box5 > .bck-title {
    background: var(--colorppal);
    color: white;
    font-weight: 600;
    display: inline-block;
    border-radius: 5px 5px 0 0;
    padding: 5px 10px 0 10px;
    position: relative;
    z-index: 2;
}
.bck-box.bck-box5 > .bck-title p {
    margin-bottom: 5px;
}
.bck-box.bck-box5 > .bck-title:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--colorppal);
    top: 0px;
    left: 13px;
    z-index: -1;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    -moz-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    -o-transform: skewX(20deg);
    transform: skewX(20deg);
}

/* CAJA 6 */
.bck-box.bck-box6 {
    border: 0;
    background-color: transparent;
}
.bck-box.bck-box6 > .bck-title {
    background: #009EE3;
    display: inline-block;
    padding: 2px 12px;
    font-family: 'Pixilate JollyGood', sans-serif;
    color: white;
    font-size: 1.8rem;
    position: relative;
}
.bck-box6 > .bck-title:after {
	content:"";
	position:absolute;
	width:100%;
	height:100%;
	background:url(images/bordeazulcienciaconstruccion.png);
	background-size:contain;
	background-repeat:no-repeat;
	background-position:right;
	bottom: 0;
	right: -15px;

}
.bck-box.bck-box6 > .bck-content {
    background: #EAF6FE;
}
/* CAJA 7 */
.bck-box.bck-box7 {
    border: 0;
    background: #D1E0D8;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
}
.bck-box7 > .bck-title {
    font-family: 'Pixilate JollyGood', sans-serif;
    font-size: 2.5rem;
    padding: 10px 10px 5px 20px;
}
.bck-box7 > .bck-content {
    padding: 0px 10px 10px 20px;
}

/* CAJA 8 */
.bck-box.bck-box8 {
    margin-top: -2.6%;
    position: relative;
    left: -12.6%;
    width: 125.5%;
    padding: 0;
    border:0;
}
.bck-box8 > .bck-content {
	padding: 0;
}

/* CAJA 9 */
.bck-box.bck-box9 {
	margin: 10px 0;
    border: 2px solid var(--colorppal);
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background: #fff;
    padding: 0px;
}
.bck-box9 > .bck-content {
	padding: 10px;
}

/*CAJAS ASIGNATURAS*/
/********LENGUA*********/
/*CAJA 10 DESAFIO EN CONSTRUCC.*/
.bck-box.bck-box10{
    border: 0;
}
.bck-box.bck-box10 > .bck-title{
	background: #FBC25E;
    border-top: 2px solid #000000;
    display: inline-block;
    padding: 2.2px 12px;
    font-family: 'Conv_Hanoded_ButterflyBall';
    color: #000000;
    font-size: 1.8rem;
    border-left: 2px solid #000000;
    position: relative;
}
.bck-box10 > .bck-title:after{
    content: "";
    position: absolute;
    width: 110%;
    height: 107.6%;
    background: url(images/bordeamarillodesafio.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    bottom: 0px;
    right: -15px;
}

.bck-box.bck-box10 > .bck-content{
    background: #FFEED5;
    border-left: 2px solid #000000;
}

/*CAJA 11 texto*/
.bck-box.bck-box11{
    border: 0;
    box-shadow: 3px 5px 10px -1px #A1A1A1;
}
.bck-box.bck-box11 > .bck-title{
	background: #F6A86E;
    display: inline-block;
    padding: 2.2px 12px;
    color: #000000;
    font-size: 1.8rem;
    position: relative;
    top: 20px;
    left: -11px;
    font-weight: 600;
}
.bck-box11 > .bck-title:after{
    content: "";
    position: absolute;
    width: 110%;
    height: 100%;
    background: url(images/bordenaranjatexto.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    bottom: 0px;
    right: -15px;
}

.bck-box.bck-box11 > .bck-content{
    background: #ffffff;
    padding-top: 35px;
}

/*CAJA 12 lectura crcitica*/
.bck-box.bck-box12{
    border: 0;
}
.bck-box.bck-box12 > .bck-title{
    background: #000000;
    display: inline-block;
    padding: 2px 12px;
    font-family: 'Conv_Hanoded_ButterflyBall';
    color: #CCE2FE;
    font-size: 1.8rem;
    border-radius: 10px 10px 0 0;
    position: relative;
    left: 85px;
}
.bck-box12 > .bck-title:before{
    background: url(images/boxlecturacritica.png);
    content: "";
    background-size: contain;
    background-repeat: no-repeat;
    padding: 32px 33px 0 24px;
    position: relative;
    left: -68px;
    z-index: 100;
    top: 35px;
    width: 10px;
    margin-top: -6px;
}

.bck-box.bck-box12 > .bck-content{
	border-top: 3px solid #000000;
    background: #FFFAD2;
}

/**************MATEMÁTICA**************/
/*CAJA 13 */
.bck-box.bck-box13{
    margin: 10px 0;
    border: 2px solid #FCD259;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 10px;
    background: #fff;
    padding: 0px;
}

.bck-box.bck-box13 > .bck-title{
	padding: 10px;
}

.bck-box.bck-box13 > .bck-content{
	padding: 10px;
}

/* CAJA 14 */
.bck-box.bck-box14 {
    border: 0;
}
.bck-box.bck-box14 > .bck-title {
	background: #fbba00;
    display: inline-block;
    padding: 2px 12px;
    font-family: 'Pixilate JollyGood', sans-serif;
    color: white;
    font-size: 1.8rem;
    position: relative;
}
.bck-box14 > .bck-title:after {
	content: "";
    position: absolute;
    right: -9px;
    TOP: 0px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-left: 9px solid #fbba00;
    border-bottom: 15px solid transparent;
}

.bck-box.bck-box14 > .bck-content {
    background: #ffffff;
    border-left: 2px solid #fbba00;
}

/* CAJA 15 pensamiento matematico*/
.bck-box.bck-box15 {
	border: 0;
}
.bck-box.bck-box15 > .bck-content {
	background: #ffffff;
    border-left: 2px solid var(--colorppal);
    border-top-left-radius: 23px;
    padding-top: 30px;
}
.bck-box.bck-box15 > .bck-title {
    background: white;
    border: 2px solid var(--colorppal);
    color: var(--colorppal);
    font-weight: 600;
    display: inline-block;
    border-radius: 5px 5px 0 0;
    padding: 5px 10px 0 10px;
    position: relative;
    z-index: 2;
    top: 20px;
    margin-left: 15px;
}

.bck-box.bck-box15 > .bck-title p {
    margin-bottom: 5px;
}

.bck-box.bck-box15 > .bck-title:after {
	content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    top: 2px;
    left: 10px;
    z-index: -1;
    border: 2px solid var(--colorppal);
    border-left: white;
    border-top: white;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 7px;
    border-top-right-radius: 0px;
    -moz-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    -o-transform: skewX(20deg);
    transform: skewX(24deg);
}

/**********SOCIALES**********/
/* CAJA 16 ROSA*/
.bck-box.bck-box16 {
	border: 0;
}
.bck-box.bck-box16 > .bck-content {
	background: #ffffff;
    border-top: 2px solid var(--colorppal);
}
.bck-box.bck-box16 > .bck-title {
    background: var(--colorppal);
    color: white;
    font-weight: 600;
    display: inline-block;
    border-radius: 5px 5px 0 0;
    padding: 5px 10px 0 10px;
    position: relative;
    z-index: 2;
}
.bck-box.bck-box16 > .bck-title p {
    margin-bottom: 5px;
}
.bck-box.bck-box16 > .bck-title:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--colorppal);
    top: 0px;
    left: 13px;
    z-index: -1;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    -moz-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    -o-transform: skewX(20deg);
    transform: skewX(20deg);
}

/* CAJA 17 Taller de pensamiento temporal y espacial*/
.bck-box.bck-box17 {
	border: 0;
}

.bck-box.bck-box17 > .bck-content {
	background: #F6F3EC;
}
.bck-box.bck-box17 > .bck-title {
    background: #EC6608;
    color: white;
    font-weight: 600;
    display: inline-block;
    border-radius: 5px 5px 0 0;
    padding: 5px 10px 0 10px;
    position: relative;
    z-index: 2;
}
.bck-box.bck-box17 > .bck-title p {
    margin-bottom: 5px;
}
.bck-box.bck-box17 > .bck-title:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #EC6608;
    top: 0px;
    left: 13px;
    z-index: -1;
    border-top-right-radius: 5px;
    border-top-left-radius: 7px;
    -moz-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    -o-transform: skewX(20deg);
    transform: skewX(20deg);
}

/* CAJA 18 DOC. */
.bck-box.bck-box18 {
	border: 1PX SOLID #eff4f9;
    background-color: #eff4f9;
    BORDER-RADIUS: 10PX;
}

.bck-box.bck-box18 > .bck-title {
	background: #ECE8D8;
    display: inline-block;
    padding: 2px 12px;
    color: #000000;
    font-size: 1.8rem;
    position: relative;
    TOP: 10px;
}
.bck-box18 > .bck-title:after {
	content: "";
    position: absolute;
    right: -9px;
    TOP: 0px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-left: 9px solid #ECE8D8;
    border-bottom: 15px solid transparent;
}

.bck-box.bck-box18 > .bck-content {
	background: #EFF4F9;
    border-radius: 10px;
    padding-top: 20px;
}

/* CAJA 19 CUADERNO. */
.bck-box.bck-box19{
    border-bottom: 4px solid #ece8d8;
    margin: 10px;
    background: #ffffff;
    box-shadow: 0px 3px 15px hsla(0,0%,0%,.08);
    position: relative;
    background-image: -webkit-radial-gradient(#d6d5d6 45%, transparent 20%), -webkit-radial-gradient(#cfcfc3 44%, transparent 24%);
    background-image: -moz-radial-gradient(#d6d5d6 45%, transparent 20%), -moz-radial-gradient(#cfcfc3 44%, transparent 24%);
    background-image: radial-gradient(#ece8d8 45%, transparent 20%), radial-gradient(#c7c3b0 44%, transparent 24%);
    background-position: -12px 2px, -11px 2px, 50% 0px;
    background-repeat: repeat-y, repeat-y, repeat;
    background-size: 30px 30px, 30px 30px, 30px 30px;
    padding: 10px 10px 10px 18px;
    box-shadow: -7px -3px 3px 1px #ECE8D8;
    border-top: 6px solid #ece8d8;
    border-left: 6px solid #ece8d8;
    border-right: 4px solid #ece8d8;
}

.bck-box.bck-box19 > .bck-title {
    background: #fbba00;
    color: #0d0d0d;
    font-weight: 600;
    display: inline-block;
    border-radius: 5px 5px 0 0;
    padding: 5px 10px 0 10px;
    position: relative;
    z-index: 2;
    top: -31px;
    LEFT: 25%;
}

.bck-box.bck-box19 > .bck-title:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fbba00;
    top: 0px;
    left: 13px;
    z-index: -1;
    border: 1px solid #fbba00;
    order-left: white;
    border-top: white;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 6px;
    -moz-transform: skewX(30deg);
    -webkit-transform: skewX(30deg);
    -o-transform: skewX(30deg);
    transform: skewX(-30deg);
}

.bck-box.bck-box19 > .bck-title:before {
    content: "";
    position: absolute;
    LEFT: -25px;
    bottom: 8px;
    z-index: -5;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid #fbba00;
    /* border-bottom: 10px solid transparent; */
    border-left: 30px solid transparent;
    border-right: -3px solid transparent;
    border-top: 13px solid #fbba00;
    transform: skewY(10deg);
}

.bck-box.bck-box19 > .bck-content {
    background: #ffffff;
    position: relative;
    top: -10px;
}

/*CAJA 20*/
.bck-box.bck-box20{
	margin: 10px 0;
    border-left: 2px solid var(--colorppal);
    border-right: 0;
    border-top: 0;
    border-bottom: 0;
    background: #F4F0E7;
    padding: 0px;
}

.bck-box.bck-box20 > .bck-content{
	padding: 10px;
}


/*CAJA 21 */
.bck-box.bck-box21{
    margin: 10px 0;
    border: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 10px;
    background: rgb(240,240,240);
    padding: 0px;
}

.bck-box.bck-box21 > .bck-content{
	padding: 10px;
}

.bck-box.bck-box21 > .bck-content:before {
	content: "";
    position: absolute;
    LEFT: -10px;
    margin-top: 15px;
    border-right: -3px solid transparent;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid rgb(240,240,240);
    border-bottom: 10px solid transparent;
}

/*CAJA 22 MATERIALES*/
.bck-box.bck-box22 {
    border: 0;
    border-radius: 10px;
}

.bck-box.bck-box22 > .bck-title {
	background: none;
    display: inline-block;
    padding: 5px 12px;
    font-family: 'Pixilate JollyGood', sans-serif;
    color: #000000;
    font-size: 1.8rem;
    z-index: 2;
    position: relative;
    left: 2%;
    top: 19px;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-image: url(images/Borde_caja_materiales.png);
    border-image-slice: fill 4;
    border-image-repeat: stretch;
    padding-right: 31px;
}

.bck-box.bck-box22 > .bck-content {
    background: #ffffff;
    border: 2px solid #fbba00;
    border-radius: 10px;
    padding-top: 25px;
}

/*CAJA 23 INFO LENGUA*/
.bck-box.bck-box23{
	margin: 10px 0;
    border: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background: #00000000;
    padding: 0px;
    BORDER-TOP: 2PX SOLID #6D797F;
    BORDER-BOTTOM: 2PX SOLID #6D797F;
}

.bck-box.bck-box23 > .bck-content{
	 padding: 0px 0PX 8PX 11PX;
}

.bck-box.bck-box23 > .bck-content:before {
	content: "\f129";
    position: relative;
    left: -14px;
    top: -19px;
    width: 23px;
    padding: 4px 10px;
    border-radius: 20px;
    height: 35px;
    margin-top: -6px;
    color: white;
    font-family: 'FontAwesome';
    background-color: #6D797F;
}

/* CAJA 24 */
.bck-box24 {
    border: 0;
}
.bck-box24 > .bck-title {
    background: #656f75;
    display: inline-block;
    -moz-border-radius: 10px 10px 0 0;
    -webkit-border-radius: 10px 10px 0 0;
    border-radius: 10px 10px 0 0;
    color: #FFF;
    padding: 5px 15px;
}
.bck-box24 > .bck-content {
    border: 1px solid #656f75;
}

/* CAJA 25*/
.bck-box.bck-box25 {
	-moz-border-image: url(images/Bordecaja25.png) stretch;
    -webkit-border-image: url(images/Bordecaja25.png) stretch;
    border-image: url(images/Bordecaja25.png) stretch;
    position: relative;
    border-image-slice: 120;
    border-image-width: 45px;
}

/* CAJA 26*/
.bck-box.bck-box26 {
    border: 0;
}
.bck-box.bck-box26 > .bck-title {
	background: #fbba00;
    display: inline-block;
    padding: 2px 12px;
    font-family: 'Pixilate JollyGood', sans-serif;
    color: white;
    font-size: 1.8rem;
    position: relative;
}
.bck-box26 > .bck-title:after {
	content: "";
    position: absolute;
    right: -9px;
    TOP: 0px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-left: 9px solid #fbba00;
    border-bottom: 15px solid transparent;
}
.bck-box.bck-box26 > .bck-content {
    background: #EEF2F3;
    border-left: 2px solid #fbba00;
}

/*TABLA POR DEFECTO*/

.content table:not(.rf-tablegrid) td,
.content table:not(.rf-tablegrid) th {
    padding: 10px;
    background: #ffffff;
    border: 2px solid #5C676D;
}

.content table:not(.rf-tablegrid) {
    margin-bottom: 20px;
    border: 2px solid #5C676D;
}

/**TABLA**/
table,
.bck-table {
	border: 2px solid #5C676D;
    margin-bottom: 20px;
}

table td,
.bck-table td {
	border: 2px solid #5C676D;
    background: #ffffff;
}

td,
th {
	padding: 10px;
}

/*TABLA 2 GRIS*/
.content table:not(.rf-tablegrid).bck-table-2 td,
.content table:not(.rf-tablegrid).bck-table-2 th {
  border: 2px solid #F4F0E7;
}

/*celda 2 gris*/
.content table:not(.rf-tablegrid) td.bck-td-2 {
  color: #ffffff;
  background: #F4F0E7;
  text-align: center;
}


/*TABLA 3 AZUL*/
.content table:not(.rf-tablegrid).bck-table-3 td,
.content table:not(.rf-tablegrid).bck-table-3 th {
  border: 2px solid #67B9C2;
}
/*celda 3 AZUL*/
.content table:not(.rf-tablegrid) td.bck-td-3 {
  border: 2px solid #67B9C2;
  background-color: #fff;
  color: #333;
}
/*celda 4 AZUL*/
.content table:not(.rf-tablegrid) td.bck-td-4 {
  border: 2px solid #85C4CB;
  background-color: #85C4CB;
  color: #333;
}
/*celda 5 AZUL*/
.content table:not(.rf-tablegrid) td.bck-td-5 {
  border: 2px solid #E9EFF6;
  background-color: #E9EFF6;
  color: #333;
}


/*TABLA 4 MARRON */
.content table:not(.rf-tablegrid).bck-table-4 td,
.content table:not(.rf-tablegrid).bck-table-4 th {
  border: 2px solid #E9BBA3;
}

/*celda 6 marron*/
.content table:not(.rf-tablegrid) td.bck-td-6 {
  color: #ffffff;
  background: #E9BBA3;
  text-align: center;
}
/*celda 7 marron*/
.content table:not(.rf-tablegrid) td.bck-td-7 {
  color: #ffffff;
  background: #F8E9E0;
  text-align: center;
}


/*TABLA 5 MORADA*/
.content table:not(.rf-tablegrid).bck-table-5 td,
.content table:not(.rf-tablegrid).bck-table-5 th {
  border: 2px solid #B0A5C6;
}
/*celda 8 morada*/
.content table:not(.rf-tablegrid) td.bck-td-8 {
  color: #ffffff;
  background: #B0A5C6;
  text-align: center;
}
/*celda 9 morada*/
.content table:not(.rf-tablegrid) td.bck-td-9 {
  color: #ffffff;
  background: #E5D0DF;
  text-align: center;
}


/*TABLA 6 VERDE*/
.content table:not(.rf-tablegrid).bck-table-6 td,
.content table:not(.rf-tablegrid).bck-table-6 th {
  border: 2px solid #7AA877;
}
/*celda 10 verde*/
.content table:not(.rf-tablegrid) td.bck-td-10 {
  color: #ffffff;
  background: #7AA877;
  text-align: center;
}
/*celda 11 verde*/
.content table:not(.rf-tablegrid) td.bck-td-11 {
  color: #ffffff;
  background: #C9D7C2;
  text-align: center;
}


/*TABLA 7 ROSA*/
.content table:not(.rf-tablegrid).bck-table-7 td,
.content table:not(.rf-tablegrid).bck-table-7 th {
  border: 2px solid #DAA5B3;
}

/*celda 12 rosa*/
.content table:not(.rf-tablegrid) td.bck-td-12 {
  color: #ffffff;
  background: #DAA5B3;
  text-align: center;
}


/*TABLA 8 VERDE CLARO*/
.content table:not(.rf-tablegrid).bck-table-8 td,
.content table:not(.rf-tablegrid).bck-table-8 th {
  border: 2px solid #C1DA5E;
}
/*celda 13 verde claro*/
.content table:not(.rf-tablegrid) td.bck-td-13 {
  color: #ffffff;
  background: #C1DA5E;
  text-align: center;
}
/*celda 14 verde claro*/
.content table:not(.rf-tablegrid) td.bck-td-14 {
  color: #ffffff;
  background: #DEEAAE;
  text-align: center;
}


/*TABLA 9 AMARILLA*/
.content table:not(.rf-tablegrid).bck-table-9 td,
.content table:not(.rf-tablegrid).bck-table-9 th  {
  border: 2px solid #FFCB05;
}
/*celda 15 amarilla*/
.content table:not(.rf-tablegrid) td.bck-td-15 {
  color: #ffffff;
  background: #FFE7A7;
  text-align: center;
}
/*celda 16 amarilla*/
.content table:not(.rf-tablegrid) td.bck-td-16 {
  color: #ffffff;
  background: #FFF1D0;
  text-align: center;
}


/*TABLA 10 NARANJA*/
.content table:not(.rf-tablegrid).bck-table-10 td,
.content table:not(.rf-tablegrid).bck-table-10 th {
  border: 2px solid #F59E24;
}
/*celda 17 naranja*/
.content table:not(.rf-tablegrid) td.bck-td-17 {
  color: #ffffff;
  background: #FDD5A5;
  text-align: center;
}


/*-----*/
/* Icons */

#actividad .player.audio {
    background-image: url(../../../images/shared/multimedia-icons.png);
    background-color: var(--colorppal);
    background-position: -29px -1px;
}

.item-container .icon:before {
	content: "";
	background-repeat: no-repeat;
	-webkit-background-size: auto 100%;
	   -moz-background-size: auto 100%;
	     -o-background-size: auto 100%;
	        background-size: auto 100%;
	background-position: center center;
	display: inline-block;
	vertical-align: middle;
	height: 40px;
	width: 54px;
	margin-top: -16px;
}

/* Icono reciclaje */
.item-container .icon-reciclaje:before {
    background-image: url(images/icono_reciclaje.png);
    width: 40px;
    height: 30px;
    margin-top: -3px;
}

/* Icono taller ciencia */
.item-container .icon-taller:before {
    background-image: url(images/iconotallerciencia.png);
    width: 80px;
    height: 55px;
}
/* Icono Ciencia en chile */
.item-container .icon-cienciachile:before {
    background-image: url(images/iconocienciaenchile.png);
    width: 80px;
    height: 55px;
}

/* Icono antes de leer */
.item-container .icon-antesleer:before {
    background-image: url(images/iconoantesleer.png);
	width: 101px;
    height: 58px;
}

/* Icono durante lectura */
.item-container .icon-duranteleer:before {
    background-image: url(images/iconoduranteleer.png);
	width: 101px;
    height: 58px;
}

/* Icono despues de leer */
.item-container .icon-despuesleer:before {
    background-image: url(images/iconodespuesleer.png);
	width: 191px;
    height: 58px;
}

/* Icono Planifica*/
.item-container .icon-planifica:before {
    background-image: url(images/icono_planifica.png);
    width: 80px;
    height: 55px;
}

/* Icono Escribe*/
.item-container .icon-escribe:before {
    background-image: url(images/icono_escribe.png);
    width: 80px;
    height: 55px;
}

/* Icono Revisa*/
.item-container .icon-revisa:before {
    background-image: url(images/icono_revisa.png);
    width: 80px;
    height: 55px;
}

/* Icono Publica*/
.item-container .icon-publica:before {
    background-image: url(images/icono_publica.png);
    width: 80px;
    height: 55px;
}

/*-----*/

/* Pie de foto e imágenes*/
.bck-i-fullscreen-wrapper {
    padding: 0px;
}
figcaption {
    position: relative;
}
figcaption:before {
    content: "\f077";
    position: absolute;
    font-family: 'FontAwesome';
    top: -5px;
    margin-left: -18px;
    color: var(--colorppal);
}

/* Desplegable */
.bck-dropdown-button {
    padding: 10px;
    background: var(--colorppal);
    color: #fff;
    border-top-left-radius: 5px;
    -moz-border-radius-topleft: 5px;
    border-top-right-radius: 5px;
    -moz-border-radius-topright: 5px;
    cursor: pointer
}

.bck-dropdown-icon>.fa {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border-color: #fff;
    background: #fff;
    color: var(--colorppal)
}

.bck-dropdown-titulo {
    font-weight: 600;
    font-size: 20px
}

.bck-dropdown-content {
    background-color: #fff;
    border: 2px solid var(--colorppal);
    -moz-border-radius-topleft: 5px;
    border-bottom-left-radius: 5px;
    -moz-border-radius-topright: 5px;
    border-bottom-right-radius: 5px
}

/*- Flipbox */
body:not(.edit) .front .bck-flipbox-section,body:not(.edit) .front .bck-flipbox-title {
    color: var(--colorppal)
}
body:not(.edit) .bck-flipbox-face.back,body:not(.edit) .bck-flipbox-face.front {
    border-color: var(--colorppal);
    -webkit-box-shadow: 5px 5px 8px rgba(0,0,0,.18);
    -moz-box-shadow: 5px 5px 8px rgba(0,0,0,.18);
    box-shadow: 5px 5px 8px rgba(0,0,0,.18)
}
body:not(.edit) .bck-flipbox-face.back {
    background-color: var(--colorppal)
}

/* PopUp */
#actividad .info-button {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    cursor: pointer
}

#actividad .info-button,.info-popover .popover-title,.popover-template .popover-title {
    color: #fff;
    background: var(--colorppal)
}

.fa-times:before,.info-popover .popover-title:before,.popover-template .popover-title:before {
    color: #fff
}

.info-template.shown {
    width: 200px;
    background: #fff;
    border: 2px solid var(--colorppal);
    border-right: var(--colorppal)
}

.info-template .info-title {
    color: var(--colorppal)
}

.info-template .info-icon {
    color: #fff;
    background: var(--colorppal)
}

/* Links */
#actividad .item-container a {
	text-decoration: underline;
}
#actividad .item-container a:hover,
 #actividad .item-container a:active,
  #actividad .item-container a:focus {
  	color: var(--colorppal);
  }

/* Forms */

.content_type_clase_smchile2021 .slide_main input,
.content_type_clase_smchile2021 .slide_main .img-input-container {
    -webkit-box-shadow: 1px -2px 6px #00000030;
       -moz-box-shadow: 1px -2px 6px #00000030;
    		box-shadow: 1px -2px 6px #00000030;
    border: 0px solid #ccc;
    border-bottom: 2px solid var(--colorppal);
    -webkit-border-radius: 0px;
       -moz-border-radius: 0px;
    		border-radius: 0px;
}

.content_type_clase_smchile2021 .slide_main .fill-text .img-input-container {
    display: none;
}

.content_type_clase_smchile2021 .slide_main input:focus,
.content_type_clase_smchile2021 .slide_main .img-input-container:focus {
    border-top-color: var(--colorppal);
    border-right-color: var(--colorppal);
    border-bottom-color: var(--colorppal);
    border-left-color: var(--colorppal);
    -webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0);
    -moz-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0);
}
.html-book input:focus,
 .html-book textarea:focus,
  .html-book .preview:focus {
	border-color: var(--colorppal);
}
.form-control:focus,
 .form-control:focus-within {
 	-moz-box-shadow: none;
 	-webkit-box-shadow: none;
 	box-shadow: none;
 	border: 2px solid var(--colorppal)
}
.shortanswer-container textarea:focus,
 .shortanswer-container input:focus,
  .shortanswer-container .preview:focus {
  	border: 2px solid var(--colorppal);
  	-moz-box-shadow: none;
  	-webkit-box-shadow: none;
  	box-shadow: none;
}

/* Slides */
/*  Clasificar */
#actividad .workspace.multiple-choice .opcion,
#actividad .workspace.matching .opciones .opcion:not(.ko):not(.ok),
#actividad .workspace.ordenar .js-rank-item {
	border: 0;
    background: #fff;
    -moz-box-shadow: 7px 8px 13px 1px rgba(0,0,0,.16);
    -webkit-box-shadow: 7px 8px 13px 1px rgba(0,0,0,.16);
    box-shadow: 7px 8px 13px 1px rgba(0,0,0,.16);
}

#actividad .workspace.matching .opciones .opcion.emparejado.destino {
    border-width: 2px 2px 2px 0;
}

#actividad .workspace.matching .opciones .opcion.emparejado.origen {
    border-width: 2px 0 2px 2px;
}

#actividad .workspace.clasificar .clasificar_lista .classify-item {
    border: 0px solid #d8d8d8;
}

#actividad .workspace.clasificar .clasificar_conjuntos .conjunto .group-box {
    border: 2px solid var(--colorppal);
    padding-top: 10px;
}

.fillblanks-draggable-wrapper .response {
    border: 0px solid #d8d8d8;
    background: #c1e5f7;
    -moz-box-shadow: 2px 3px 5px #0000002e;
    -webkit-box-shadow: 2px 3px 5px #0000002e;
    box-shadow: 2px 3px 5px #0000002e;
}

.fillblanks-draggable-wrapper .response .bck-i-fullscreen-wrapper {
    padding: 0;
}

body.content_type_clase_smchile2021 #actividad .content .fillblanks-draggable-wrapper
.response .bck-i-fullscreen,
body.content_type_clase_smchile2021 #actividad .content .fillblanks-draggable
.img-input-container.imgFilled img {
	width: auto;
	height: 100px !important;
	padding: 0;
}

/*Crucigrama*/
.slide.crosswords-puzzle .enunciado {
    line-height: 1.6rem;
}
.slide.crosswords .enunciados .enunciado {
    padding: 7px 0px 5px 18px;
    font-size: 1.6rem;
    margin-bottom: ;
}
/*Memory*/
#actividad .workspace.memory .front {
	background: #fff url(images/logo-SM-memory.png) center center / 50px auto no-repeat;
}

/* Calculo */
.content .workspace.calculo table:not(.rf-tablegrid) td,
 .content .workspace.calculo table:not(.rf-tablegrid) th {
    border: 0;
    padding: 10px;
    background: none;
}
#actividad .workspace.calculo li .marco {
    border: 0;
}
#actividad .workspace.calculo table {
    border: 0;
}

/*Respuesta múltiple*/
#actividad .workspace.multiple-choice .opcion.respuesta_checked {
    border-color: var(--colorppal);
    background-color: var(--colortrans);
}

/*--------- BOTONERA --------*/
/*BOTONERA*/
    .btn-danger, .btn-danger[disabled] {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 2px solid #fc4237;
    color: #fc4237;
    background: white;
    font-weight: 700;
    }
    .btn-primary, .btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 2px solid var(--colorppal);
    color: var(--colorppal);
    background: white;
    font-weight: 700;
    }
    .btn-primary:not([disabled]):hover, .btn-primary:not([disabled]):focus, .btn-primary:not([disabled]):active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
    background-color: var(--colorppal);
    border-color: var(--colorppal);
    color: white
    }
    #actividad .content .review .attemps span {
    background-color: var(--colorppal);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    }
    .btn-primary[disabled], .btn-primary[disabled]:focus {
    color: #fff;
    background-color: var(--colorppal);
    border-color: var(--colorppal);
    }
    .btn-solution, .btn-solution.disabled,
    .btn-solution[disabled], .btn-next, .btn-next.disabled,
    .btn-next[disabled] {
    color: #00bdff;
    background-color: white;
    border-color: #00bdff;
    border: 2px solid #00bdff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-weight: 700;
    }
    .btn-solution:hover,
    .btn-solution:focus,
    .btn-solution:active,
    .btn-next:hover, .btn-next:focus,
    .btn-next:active,
    .open .dropdown-toggle.btn-solution {
    color: #fff;
    background-color: #00bdff;
    border-color: transparent;
    }
 /*---*/   

/*----- unittag ------*/
/*---unittag_intro */
 :root .unittag_intro{
--colordeg: #000000;
--colordeg2: #5B676C;
--colorppal: #5C676D;
--colortrans: #5C676D4f;
}

:root .unittag_bloque1{
--colordeg: #E94287;
--colordeg2: #EC6608;
--colorppal: #E94287;
--colortrans:#E942874f;
}
/*---unittag_bloque2 */
 :root .unittag_bloque2 {
--colordeg: #00A4B7;
--colordeg2: #50AE2F;
--colorppal: #00A4B7;
--colortrans:#00A4B74f;
}
/*--*/

.unittag_bloque2.bck-box.bck-box17 > .bck-content {
	background: #F6F3EC;
}
.unittag_bloque2 .bck-box.bck-box17 > .bck-title {
    background: #52AE32;
    color: white;
}
.unittag_bloque2 .bck-box.bck-box17 > .bck-title:after {
    background: #52AE32;
}

.unittag_bloque2 .item-container .icon-antesleer:before {
    background-image: url(images/iconoantesleer_bloque2-min.png);
}
.unittag_bloque2 .item-container .icon-duranteleer:before {
    background-image: url(images/iconoduranteleer_bloque2-min.png);
}
.unittag_bloque2 .item-container .icon-despuesleer:before {
    background-image: url(images/iconodespuesleer_bloque2-min.png);
}

.unittag_bloque2 #actividad .content .texto_curso .bck-ul5 li:before,
.unittag_bloque2 #actividad .content .workspace ul li .bck-ul5 li:before ,
.unittag_bloque2 #actividad .popover-background.shown .popover-content .bck-ul5 li:before{
    background: url(images/listacuadrados_Bloque2.png);
}

/*--*/

/*---unittag_bloque3 */
 :root .unittag_bloque3{
--colordeg: #8C338B;
--colordeg2: #C8308A;
--colorppal: #82338B;
--colortrans:#82338B4f;
}

.unittag_bloque3 .bck-box.bck-box17 > .bck-content {
	background: #F6F3EC;
}
.unittag_bloque3 .bck-box.bck-box17 > .bck-title {
    background: #C9338B;
}
.unittag_bloque3 .bck-box.bck-box17 > .bck-title:after {
    background: #C9338B;
}

.unittag_bloque3 .item-container .icon-antesleer:before {
    background-image: url(images/iconoantesleer_bloque3-min.png);
}
.unittag_bloque3 .item-container .icon-duranteleer:before {
    background-image: url(images/iconoduranteleer_bloque3-min.png);
}
.unittag_bloque3 .item-container .icon-despuesleer:before {
    background-image: url(images/iconodespuesleer_bloque3-min.png);
}

.unittag_bloque3 #actividad .content .texto_curso .bck-ul5 li:before,
.unittag_bloque3 #actividad .content .workspace ul li .bck-ul5 li:before ,
.unittag_bloque3 #actividad .popover-background.shown .popover-content .bck-ul5 li:before{
    background: url(images/listacuadrados_Bloque3.png);
}
/*--*/

/*---unittag_bloque4 */
:root .unittag_bloque4  {
--colordeg: #83B824 ;
--colordeg2: #d7d900;
--colorppal: #86BC25;
--colortrans:#86BC254f;
}
.unittag_bloque4 .bck-box.bck-box17 > .bck-content {
	background: #F6F3EC;
}
.unittag_bloque4 .bck-box.bck-box17 > .bck-title {
    background: #DEDC00;
    color: white;
}
.unittag_bloque4 .bck-box.bck-box17 > .bck-title:after {
    background: #DEDC00;
}

.unittag_bloque4 .item-container .icon-antesleer:before {
    background-image: url(images/iconoantesleer_bloque4-min.png);
}
.unittag_bloque4 .item-container .icon-duranteleer:before {
    background-image: url(images/iconoduranteleer_bloque4-min.png);
}
.unittag_bloque4 .item-container .icon-despuesleer:before {
    background-image: url(images/iconodespuesleer_bloque4-min.png);
}

.unittag_bloque4 #actividad .content .texto_curso .bck-ul5 li:before,
.unittag_bloque4 #actividad .content .workspace ul li .bck-ul5 li:before ,
.unittag_bloque4 #actividad .popover-background.shown .popover-content .bck-ul5 li:before{
    background: url(images/listacuadrados_Bloque4.png);
}

/*************/
