<template>
  <div>
    <div>
      <b-card
        title="Son Component"
        img-src="https://freedesignfile.com/upload/2019/07/Playing-baby-vector-illustration-vector.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ name }} is the child of the dad component.
        </b-card-text>

        <div>
          <div>
            Have I received my birthday card from Grandpa?
          </div>
          <div v-if="!receivedCard">
            <b-badge class="button" variant="danger">Not Received</b-badge>
          </div>
          <div v-else>
            <b-badge class="button" variant="success">Received</b-badge>
          </div>
        </div>
        <div>
          <b-button
            variant="success"
            @click="thanksGrandpa('grandsonCardDelivered', receivedCard)"
            >Say, "Thanks Grandpa"</b-button
          >
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "Isaac"
      // receivedCard: false
      // birthdayCardReceived: "not_received"
    };
  },
  // props: {
  //   sentToGrandson: {
  //     type: Boolean,
  //     required: true
  //   }
  // },
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
  created() {},
  computed: {
    ...mapGetters({ receivedCard: "sentToGrandson" })
  }
};
</script>

<style lang="scss" scoped></style>
