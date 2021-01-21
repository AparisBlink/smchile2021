(function (blink) {
	'use strict';

	var smchile2021Style = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	smchile2021Style.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_smchile2021',
		ckEditorStyles: {
			name: 'smchile2021',
			styles: [

				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title bck-title1'} },
				{ name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title bck-title2'} },
				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title bck-title3'} },
				{ name: 'Título 4', element: 'h4', attributes: { 'class': 'bck-title bck-title4'} },
				{ name: 'Título 5', element: 'h4', attributes: { 'class': 'bck-title bck-title5'} },
				{ name: 'Título 6', element: 'h4', attributes: { 'class': 'bck-title bck-title6'} },
				{ name: 'Título 7', element: 'h4', attributes: { 'class': 'bck-title bck-title7'} },
				{ name: 'Título 8', element: 'h4', attributes: { 'class': 'bck-title bck-title8'} },

				{ name: 'Énfasis 01', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'Énfasis 02', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'Énfasis 03', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'Énfasis 04', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'Énfasis 05', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
				{ name: 'Énfasis 06', element: 'span', attributes: { 'class': 'bck-enfasis-6'} },
				{ name: 'Énfasis 07 Color B1', element: 'span', attributes: { 'class': 'bck-enfasis-7'} },
				{ name: 'Énfasis 08 Color B2', element: 'span', attributes: { 'class': 'bck-enfasis-8'} },
				{ name: 'Énfasis 09 Color B3', element: 'span', attributes: { 'class': 'bck-enfasis-9'} },
				{ name: 'Énfasis 10 Color B4', element: 'span', attributes: { 'class': 'bck-enfasis-10'} },
				{ name: 'Énfasis Resaltar', element: 'span', attributes: { 'class': 'bck-enfasis-11'} },
				{ name: 'Énfasis 12 Corchetes', element: 'span', attributes: { 'class': 'bck-enfasis-12'} },

				{ name: 'Icono Reciclaje', element: 'span', attributes: { 'class': 'icon icon-reciclaje' } },
				{ name: 'Icono Taller ciencia', element: 'span', attributes: { 'class': 'icon icon-taller' } },
				{ name: 'Icono Ciencia Chile', element: 'span', attributes: { 'class': 'icon icon-cienciachile' } },
				{ name: 'Icono antes de leer', element: 'span', attributes: { 'class': 'icon icon-antesleer' } },
				{ name: 'Icono durante lectura', element: 'span', attributes: { 'class': 'icon icon-duranteleer' } },
				{ name: 'Icono despues de leer', element: 'span', attributes: { 'class': 'icon icon-despuesleer' } },

				{ name: 'L 123 F.Gris', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },
				{ name: 'L abc Gris', element: 'ol', attributes: { 'class': 'bck-ol bck-ol2' } },
				{ name: 'L 123 Rosa', element: 'ol', attributes: { 'class': 'bck-ol bck-ol3' } },
				{ name: 'L 123 F.Rosa', element: 'ol', attributes: { 'class': 'bck-ol bck-ol4' } },
				{ name: 'L abc Rosa', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },
				{ name: 'L 123 Azul', element: 'ol', attributes: { 'class': 'bck-ol bck-ol6' } },
				{ name: 'L 123 F.Azul', element: 'ol', attributes: { 'class': 'bck-ol bck-ol7' } },
				{ name: 'L abc Azul', element: 'ol', attributes: { 'class': 'bck-ol bck-ol8' } },
				{ name: 'L 123 Morado', element: 'ol', attributes: { 'class': 'bck-ol bck-ol9' } },
				{ name: 'L 123 F.Morado', element: 'ol', attributes: { 'class': 'bck-ol bck-ol10' } },
				{ name: 'L abc Morado', element: 'ol', attributes: { 'class': 'bck-ol bck-ol11' } },
				{ name: 'L 123 Verde', element: 'ol', attributes: { 'class': 'bck-ol bck-ol12' } },
				{ name: 'L 123 F.Verde', element: 'ol', attributes: { 'class': 'bck-ol bck-ol13' } },
				{ name: 'L abc Verde', element: 'ol', attributes: { 'class': 'bck-ol bck-ol14' } },
				{ name: 'L 123 F.Naranja', element: 'ol', attributes: { 'class': 'bck-ol bck-ol15' } },
				{ name: 'L 123 Naranja', element: 'ol', attributes: { 'class': 'bck-ol bck-ol16' } },
				{ name: 'L abc Naranja', element: 'ol', attributes: { 'class': 'bck-ol bck-ol17' } },

				{ name: 'L.Des Rosa', element: 'ul', attributes: { 'class': 'bck-ul bck-ul1' } },
				{ name: 'L.Des Azul', element: 'ul', attributes: { 'class': 'bck-ul bck-ul2' } },
				{ name: 'L.Des Morado', element: 'ul', attributes: { 'class': 'bck-ul bck-ul3' } },
				{ name: 'L.Des Verde', element: 'ul', attributes: { 'class': 'bck-ul bck-ul4' } },
				{ name: 'L.Des 5', element: 'ul', attributes: { 'class': 'bck-ul bck-ul5' } },
				{ name: 'L.Des 6', element: 'ul', attributes: { 'class': 'bck-ul bck-ul6' } },
				{ name: 'L.Des Naranja 7', element: 'ul', attributes: { 'class': 'bck-ul bck-ul7' } },
				{ name: 'L.Des Amarilla 8', element: 'ul', attributes: { 'class': 'bck-ul bck-ul8' } },

				{ name: 'Box 01 ', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box1' } },
				{ name: 'Box 02 Escrito mano', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box2' } },
				{ name: 'Box 03 Simple gris', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box3' } },
				{ name: 'Box 04 Bocadillo morado', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box4' } },
				{ name: 'Box 05', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box5' } },
				{ name: 'Box 06 Ciencia Const', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box6' } },
				{ name: 'Box 07', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box7' } },
				{ name: 'Box 08 100 ancho', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box8' } },
				{ name: 'Box 09 Borde Auto', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box9' } },
				{ name: 'Box 10 Desafio', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box10' } },
				{ name: 'Box 11 Texto nº', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box11' } },
				{ name: 'Box 12 Lectura crítica', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box12' } },
				{ name: 'Box 13 Borde Amarillo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box13' } },
				{ name: 'Box 14 Flecha Amarilla', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box14' } },
				{ name: 'Box 15 Pensamiento mate', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box15' } },
				{ name: 'Box 16', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box16' } },
				{ name: 'Box 17', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box17' } },
				{ name: 'Box 18 DOC', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box18' } },
				{ name: 'Box 19 Cuaderno', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box19' } },
				{ name: 'Box 20', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box20' } },
				{ name: 'Box 21', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box21' } },
				{ name: 'Box 22 Materiales', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box22' } },
				{ name: 'Box 23', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box23' } },
				{ name: 'Box 24', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box24' } },
				{ name: 'Box 25 Cuadro Gris', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box25' } },
				{ name: 'Box 26 Flecha y fondo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box26' } },
				
				{ name: 'Tabla 02 Gris', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-2'} },
				{ name: 'Tabla 03 Azul', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-3'} },
				{ name: 'Tabla 04 Marron', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-4'} },
				{ name: 'Tabla 05 Morada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-5'} },
				{ name: 'Tabla 06 Verde', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-6'} },
				{ name: 'Tabla 07 Rosa', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-7'} },
				{ name: 'Tabla 08 Verde claro', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-8'} },
				{ name: 'Tabla 09 Amarilla', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-9'} },
				{ name: 'Tabla 10 Naranja', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-10'} },
				
				{ name: 'Celda 02 Gris', element: 'td', attributes: { 'class': 'bck-td-2'} },
				{ name: 'Celda 03 Azul', element: 'td', attributes: { 'class': 'bck-td-3'} },
				{ name: 'Celda 04 Azul', element: 'td', attributes: { 'class': 'bck-td-4'} },
				{ name: 'Celda 05 Azul', element: 'td', attributes: { 'class': 'bck-td-5'} },
				{ name: 'Celda 06 Marron', element: 'td', attributes: { 'class': 'bck-td-6'} },
				{ name: 'Celda 07 Marron', element: 'td', attributes: { 'class': 'bck-td-7'} },
				{ name: 'Celda 08 Morada', element: 'td', attributes: { 'class': 'bck-td-8'} },
				{ name: 'Celda 09 Morada', element: 'td', attributes: { 'class': 'bck-td-9'} },
				{ name: 'Celda 10 Verde', element: 'td', attributes: { 'class': 'bck-td-10'} },
				{ name: 'Celda 11 Verde', element: 'td', attributes: { 'class': 'bck-td-11'} },
				{ name: 'Celda 12 Rosa', element: 'td', attributes: { 'class': 'bck-td-12'} },
				{ name: 'Celda 13 Verde CL', element: 'td', attributes: { 'class': 'bck-td-13'} },
				{ name: 'Celda 14 Verde CL', element: 'td', attributes: { 'class': 'bck-td-14'} },
				{ name: 'Celda 15 Amarilla', element: 'td', attributes: { 'class': 'bck-td-15'} },
				{ name: 'Celda 16 Amarilla', element: 'td', attributes: { 'class': 'bck-td-16'} },
				{ name: 'Celda 17 Naranja', element: 'td', attributes: { 'class': 'bck-td-17'} },
			]
		},

		init: function (scope) {
			var that = scope || this;
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.removeFinalSlide();
			that.handleScrollEnd();
			that.setTooltip();
			window.editar && that.configEditor();

			if ($('.navbar-bottom').length > 0) {
 				$('.navbar-bottom ol').wrapAll('<div id="bottom-navigator"></div>');
		 		var width = 0;
		 		$('.navbar-bottom li').each(function(i, elem){ width += $(elem).outerWidth(true); });
		 		$('.navbar-bottom ol').css('width', width * 1.1);
		 		var scroll = new IScroll('#bottom-navigator', {
		 			scrollX: true,
		 			scrollY: false,
		 			eventPassthrough: true
		 		});
		 		scroll.on('scrollEnd', that.handleScrollEnd);
		 		that.handleScrollEnd.call(scroll);
	 		}

		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},


		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html().trim() + ' > ' + blink.courseInfo.unit;
			});
		},

		handleScrollEnd: function () {
 			$('#bottom-navigator')
 				.removeClass('show_left')
 				.removeClass('show_right');

 			if (this.x < 0) {
 				$('#bottom-navigator').addClass('show_left');
 			}
 			if (this.x > this.maxScrollX) {
 				$('#bottom-navigator').addClass('show_right');
 			}

 		},

		setTooltip: function () {},

		//BK-15873 Quitamos la funcion getEditorStyles para que la herede de basic
	};

	smchile2021Style.prototype = _.extend({}, new blink.theme.styles.basic(), smchile2021Style.prototype);

	blink.theme.styles.smchile2021 = smchile2021Style;

})( blink );
