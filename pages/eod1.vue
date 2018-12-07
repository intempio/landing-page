<template>
  <section class="container">
    <div class="header">
      <div class="align_left">
        <h1>SPINRAZA®
          <span>(nusinersen)</span> <br/> HCP Virtual Group Program</h1>
      </div>
      <div class="align_right"><img src="~/assets/spinraza_logo.jpg" width="300"></div>
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
    };
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
  },
  async asyncData() {
    try {
      let response = await axios.get(
        'https://intempio-api-v3.herokuapp.com/api/v3/list-live-eod'
      );
     let data = response.data
       if(res.data[0].Brand === 'eod1'){
         console.log(res.data[0].LandingPage);
       }
     // console.log(res.data);
      var pageUrl = window.location.pathname;
      var brand = res.data[0].Brand;
      window.history.replaceState(
        {},
        document.title,
        '/' + brand + '' + pageUrl
      );
    } catch (e) {
      console.log('Error in function handleSubmit' + e);
    }
  },
};
</script>

<style>
</style>