if (!window.Vue || !window.axios) {
    document.querySelector("#app").textContent =
        "Siden kunne ikke indlæses. Tjek din internetforbindelse, og genindlæs siden.";
} else {
    Vue.createApp({
        data() {
            return { records: [], title: "", artist: "", searched: false, loading: false, error: "" };
        },
        mounted() {
            this.loadRecords();
        },
        methods: {
            async loadRecords() {
                if (this.loading) {
                    return;
                }
                const title = this.title.trim();
                const artist = this.artist.trim();
                this.searched = Boolean(title || artist);
                this.loading = true;
                this.error = "";

                try {
                    const response = await axios.get(apiBaseUrl + "/api/records", {
                        params: { title: title || undefined, artist: artist || undefined },
                        timeout: 10000
                    });
                    if (!Array.isArray(response.data)) {
                        throw new Error("API-svaret er ikke en liste.");
                    }
                    this.records = response.data;
                } catch {
                    this.error = "Musikudgivelserne kunne ikke hentes. Prøv at genindlæse siden.";
                } finally {
                    this.loading = false;
                }
            },
            resetSearch() {
                this.title = "";
                this.artist = "";
                this.loadRecords();
            }
        }
    }).mount("#app");
}
