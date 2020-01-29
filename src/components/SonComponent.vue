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
            Have I received my birthday card from Grandpa?
          </b-form-checkbox>
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
import { ThankGrandpaMixin } from "@/mixins/thanksGrandpa";
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
  methods: {},
  created() {},
  computed: {
    ...mapGetters({ receivedCard: "sentToGrandson" })
  },
  mixins: [ThankGrandpaMixin]
};
</script>

<style lang="scss" scoped></style>
