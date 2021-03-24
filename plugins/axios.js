

export default function({ $axios, redirect }) {
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    console.log(code);
    if (error.response.status === 501) {
        
       // this.$router.push({name: "errors", params : error})
        redirect("/errors");
    }
  });
}

/*
  export default function ({ $axios, error: nuxtError }) {
    $axios.onError(error => {
      nuxtError({
        statusCode: error.response.status,
        message: error.message,
      });
      return Promise.resolve(false);
    })
  }
  */
