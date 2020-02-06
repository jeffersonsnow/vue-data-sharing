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
          <div>
            Have I received my birthday card from Grandpa?
          </div>
          <div v-if="!sentToSon">
            <b-badge class="button" variant="danger">Not Received</b-badge>
          </div>
          <div v-else>
            <b-badge class="button" variant="success">Received</b-badge>
          </div>
        </div>
      </b-card>
    </div>
    <SonComponent :sentToGrandson="sentToGrandson"></SonComponent>
  </div>
</template>

<script>
import SonComponent from "@/components/SonComponent";
export default {
  data() {
    return {
      // birthdayCardReceived: false,
      name: "Ed"
    };
  },
  components: {
    SonComponent
  },
  props: {
    sentToSon: {
      type: Boolean,
      required: true
    },
    sentToGrandson: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
