<template>
  <header id="top">
    <a href="#" class="logo">Biozackteam<span>.</span></a>
    <div class="toggleMenu" v-on:click="toggleMenu()"></div>
    <ul class="navigation">
        <li><a href="/">Home</a></li>
        <li><a href="/#about" class="links">About</a></li>
        <router-link to="/programmes"><li><a href="#">Programmes</a></li></router-link>
        <router-link to="/contact"><li><a href="#">Contact Us</a></li></router-link>
    </ul>
  </header>
</template>

<script>

export default {
  name: 'FixedNavbar',
  components: {
    
  },
  
}
</script>

<style scoped>

    header{
        position: relative;
        width: 100%;
        padding: 10px 100px;
        display: flex;
        justify-content: space-between;
        transition: 0.6s;
        align-items: center;
        background: rgb(32, 32, 32);
    }
    header .logo{
        margin-bottom: 20px;
        position: relative;
        font-size: 2em;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        text-decoration: none;
        Letter-spacing: 1px;
        top: 5px;
    }
    header .logo span{
        color: rgb(0, 89, 255);
    }
    header .navigation{
        position: relative;
        display: flex;
    }
    header .navigation li{
        position: relative;
        list-style: none;

    }
    header .navigation li a
    {
        position: relative;
        display: inline-block;
        color: #fff;
        margin-right: 40px;
        text-decoration: none;
        top: 20px;
    }
    header .navigation li a:after{
        content: '';
        position: relative;
        left: 1px;
        display: inline-block;
        top: -25px;
        height: 1em;
        width: 100%;
        border-bottom: 2px solid;
        margin-top: 10px;
        opacity: 0;
        color: rgb(0, 89, 255);
        -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
        transition: opacity 0.5s, transform 0.5s;
        -webkit-transform: scale(0,1);
        transform: scale(0,1);   
    }
    header .navigation li a:hover:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    @media (max-width: 991px)
        {
            header
            {
                padding: 15px 40px;
            }
            header .navigation{
                position: fixed;
                top: 0;
                Left: 0;
                right: 0;
                bottom:0;
                background: #000;
                z-index: 10;
                display: none;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            header .navigation.active{
                display: flex;
            }
            header .navigation li a{
                font-size: 24px;
                margin: 10px 0;
            }
            .toggleMenu{
                position: relative;
                width: 30px;
                height: 30px;
                background: url(../assets/menu.png);
                background-position: center;
                background-size: 30px;
                background-repeat: no-repeat;
                cursor: pointer;
                z-index: 11;
            }
        }
        .toggleMenu.active
        {
            background: url(../assets/close.png);
            background-position: center;
            background-size: 30px;
            background-repeat: no-repeat;
        }

</style>
