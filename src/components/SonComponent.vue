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
          <b-form-checkbox
            id="checkbox-4"
            v-model="receivedCard"
            name="checkbox-4"
            value="true"
            unchecked-value="false"
          >
            Have I received my birthday card from Grandpa? {{ receivedCard }}
          </b-form-checkbox>
        </div>
        <div>
          <b-button
            variant="success"
            @click="thanksGrandpa('grandson', receivedCard)"
            >Say, "Thanks Grandpa"</b-button
          >
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  data() {
    return {
      name: "Isaac",
      receivedCard: false
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
      const payload = {
        child: child,
        isDelivered: isDelivered
      };
      bus.$emit("grandsonReceivedCard", payload);
      // if (!isDelivered) {
      //   alert("But I did not get a card");
      // }
      // const payload = {
      //   child: child,
      //   isDelivered: isDelivered
      // };
      // this.$emit("receivedCard", payload);
    }
  },
  created() {
    bus.$on("grandpaSentCard", isSent => {
      this.receivedCard = isSent;
    });
  }
};
</script>

<style lang="scss" scoped></style>
