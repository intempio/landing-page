	jQuery(document).ready(function($){
	    $("#et_pb_contact_email_1").attr({type:"email"});
	    $("#et_pb_contact_email2_1").attr({type:"email"});
		$("#et_pb_contact_program_id_1").on("keypress keyup blur",function (event) {
			$(this).val($(this).val().replace(/[^\d].+/, ""));
				if ((event.which < 48 || event.which > 57)) {
			   	event.preventDefault();
			}
		});
		$("#et_pb_contact_program_id2_1").on("keypress keyup blur",function (event) {
			$(this).val($(this).val().replace(/[^\d].+/, ""));
				if ((event.which < 48 || event.which > 57)) {
			   	event.preventDefault();
			}
		});


		$('#bottom_links div.et_pb_column').css('display','none');
		//intemp.io/eod1
		//intemp.io/eod2
		//intemp.io/webcast1
		var cur_pageUrl = window.location.pathname;
		console.log('cur_pageUrl:' + cur_pageUrl)
		cur_pageUrl = cur_pageUrl.replace(/\//g,'');
		console.log('cur_pageUrl replaced:' + cur_pageUrl)
		data = cur_pageUrl;
		console.log('data:' + data)
		if(cur_pageUrl === "eod1" || cur_pageUrl === "eod2" || cur_pageUrl === "eod3"  || cur_pageUrl === "eod4" || cur_pageUrl === "eod5" || cur_pageUrl === "eod6"){
			//EOD webhook
			jQuery.post('https://runflow.built.io/run/27mqbwl0xi?sync=true', {pageUrl: data}, function(response){
				console.log('Got this from the server: ' + response );
				var pagetypeInfo = jQuery.parseJSON(response).pagetypeInfo;
				var brand = pagetypeInfo.brand;
				var webinarTitle = pagetypeInfo.title;
				var page = pagetypeInfo.page;
				var biogen_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var spinraza_logo = "http://intemp.io/wp-content/uploads/2018/01/SpinrazaLogo_US_RGB.jpg";
				var tecfidera_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var tysabri_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var zinbryta_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var dse_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var biogen_bottext = "FCH-US-3338 08/18";
				var spinraza_bottext = "SPZ-US-1315 8/18";
				console.log('window.location.href: ' + window.location.href );
				window.history.replaceState({}, document.title, "/" + brand +"/"+ page);
				$('#cur_brand').html(brand);
				$('#et_pb_contact_brand_1').val(brand);
				if(brand == "Biogen"){
					$('#page_logo span img').attr('src', biogen_logo);
					$('#bottom_links div.et_pb_column:first-child').css('display','block');
					$('#bottom_links div.et_pb_column:last-child').css('display','block');
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html(biogen_bottext);
					$('.silc-btn-button').css('background-image','url("http://intemp.io/wp-content/uploads/2018/04/wrench_icon.png") !important');
					$('body').addClass("ms-eod");
				} else if(brand == "Spinraza"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', spinraza_logo);
					$('#webinar_title').html("SPINRAZA<span style='font-size: 30px;display: inline-block;vertical-align: top;margin-top: -10px;'>&reg;</span> <span style='font-size: 30px;'>(nusinersen)</span> <br/>" + webinarTitle);
					$('.bottom_text').html(spinraza_bottext);
					$('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.spinraza.com/content/dam/commercial/specialty/spinraza/caregiver/en_us/pdf/spinraza-prescribing-information.pdf");
					$('body').addClass("sma-eod");
				} else if(brand == "Tecfidera"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', tecfidera_logo);
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html();
					$('#bottom_links .et_pb_column_5 .et_pb_text_inner a').attr("href", "https://www.tecfiderahcp.com/en_us/home/isi.html");
					$('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.tecfidera.com/content/dam/commercial/multiple-sclerosis/tecfidera/pat/en_us/pdf/full-prescribing-info.pdf");
					$('body').addClass("sma-eod");
				} else if(brand == "Tysabri"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', tysabri_logo);
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html();
					$('#bottom_links .et_pb_column_5 .et_pb_text_inner a').attr("href", "https://www.tysabrihcp.com/en_us/home/important-safety-information.html");
					$('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.tysabri.com/content/dam/commercial/multiple-sclerosis/tysabri/pat/en_us/pdfs/tysabri_prescribing_information.pdf");
					$('body').addClass("sma-eod");
				} else if(brand == "Zinbryta"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', zinbryta_logo);
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html();
					$('#bottom_links .et_pb_column_5 .et_pb_text_inner a').attr("href", "https://www.zinbrytahcp.com/en_us/home/important-safety-information.html");
					$('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.zinbryta.com/content/dam/commercial/multiple-sclerosis/zinbryta/na/en_us/pdfs/zinbryta-prescribing-information.pdf");
					$('body').addClass("sma-eod");
				} else if(brand == "DSE"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', dse_logo);
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html();
					$('body').addClass("sma-eod");
				}else{
					//do nothing.
					//Note from Isye: it would be better if there is message, for example: "there is no event with your detail for today".
					//otherwise, user will see it as success page loading, but there is network problem
				}

			});
		}else if(cur_pageUrl === "webcast1" || cur_pageUrl === "webcast2" || cur_pageUrl === "webcast3"){
			//PEP webhook
			jQuery.post('https://runflow.built.io/run/2DK1vAkadY?sync=true', {pageUrl: data}, function(response){
				console.log('Got this from the server: ' + response );
				var pagetypeInfo = jQuery.parseJSON(response).pagetypeInfo;
				var brand = pagetypeInfo.brand;
				var webinarTitle = pagetypeInfo.title;
				var page = pagetypeInfo.page;
				var biogen_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var spinraza_logo = "http://intemp.io/wp-content/uploads/2018/01/SpinrazaLogo_US_RGB.jpg";
				var tecfidera_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var tysabri_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var zinbryta_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var dse_logo = "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png";
				var biogen_bottext = "FCH-US-3338 08/18";
				var spinraza_bottext = "SPZ-US-1203 8/18";
				window.history.replaceState({}, document.title, "/" + brand +'/'+ page);
				$('#cur_brand').html(brand);
				$('#et_pb_contact_brand2_1').val(brand);
				if(brand == "Biogen"){
					$('#page_logo span img').attr('src', biogen_logo);
					$('#bottom_links div.et_pb_column:first-child').css('display','block');
					$('#bottom_links div.et_pb_column:last-child').css('display','block');
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html(biogen_bottext);
					$('body').addClass("ms-eod");

				} else if(brand == "Spinraza"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', spinraza_logo);
					$('#webinar_title').html("SPINRAZA<span style='font-size: 30px;display: inline-block;vertical-align: top;margin-top: -10px;'>&reg;</span> <span style='font-size: 30px;'>(nusinersen)</span> <br/>" + webinarTitle);
					$('.bottom_text').html(spinraza_bottext);
					$('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.spinraza.com/content/dam/commercial/specialty/spinraza/caregiver/en_us/pdf/spinraza-prescribing-information.pdf");
					$('body').addClass("sma-eod");
				} else if(brand == "Tecfidera"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', tecfidera_logo);
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html();
					$('#bottom_links .et_pb_column_5 .et_pb_text_inner a').attr("href", "https://www.tecfidera.com/en_us/home/important-safety-information.html");
					$('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.tecfidera.com/content/dam/commercial/multiple-sclerosis/tecfidera/pat/en_us/pdf/full-prescribing-info.pdf");
					$('body').addClass("sma-eod");
				} else if(brand == "Tysabri"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', tysabri_logo);
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html();
					$('#bottom_links .et_pb_column_5 .et_pb_text_inner a').attr("href", "https://www.tysabri.com/en_us/home/important-safety-information.html");
					$('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.tysabri.com/content/dam/commercial/multiple-sclerosis/tysabri/pat/en_us/pdfs/tysabri_prescribing_information.pdf");
					$('body').addClass("sma-eod");
				} else if(brand == "Zinbryta"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', zinbryta_logo);
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html();
					$('#bottom_links .et_pb_column_5 .et_pb_text_inner a').attr("href", "https://www.zinbryta.com/en_us/home/important-safety-information.html");
					$('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.zinbryta.com/content/dam/commercial/multiple-sclerosis/zinbryta/na/en_us/pdfs/zinbryta-prescribing-information.pdf");
					$('body').addClass("sma-eod");
				} else if(brand == "DSE"){
					$('#bottom_links div.et_pb_column').css('display','block');
					$('#page_logo span img').attr('src', dse_logo);
					$('#webinar_title').html(webinarTitle);
					$('.bottom_text').html();
					$('body').addClass("sma-eod");
				}else{
					//do nothing
				}

			});
		}else{}


		//ON SUBMIT
	$('.et_pb_contact_form').on("submit",function(e){
			e.preventDefault();
			var formData = $(".et_pb_contact_form").serializeArray();
			var formObject = {};
			formData.forEach(function(field) {
				formObject[field.name] = field.value
			});

			var uname = ""; //null sting so includes wont throw error
			var email = "";
			var progid = "";
			var lastname = ""


			Object.keys(formObject).forEach(function(key) {
				var data = formObject[key]
				if(key.indexOf('first')!== -1) {
					uname = data;
				} else if(key.indexOf('email')!== -1) {
					email = data;
				} else if(key.indexOf('program_id')!== -1 || key.indexOf('meetingid')!== -1 ) {
					progid = data
				} else if(key.indexOf("last")!== -1) {
					lastname = data;
				}

			})

			if ( uname == "" ) {
			    $('.et-pb-contact-message').css("display","none");
				$("#form-error-message").html("Please enter name");
				return false;
			}else if( email == ""){
			    $('.et-pb-contact-message').css("display","none");
				$("#form-error-message").html("Please enter email address");
				return false;
			}else if( progid == ""){
			    $('.et-pb-contact-message').css("display","none");
				$("#form-error-message").html("Please enter program id");
				return false;
			}

			var curUrl = window.location.href;
			console.log('curUrl on submit:' + curUrl)
			var path = curUrl.replace(/^https?:\/\//, '').split('/');
			var cur_pageUrl = path[2];
			var emaillower = email.toLowerCase();
			//console.log(cur_pageUrl);


						if(cur_pageUrl === "eod1" || cur_pageUrl === "eod2" || cur_pageUrl === "eod3" || cur_pageUrl === "eod4" || cur_pageUrl === "eod5" || cur_pageUrl === "eod6"){
				//EOD Webhook
				jQuery.post('https://runflow.built.io/run/lWByRJxwM?sync=true', formData, function(response1) {
					console.log('Got this from the server: ' + response1 );
					var programInfoFound = jQuery.parseJSON(response1).programInfoFound;
					var programFound = jQuery.parseJSON(response1).programFound;
					var programUserFound = jQuery.parseJSON(response1).programUserFound;
					var programInfo = jQuery.parseJSON(response1).programInfo;

					if(!programFound){
					    $('.et-pb-contact-message').css("display","none");
						$("#form-error-message").html("Incorrect Program ID, please check your email notification and try again.");
					}else{
						var cur_brand = $('#cur_brand').html();
						var brand = programInfo.brand;
						if(cur_brand === brand){
							if (emaillower.indexOf('@biogen.com')!== -1 || emaillower.indexOf('@BIOGEN.COM')!== -1) {
								var acLink = programInfo.acLink;
								window.location.href = acLink + "?guestName=" + uname + " " + lastname;

							} else {
								if(!programUserFound){
								    $('#et_pb_contact_email_1').css("background-color","#f9bbbb");
								    $('.et-pb-contact-message').css("display","none");
									$("#form-error-message").html("This email address is not registered for this event.  The email address must be entered exactly as it was upon registration.");
								}else{
									var acLink = programInfo.acLink;
									window.location.href = acLink + "?guestName=" + uname + " " + lastname;
								}
							}
						}else{
						    $('.et-pb-contact-message').css("display","none");
							$("#form-error-message").html("Incorrect Program ID, please check your email notification and try again.");
						}
					}

				});
			}else if(cur_pageUrl === "webcast1" || cur_pageUrl === "webcast2" || cur_pageUrl === "webcast3"){
				//PEP Webhook
				jQuery.post("https://runflow.built.io/run/1z6oPr2bGQ?sync=true", formData, function(response1) {
					console.log('Got this from the server: ' + response1 );
					var programInfoFound = jQuery.parseJSON(response1).programInfoFound;
					var programFound = jQuery.parseJSON(response1).programFound;
					var programUserFound = jQuery.parseJSON(response1).programUserFound;
					var programInfo = jQuery.parseJSON(response1).programInfo;

					if(!programFound){
					    $('.et-pb-contact-message').css("display","none");
						$("#form-error-message").html("Incorrect Program ID, please check your email notification and try again.");
					}else{
						var cur_brand = $('#cur_brand').html();
						var brand = programInfo.brand;
						if(cur_brand === brand){

							if (emaillower.indexOf('@biogen.com')!== -1 || emaillower.indexOf('@BIOGEN.COM')!== -1) {
								var acLink = programInfo.acLink;
								window.location.href = acLink + "?guestName=" + uname + " " + lastname;

							}else{
							    if(!programUserFound){
									$('#et_pb_contact_email2_1').css("background-color","#f9bbbb");
									$('.et-pb-contact-message').css("display","none");
									$("#form-error-message").html("This email address is not registered for this event.  The email address must be entered exactly as it was upon registration.");
								}else{
									var acLink = programInfo.acLink;
									window.location.href = acLink + "?guestName=" + uname + " " + lastname;
								}
							}
						}else{
						    $('.et-pb-contact-message').css("display","none");
							$("#form-error-message").html("Incorrect Program ID, please check your email notification and try again.");
						}
					}

				});
			}else{
			}
		});
	});
