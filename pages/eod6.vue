<template>
  <section class="container">
    <div class="header">
      <div class="align_left">
        <div>
          <h1 v-if="brand==='Spinraza'">SPINRAZA®
            <span>(nusinersen)</span> <br /> {{program_title}}</h1>
          <h1 v-else>{{program_title}}</h1>
        </div>
      </div>
      <div
        v-if="brand==='Spinraza'"
        class="align_right"
      >
        <img
          src="~/assets/spinraza_logo.jpg"
          width="300"
        ></div>
      <div
        v-else
        class="align_right"
      >
        <img
          src="~/assets/Biogen_Logo_Standard-rgb_R.png"
          width="250"
        ></div>
    </div>
    <div class="content">
      <div>
        <div class="align_left">
          <div v-if="brand==='Biogen'"> To join the session please fill out the information on the right and click ‘Join’. The email address and program ID must match the ones you received in your registration email. <br /><br /> When prompted please enter a direct dial phone number (does not work with extensions) and the system will call you for meeting audio. Note: Please see Biogen’s privacy policy below for more information. <br /><br /> If you need technical help please click on the Chat below for assistance.</div>
          <div v-else-if="brand==='Spinraza'"> To join the session please fill out the information on the right and click ‘Join’. The email address and program ID must match the ones you received in your registration email. <br /><br /> When prompted please enter a direct dial phone number (does not work with extensions) and the system will call you for meeting audio. Note: Please see Biogen’s privacy policy below for more information. <br /><br /> If you need technical help please click on the Chat below for assistance.</div>
          <div v-else-if="brand==='Tecfidera'"> To join the session please fill out the information on the right and click ‘Join’. The email address and program ID must match the ones you received in your registration email. <br /><br /> When prompted please enter a direct dial phone number (does not work with extensions) and the system will call you for meeting audio. Note: Please see Biogen’s privacy policy below for more information. <br /><br /> If you need technical help please click on the Chat below for assistance.</div>
          <div v-else-if="brand==='Tysabri'"> To join the session please fill out the information on the right and click ‘Join’. The email address and program ID must match the ones you received in your registration email. <br /><br /> When prompted please enter a direct dial phone number (does not work with extensions) and the system will call you for meeting audio. Note: Please see Biogen’s privacy policy below for more information. <br /><br /> If you need technical help please click on the Chat below for assistance.</div>
          <div v-else-if="brand==='Zinbryta'"> To join the session please fill out the information on the right and click ‘Join’. The email address and program ID must match the ones you received in your registration email. <br /><br /> When prompted please enter a direct dial phone number (does not work with extensions) and the system will call you for meeting audio. Note: Please see Biogen’s privacy policy below for more information. <br /><br /> If you need technical help please click on the Chat below for assistance.</div>
          <div v-else-if="brand==='DSE'"> To join the session please fill out the information on the right and click ‘Join’. The email address and program ID must match the ones you received in your registration email. <br /><br /> When prompted please enter a direct dial phone number (does not work with extensions) and the system will call you for meeting audio. Note: Please see Biogen’s privacy policy below for more information. <br /><br /> If you need technical help please click on the Chat below for assistance.</div>
          <div v-else-if="brand==='Biogen'"> To join the session please fill out the information on the right and click ‘Join’. The email address and program ID must match the ones you received in your registration email. <br /><br /> When prompted please enter a direct dial phone number (does not work with extensions) and the system will call you for meeting audio. Note: Please see Biogen’s privacy policy below for more information. <br /><br /> If you need technical help please click on the Chat below for assistance.</div>
          <div v-else> There is no event for this page as of the moment. </div>
        </div>
        <div class="align_right">
          <p class="notif">{{notification}}</p>
          <form @submit.stop.prevent="handleSubmit">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              v-model="first_name"
              class="input half"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              v-model="last_name"
              class="input half"
            />
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              v-model="email"
              class="input"
            />
            <input
              type="text"
              name="program_id"
              placeholder="Program ID"
              v-model="program_id"
              class="input"
            />
            <b-btn
              @click="handleSubmit"
              class="button is-dark is-fullwidth"
              :disabled="disabled == 0"
            >Join</b-btn>
          </form>
        </div>
      </div>
      <div class="bottom_cont">
        <ul v-if="brand==='Biogen'">
          <li>
            <a
              href="https://www.biogen.com/en_us/privacy-policy.html"
              target="_blank"
            >Privacy Policy</a>
          </li>
          <li>
            <a
              href="https://www.biogen.com/en_us/terms-and-conditions.html"
              target="_blank"
            >Terms &amp; Conditions</a>
          </li>
        </ul>
        <ul v-else-if="brand==='DSE'">
          <li>
            <a
              href="https://www.biogen.com/en_us/privacy-policy.html"
              target="_blank"
            >Privacy Policy</a>
          </li>
          <li>
            <a
              href="https://www.biogen.com/en_us/terms-and-conditions.html"
              target="_blank"
            >Terms &amp; Conditions</a>
          </li>
        </ul>
        <ul v-else>
          <li>
            <a
              href="https://www.biogen.com/en_us/privacy-policy.html"
              target="_blank"
            >Privacy Policy</a>
          </li>
          <li>
            <a
              v-bind:href="''+ important +''"
              target="_blank"
            >Important Safety Information</a>
          </li>
          <li>
            <a
              v-bind:href="''+ prescribing +''"
              target="_blank"
            >Prescribing Information</a>
          </li>
          <li>
            <a
              href="https://www.biogen.com/en_us/terms-and-conditions.html"
              target="_blank"
            >Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="align_left">© 2018 Biogen. All rights reserved.</div>
      <div class="align_right">{{bottext}}</div>
    </div>
    <div class="chattitle">
      <p
        v-if="brand==='Biogen'"
        class="chatun"
      >Need Help?</p>
      <p v-else>Technical Difficulties?</p>
    </div>
    <div id="contactinfo">Or call INTEMPIO at
      <a href="tel:+14843716202">(484) 371-6202 x2</a> for technical support</div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      program_id: "",
      notification: "",
      brand: "",
      program_title: "",
      bottext: "",
      important: "",
      prescribing: "",
      ulink: "",
      progid: "",
      disabled: 0
    };
  },
  mounted() {
    let script = document.createElement("script");
    script.setAttribute(
      "src",
      "//www.socialintents.com/api/socialintents.1.3.js#2c9fa56367aa74090167aca4989e006b"
    );
    document.head.appendChild(script);
  },
  created: function() {
    this.onLoadData();
  },
  methods: {
    async onLoadData() {
      try {
        var cur_pageUrl = window.location.pathname;
        cur_pageUrl = cur_pageUrl.substring(1, 5);
        let url = process.env.VUE_APP_API + "/api/v3/live-events/eod?id=eod6";
        console.log('cur_pageUrl', cur_pageUrl);
        console.log('onload process.env.VUE_APP_API', process.env.VUE_APP_API);
        let response = await axios.get(url);
        let data = response.data;
        console.log("onLoadData function" + data);
        console.log(data);
        if (data.length > 0) {
          this.disabled = "1";
          let i;
          for (i = 0; i < data.length; i++) {
            let d = data[i];
            if (
              d["Landing Page"].toLowerCase() ==
              cur_pageUrl.substring(0, cur_pageUrl.length).toLowerCase()
            ) {
              let brand = d["Brand"];
              let new_url = "/" + brand + "/" + cur_pageUrl;
              window.history.replaceState({}, document.title, new_url);
              this.brand = d["Brand"];
              this.program_title = d["Title"];
              this.progid = d["Program ID"];
              this.ulink = d["ACLink"];

              if (brand == "Biogen") {
                this.bottext = "FCH-US-3338 08/18";
              } else if (brand == "Spinraza") {
                this.important =
                  "https://www.spinraza.com/en_us/home/important-safety-information.html";
                this.prescribing =
                  "https://www.spinraza.com/content/dam/commercial/specialty/spinraza/caregiver/en_us/pdf/spinraza-prescribing-information.pdf";
                this.bottext = "SPZ-US-1315 8/18";
              } else if (brand == "Tecfidera") {
                this.important =
                  "https://www.tecfiderahcp.com/en_us/home/isi.html";
                this.prescribing =
                  "https://www.tecfidera.com/content/dam/commercial/multiple-sclerosis/tecfidera/pat/en_us/pdf/full-prescribing-info.pdf";
                this.bottext = "SPZ-US-1315 8/18";
              } else if (brand == "Tysabri") {
                this.important =
                  "https://www.tysabrihcp.com/en_us/home/important-safety-information.html";
                this.prescribing =
                  "https://www.tysabri.com/content/dam/commercial/multiple-sclerosis/tysabri/pat/en_us/pdfs/tysabri_prescribing_information.pdf";
                this.bottext = "SPZ-US-1315 8/18";
              } else if (brand == "Zinbryta") {
                this.important =
                  "https://www.zinbrytahcp.com/en_us/home/important-safety-information.html";
                this.prescribing =
                  "https://www.zinbryta.com/content/dam/commercial/multiple-sclerosis/zinbryta/na/en_us/pdfs/zinbryta-prescribing-information.pdf";
                this.bottext = "SPZ-US-1315 8/18";
              } else if (brand == "DSE") {
                console.log("brand DSE");
              }
              break;
            }
            console.log(d);
          }
        } else {
          console.log(
            "There is no data in google sheet, please check your google sheet. Or contact developer"
          );
        }
      } catch (e) {
        console.log("Error in function handleSubmit" + e);
      }
    },
    async handleSubmit() {
      try {
        let data = {
          event_type: "eod",
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          program_id: this.program_id
        };
        let url = process.env.VUE_APP_API + "/api/v3/email-verification/";
        console.log('handle submit process.env.VUE_APP_API', process.env.VUE_APP_API);
        let response = await axios.post(url, data);
        let temp = response.data;
        console.log("handleSubmit function" + temp);
        if (this.first_name === "" || this.last_name === "") {
          this.notification = "Please enter name";
        } else if (this.email === "") {
          this.notification = "Please enter email address";
        } else if (this.program_id === "") {
          this.notification = "Please enter program id";
        } else if (this.program_id !== this.progid) {
          console.log(this.progid);
          this.notification =
            "Incorrect Program ID, please check your email notification and try again.";
        } else if (temp.startsWith("http")) {
          window.location.href = temp;
          this.notification = "Logging in to the Event...";
        } else {
          this.notification = temp;
        }
      } catch (e) {
        console.log("Error in function handleSubmit" + e);
      }
    }
  }
};
</script>
