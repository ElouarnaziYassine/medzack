<template>
  <section>
      <div class="container">
        <div class="section-intro">
          <h2>Popular Pricing Package</h2>
          <div class="section-style"></div>
        </div>
        <div class="pricing-table__wrapper">
          <div class="pricing-cards">
            <div class="row">
              <div class="card">
                <div class="card-pricing__header">
                  <h4>Basic Plan</h4>
                  <hr>
                  <h1 class="card-pricing__price">1000<span>MAD</span><sub>/1M</sub></h1>
                </div>
                <ul class="card-pricing__list">
                  <li>MEAL PLAN SPECIALIZED</li>
                  <li>WORKOUT PLAN</li>
                  <li>CARDIO</li>
                  <li>SUPPLEMENTS PLAN</li>
                  <li>EVERY TWO WEEKS CHECKS</li>
                  <li>QUESTIONS EVERY  TWO WEEKS</li>
                  <li><strike>HORMONAL CYCLES WITH DETAILS</strike></li>
                  <li><strike>INCLUDED SPORT ANALYZE FOR ADVANCED ATHLETES</strike></li>
                </ul>
                <div class="card-pricing__footer">
                  <a href="/personalinfo"><button class="button" >Select Plan</button></a>
                </div>
              </div>
              <div class="card">
                <div class="card-pricing__header">
                  <h4>Advanced Plan</h4>
                  <hr>
                  <h1 class="card-pricing__price">1250<span>MAD</span><sub>/1M</sub></h1>
                  <p style="font-size:16px">3000 <sup>MAD</sup> For 3 MONTHS!</p>
                </div>
                <ul class="card-pricing__list">
                  <li>MEAL PLAN SPECIALIZED</li>
                  <li>WORKOUT PLAN</li>
                  <li>CARDIO</li>
                  <li>SUPPLEMENTS PLAN</li>
                  <li>EVERY TWO WEEKS CHECKS</li>
                  <li>WEEKLY CHECK</li>
                  <li>UNLIMITED QUESTIONS</li>
                  <li>HORMONAL CYCLES WITH DETAILS <p style="color: red">ADDITIONAL FEES</p></li>
                  <li>INCLUDED SPORT ANALYZE FOR ADVANCED ATHLETES</li>
                </ul>
                <div class="card-pricing__footer">
                  <a href="/personalinfo"><button class="button" >Select Plan</button></a>
                </div>
              </div>
              <div class="card">
                <div class="card-pricing__header">
                  <h4>Health Plan</h4>
                  <hr>
                  <h1 class="card-pricing__price">1000<span>MAD</span><sub>/1M</sub></h1>
                </div>
                <ul class="card-pricing__list">
                  <li>HAIR LOSS</li>
                  <li>HORMONAL BALANCE</li>
                  <li>HAIR REGROWTH</li>
                  <li>BEARD GROWTH</li>
                  <li>SKIN CARE</li>
                  <li>FLEXIBLE LIFESTYLE</li>
                </ul>
                <div class="card-pricing__footer">
                  <a href="/personalinfo"><button class="button" >Select Plan</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'PriceTables',
  components: {
    
  }
}
</script>

<style scoped>
  section {
  padding: 100px 0;
  background-image: url(../assets/banner.png);
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  margin-bottom: 550px;
}

section::after {
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 45, 128, 1) 0%, rgb(0, 89, 255, 1) 100%);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.85;
  z-index: -1;
}

.container {
  width: 100%;
  max-width: 1400px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 15px;
}

.section-intro {
  padding-bottom: 80px;
}

.section-intro h2 {
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
}

.section-style {
  width: 130px;
  height: 12px;
  margin: 20px auto 0;
  position: relative;
}

.section-style::before {
  content: "";
  width: 80px;
  height: 1px;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
}

.section-style::after {
  content: "";
  width: 80px;
  height: 1px;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  bottom: 0;
}

.pricing-table__wrapper {
  position: relative;
  padding-top: 300px;
}

.pricing-cards {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 400px;
  margin: 20px;
  background-color: #faf9ff;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(40, 25, 114, 0.1);
  transition: all 0.3s;
}

.card .card-pricing__header {
  padding: 40px 10px;
  border-bottom: 1px solid #ebebeb;
}

.card .card-pricing__header h4 {
  margin-bottom: 5px;
  color: #000;
  font-size: 30px;
  font-weight: 700;
}

.card .card-pricing__header sub {
  font-size: 25px;
}

.card .card-pricing__header p {
  margin-bottom: -24px;
  color: #000;
  font-size: 16px;
}

.card-pricing__price {
  font-size: 60px;
}

.card-pricing__price span {
  margin-right: 3px;
  font-size: 25px;
  position: relative;
  bottom: 5px;
  vertical-align: middle;
}

.card-pricing__list {
  padding: 30px 8px;
  list-style: none;
  border-bottom: 1px solid #ebebeb;
}

.card-pricing__list li {
  margin-bottom: 10px;
  color: #4e4e4e;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
}

.card-pricing__footer {
  padding: 45px 0;
}

.card-pricing__footer .button {
  padding: 15px 30px;
  color: #000;
  background: transparent;
  font-size: 15px;
  font-weight: 700;
  border: 1px solid #dbd9e6;
  cursor: pointer;
  transition: all 0.3s;
}

/* Add hover effect on card elements */

.card:hover {
  background: #ffffff;
  box-shadow: 0 20px 25px 5px rgba(33, 20, 106, 0.1);
}

.card:hover .card-pricing__header h4,
.card:hover .card-pricing__header p,
.card:hover .card-pricing__price {
  color: rgb(0, 89, 255);
}

.card-pricing__footer .button:hover {
  color: #faf9ff;
  background: rgb(0, 89, 255);
}

/* Write the media query to make responsive */

@media screen and (max-width: 1200px) {
  .pricing-table__wrapper {
    padding-top: 0px;
  }

  .pricing-cards {
    position: static;
  }
}
</style>
