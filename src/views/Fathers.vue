<template>
    <body>
    <!-- Left Panel -->
    <LeftPanel/>
    <!-- /#left-panel -->
    <!-- Right Panel -->
    <div id="right-panel" class="right-panel">
        <!-- Header-->
        <Header/>
        <!-- /#header -->
        <!-- Content -->
        <div class="content">
            <!-- Animated -->
            <div class="animated fadeIn">
                <!-- Widgets  -->
                <Widgets/>
                <!-- /Widgets -->

                <div class="clearfix"></div>

                <div class="orders">
                    <FatherForm/>
                </div>

            </div>

        </div>
        <!-- /.content -->
        <div class="clearfix"></div>
        <!-- Footer -->
        <footer class="site-footer">

        </footer>
        <!-- /.site-footer -->
    </div>
    <!-- /#right-panel -->

    </body>
</template>

<script>

    import LeftPanel from "../components/LeftPanel.vue";
    import Header from "../components/Header.vue";
    import Widgets from "../components/Widgets.vue";
    import FatherForm from "../components/FatherForm";
    export default {
        name: "Fathers",
        components: {FatherForm, LeftPanel, Header,Widgets}
    }
</script>

<style scoped>

</style>