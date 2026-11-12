if (!window.Vue || !window.axios) {
    document.querySelector("#app").textContent =
        "Siden kunne ikke indlæses. Tjek din internetforbindelse, og genindlæs siden.";
} else {
    Vue.createApp({
        data() {
            return { records: [], loading: true, error: "" };
        },
        async mounted() {
            try {
                const response = await axios.get(apiBaseUrl + "/api/records", { timeout: 10000 });
                if (!Array.isArray(response.data)) {
                    throw new Error("API-svaret er ikke en liste.");
                }
                this.records = response.data;
            } catch {
                this.error = "Musikudgivelserne kunne ikke hentes. Prøv at genindlæse siden.";
            } finally {
                this.loading = false;
            }
        }
    }).mount("#app");
}
