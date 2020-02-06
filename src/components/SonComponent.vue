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
          <div v-if="!sentToGrandson">
            <b-badge class="button" variant="danger">Not Received</b-badge>
          </div>
          <div v-else>
            <b-badge class="button" variant="success">Received</b-badge>
          </div>
        </div>
        <div>
          <b-button
            variant="success"
            @click="thanksGrandpa('grandson', sentToGrandson)"
            >Say, "Thanks Grandpa"</b-button
          >
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Isaac"
      // birthdayCardReceived: false
    };
  },
  props: {
    sentToGrandson: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    thanksGrandpa(child, isDelivered) {
      if (!isDelivered) {
        alert("But I did not get a card");
        return;
      }
      const payload = {
        child: child,
        isDelivered: isDelivered
      };
      this.$emit("receivedCard", payload);
    }
  }
};
</script>

<style lang="scss" scoped></style>
