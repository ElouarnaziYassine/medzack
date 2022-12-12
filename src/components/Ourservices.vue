<template>
    <section>
            <h1>BENEFITS</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-dumbbell"></i>
            </div>
            <h3>Personalized Program</h3>
            <p>
              Whether you’re a beginner or an experienced athlete, Our personalized workout programs give you solutions that are adapted to suit you.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-medal"></i>
            </div>
            <h3>Work With The Pro</h3>
            <p>
              A great coach will care about your goals and aspirations, We want the best for you, and We will work one-on-one to help you obtain them.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-trophy"></i>
            </div>
            <h3>Achieve Your Goals</h3>
            <p>
              With our knowledge and experience, And your consistency and perseverance, We will together achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'OurServices',
  components: {
    
  }
}
</script>

<style scoped>
    section {
  height: auto;
  width: 100%;
  display: grid;
  place-items: center;
  max-width: 1550px;
  margin: auto;
}
section h1{
    font-size: 45px;
    margin-top: 50px;
}
section h1::after{
    content: "";
    height: 4px;
    width: 50%;
    background-color: rgb(0, 89, 255);
    display: block;
    margin: auto;
    border-radius: 5px;
    margin-bottom: 40px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.column {
  width: 100%;
  padding: 0em 1em 1em 1em;
  text-align: center;
}
.card {
  width: 100%;
  height: 100%;
  padding: 2.5em 1.5em;
  background: linear-gradient(#ffffff 50%, rgb(0, 89, 255) 50%);
  background-size: 100% 200%;
  background-position: 0 2.5%;
  border-radius: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  transition: 0.5s;
}
h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1f194c;
  margin: 1em 0;
}
p {
  color: #575a7b;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.03em;
}
.icon-wrapper {
  background-color: rgb(0, 89, 255);
  position: relative;
  margin: auto;
  font-size: 30px;
  height: 2.5em;
  width: 2.5em;
  color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.5s;
}
.card:hover {
  background-position: 0 100%;
}
.card:hover .icon-wrapper {
  background-color: #ffffff;
  color: rgb(0, 89, 255);
}
.card:hover h3 {
  color: #ffffff;
}
.card:hover p {
  color: #f0f0f0;
}
@media screen and (min-width: 768px) {
  section {
    padding: 0 2em;
  }
  .column {
    flex: 0 50%;
    max-width: 50%;
  }
}
@media screen and (min-width: 992px) {
  section {
    padding: 1em 3em;
  }
  .column {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
}

</style>