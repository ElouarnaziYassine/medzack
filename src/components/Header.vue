<template>
  <section>
    <Navbar/>
    <div class="content">
        <div class="contentBx">
            <h2>The Body Achieves What The Mind Believes.</h2>
            <p>Do You Want To Change Your Body? Become A Pro Athlete? WHY NOT!</p>
            <a href="/programmes">START NOW</a>
        </div>
    </div>
    <ul class="sci">
        <li><a href="#"><img src="../assets/facebook.png" alt=""></a></li>
        <li><a href="#"><img src="../assets/instagram.png" alt=""></a></li>
        <li><a href="#"><img src="../assets/youtube.png" alt=""></a></li>
    </ul>
  </section>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'HeaDer',
  components: {
    Navbar
  }
}
</script>

<style scoped>
    section{
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: url("../assets/bg.png");
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 100px;
    }
    .content{
        max-width: 600px;
    }
    .content .contentBx h2{
        font-size: 3.3em;
        color: white;
        line-height: 1em;
    }
    .content .contentBx p
    {
        font-size: 1.3em;
        color: #fff;
        font-weight: 300;
        margin: 20px 0;
    }
    .content .contentBx a{
        display: inline-block;
        padding: 10px 30px;
        text-decoration: none;
        color: white;
        border: 1px solid white;
        font-weight: 500;
        letter-spacing: 1px;
    }
    .content .contentBx a:hover{
        border: 1px solid rgb(0, 89, 255);
        background-color: rgb(0, 89, 255);
        -webkit-transition: 0.5s;
        transition: 0.5s;
    }
    .sci
    {
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .sci li
    {
        list-style: none;
    }
    .sci li a
    {
        display: inline-block;
        filter: invert(1);
        margin: 5px 0;
        transform: scale(0.6);
    }
    .sci li a:hover
    {
        filter: opacity(0.5) drop-shadow(0 0 0 rgb(0, 89, 255))
    }

    @media (max-width: 991px)
        {
            section
            {
                padding: 40px;
                background: url("../assets/bg2.png");
                background-size: cover;
                background-position: center;
            }
            .content .contentBx h2
            {
                font-size: 2.5em;
            }
            .content .contentBx p{
                font-size: 1em;
            }
        }
</style>
