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
        <div>
          <b-button
            variant="success"
            @click="thanksGrandpa('sonCardDelivered', sentToSon)"
            >Say, "Thanks Grandpa"</b-button
          >
        </div>
      </b-card>
    </div>
    <SonComponent></SonComponent>
  </div>
</template>

<script>
import SonComponent from "@/components/SonComponent";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // birthdayCardReceived: "not_received",
      name: "Ed"
    };
  },
  components: {
    SonComponent
  },
  props: {
    // sentToSon: {
    //   type: Boolean,
    //   required: true
    // },
    // sentToGrandson: {
    //   type: Boolean,
    //   required: true
    // }
  },
  methods: {
    thanksGrandpa(child, isDelivered) {
      if (!isDelivered) {
        alert("But I did not get a card");
      }
      const payload = {
        child: child,
        isDelivered: isDelivered
      };
      this.$store.dispatch("cardReceived", payload);
    }
  },
  computed: {
    ...mapGetters(["sentToSon"])
  }
};
</script>

<style lang="scss" scoped></style>
