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
      </b-card>
    </div>
    <DadComponent></DadComponent>
  </div>
</template>

<script>
import DadComponent from "@/components/DadComponent";

export default {
  data() {
    return {};
  },
  components: {
    DadComponent
  },
  methods: {
    sendBirthdayCard(child) {
      console.log(child);
    }
  }
};
</script>

<style scoped></style>
