<template>
 <div class="about">
    <div class="navBar">
      <img src="../assets/logo1.png"> 
        <ul>
        <li ><router-link to="Home"> <b>Home</b></router-link> </li>
        <li> <router-link to="About"> <b>About</b></router-link></li>
        </ul>
        <router-view/>
    </div>
    <div class="container"> </div>
      
  </div>
</template>

<script>
export default {
  name: 'Contact',
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
  padding-top: 60px;
}
p {
  color: white;
  font-size: 17px;
}
h1 {
  color: white;
  font-size: 50px;
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
