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
      </b-card>
    </div>
    <DadComponent
      :sentToSon="sentToSon"
      :sentToGrandson="sentToGrandson"
    ></DadComponent>
  </div>
</template>

<script>
import DadComponent from "@/components/DadComponent";

export default {
  data() {
    return {
      sentToSon: false,
      sentToGrandson: false
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
    }
  }
};
</script>

<style scoped></style>
