<template>
  <div class="about">
    <div class="navBar">
      <img src="../assets/logo1.png"> 
        <ul>
        <li ><router-link to="About"> <b>About Us</b></router-link> </li>
        <li> <router-link to="Contact"> <b>Get in touch</b></router-link></li>
        </ul>
        <router-view/>
    </div>
    <div class="container">
    <h1>WE ARE SQUARE</h1>
    <h1>AND WE ARE COMING SOON</h1>
    <div class="countdown">
    <h3>120</h3>
    <h4>DAYS</h4>
    </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar{
  padding-top: 80px;
  padding-right: 10px;
  padding-left: 150px;
}

.container{
  padding-left: 150px;
  padding-top: 150px;
  text-align:center;
}
.countdown{
  padding-top: 200px;
}
p {
  color: white;
  font-size: 17px;
}
h1 {
  color: white;
  font-size: 50px;
}
h3 {
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

hr {
  width: 65px;
  float: left;
  color: white;
  height: 2px;
  background-color: white;
}

</style>
