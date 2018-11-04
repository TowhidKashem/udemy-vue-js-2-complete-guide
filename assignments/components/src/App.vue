<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-server-list></app-server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-server-details></app-server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>
    // Locally registering components
    import Header from './components/Shared/Header.vue'
    import Footer from './components/Shared/Footer.vue'
    import ServerList from './components/Server/ServerList.vue'
    import ServerDetails from './components/Server/ServerDetails.vue'

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
            appServerList: ServerList,
            appServerDetails: ServerDetails
        }
    }
</script>
