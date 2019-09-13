<template>
  <div class="about">
    <div class="navBar">
      <img src="../assets/logo1.png"> 
        <ul>
        <li ><router-link to="Home"> <b>Home</b></router-link> </li>
        <li> <router-link to="About"> <b>About Us</b></router-link></li>
        </ul>
        <router-view/>
    </div>
    
      
      <div class="container">
      <section>
      <h1>CONTACT <b> US</b></h1> 
          <hr> <br>
          <p>
            We are here to help you and find answers to your questions on our Support section. If you can't
            find answer to your question or have any feedback, reach out to us by completing the form. All fields
            are mandatory unless otherwise stated.
          </p>
          <hr> <br>
          <p><b>Adress:</b> 123 Palo Alto, Palo Alto, CA 94300</p>
          <p><b>Phone:</b> +1 234-567-8910</p>
          <p><b>Email:</b> contact@yourdomain.net</p>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-linkedin"></a>
      </section>

      <aside>
        <code>
          
         </code>
      </aside>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'About' 
}
</script>
<style scoped>
/* ----------Navbar---------- */

.navBar{
  padding-top: 80px;
  padding-right: 40px;
  padding-left: 150px;
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
/* ---------- End Navbar---------- */

.container{
  padding-left: 150px;
  padding-top: 40px;
  padding-right: 150px;
}

/* ----------Card---------- */

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  text-align:left;
  font-family: 'Roboto', sans-serif;
}

/* ----------End Card---------- */

/* ----------Left Section---------- */

section {
  padding-top: 50px;
  float: left;
  width: 35%;
}

/* ----------End Left Section---------- */

/* ----------Right Section---------- */

aside {
  float: right;
  width: 60%;
  padding-top: 80px;
}

code {
  background: #fff;
  border-radius: 6px;
  color: #fff;
  display: block;
  padding: 20px 25px;
  text-align: center;
}
/* ----------End Right Section---------- */


p.in-column{
  font-size: 19px;
  color:#36383b;
}
p {
  color: white;
  font-size: 20px;
  padding-bottom : 20px;
}
h1 {
  color: white;
  font-size: 50px;
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
/* ----------fa Icons---------- */

.fa {
  padding: 4px;
  font-size: 30px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  margin: 8px 6px;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #C4C4C4;
  opacity: 0.4;
  color: white;
}

.fa-twitter {
  background: #C4C4C4;
  opacity: 0.4;
  color: white;
}

.fa-google {
  background: #C4C4C4;
  opacity: 0.4;
  color: white;
}

.fa-linkedin {
  background: #C4C4C4;
  opacity: 0.4;
  color: white;
}
/* ----------End fa Icons---------- */
</style>