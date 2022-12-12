<template>
  <section>
        <footer>
        <div class="footer-content">
            <a href="#" class="logo">Biozackteam<span>.</span></a>
            <p>We offer a personalized nutrition & workout programs that can get updated throughout the chosen period, we also offer all the necessary support by staying in contact with you 24/7 using written, vocals & visual messages. We coach and supervise you and track the progress every day until you reach your goals and change your body.</p>
            <ul class="socials">
                <li><a href="https://www.facebook.com/med.zaki.9400" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/medzakc" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/@medzaki4864/videos" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="#">BIOZACKTEAM.</a>  </p>
        </div>

    </footer>
  </section>
</template>

<script>

export default {
  name: 'FooTer',
  components: {
    
  }
}
</script>

<style scoped>
section{
    margin-top: 50px;
}
footer{
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(32, 32, 32);
    height: auto;
    width: 100vw;
    padding-top: 40px;
    color: #fff;
}
footer .logo{
    position: relative;
    font-size: 2em;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    Letter-spacing: 1px;
}
footer .logo span{
    color: rgb(0, 89, 255);
}
.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.footer-content h3{
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
}
.footer-content p{
    max-width: 700px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
}
.socials{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
}
.socials li{
    margin: 0 10px;
    border: 1.1px solid white;
    border-radius: 50%;
    padding: 8px;
}
.socials li:hover{
    background-color: rgb(0, 89, 255);
    border: 1.1px solid rgb(0, 89, 255);
    transition: .5s;
}
.socials a{
    text-decoration: none;
    color: #fff;

}
.socials a i{
    font-size: 2.2rem;
    width: 40px;
    transition: color .4s ease;
}

.footer-bottom{
    background: #000;
    width: 100vw;
    padding: 20px;
    padding-bottom: 45px;
    text-align: center;
}
.footer-bottom p{
float: left;
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
}
.footer-bottom p a{
  color: rgb(0, 89, 255);
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}
.footer-bottom span{
    text-transform: uppercase;
    opacity: .4;
    font-weight: 200;
}

@media (max-width:500px) {
.footer-menu ul{
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}
}
</style>
