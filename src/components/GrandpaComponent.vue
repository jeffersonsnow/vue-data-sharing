<template>
  <div>
    <div>
      <b-card
        title="Grandpa Component"
        img-src="https://cdn.clipart.email/cca078a03e43c3a321a269d68e05d7f6_grandpa-clipart_800-1067.png"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-body>
          <b-card-text>
            Grandpa Don is the top level, parent component.
          </b-card-text>
        </b-card-body>
        <b-button
          class="mb-2"
          variant="warning"
          @click="sendBirthdayCard('son')"
          >Send Son Birthday Card
        </b-button>
        <b-button variant="danger" @click="sendBirthdayCard('grandson')"
          >Send Grandson Birthday Card</b-button
        >
        <b-list-group flush>
          <b-list-group-item>
            <div>
              <b-form-checkbox
                id="checkbox-1"
                v-model="sonCardDelivered"
                name="checkbox-1"
                value="true"
                unchecked-value="false"
              >
                Has my son received his birthday card?
              </b-form-checkbox>
            </div>
          </b-list-group-item>
          <b-list-group-item
            ><div>
              <b-form-checkbox
                id="checkbox-2"
                v-model="grandsonCardDelivered"
                name="checkbox-2"
                value="true"
                unchecked-value="false"
              >
                Has my grandson received his birthday card?
              </b-form-checkbox>
            </div></b-list-group-item
          >
        </b-list-group>
      </b-card>
    </div>
    <DadComponent @receivedCard="confirmBirthdayCardDelivery"></DadComponent>
  </div>
</template>

<script>
import DadComponent from "@/components/DadComponent";
import { bus } from "../main";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // sentToSon: false,
      // sentToGrandson: false,
      // sonCardDelivered: false,
      // grandsonCardDelivered: false
    };
  },
  components: {
    DadComponent
  },
  methods: {
    sendBirthdayCard(child) {
      if (child === "son") {
        // this.sentToSon = true;
        this.$store.dispatch("sendToSon", true);
      }
      if (child === "grandson") {
        // this.sentToGrandson = true;
        // bus.$emit("grandpaSentCard", this.sentToGrandson);
        this.$store.dispatch("sendToGrandson", true);
      }
    },
    confirmBirthdayCardDelivery(payload) {
      if (payload.child === "son") {
        this.sonCardDelivered = payload.isDelivered;
      }
      if (payload.child === "grandson") {
        this.grandsonCardDelivered = payload.isDelivered;
      }
    }
  },
  created() {
    bus.$on("grandsonReceivedCard", payload => {
      this.confirmBirthdayCardDelivery(payload);
    });
  },
  computed: {
    ...mapGetters([
      "sentToSon",
      "sentToGrandson",
      "sonCardDelivered",
      "grandsonCardDelivered"
    ])
  }
};
</script>

<style scoped></style>
