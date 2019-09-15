<template>
  <div class="about">
   <div class="bg"></div> 
    <div class="navBar">
      <img src="../assets/logo1.png" class="logo"> 
        <ul>
        <li ><router-link to="Home"> <b>Home</b></router-link> </li>
        <li> <router-link to="About"> <b>About Us</b></router-link></li>
        </ul>
        <router-view/>
    </div>
    <div class="container">
    <div class="row">
        <div class="side"><h1>CONTACT <b> US</b></h1>
        <hr>
        <p>
          We are here to help you and find answers to your questions on our Support section. If you can't
          find answer to your question or have any feedback, reach out to us by completing the form. All fields
          are mandatory unless otherwise stated.
        </p>
        <hr> 
        <p><b>Adress:</b> 123 Palo Alto, Palo Alto, CA 94300</p>
        <p><b>Phone:</b> +1 234-567-8910</p>
        <p><b>Email:</b> contact@yourdomain.net</p>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
    
      </div>
      <div class="main">
        <code>         
          <form   @submit="onSubmit"> 
            <input v-model="form.name" type="text" id="name" name="name" placeholder="Your Name" >
            <input v-model="form.email" type="text" id="email" name="email" placeholder="Your Email" >
            <input v-model="form.company" type="text" id="company" name="company" placeholder="Your Company" >
            <textarea v-model="form.subject" id="subject" name="subject" placeholder="Your message"  style="height:200px"></textarea>
            <input type="submit" value="Submit" >
          </form>
         </code>
      </div>
      </div>
    </div> 
    
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {
      form: {
          name:'',
          email:'',
          company:'',
          subject:''
      }
    }
  },
  methods: {
      onSubmit(e) {
        axios.post('../router/mail.js', form).then( (response) => {
          console.log('success')
        })
      }
    }
}
  
</script>
<style scoped>

/* ----------Navbar---------- */

.navBar{
  padding-top: 30px;
  padding-left: 15%;
  padding-right: 15%;
}

ul {
  float: right;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
}

li {
  float: left;
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* ---------- End Navbar---------- */

/* ----------Container---------- */
.row {  
  display: flex;
  flex-wrap: wrap;
}

.side {
  flex: 30%;
  padding: 0px;
}

.main {
  flex: 50%;
  padding-top: 20px !important ;
  padding: 20px;
}

.container{
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 20px;
  
}
/* ----------End Container---------- */

/* ----------Contact Form---------- */

input[type=text] {
  width: 90%;
  padding: 12px 0px;
  margin: 16px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #ed3e3e;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 20px;
}

textarea {
  width: 90%;
  padding: 12px 0px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #ed3e3e;
  font-family: 'Roboto', sans-serif;
  
  
}

input[type=submit]{
  border: 2px solid #ed3e3e;
  color: #ed3e3e;
  padding: 10px 35px;
  text-decoration: none;
  margin: 6px 2px;
  cursor: pointer;
  background-color: white;
  text-transform: uppercase;
}
input[type=submit]:hover {
  background-color: #FFD7D7;
}

/* ----------End Contact Form---------- */

/* ----------Right Section---------- */

code {
  background: #fff;
  color: #fff;
  display: flex;
  padding: 25px 35px;
  text-align: center;
}
/* ----------End Right Section---------- */

/* ----------Text--------- */
p.in-column{
  font-size: 19px;
  color:#36383b;
}
p {
  color: white;
  font-size: 20px;;
  padding-bottom : 1.2vw; 
}
h1 {
  color: white;
  font-size: 45px;
}

h2 {
  color: #ed3e3e;
}

hr {
  background: #ddd; 
  color: #ddd;
  clear: both; 
  float: none; 
  width: 20%; 
  height: .1em;
  margin: 0 0 1.45em;
  border: none; 
}
hr.space {
  background: #fff;
  color: #fff;
}

hr.in-card {
  float: left;
  width: 60px;
  color: #ed3e3e;
  height: 1px;
  background-color: #ed3e3e;
}
/* ----------End Text---------- */

/* ----------fa Icons---------- */

.fa {
  padding: 4px;
  font-size: 20px;
  width: 20px;
  text-align: center;
  text-decoration: none;
  margin: 8px 6px;
  background: #E7E7E7;
  opacity: 0.6;
  color: rgba(237, 62, 62, 0.6)
}

.fa:hover {
    opacity: 0.7;
}
/* ----------End fa Icons---------- */

@media screen and (max-width: 700px){
  .logo{
    width:50px;
  }
   .navBar{
  padding-top: 30px;
  padding-left: 5%;
  padding-right: 5%;
}
ul {
  float: right;
  padding-right: 20px;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
}
}
</style>