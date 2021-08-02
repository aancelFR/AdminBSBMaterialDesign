<template>
    <!-- Search Bar -->
    <div class="search-bar" :class="{ open: isOpen }">
        <div class="search-icon">
            <i class="material-icons">search</i>
        </div>
        <input
            type="text"
            placeholder="START TYPING..."
            :value="search"
            @keydown="KeyUpEvent"
        />
        <div class="close-search" @click="hideSearchBar()">
            <i class="material-icons">close</i>
        </div>
    </div>
    <!-- #END# Search Bar -->
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            search: "",
            isOpen: false,
        };
    },
    mounted() {},
    methods: {
        async showSearchBar() {
            this.isOpen = true;
            $(this.$el).find('input[type="text"]').focus();
        },
        async KeyUpEvent(e) {
            if (e.keyCode === 27) {
                this.hideSearchBar();
            } else if (e.keyCode === 13) {
                this.hideSearchBar();
            }
        },
        async hideSearchBar() {
            this.isOpen = false;
            /*
        $searchBar.removeClass('open');
        $searchBar.find('input[type="text"]').val(''); */
        },
    },
};
</script>
