<template>
    <div class="container">
        <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Enter Whatsapp Number</label>
        <input type="number" min="0" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your informations with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Enter Your Weight</label>
        <input type="number" min="0" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Enter Your Height</label>
        <input type="number" min="0" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Enter Your Age</label>
        <input type="number" min="0" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Do You Work/Study?</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Do You Have Any Allergies or Injuries We Should Be Aware Of?</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">How Many Time Do You Have Sex Per Week?</label>
        <input type="number" min="0" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">What Is Your Current Short Term Goal?</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
        <div class="Plans">
            <label for="exampleInputEmail1">Selected Plan :</label>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
                Basic Plan
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
                Advanced Plan
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
                Advanced Plan "3000 MAD / 3 Months Offer"
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
            <label class="form-check-label" for="exampleRadios2">
                Health Plan
            </label>
            </div>
        </div>
    <button type="submit" class="btn btn-outline-primary">Submit</button>
    </form>
    </div>
</template>

<style scoped>
    .container{
        width: 85%;
        border: 1px solid rgba(0, 0, 0, 0.062);
        padding: 50px 25px;
        margin-top: 50px;
        box-shadow: 5px  5px 50px rgba(0, 0, 0, 0.5);

    }
    .btn{
        float: right;
    }
</style>