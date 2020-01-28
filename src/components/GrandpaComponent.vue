<template>
  <div>
    <div>
      <b-card
        title="Grandpa Component"
        img-src="https://pixy.org/src/454/4549807.png"
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
    <DadComponent
      :sentToSon="sentToSon"
      :sentToGrandson="sentToGrandson"
      @receivedCard="confirmBirthdayCardDelivery"
    ></DadComponent>
  </div>
</template>

<script>
import DadComponent from "@/components/DadComponent";

export default {
  data() {
    return {
      sentToSon: false,
      sentToGrandson: false,
      sonCardDelivered: false,
      grandsonCardDelivered: false
    };
  },
  components: {
    DadComponent
  },
  methods: {
    sendBirthdayCard(child) {
      if (child === "son") {
        this.sentToSon = true;
      }
      if (child === "grandson") {
        this.sentToGrandson = true;
      }
    },
    confirmBirthdayCardDelivery(payload) {
      if (payload.child === "son") {
        this.sonCardDelivered = true;
      }
      if (payload.child === "grandson") {
        this.grandsonCardDelivered = true;
      }
    }
  }
};
</script>

<style scoped></style>
