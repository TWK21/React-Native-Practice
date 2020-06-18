import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer j-XfpZANQrMi27M5mhmIAUQtE_QUnx7z5ixMfRNOuP-6l8wt4U22UGm6KaF0mHkou22Y0ULzT1vzxfe8O20Ht2JGLFzNygHZIgydgZZx8VvG-dC4uvbpn6sTJelIXnYx"
  }
});
