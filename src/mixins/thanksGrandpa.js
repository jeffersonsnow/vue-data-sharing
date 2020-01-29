export const ThankGrandpaMixin = {
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
  }
};
