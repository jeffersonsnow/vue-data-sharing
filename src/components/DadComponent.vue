<template>
  <div>
    <div>
      <b-card
        title="Dad Component"
        img-src="https://thumbs.dreamstime.com/b/reading-newspaper-indian-cartoon-man-father-vector-illustration-reading-newspaper-indian-cartoon-man-father-vector-illustration-148890419.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ name }} is the child of Grandpa component and the parent of Son
          component.
        </b-card-text>

        <div>
          <b-form-checkbox
            id="checkbox-3"
            v-model="birthdayCardReceived"
            name="checkbox-3"
            value="received"
            unchecked-value="not_received"
          >
            Have I received my birthday card from Grandpa?
          </b-form-checkbox>
        </div>
      </b-card>
    </div>
    <SonComponent></SonComponent>
  </div>
</template>

<script>
import SonComponent from "@/components/SonComponent";
export default {
  data() {
    return {
      birthdayCardReceived: "not_received",
      name: "Ed"
    };
  },
  components: {
    SonComponent
  }
};
</script>

<style lang="scss" scoped></style>
