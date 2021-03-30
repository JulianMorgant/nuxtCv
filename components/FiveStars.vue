<template>
  <div class="stars">
    <form action="">
      <label class="title">{{starsData.label}}</label>
      </BR>
      <input class="star star-5" id="star[5]" type="radio" name="star" v-model="starsData.number" value = "5" disabled/>
      <label class="star star-5" for="star[5]"></label>
      <input class="star star-4" id="star4" type="radio" name="star" v-model="starsData.number" value = "4" disabled/>
      <label class="star star-4" for="star4"></label>
      <input class="star star-3" id="star[3]" type="radio" name="star" v-model="starsData.number" value = "3" disabled/>
      <label class="star star-3" for="star[3]"></label>
      <input class="star star-2" id="star[2]" type="radio" name="star" v-model="starsData.number" value = "2" disabled/>
      <label class="star star-2" for="star[2]"></label>
      <input class="star star-1" id="star[1]" type="radio" name="star" v-model="starsData.number" value = "1" disabled/>
      <label class="star star-1" for="star[1]"></label>
    </form>
    <!-- <div>{{starsData}}</div> -->
    <link
      rel="stylesheet"
      href="//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
    />
  </div>
</template>   

<script>
export default {
  name: "FiveStars",
  props: ["starsData"],
  data() {
    return {};
  },

  method: {
    mounted() {
    },
  },
};

</script>

<style scoped>

.title {
  margin: 0px;
  float: left;
  padding: 1px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 12px;

}

div.stars {
  width: 220px;
  height: auto;
  display: inline-block;
  /* background-color: #444; for test*/
  margin: 0px;
  padding: 0px;
}

input.star {
  display: none;

}

label.star {
  margin: 0px;
  float: right;
  padding: 5px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 24px;
  color: #444;
  transition: all 0.2s;
}


input.star:checked ~ label.star:before {
  content: "\f005";
  color: #fd4;
  transition: all 0.25s;
}

input.star-5:checked ~ label.star:before {
  color: #fe7;
  text-shadow: 0 0 20px #952;
}

input.star-1:checked ~ label.star:before {
  color: #f62;
}

label.star:hover {
  transform: rotate(-15deg) scale(1.3);
}

label.star:before {
  content: "\f006";
  font-family: FontAwesome;
}
</style>