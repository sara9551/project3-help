import axios from "axios";

export default {
  // Gets all Chores
  getChores: function() {
    return axios.get("/api/Chores");
  },
  // Gets the Chores with the given id
  getChore: function(id) {
    return axios.get("/api/Chores/" + id);
  },
  // Deletes the Chores with the given id
  deleteChores: function(id) {
    return axios.delete("/api/Chores/" + id);
  },
  // Saves a Chores to the database
  saveChores: function(ChoresData) {
    return axios.post("/api/Chores", ChoresData);
  }
};
