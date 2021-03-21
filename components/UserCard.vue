<template>
  <div class="card text-white bg-dark mb-3" style="max-width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ user.pseudo }}</h5>
      <p class="card-text">{{ user.email }}</p>
      <p class="card-text">{{user.name}}-{{user.firstname}}</p>
      <p class="card-text">{{user.roles}}</p>
      <p> {{user._id}} </p>
      <button @click="$emit('click', user)" class="btn btn-primary">edit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["user"],
};
</script>

