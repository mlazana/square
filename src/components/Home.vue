<template>
  <div class="about">
    <div class="bg"></div>
    <div class="navBar">
      <img src="../assets/logo1.png" class="logo"> 
        <ul>
        <li ><router-link to="About"> <b>About Us</b></router-link> </li>
        <li> <router-link to="Contact"> <b>Get in touch</b></router-link></li>
        </ul>
        <router-view/>
    </div>
    <div class="container clearfix">
      <h1>WE ARE SQUARE</h1>
      <h1>AND WE ARE COMING SOON</h1>
      <div class="row">
        <div class="column" >
          <h2>120</h2>
          <p>DAYS</p>
          </div>
          <div class="column" >
          <h2>21</h2>
          <p>HOURS</p>
          </div>
          <div class="column" >
          <h2>17</h2>
          <p>MINUTES</p>
          </div>
          <div class="column" >
          <h2>25</h2>
          <p>SECONDS</p>
        </div>
      </div>
      <form>
        <input type="text" id="lname" name="lname" placeholder="Get notified by email...">
        <button class="btn"><i class="fa fa-check"></i></button>
      </form>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.container{
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 60px;
  text-align:center;
}

/* ----------Navbar---------- */

input[type=text] {
  width: 40%;
  padding: 10px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #D8D8D8;
  color: white;
  background-color: rgba(220, 220, 220, .3) ;
  margin: 5px 10px 5px 0;
}
.btn {
  background-color: rgba(220, 220, 220, .3);
  border: 3px solid #D8D8D8;
  box-sizing: border-box;
  color: white;
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
}
.navBar{
  padding-top: 30px;
  padding-left: 15%;
  padding-right: 15%;
}

/* ---------- End Navbar---------- */

/* ----------Date Columns---------- */
* {
  box-sizing: border-box;
}


.column {
  float: left;
  width: 15%;
  padding: 7px;
}
.row {
  padding-top: 130px;
  padding-left: 27%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* ----------End Date Columns---------- */

/* ----------Text---------- */

p {
  color: white;
  font-size: 17px;
}
h1 {
  color: white;
  font-size: 50px;
}
h2 {
  color: white;
  font-size: 30px;
}
h4 {
  color: white;
  font-size: 20px;
}
ul {
  float: right;
  padding-right: 100px;
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
/* ----------End Text---------- */

/* ----------hr---------- */
hr {
  width: 65px;
  float: left;
  color: white;
  height: 2px;
  background-color: white;
}
/* ----------End hr---------- */

@media screen and (max-width: 700px){
  .logo{
    width:50px;
  }
  h1{
    font-size: 30px;
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
.column {
  float:left;
  width: 40%;
}
.row {
  padding-top: 30px;
  padding-left: 15%;
  padding-right: 5%;
}
input[type=text] {
  width: 80%;
}
}

</style>
