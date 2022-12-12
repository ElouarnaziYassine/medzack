<template>
    <section>
      <div class="contact-body">
    <div class="contact_container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fab fa-facebook"></i>
              <div class="topic">Med Zaki</div>
            </div>
            <div class="phone details">
              <i class="fab fa-instagram"></i>
              <div class="topic">medzakc</div>
            </div>
            <div class="email details">
              <i class="fab fa-youtube"></i>
              <div class="topic">Med Zaki</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">SEND US A MESSAGE!</div>
            <form action="https://formsubmit.co/marrakechstyle.info@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="New email woooo!">
                <div class="input-box">
                <input type="text" name="name" placeholder="Enter your name" required>
                </div>
                <div class="input-box">
                <input type="email" name="email" placeholder="Enter your email" required>
                </div>
                <div class="input-box message-box">
                    <textarea type="text" rows="4" name="message" cols="50" placeholder="Enter your message" required></textarea>
                </div>
                <div class="button">
                    <input type="button" value="Submit">
                </div>
            </form>
        </div>    
        </div>    
        </div>    
    </div>
    </section>
</template>

<script>

export default {
  name: 'ContactUs',
  components: {
    
  }
}
</script>

<style scoped>
  section {
  padding: 100px 0;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

section::after {
  content: "";
  width: 100%;
  height: 55%;
  background: linear-gradient(to right, rgba(0, 45, 128, 1) 0%, rgb(0, 89, 255, 1) 100%);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.85;
  z-index: -1;
}

  .contact-body{ 
  padding-top: 50px;
  min-height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1700px;
  margin: auto;
}
.contact_container{
  width: 80%;
  background: #fff;
  border-radius: 6px;
  padding: 100px 50px 100px 0px;
  box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.3);
}
.contact_container .content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contact_container .content .left-side{
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;
}
.content .left-side::before{
  content: '';
  position: absolute;
  height: 70%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: #afafb6;
}
.content .left-side .details{
  margin: 14px;
  text-align: center;
}
.content .left-side .details i{
  font-size: 50px;
  color: rgb(0, 89, 255);
  margin-bottom: 10px;
}
.content .left-side .details .topic{
  font-size: 18px;
  font-weight: 500;
}
.content .left-side .details .text-one,
.content .left-side .details .text-two{
  font-size: 14px;
  color: #afafb6;
}
.contact_container .content .right-side{
  width: 60%;
  margin-left: 75px;
}
.content .right-side .topic-text{
  font-size: 35px;
  font-weight: 600;
  color: rgb(0, 89, 255);
}

.content .right-side .topic-text::after{
    content: "";
    height: 4px;
    width: 13%;
    margin-left: 5px;
    background-color: rgb(0, 89, 255);
    display: block;
    border-radius: 5px;
    margin-bottom: 20px;
}
.right-side .input-box{
  height: 50px;
  width: 100%;
  margin: 12px 0;
}
.right-side .input-box input,
.right-side .input-box textarea{
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: rgba(211, 211, 211, 0.808);
  border-radius: 6px;
  padding: 0 15px;
  resize: none;
}
.right-side .message-box{
  min-height: 110px;
}
.right-side .input-box textarea{
  padding-top: 6px;
}
.right-side .button{
  margin-top: 12px;
  float: right;
}
.right-side .button input[type="button"]{
  font-size: 18px;
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  background: rgba(0, 61, 173, 0);
  border: 1px solid rgb(0, 89, 255);
  color: rgb(0, 89, 255);
  cursor: pointer;
  transition: all 0.5s ease;
}
.button input[type="button"]:hover{
  background-color: rgb(0, 89, 255);
  color: white;
  transition: all 0.5s ease;
}


@media (max-width: 950px) {
  .contact_container{
    width: 90%;
    padding: 30px 40px 40px 35px ;
  }
  .contact_container .content .right-side{
   width: 75%;
   margin-left: 55px;
}
}
@media (max-width: 820px) {
  .contact_container{
    margin: 40px 0;
    height: 100%;
  }
  .contact_container .content{
    flex-direction: column-reverse;
  }
 .contact_container .content .left-side{
   width: 100%;
   flex-direction: row;
   margin-top: 40px;
   justify-content: center;
   flex-wrap: wrap;
 }
 .contact_container .content .left-side::before{
   display: none;
 }
 .contact_container .content .right-side{
   width: 100%;
   margin-left: 0;
 }
}

</style>