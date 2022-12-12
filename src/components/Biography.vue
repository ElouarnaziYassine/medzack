<template>
    <div id="about" class="wrapper">
        <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>BIOGRAPHY</h1>
				</div>
				<div class="content">
					<p>
                    I’m Mohamed Zaki, A certified trainer who puts his knowledge and experience to help people over 3 years ago to achieve thier goals , bulk , lose fat , lean bulk gain muscle.<br>
                I create personalized detailed nutrition and training programs based on many informations you share with me. see below for more details. <br><br>
                &#9830; PHD IN BIOCHEMISTRY – UNIVERSITY OF CYPRUS SPECIALIZED IN SCIENCE AND CHEMISTRY <br>
                &#9830; NASM PT LEVEL 3 <br>
                &#9830; 12 YEARS EXPERIENCE <br>
                &#9830; 3 YEARS COACHING ONLINE WITH OVER 2000 CLIENTS
                </p>
				</div>
			</div>
			<div class="image-section">
				<img src="../assets/bio.jpg" >
			</div>
		</div>
	</div>
        <!--Our Services-->
            <Ourservices/>
    </div>
</template>

<script>
import Ourservices from './Ourservices.vue'


export default {
  name: 'BioGraphy',
  components: {
    Ourservices
  }
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    max-width: 1700px;
    margin-right: auto;
    margin-left: auto;
}
.section{
	width: 100%;
	min-height: auto;
}
.container{
	width: 80%;
	display: block;
	margin:auto;
	padding-top: 100px;
}
.content-section{
	float: left;
	width: 55%;
}
.image-section{
	float: right;
	width: 40%;
}
.image-section img{
	width: 80%;
	height: auto;
	min-width: 450px;
}
.content-section .title{
	text-transform: uppercase;
	font-size: 18px;
}
.content-section .title::after{
    content: "";
    height: 4px;
    width: 10%;
    background-color: rgb(0, 89, 255);
    display: block;
    border-radius: 5px;
    margin-bottom: 40px;
}

.content-section .content p{
	margin-top: 10px;
	font-size: 18px;
	line-height: 1.5;
}

@media screen and (max-width: 991px){
	.container{
	width: 80%;
	display: block;
	margin:auto;
	padding-top:50px;
}
.content-section{
	float:none;
	width:100%;
	display: block;
	margin:auto;
}
.image-section{
	float:none;
	width:100%;
	
}
.image-section img{
	width: 80%;
	height: auto;
	display: block;
	margin:auto;
    margin-bottom: 20px;
}
.content-section .title{
	text-align: center;
	font-size: 19px;
}
}

</style>