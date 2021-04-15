import { createStore } from "vuex";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VUE_APP_SUPABASE_URL,
  process.env.VUE_APP_SUPABASE_KEY
);

export default createStore({
  state: {
    username: "",
    messages: [],
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    newMessage(state, newMessage) {
      if (!state.messages.find((message) => message.id === newMessage.id)) {
        console.log("push", newMessage);
        state.messages.push(newMessage);
      }
    },
  },
  actions: {
    async fetchMessages({ commit }) {
      const { data } = await supabase.from("messages").select("*");
      for (let index in data) {
        commit("newMessage", data[index]);
      }
    },
    async newMessage({ commit, state }, text) {
      const { body } = await supabase
        .from("messages")
        .insert({ message: text, user: state.username })
        .single();
      commit("newMessage", body);
    },
    subscribeNewMessages({ commit }) {
      supabase
        .from("messages")
        .on("INSERT", (payload) => {
          commit("newMessage", payload.new);
        })
        .subscribe();
    },
  },
  modules: {},
});
