<template>
  <section class="container">
    <div class="header">
      <div v-if="brand==='Spinraza'" class="align_left">
        <h1>SPINRAZA®
          <span>(nusinersen)</span> <br/> HCP Virtual Group Program</h1>
      </div>
      <div v-if="brand==='Spinraza'" class="align_right">
        <img  src="~/assets/spinraza_logo.jpg" width="300"></div>
    </div>
      <div v-if="brand==='Biogen'" class="align_right">
        <img  src="~/assets/Biogen_Logo_Standard-rgb_R.png" width="300"></div>
    </div>
    <div class="content">
      <div>
        <div class="align_left">
          To join the session please fill out the information on the right and click ‘Join’. The email address and program ID must match the ones you received in your registration email. <br/><br/> When prompted please enter a direct dial phone number (does not work with extensions) and the system will call you for meeting audio. Note: Please see Biogen’s privacy policy below for more information. <br/><br/> If you need technical help please click on the Chat below for assistance.</div>
        <div class="align_right">
          <p class="notif">{{notification}}</p>
          <form @submit.stop.prevent="handleSubmit">
            <input type="text" name="first_name" placeholder="First Name" v-model="first_name" class="input half" />
            <input type="text" name="last_name" placeholder="Last Name" v-model="last_name" class="input half" />
            <input type="email" name="email_address" placeholder="Email Address" v-model="email" class="input" />
            <input type="text" name="program_id" placeholder="Program ID" v-model="program_id" class="input" />
            <!-- <input type="submit" class="button is-dark is-fullwidth" value="Join" />-->
            <b-btn @click="handleSubmit" class="button is-dark is-fullwidth">Join</b-btn>
          </form>
        </div>
      </div>
      <div class="bottom_cont">
        <ul>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Important Safety Information</a>
          </li>
          <li>
            <a href="">Prescribing Information</a>
          </li>
          <li>
            <a href="">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="align_left">© 2018 Biogen. All rights reserved.</div>
      <div class="align_right">SPZ-US-1315 8/18</div>
    </div>
  </section>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      program_id: '',
      notification: '',
      brand: '',
      program_title:'',
      biogen_logo : "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png",
      spinraza_logo : "http://intemp.io/wp-content/uploads/2018/01/SpinrazaLogo_US_RGB.jpg",
      //I found 7 texts below are the same whether the link is eod or webcast, so I put them as global variables
      //Please changed them into the current location of the logos, is ~/assets maybe?
      /*
      biogen_logo : "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png",
      spinraza_logo : "http://intemp.io/wp-content/uploads/2018/01/SpinrazaLogo_US_RGB.jpg",
      tecfidera_logo : "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png",
      tysabri_logo : "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png",
      zinbryta_logo : "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png",
      dse_logo : "http://intemp.io/wp-content/uploads/2018/01/Biogen_Logo_Standard-rgb_R.png",
      biogen_bottext : "FCH-US-3338 08/18",
      */
      spinraza_bottext :''

    };
  },
  created: function() {
    this.onLoadData();
  },
  methods: {
    async handleSubmit() {
      try {
        let data = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          program_id: this.program_id,

        };
        let response = await axios.post(
          'https://intempio-api-v3.herokuapp.com/api/v3/email-verification-eod',
          data
        );
        let temp = response.data;
        if (temp.startsWith('http')) {
          window.location.href = temp;
          this.notification = 'Logging in to the Event...';
        } else {
          this.notification = temp;
        }
        //this.notification = response.data;
        console.log(response.data);
        console.log(response);
      } catch (e) {
        console.log('Error in function handleSubmit' + e);
      }
    },
    async onLoadData() {
    try {
      //1. check, which link we are now
      var cur_pageUrl = window.location.pathname;
      //cur_pageUrl = /eod6
      cur_pageUrl = cur_pageUrl.substring(1, cur_pageUrl.length)
      //cur_pageUrl = eod6
      console.log(cur_pageUrl)

      //2. is it eod or webcast?
      if(cur_pageUrl.indexOf('eod',0)>-1){
        //this is eod
        console.log('this is eod')

        this.spinraza_bottext = "SPZ-US-1315 8/18";

      }else{
        //this is webcast
        console.log('webcast')
        this.spinraza_bottext = "SPZ-US-1203 8/18";
      }

      //2. now, get the details of the live events from api
      let response = await axios.get(
        'https://intempio-api-v3.herokuapp.com/api/v3/list-live-eod'
      );

     let data = response.data
     console.log(data)
     if(data.length>0){
        let i;
        for(i=0; i<data.length; i++ ){
          let d = data[i]
          //cur_pageUrl= eod6
          //cur_pageUrl.substring(0, cur_pageUrl.length)
          console.log('check eod', cur_pageUrl.substring(0, cur_pageUrl.length))
          console.log(d['LandingPage'])
          if(d['LandingPage'].toLowerCase()==cur_pageUrl.substring(0, cur_pageUrl.length)){

            //the event for this link is live, so take the detail data
            //2a. get brand
            let brand = d['Brand']
            let new_url = '/' + brand + '/' + cur_pageUrl
            console.log('new url for history', new_url)
            window.history.replaceState({}, document.title, new_url)
            this.brand =  d['Brand']
            //2b. get program Title
            this.program_title = d['Program Title']

            //2c. set bottom content
            if(brand=="Biogen"){
                //set these details
                console.log('brand Biogen')
                /*
                $('#page_logo span img').attr('src', biogen_logo);
                $('#bottom_links div.et_pb_column:first-child').css('display','block');
                $('#bottom_links div.et_pb_column:last-child').css('display','block');
                $('#webinar_title').html(webinarTitle);
                $('.bottom_text').html(biogen_bottext);
                $('.silc-btn-button').css('background-image','url("http://intemp.io/wp-content/uploads/2018/04/wrench_icon.png") !important');
                $('body').addClass("ms-eod");
                */
            }else if(brand == "Spinraza"){
                console.log('brand Spinraza')
                /*
                $('#bottom_links div.et_pb_column').css('display','block');
                $('#page_logo span img').attr('src', spinraza_logo);
                $('#webinar_title').html("SPINRAZA<span style='font-size: 30px;display: inline-block;vertical-align: top;margin-top: -10px;'>&reg;</span> <span style='font-size: 30px;'>(nusinersen)</span> <br/>" + webinarTitle);
                $('.bottom_text').html(spinraza_bottext);
                $('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.spinraza.com/content/dam/commercial/specialty/spinraza/caregiver/en_us/pdf/spinraza-prescribing-information.pdf");
                $('body').addClass("sma-eod");
                */
            } else if(brand == "Tecfidera"){
                console.log('brand Tecfidera')
                /*
                $('#bottom_links div.et_pb_column').css('display','block');
                $('#page_logo span img').attr('src', tecfidera_logo);
                $('#webinar_title').html(webinarTitle);
                $('.bottom_text').html();
                $('#bottom_links .et_pb_column_5 .et_pb_text_inner a').attr("href", "https://www.tecfiderahcp.com/en_us/home/isi.html");
                $('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.tecfidera.com/content/dam/commercial/multiple-sclerosis/tecfidera/pat/en_us/pdf/full-prescribing-info.pdf");
                $('body').addClass("sma-eod");
                */
            } else if(brand == "Tysabri"){
                console.log('brand Tysabri')
                /*
                $('#bottom_links div.et_pb_column').css('display','block');
                $('#page_logo span img').attr('src', tysabri_logo);
                $('#webinar_title').html(webinarTitle);
                $('.bottom_text').html();
                $('#bottom_links .et_pb_column_5 .et_pb_text_inner a').attr("href", "https://www.tysabrihcp.com/en_us/home/important-safety-information.html");
                $('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.tysabri.com/content/dam/commercial/multiple-sclerosis/tysabri/pat/en_us/pdfs/tysabri_prescribing_information.pdf");
                $('body').addClass("sma-eod");
                */
              } else if(brand == "Zinbryta"){
                console.log('brand Zinbryta')
                /*
                $('#bottom_links div.et_pb_column').css('display','block');
                $('#page_logo span img').attr('src', zinbryta_logo);
                $('#webinar_title').html(webinarTitle);
                $('.bottom_text').html();
                $('#bottom_links .et_pb_column_5 .et_pb_text_inner a').attr("href", "https://www.zinbrytahcp.com/en_us/home/important-safety-information.html");
                $('#bottom_links .et_pb_column_6 .et_pb_text_inner a').attr("href", "https://www.zinbryta.com/content/dam/commercial/multiple-sclerosis/zinbryta/na/en_us/pdfs/zinbryta-prescribing-information.pdf");
                $('body').addClass("sma-eod");
                */
              } else if(brand == "DSE"){
                console.log('brand DSE')
                /*
                $('#bottom_links div.et_pb_column').css('display','block');
                $('#page_logo span img').attr('src', dse_logo);
                $('#webinar_title').html(webinarTitle);
                $('.bottom_text').html();
                $('body').addClass("sma-eod");
                */
              }
            break;
          }
          console.log(d)
        }

     }else{
      console.log('There is no data in google sheet, please check your google sheet. Or contact developer')
     }

      /*

       if(res.data[0].Brand === 'eod1'){
         console.log(res.data[0].LandingPage);
       }
      var pageUrl = window.location.pathname;
      var brand = res.data[0].Brand;
      window.history.replaceState(
        {},
        document.title,
        '/' + brand + '' + pageUrl
      );
      */
    } catch (e) {
      console.log('Error in function handleSubmit' + e);
    }
  }
  }

};
</script>

<style>
</style>
