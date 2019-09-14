<template>
  <div class="about">
    <div class="navBar">
      <img src="../assets/logo1.png"> 
        <ul>
        <li ><router-link to="Home"> <b>Home</b></router-link> </li>
        <li> <router-link to="Contact"> <b>Get in touch</b></router-link></li>
        </ul>
        <router-view/>
    </div>  
    <div class="container clearfix">
      <section>
        <h1>ABOUT <b> US</b></h1> 
        <hr> <br>
        <p>
          A full-service team of award-winning copywriters,producers and graphic designers delivers
          solution that harness the power of our digital properties. We work with you from conception through
          activation to develop on-strategy, breakthrough creative that generates attention and response.
        </p>
      </section>
      <aside>
        <code>
          <div class="row">
            <div class="column" >
            <img src="../assets/graphic.png" style="width:50px;">
              <h2>Graphic Design</h2> 
              <hr class="in-card">
              <p class="in-column">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has beem the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div class="column" >
            <img src="../assets/print.png" style="width:45px;">
              <h2>Pring Design</h2> 
              <hr class="in-card">
              <p class="in-column">When an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries.</p>
            </div>
          </div>

          <div class="row">
            <div class="column" >
            <img src="../assets/pc.png" style="width:50px;">
              <h2>Motion Design</h2> 
              <hr class="in-card">
              <p class="in-column">But also the leap into electronic typsetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
            </div>
            <div class="column" >
            <img src="../assets/settings.png" style="width:50px;">
              <h2>Strategy & Media</h2> 
              <hr class="in-card">
              <p class="in-column">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
              It is not only simply a random text.</p>
            </div>
          </div>
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

.container{
  padding-left: 10%;;
  padding-right: 10%;;
  
}

/* ----------Navbar---------- */

.navBar{
  padding-top: 30px;
  padding-left: 10%;;
  padding-right: 10%;;
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
  width: 30%;
}

/* ----------End Left Section---------- */

/* ----------Right Section---------- */

aside {
  float: right;
  width: 65%;
  padding-top: 80px;
}

code {
  background: #fff;
  color: #fff;
  display: block;
  padding: 1vw 35px;
  text-align: center;
}
/* ----------End Right Section---------- */

/* ----------Text---------- */

p.in-column{
  font-size: 1.1vw;
  color:#36383b;
}
p {
  color: white;
  font-size: 1vw;
  padding-bottom : 1.5vw; 
}
h1 {
  color: white;
  font-size: 45px;
}

h2 {
  color: #ed3e3e;
  font-size: 20px;
}
/* ----------End Text---------- */

/* ----------hr---------- */
hr {
  background: #ddd; 
  color: #ddd;
  clear: both; 
  float: none; 
  width: 20%; 
  height: .1em;
  margin: 0 0 0em;
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

/* ----------End hr---------- */

</style>